import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { POPUP_SIZES, popupImageUrl } from '../../hooks/queries/usePopups';

const todayKST = () => new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Seoul' });
const hideKey = (id) => `popup-hide-${id}`;

// "오늘 하루 보지 않기"는 이 브라우저에만 기억한다. 저장소가 막힌 환경(시크릿 등)에서도 팝업은 떠야 해서 try/catch.
function hiddenToday(id) {
  try {
    return localStorage.getItem(hideKey(id)) === todayKST();
  } catch {
    return false;
  }
}

// 관리자 > 팝업 관리에서 노출 중인 팝업을 띄운다. 사이트 첫 진입 때 한 번 뜨고, 페이지를 옮겨도 다시 뜨지 않는다.
// PC(lg 이상): 순서대로 나란히. 모바일: 첫 번째만 보이고 닫으면 다음 것이 뜬다.
const PopupLayer = () => {
  const navigate = useNavigate();
  const [popups, setPopups] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL || ''}/popups`)
      .then((r) => (r.ok ? r.json() : []))
      .then((list) => setPopups(list.filter((p) => !hiddenToday(p.id))))
      .catch(() => {});
  }, []);

  if (popups.length === 0) return null;

  const close = (id, forToday = false) => {
    if (forToday) {
      try {
        localStorage.setItem(hideKey(id), todayKST());
      } catch {}
    }
    setPopups((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    // 헤더 드롭다운(z-[9999])보다 위
    <div className="fixed inset-0 z-[10000] overflow-y-auto bg-black/50">
      {/* PC는 높이가 다른 팝업이 나란히 서므로 윗선을 맞춘다(헤더 아래부터). */}
      <div className="flex min-h-full items-center justify-center gap-5 p-4 lg:flex-wrap lg:items-start lg:px-10 lg:pt-32 lg:pb-10">
        {popups.map((p, i) => {
          const img = <img src={popupImageUrl(p.imageKey)} alt={p.title} className="block h-auto w-full" />;
          return (
            <div
              key={p.id}
              role="dialog"
              aria-label={p.title}
              style={{ width: POPUP_SIZES[p.size]?.px ?? 480 }}
              className={`max-w-full shrink-0 overflow-hidden bg-white shadow-2xl ${p.rounded ? 'rounded-2xl' : ''} ${
                i > 0 ? 'hidden lg:block' : ''
              }`}
            >
              {p.link ? (
                <a
                  href={p.link}
                  {...(p.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  onClick={(e) => {
                    // 사이트 안 링크는 새로고침 없이 이동 — 새로고침하면 팝업이 다시 뜬다.
                    if (p.newTab || !p.link.startsWith('/')) return;
                    e.preventDefault();
                    close(p.id);
                    navigate(p.link);
                  }}
                >
                  {img}
                </a>
              ) : (
                img
              )}
              <div className="flex items-center justify-between bg-gray-900 text-sm text-white">
                <button type="button" onClick={() => close(p.id, true)} className="px-4 py-3 text-white/80 hover:text-white">
                  오늘 하루 보지 않기
                </button>
                <button type="button" onClick={() => close(p.id)} className="px-4 py-3 font-semibold hover:text-white/80">
                  닫기 ✕
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopupLayer;
