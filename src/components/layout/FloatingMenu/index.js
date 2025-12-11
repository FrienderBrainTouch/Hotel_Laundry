import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ASSET_URL } from '../../../utils/constants';

const FloatingMenu = () => {
  const location = useLocation();
  const currentPage = location.pathname;
  const [isExpanded, setIsExpanded] = useState(false);

  // 카탈로그 다운로드 함수
  const handleCatalogDownload = () => {
    alert('카탈로그 준비중입니다.');
  };

  // Contact 페이지에서는 플로팅 메뉴를 표시하지 않음
  if (currentPage === '/contact') {
    return null;
  }

  return (
    <>
      {/* 데스크톱 버전 */}
      <div className="fixed right-6 z-50 hidden md:block" style={{ bottom: '15%' }}>
        <div className="bg-[#082567] rounded-lg shadow-lg border border-[#082567] w-[75px] h-[333px]">
          {/* 블로그 */}
          <a
            href="https://m.blog.naver.com/hotellaundry?proxyReferer=&noTrackingCode=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-white hover:bg-[#2d5a8b] transition-colors rounded-t-lg w-full h-1/4"
          >
            <img src="/floating_blog.svg" alt="블로그" className="w-12 h-12" />
          </a>

          <div className="border-t border-[#FFFFFF]"></div>

          {/* 매장찾기 */}
          <Link
            to="/find-store"
            className="flex items-center justify-center text-white hover:bg-[#2d5a8b] transition-colors w-full h-1/4"
          >
            <img src={`${ASSET_URL}/icons/floating_search.svg`} alt="매장찾기" className="w-12 h-12" />
          </Link>

          <div className="border-t border-[#FFFFFF]"></div>

          {/* 카탈로그 다운받기 */}
          <button
            className="flex items-center justify-center text-white hover:bg-[#2d5a8b] transition-colors w-full h-1/4"
            onClick={handleCatalogDownload}
          >
            <img src={`${ASSET_URL}/icons/floating_catalog.svg`} alt="카탈로그 다운받기" className="w-12 h-12" />
          </button>

          <div className="border-t border-[#FFFFFF]"></div>

          {/* 문의하기 */}
          <Link
            to="/contact"
            className="flex items-center justify-center text-white hover:bg-[#2d5a8b] transition-colors rounded-b-lg w-full h-1/4"
          >
            <img src={`${ASSET_URL}/icons/floating_contact.svg`} alt="문의하기" className="w-12 h-12" />
          </Link>
        </div>
      </div>

      {/* 모바일 버전 */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        {/* 펼쳐진 메뉴 */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 bg-[#082567] rounded-lg shadow-lg border border-[#082567] w-[100px] mb-2">
            {/* 블로그 */}
            <a
              href="https://m.blog.naver.com/hotellaundry?proxyReferer=&noTrackingCode=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-white hover:bg-[#082567] transition-colors rounded-t-lg w-full h-8 text-xs font-medium px-2"
              onClick={() => setIsExpanded(false)}
            >
              블로그
            </a>

            <div className="border-t border-[#FFFFFF]"></div>

            {/* 매장찾기 */}
            <Link
              to="/find-store"
              className="flex items-center justify-center text-white hover:bg-[#082567] transition-colors w-full h-8 text-xs font-medium px-2"
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
