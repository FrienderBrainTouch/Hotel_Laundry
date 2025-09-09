import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../StoreInfo/common/home.svg';
import section1MainImage from './image/section1_main.svg';

const Section1 = () => {
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
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-1 text-brand-dark text-20 hover:text-[#102254] transition-colors"
                >
                  창업 안내
                  <span className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </button>
                {isMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[9998] min-w-[140px]">
                    <Link
                      to="/startup-guide"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-[#102254] font-medium hover:bg-gray-50 transition-colors"
                    >
                      창업안내
                    </Link>
                    <Link
                      to="/store-owner-interview"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      점주 인터뷰
                    </Link>
                    <Link
                      to="/solo-startup"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      단독 창업
                    </Link>
                    <Link
                      to="/business-seminar"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      사업 설명회
                    </Link>
                    <Link
                      to="/catalog"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      카탈로그
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 메인 이미지 */}
          <div className="mb-[30px] sm:mb-[30px] md:mb-[30px] lg:mb-[40px] xl:mb-[50px] 2xl:mb-[50px]">
            <img
              src={section1MainImage}
              alt="호텔런드리 창업 안내"
              className="mx-auto object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[50px] 2xl:rounded-[50px] w-full h-auto xs:w-[355px] xs:h-[180px] sm:w-[535px] sm:h-[200px] md:w-[728px] md:h-[300px] lg:w-[924px] lg:h-[300px] xl:w-[1200px] xl:h-[350px] 2xl:w-[1400px] 2xl:h-[400px]"
            />
          </div>

          {/* 제목 */}
          <div className="text-center mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px] w-full xs:w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
            <h1
              className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.48px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px]"
            >
              처음 시작하는 창업, 호텔런드리라면 다릅니다.
            </h1>

            {/* 부제목 */}
            <div
              className="text-center mx-auto text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-light leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px]"
            >
              <div className="block sm:hidden">
                <p className="mb-8">복잡한 운영 없이도 시작할 수 있는 호텔런드리 창업은 무인 시스템으로 시간과 인력을 최소화한 효율적인 모델입니다.</p>
                <p>누구나 쉽게 접근할 수 있도록 설계된 창업 구조와 본사의 운영 지원 시스템으로 부담 없이 안정적인 매장 운영이 가능합니다.</p>
              </div>
              <div className="hidden sm:block lg:hidden">
                <p>복잡한 운영 없이도 시작할 수 있는 호텔런드리 창업은 무인 시스템으로 시간과 인력을 최소화한 효율적인 모델입니다.</p>
                <p>우리는 단순한 셀프 빨래방이 아닌, <br />고객의 일상에 새로운 라이프스타일을 제안하는 브랜드를 만들고자 합니다.</p>
                <p>누구나 쉽게 접근할 수 있도록 설계된 창업 구조와 본사의 운영 지원 시스템으로 부담 없이 안정적인 매장 운영이 가능합니다.</p>
              </div>
              <div className="hidden lg:block xl:hidden">
                <p>복잡한 운영 없이도 시작할 수 있는 호텔런드리 창업은 무인 시스템으로 시간과 인력을 최소화한 효율적인 모델입니다.</p>
                <p>우리는 단순한 셀프 빨래방이 아닌, 고객의 일상에 새로운 라이프스타일을 제안하는 브랜드를 만들고자 합니다.</p>
                <p>누구나 쉽게 접근할 수 있도록 설계된 창업 구조와 본사의 운영 지원 시스템으로 부담 없이 안정적인 매장 운영이 가능합니다.</p>
              </div>
              <div className="hidden xl:block">
                <p>복잡한 운영 없이도 시작할 수 있는 호텔런드리 창업은 무인 시스템으로 시간과 인력을 최소화한 효율적인 모델입니다.</p>
                <p>우리는 단순한 셀프 빨래방이 아닌, 고객의 일상에 새로운 라이프스타일을 제안하는 브랜드를 만들고자 합니다.</p>
                <p>누구나 쉽게 접근할 수 있도록 설계된 창업 구조와 본사의 운영 지원 시스템으로 부담 없이 안정적인 매장 운영이 가능합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
