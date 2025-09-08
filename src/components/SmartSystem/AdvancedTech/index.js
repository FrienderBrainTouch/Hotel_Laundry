import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../StoreInfo/common/home.svg';
import HeroSection from './HeroSection';
import TechCards from './TechCards';
import LaundryTech from './LaundryTech';
import TechBenefits from './TechBenefits';

const AdvancedTech = () => {
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
              <span className="text-brand-dark text-20">스마트 시스템</span>
              <span className="text-brand-dark text-20">/</span>
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-1 text-brand-dark text-20 hover:text-[#102254] transition-colors"
                >
                  첨단기술
                  <span className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </button>
                {isMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[9998] min-w-[140px]">
                    <Link
                      to="/smart-system"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      스마트 시스템
                    </Link>
                    <Link
                      to="/advanced-technology"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-[#102254] font-medium hover:bg-gray-50 transition-colors"
                    >
                      첨단기술
                    </Link>
                    <Link
                      to="/status-management"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      위생관리
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div>
            <HeroSection />
            <TechCards />
            <LaundryTech />
            <TechBenefits />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedTech;
