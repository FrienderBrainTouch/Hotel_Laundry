import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../StoreInfo/common/home.svg';

const IoTOverview = () => {
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

  return (<section className="pt-0 pb-20 bg-white">
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
                스마트 시스템
                <span className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>
              {isMenuOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[9998] min-w-[140px]">
                  <Link
                    to="/smart-system"
                    onClick={handleMenuClose}
                    className="block w-full text-left px-4 py-2 text-[#102254] font-medium hover:bg-gray-50 transition-colors"
                  >
                    스마트 시스템
                  </Link>
                  <Link
                    to="/advanced-technology"
                    onClick={handleMenuClose}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    첨단기술
                  </Link>
                  <Link
                    to="/status-management"
                    onClick={handleMenuClose}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    위상관리
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 메인 이미지 */}
        <div className="mb-[30px] sm:mb-[30px] md:mb-[30px] lg:mb-[40px] xl:mb-[50px] 2xl:mb-[50px]">
          <img
            src="/images/SmartSystem/Smart-1.png" 
            alt="IoT 스마트 시스템" 
            className="mx-auto object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[50px] 2xl:rounded-[50px] w-full h-auto xs:w-[355px] xs:h-[180px] sm:w-[535px] sm:h-[200px] md:w-[728px] md:h-[300px] lg:w-[924px] lg:h-[300px] xl:w-[1200px] xl:h-[350px] 2xl:w-[1400px] 2xl:h-[400px]"
          />
        </div>

          {/* 제목 */}
          <div className="text-center mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px] w-full xs:w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
            <h1 
              className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.48px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px]"
            >
              {/* xs (기본) - 간단한 문구 */}
              <span className="sm:hidden">IoT와 AI 프리미엄 세탁 시스템</span>
              
              {/* sm 이상 - 상세한 문구 */}
              <span className="hidden sm:inline">IoT와 AI로 더 똑똑해진 프리미엄 세탁 시스템</span>
            </h1>

            {/* 부제목 */}
             <div 
               className="text-center mx-auto text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-light leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px]"
             >
               {/* xs (기본) - 간단한 문구 */}
               <div className="md:hidden">
                 <p>호텔런드리의 스마트 시스템은 점주의 운영 효율을 높이기 위해 설계되었습니다.</p>
                 <p>IoT 기반 원격제어 기능으로 스마트폰 하나로 매장 관리가 가능합니다.</p>
                 <p>AI 운영시스템은 장비 가동률과 수익 향상을 지원합니다.</p>
               </div>
               
               {/* sm - 중간 문구 */}
               <div className="hidden sm:block md:hidden">
                 <p>호텔런드리의 스마트 시스템은 점주의 운영 효율을 높이기 위해 설계되었습니다.</p>
                 <p>IoT 기반 원격제어 기능으로 스마트폰 하나로 매장 관리가 가능합니다.</p>
                 <p>AI 운영시스템은 시간대별 자동 할인 및 리포트 제공 기능을 통해 장비 가동률과 수익 향상을 지원합니다.</p>
                 <p>처음 시작하는 1인 창업자도 안정적으로 운영할 수 있도록 돕는 스마트 세탁 솔루션입니다.</p>
               </div>
               
               {/* md 이상 - 상세한 문구 */}
               <div className="hidden md:block">
                 <p>호텔런드리의 스마트 시스템은 점주의 운영 효율을 높이기 위해 설계되었습니다.</p>
                 <p>IoT 기반 원격제어 기능으로 기기 문제가 발생해도 본사에서 즉시 조치가 가능하며, 스마트폰 하나로 매장 관리가 가능합니다.</p>
                 <p>AI 운영시스템은 시간대별 자동 할인 및 리포트 제공 기능을 통해 장비 가동률과 수익 향상을 지원합니다.</p>
                 <p>처음 시작하는 1인 창업자도 안정적으로 운영할 수 있도록 돕는 스마트 세탁 솔루션입니다.</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTOverview;
