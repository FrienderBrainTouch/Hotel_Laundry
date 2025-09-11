import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import homeIcon from '../StoreInfo/common/home.svg';
import CallCenter from './CallCenter';
import CentralControl from './CentralControl';
import StoreManagement from './StoreManagement';

const ManagementSupport = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

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

  // 현재 경로에 따라 페이지 제목 결정
  const getCurrentPageTitle = () => {
    switch (location.pathname) {
      case '/management-support':
        return '24시간 콜센터';
      case '/central-control':
        return '중앙관제';
      case '/store-management':
        return '매장관리 대행';
      default:
        return '24시간 콜센터';
    }
  };

  // 현재 경로에 따라 컴포넌트 렌더링
  const renderCurrentComponent = () => {
    switch (location.pathname) {
      case '/management-support':
        return <CallCenter />;
      case '/central-control':
        return <CentralControl />;
      case '/store-management':
        return <StoreManagement />;
      default:
        return <CallCenter />;
    }
  };

  return (
    <div className="management-support">
      {/* 브레드크럼 */}
      <section className="py-20 bg-white">
        <div className="flex justify-center">
          <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
            <div className="mb-8 md:mb-12 w-full xs:w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
              <div className="flex items-center gap-2 sm:gap-4 font-pretendard">
                <Link to="/">
                  <img src={homeIcon} alt="홈" />
                </Link>
                <span className="text-brand-dark text-20">/</span>
                <span className="text-brand-dark text-20">관리지원</span>
                <span className="text-brand-dark text-20">/</span>
                <div className="relative" ref={menuRef}>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center gap-1 text-brand-dark text-20 hover:text-[#102254] transition-colors"
                  >
                    {getCurrentPageTitle()}
                    <span
                      className={`transition-transform duration-200 ${
                        isMenuOpen ? 'rotate-180' : ''
                      }`}
                    >
                      ▾
                    </span>
                  </button>
                  {isMenuOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[9998] min-w-[140px]">
                      <Link
                        to="/management-support"
                        onClick={handleMenuClose}
                        className={`block w-full text-left px-4 py-2 transition-colors ${
                          location.pathname === '/management-support'
                            ? 'text-[#102254] font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        24시간 콜센터
                      </Link>
                      <Link
                        to="/central-control"
                        onClick={handleMenuClose}
                        className={`block w-full text-left px-4 py-2 transition-colors ${
                          location.pathname === '/central-control'
                            ? 'text-[#102254] font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        중앙관제
                      </Link>
                      <Link
                        to="/store-management"
                        onClick={handleMenuClose}
                        className={`block w-full text-left px-4 py-2 transition-colors ${
                          location.pathname === '/store-management'
                            ? 'text-[#102254] font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        매장관리 대행
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 현재 경로에 따른 컴포넌트 렌더링 */}
      {renderCurrentComponent()}
    </div>
  );
};

export default ManagementSupport;
