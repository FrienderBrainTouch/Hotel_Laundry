import React, { useState, useEffect, useRef } from 'react';
import homeIcon from '../../common/home.svg';
import SearchIcon from './StoreFinderImage/search_icon.svg';

const Section1 = ({ onPageChange, searchKeyword, setSearchKeyword, handleSearch }) => {
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
      {/* 브레드크럼 - 컨테이너 밖으로 */}
      <div className="mb-8 md:mb-12">
        <div className="max-w-[1400px] mx-auto px-6">
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
                매장찾기
                <span className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                   ▾
                 </span>
              </button>
              {isMenuOpen && (
                 <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[9998] min-w-[120px]">
                  <button 
                    onClick={() => handleMenuClick('store-status')}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    매장현황
                  </button>
                  <button 
                    onClick={() => handleMenuClick('find-store')}
                    className="block w-full text-left px-4 py-2 text-[#102254] font-medium hover:bg-gray-50 transition-colors"
                  >
                    매장찾기
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 검색바 - 별도 컨테이너 */}
        <div className="max-w-3xl mx-auto p-4 flex flex-col items-center gap-y-4">
          <h1 
            className="text-[40px] font-bold leading-normal"
            style={{
              color: '#1C262B',
              fontFamily: 'KoPubWorldDotum, sans-serif',
              fontWeight: 700,
              lineHeight: 'normal'
            }}
          >
            매장 검색
          </h1>

          <h3 className="text-hero-subtitle text-gray-600">
            지역명 또는 매장명을 검색해주세요
          </h3>

          <form onSubmit={handleSearch} className="relative w-full mt-2">
            <input
              type="text"
              placeholder="지역명 또는 매장명을 입력하세요"
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg pr-12 text-lg"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 p-1">
              <img src={SearchIcon} alt="검색" className="w-6 h-6" />
            </button>
          </form>
        </div>
    </section>
  );
};

export default Section1;
