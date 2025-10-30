import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import floatingSearch from './icons/floating_search.svg';
import floatingContact from './icons/floating_contact.svg';
import floatingCatalog from './icons/floating_catalog.svg';

const FloatingMenu = () => {
  const location = useLocation();
  const currentPage = location.pathname;
  const [isExpanded, setIsExpanded] = useState(false);

  // 카탈로그 다운로드 함수
  const handleCatalogDownload = () => {
    // PDF 파일 다운로드 (public/documents 폴더에 파일이 있다고 가정)
    const link = document.createElement('a');
    link.href = '/documents/2024 호텔런드리 소개.pdf';
    link.download = '2024 호텔런드리 소개.pdf';
    link.target = '_blank';

    // 파일 존재 여부 확인 후 다운로드
    fetch('/documents/hotel-laundry-catalog.pdf')
      .then((response) => {
        if (response.ok) {
          link.click();
        } else {
          // 파일이 없을 경우 사용자에게 알림
          alert('카탈로그 파일을 준비 중입니다. 잠시 후 다시 시도해 주세요.');
        }
      })
      .catch((error) => {
        console.error('카탈로그 다운로드 오류:', error);
        alert('카탈로그 다운로드 중 오류가 발생했습니다.');
      });
  };

  // Contact 페이지에서는 플로팅 메뉴를 표시하지 않음
  if (currentPage === '/contact') {
    return null;
  }

  return (
    <>
      {/* 데스크톱 버전 */}
      <div className="fixed right-6 z-50 hidden md:block" style={{ bottom: '15%' }}>
        <div className="bg-[#082567] rounded-lg shadow-lg border border-[#082567] w-[75px] h-[250px]">
          {/* 매장찾기 */}
          <Link
            to="/find-store"
            className="flex items-center justify-center text-white hover:bg-[#2d5a8b] transition-colors rounded-t-lg w-full h-1/3"
          >
            <img src={floatingSearch} alt="매장찾기" className="w-12 h-12" />
          </Link>

          <div className="border-t border-[#FFFFFF]"></div>

          {/* 카탈로그 다운받기 */}
          <button
            className="flex items-center justify-center text-white hover:bg-[#2d5a8b] transition-colors w-full h-1/3"
            onClick={handleCatalogDownload}
          >
            <img src={floatingCatalog} alt="카탈로그 다운받기" className="w-12 h-12" />
          </button>

          <div className="border-t border-[#FFFFFF]"></div>

          {/* 문의하기 */}
          <Link
            to="/contact"
            className="flex items-center justify-center text-white hover:bg-[#2d5a8b] transition-colors rounded-b-lg w-full h-1/3"
          >
            <img src={floatingContact} alt="문의하기" className="w-12 h-12" />
          </Link>
        </div>
      </div>

      {/* 모바일 버전 */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        {/* 펼쳐진 메뉴 */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 bg-[#082567] rounded-lg shadow-lg border border-[#082567] w-[100px] mb-2">
            {/* 매장찾기 */}
            <Link
              to="/find-store"
              className="flex items-center justify-center text-white hover:bg-[#082567] transition-colors rounded-t-lg w-full h-8 text-xs font-medium px-2"
              onClick={() => setIsExpanded(false)}
            >
              매장찾기
            </Link>

            <div className="border-t border-[#FFFFFF]"></div>

            {/* 카탈로그 다운받기 */}
            <button
              className="flex items-center justify-center text-white hover:bg-[#082567] transition-colors w-full h-8 text-xs font-medium px-2"
              onClick={() => {
                handleCatalogDownload();
                setIsExpanded(false);
              }}
            >
              카탈로그
            </button>

            <div className="border-t border-[#FFFFFF]"></div>

            {/* 문의하기 */}
            <Link
              to="/contact"
              className="flex items-center justify-center text-white hover:bg-[#082567] transition-colors rounded-b-lg w-full h-8 text-xs font-medium px-2"
              onClick={() => setIsExpanded(false)}
            >
              문의하기
            </Link>
          </div>
        )}

        {/* 메인 동그란 버튼 */}
        <button
          className="w-14 h-14 bg-[#082567] rounded-full shadow-lg border border-[#082567] flex flex-col items-center justify-center text-white hover:bg-[#082567] transition-colors relative"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="text-[14px] font-medium leading-tight">
            창업
            <br />
            문의
          </span>
        </button>
      </div>
    </>
  );
};

export default FloatingMenu;
