import React from 'react';
import { Link } from 'react-router-dom';
import {
  AUTO_DELETE_OPTIONS,
  DEFAULT_AUTO_DELETE_DAYS,
  POPUP_SIZES,
  errorMessage,
  popupImageUrl,
  useAdminPopups,
  usePopupMutations,
} from '../../../hooks/queries/usePopups';

const STATUS = {
  LIVE: { label: '노출 중', cls: 'bg-emerald-50 text-emerald-700 ring-emerald-200' },
  SCHEDULED: { label: '노출 예정', cls: 'bg-sky-50 text-sky-700 ring-sky-200' },
  ENDED: { label: '기간 종료', cls: 'bg-gray-100 text-gray-500 ring-gray-200' },
  OFF: { label: '비활성', cls: 'bg-gray-100 text-gray-500 ring-gray-200' },
};

const period = (s, e) => (s || e ? `${s || '제한 없음'} ~ ${e || '제한 없음'}` : '상시 노출');
const todayKST = () => new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Seoul' });
const daysUntil = (to) => Math.max(0, Math.round((Date.parse(to) - Date.parse(todayKST())) / 86400000));

// 관리자 화면 켜기/끄기 스위치
export function Switch({ checked, onChange, disabled, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors disabled:opacity-50 ${
        checked ? 'bg-brand-blue' : 'bg-gray-300'
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
          checked ? 'translate-x-5' : ''
        }`}
      />
    </button>
  );
}

const PopupManagement = () => {
  const { data, isLoading, error } = useAdminPopups();
  const m = usePopupMutations();
  const popups = data?.popups ?? [];
  const liveCount = popups.filter((p) => p.status === 'LIVE').length;

  const run = (mutation, vars) => mutation.mutate(vars, { onError: (e) => alert(errorMessage(e)) });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">팝업 관리</h2>
          <p className="text-gray-600">
            현재 사이트에 노출 중인 팝업 {liveCount}개 · PC는 순서대로 나란히, 모바일은 하나씩 차례로 뜹니다.
          </p>
        </div>
        <Link
          to="/admin/popups/new"
          className="rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
        >
          + 새 팝업
        </Link>
      </div>

      {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{errorMessage(error)}</p>}

      {data && <AutoDeleteSettings data={data} mutation={m.settings} />}

      {isLoading ? (
        <p className="py-20 text-center text-gray-500">불러오는 중...</p>
      ) : popups.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-gray-200 bg-white py-20 text-center">
          <p className="font-semibold text-gray-700">등록된 팝업이 없습니다</p>
          <p className="text-sm text-gray-400">새 팝업 버튼으로 이미지와 링크를 등록하세요.</p>
        </div>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {popups.map((p) => {
            const status = STATUS[p.status];
            const busy = (m.toggle.isPending && m.toggle.variables?.id === p.id) || (m.remove.isPending && m.remove.variables === p.id);
            return (
              <li key={p.id} className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="flex h-52 items-center justify-center bg-gray-50 p-3">
                  <img src={popupImageUrl(p.imageKey)} alt={p.title} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="flex flex-1 flex-col gap-2 px-4 py-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="min-w-0 break-words font-bold text-gray-900">{p.title}</p>
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${status.cls}`}>
                      {status.label}
                    </span>
                  </div>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
                    <dt className="text-gray-400">기간</dt>
                    <dd className="text-gray-700">{period(p.startDate, p.endDate)}</dd>
                    <dt className="text-gray-400">링크</dt>
                    <dd className="min-w-0 truncate text-gray-700" title={p.link || ''}>
                      {p.link || '없음'}
                      {p.link && p.newTab && <span className="text-gray-400"> (새 창)</span>}
                    </dd>
                    <dt className="text-gray-400">형태</dt>
                    <dd className="text-gray-700">
                      {POPUP_SIZES[p.size].label} ({POPUP_SIZES[p.size].px}px) · {p.rounded ? '둥근 모서리' : '각진 모서리'} · 순서{' '}
                      {p.displayOrder}
                    </dd>
                  </dl>
                  {p.autoDeleteOn && (
                    <p className="mt-1 rounded-md bg-amber-50 px-2.5 py-1.5 text-xs text-amber-700">
                      {p.autoDeleteOn} 자동 삭제 예정 (D-{daysUntil(p.autoDeleteOn)})
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-gray-100 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Switch
                      checked={p.enabled}
                      disabled={busy}
                      label={`${p.title} 활성화`}
                      onChange={(value) => run(m.toggle, { id: p.id, value })}
                    />
                    <span className="font-medium text-gray-700">{p.enabled ? '활성' : '비활성'}</span>
                  </div>
                  <div className="flex gap-1.5 text-sm">
                    <Link
                      to={`/admin/popups/${p.id}`}
                      className="rounded-md border border-gray-200 px-3 py-1.5 font-medium text-gray-700 hover:bg-gray-50"
                    >
                      수정
                    </Link>
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => {
                        if (window.confirm(`"${p.title}" 팝업을 삭제할까요? 이미지도 함께 삭제됩니다.`)) run(m.remove, p.id);
                      }}
                      className="rounded-md border border-red-100 px-3 py-1.5 font-medium text-red-600 hover:bg-red-50"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

// expiredCounts: 기간별로 "지금 적용하면 바로 삭제될 팝업 수". 0보다 크면 확인창을 띄운다.
function AutoDeleteSettings({ data, mutation }) {
  const pending = mutation.isPending;

  const apply = (autoDelete, autoDeleteDays) => {
    const n = autoDelete ? data.expiredCounts[autoDeleteDays] : 0;
    const label = AUTO_DELETE_OPTIONS.find((o) => o.days === autoDeleteDays)?.label;
    if (n > 0 && !window.confirm(`비활성 ${label}이 지난 팝업 ${n}개가 바로 삭제됩니다(이미지 포함). 계속할까요?`)) return;
    mutation.mutate({ autoDelete, autoDeleteDays }, { onError: (e) => alert(errorMessage(e)) });
  };

  return (
    <section className={`rounded-lg border border-gray-200 bg-white p-4 shadow-sm lg:p-5 ${pending ? 'opacity-60' : ''}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-bold text-gray-900">비활성 팝업 자동 삭제</p>
          <p className="mt-1 text-sm text-gray-500">
            비활성 또는 기간 종료 상태로 설정한 기간이 지나면 팝업과 이미지가 자동으로 삭제됩니다.
          </p>
        </div>
        <Switch
          checked={data.autoDelete}
          disabled={pending}
          label="비활성 팝업 자동 삭제"
          // 켤 때는 항상 기본값(3개월)으로 시작한다.
          onChange={(on) => apply(on, on ? DEFAULT_AUTO_DELETE_DAYS : data.autoDeleteDays)}
        />
      </div>

      {data.autoDelete && (
        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
          <span className="text-sm font-semibold text-gray-700">삭제 기준</span>
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            {AUTO_DELETE_OPTIONS.map((o) => {
              const active = data.autoDeleteDays === o.days;
              return (
                <button
                  key={o.days}
                  type="button"
                  disabled={pending || active}
                  onClick={() => apply(true, o.days)}
                  className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-semibold transition-colors md:px-4 ${
                    active ? 'bg-white text-brand-blue shadow-sm' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {o.label}
                </button>
              );
            })}
          </div>
          <span className="text-sm text-gray-400">비활성 상태로 이 기간이 지나면 삭제 (매일 새벽 4시 정리)</span>
        </div>
      )}
    </section>
  );
}

export default PopupManagement;
