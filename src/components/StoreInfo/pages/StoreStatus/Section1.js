import React, { useState, useEffect, useRef } from 'react';
import section1MainImage from './StoreListImage/section1_main.svg';
import homeIcon from '../../common/home.svg';
import ListChartImage from './StoreListImage/ListChartImage.svg';
import ListMap from './StoreListImage/ListMap.svg';

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
              <span className="text-brand-dark text-20">매장정보</span>
              <span className="text-brand-dark text-20">/</span>
              <div className="relative" ref={menuRef}>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-1 text-brand-dark text-20 hover:text-[#102254] transition-colors"
                >
                  매장현황
                  <span className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                     ▾
                   </span>
                </button>
                {isMenuOpen && (
                   <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[9998] min-w-[120px]">
                    <button 
                      onClick={() => handleMenuClick('store-status')}
                      className="block w-full text-left px-4 py-2 text-[#102254] font-medium hover:bg-gray-50 transition-colors"
                    >
                      매장현황
                    </button>
                    <button 
                      onClick={() => handleMenuClick('find-store')}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      매장찾기
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 메인 이미지 */}
          <div className="mb-10">
            <img 
              src={section1MainImage} 
              alt="호텔런드리 매장 현황" 
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
              지금 이 순간에도, 전국에서 운영되고 있습니다
            </h1>
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
                호텔런드리는 서울, 경기, 수도권을 비롯해 전국 각지에서 지속적으로 매장을 오픈하여 무인 세탁 시장을 선도하고 있습니다.
              </p>
              <p>
                전국 매장이 꾸준히 늘어나는 동시에, <span className="font-semibold">폐점율 0%</span>의 기록을 유지하고 있습니다.
              </p>
            </div>
          </div>

          {/* 차트와 지도 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img                   
                  src={ListChartImage} 
                  alt="전국 매장 현황 이미지" 
                  className="w-full h-auto"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img                   
                  src={ListMap} 
                  alt="전국 매장 현황 이미지" 
                  className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
