import React, { useState } from 'react';
import floatingSearch from './icons/floating_search.svg';
import floatingContact from './icons/floating_contact.svg';
import floatingCatalog from './icons/floating_catalog.svg';

const FloatingMenu = ({ onPageChange, currentPage }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Contact 페이지에서는 플로팅 메뉴를 표시하지 않음
  if (currentPage === 'contact') {
    return null;
  }

  return (
    <>
      {/* 데스크톱 버전 */}
      <div className="fixed right-6 z-50 hidden md:block" style={{ bottom: '15%' }}>
        <div className="bg-[#082567] rounded-lg shadow-lg border border-[#082567] w-[75px] h-[250px]">
          {/* 매장찾기 */}
          <button 
            className="flex items-center justify-center text-white hover:bg-[#2d5a8b] transition-colors rounded-t-lg w-full h-1/3"
            onClick={() => onPageChange('find-store')}
          >
            <img src={floatingSearch} alt="매장찾기" className="w-12 h-12" />
          </button>
          
          <div className="border-t border-[#FFFFFF]"></div>
          
          {/* 카탈로그 다운받기 */}
          <button 
            className="flex items-center justify-center text-white hover:bg-[#2d5a8b] transition-colors w-full h-1/3"
            onClick={() => {
              // 카탈로그 다운로드 로직
              console.log('카탈로그 다운로드');
            }}
          >
            <img src={floatingCatalog} alt="카탈로그 다운받기" className="w-12 h-12" />
          </button>
          
          <div className="border-t border-[#FFFFFF]"></div>
          
          {/* 문의하기 */}
          <button 
            className="flex items-center justify-center text-white hover:bg-[#2d5a8b] transition-colors rounded-b-lg w-full h-1/3"
            onClick={() => onPageChange('contact')}
          >
            <img src={floatingContact} alt="문의하기" className="w-12 h-12" />
          </button>
        </div>
      </div>

      {/* 모바일 버전 */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        {/* 펼쳐진 메뉴 */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 bg-[#082567] rounded-lg shadow-lg border border-[#082567] w-[100px] mb-2">
            {/* 매장찾기 */}
            <button 
              className="flex items-center justify-center text-white hover:bg-[#082567] transition-colors rounded-t-lg w-full h-8 text-xs font-medium px-2"
              onClick={() => {
                onPageChange('find-store');
                setIsExpanded(false);
              }}
            >
              매장찾기
            </button>
            
            <div className="border-t border-[#FFFFFF]"></div>
            
            {/* 카탈로그 다운받기 */}
            <button 
              className="flex items-center justify-center text-white hover:bg-[#082567] transition-colors w-full h-8 text-xs font-medium px-2"
              onClick={() => {
                console.log('카탈로그 다운로드');
                setIsExpanded(false);
              }}
            >
              카탈로그
            </button>
            
            <div className="border-t border-[#FFFFFF]"></div>
            
            {/* 문의하기 */}
            <button 
              className="flex items-center justify-center text-white hover:bg-[#082567] transition-colors rounded-b-lg w-full h-8 text-xs font-medium px-2"
              onClick={() => {
                onPageChange('contact');
                setIsExpanded(false);
              }}
            >
              문의하기
            </button>
          </div>
        )}

        {/* 메인 동그란 버튼 */}
        <button 
          className="w-14 h-14 bg-[#082567] rounded-full shadow-lg border border-[#082567] flex items-center justify-center text-white hover:bg-[#082567] transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default FloatingMenu;
