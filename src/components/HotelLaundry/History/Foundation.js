import React, { useState, useEffect, useRef } from 'react';
import homeIcon from '../../StoreInfo/common/home.svg';

const Section1 = ({ onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClick = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
    setIsMenuOpen(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="max-w-8xl mx-auto">
          {/* 브레드크럼 */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-2 sm:gap-4 font-pretendard">
              <img src={homeIcon} alt="홈" />
              <span className="text-brand-dark text-20">/</span>
              <span className="text-brand-dark text-20">호텔런드리</span>
              <span className="text-brand-dark text-20">/</span>
              <div className="relative" ref={menuRef}>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-1 text-brand-dark text-20 hover:text-[#102254] transition-colors"
                >
                  연혁
                  <span className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                     ▾
                   </span>
                </button>
                {isMenuOpen && (
                   <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[9998] min-w-[120px]">
                    <button 
                      onClick={() => handleMenuClick('company-intro')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      회사소개
                    </button>
                    <button 
                      onClick={() => handleMenuClick('history')}
                      className="block w-full text-left px-4 py-2 text-[#102254] font-medium hover:bg-gray-50 transition-colors"
                    >
                      연혁
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 메인 이미지 */}
          <div className="mb-10">
            <img 
              src="/images/CompanyInfo/Company-1.png" 
              alt="호텔런드리 세탁기" 
              className="w-full max-w-[1400px] h-[400px] object-cover rounded-lg mx-auto"
            />
          </div>

          {/* 제목 */}
          <div className="text-center mb-10">
            <h1 
              className="text-[40px] font-bold leading-normal mb-10"
              style={{
                color: '#1C262B',
                fontFamily: 'KoPubWorldDotum, sans-serif',
                fontWeight: 700,
                lineHeight: 'normal'
              }}
            >
              기술과 신뢰를 바탕으로 성장해온 호텔런드리
            </h1>

            {/* 구분선 */}
            <div 
              className="mx-auto mb-[50px]"
              style={{
                width: '50px',
                height: '5px',
                background: '#102254'
              }}
            ></div>

            {/* 부제목 */}
            <div 
              className="text-center mx-auto"
              style={{
                color: '#1C262B',
                fontFamily: 'KoPubWorldDotum, sans-serif',
                fontSize: '24px',
                fontWeight: 300,
                lineHeight: 'normal',
                letterSpacing: '-0.48px'
              }}
            >
              <p className="mb-4">
                스마트 세탁 시스템과 무인 운영 기술을 기반으로 고객과 파트너 모두에게 신뢰받는 브랜드로 나아가고 있습니다.
              </p>
              <p>
                변화하는 시대 속에서도 흔들림 없이, 기술로 성장해왔습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
