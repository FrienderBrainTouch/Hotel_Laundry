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
                  회사소개
                  <span className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                     ▾
                   </span>
                </button>
                {isMenuOpen && (
                   <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[9998] min-w-[120px]">
                    <button 
                      onClick={() => handleMenuClick('company-intro')}
                      className="block w-full text-left px-4 py-2 text-[#102254] font-medium hover:bg-gray-50 transition-colors"
                    >
                      회사소개
                    </button>
                    <button 
                      onClick={() => handleMenuClick('history')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
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
              우리는 기술로 세탁의 새로운 기준을 만듭니다.
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
                호텔런드리는 분야별 전문가들이 모여 설립한 프리미엄 세탁 브랜드입니다.
              </p>
              <p className="mb-4">
                우리는 단순한 셀프 빨래방이 아닌, 고객의 일상에 새로운 라이프스타일을 제안하는 브랜드를 만들고자 합니다.
              </p>
              <p>
                4차 산업혁명 시대에 맞는 IoT 기반 시스템과 스마트 자동화 기술을 바탕으로, 세탁 서비스의 미래를 선도하며 세계 시장을 향해 나아갑니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
