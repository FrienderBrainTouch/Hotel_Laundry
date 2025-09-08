import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../StoreInfo/common/home.svg';

const BrandSlogan = () => {
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

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 브레드크럼 */}
          <div className="mb-8 md:mb-12 w-full xs:w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
            <div className="flex items-center gap-2 sm:gap-4 font-pretendard">
              <Link to="/">
                <img src={homeIcon} alt="홈" />
              </Link>
              <span className="text-brand-dark text-20">/</span>
              <span className="text-brand-dark text-20">호텔런드리</span>
              <span className="text-brand-dark text-20">/</span>
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-1 text-brand-dark text-20 hover:text-[#102254] transition-colors"
                >
                  브랜드 스토리
                  <span className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </button>
                {isMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[9998] min-w-[140px]">
                    <Link
                      to="/company-intro"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      회사소개
                    </Link>
                    <Link
                      to="/history"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      연혁
                    </Link>
                    <Link
                      to="/brand-story"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-[#102254] font-medium hover:bg-gray-50 transition-colors"
                    >
                      브랜드 스토리
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="text-center">
            <h1 className="text-brand-blue font-KoPubWorldBatang text-28 md:text-4xl lg:text-5xl mb-6 md:mb-8">
              브랜드 슬로건
            </h1>
            
            {/* 슬로건 섹션 */}
            <div className="bg-brand-light-blue rounded-2xl p-8 md:p-12 mb-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-brand-blue font-KoPubWorldBatang text-24 md:text-3xl lg:text-4xl mb-6">
                  "Clean Innovation, Trusted Service"
                </h2>
                <p className="text-brand-dark text-20 md:text-xl leading-relaxed">
                  호텔런드리는 혁신적인 세탁 기술과 신뢰할 수 있는 서비스로<br className="hidden md:block" />
                  고객의 만족을 최우선으로 하는 브랜드입니다.
                </p>
              </div>
            </div>

            {/* 더미 이미지와 설명 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-gray-100 rounded-xl p-8 text-center">
                <div className="w-full h-48 md:h-64 bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white text-20 md:text-2xl font-medium">브랜드 이미지 1</span>
                </div>
                <h3 className="text-brand-blue font-KoPubWorldBatang text-22 md:text-2xl mb-4">
                  혁신적인 기술
                </h3>
                <p className="text-brand-dark text-20 leading-relaxed">
                  최신 세탁 기술과 친환경 솔루션을 통해<br />
                  고품질의 서비스를 제공합니다.
                </p>
              </div>

              <div className="bg-gray-100 rounded-xl p-8 text-center">
                <div className="w-full h-48 md:h-64 bg-gradient-to-br from-brand-light-blue to-brand-blue rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white text-20 md:text-2xl font-medium">브랜드 이미지 2</span>
                </div>
                <h3 className="text-brand-blue font-KoPubWorldBatang text-22 md:text-2xl mb-4">
                  신뢰할 수 있는 서비스
                </h3>
                <p className="text-brand-dark text-20 leading-relaxed">
                  오랜 경험과 전문성을 바탕으로<br />
                  고객에게 안정적인 서비스를 약속합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSlogan;
