import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../StoreInfo/common/home.svg';

const BusinessSeminar = () => {
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
              <span className="text-brand-dark text-20">창업 안내</span>
              <span className="text-brand-dark text-20">/</span>
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-1 text-brand-dark text-20 hover:text-[#102254] transition-colors"
                >
                  사업 설명회
                  <span className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </button>
                {isMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[9998] min-w-[140px]">
                    <Link
                      to="/startup-guide"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
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
                      className="block w-full text-left px-4 py-2 text-[#102254] font-medium hover:bg-gray-50 transition-colors"
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

          {/* 메인 콘텐츠 */}
          <div className="text-center">            
            {/* 사업 설명회 콘텐츠 영역 */}
            <div className="space-y-8">
              {/* 사업 설명회 섹션 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 text-center">
                  정기 사업 설명회
                </h2>
                <div className="space-y-4 text-center">
                  <p className="text-24 text-gray-700 leading-relaxed">
                    호텔세탁소 사업에 대한 상세한 설명과 Q&A를 통해<br className="hidden sm:block" />
                    창업에 필요한 모든 정보를 제공합니다.
                  </p>
                  <div className="bg-brand-light-blue rounded-lg p-4 md:p-6">
                    <p className="text-22 text-brand-blue font-medium">
                      📅 <span className="font-semibold">주기적으로 개최</span>되는 사업 설명회에 참여하세요
                    </p>
                  </div>
                </div>
              </div>

              {/* 점주 교육 섹션 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 text-center">
                  점주 교육 프로그램
                </h2>
                <div className="space-y-4 text-center">
                  <p className="text-24 text-gray-700 leading-relaxed">
                    성공적인 사업 운영을 위한<br className="hidden sm:block" />
                    체계적인 교육 프로그램을 제공합니다.
                  </p>
                  <div className="bg-brand-light-blue rounded-lg p-4 md:p-6">
                    <p className="text-22 text-brand-blue font-medium">
                      🎓 <span className="font-semibold">주기적으로 실시</span>되는 점주 교육에 참여하세요
                    </p>
                  </div>
                </div>
              </div>

              {/* 연락처 정보 */}
              <div className="bg-gray-50 rounded-lg p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">
                  문의 및 신청
                </h3>
                <p className="text-24 text-gray-600 mb-4">
                  사업 설명회 및 점주 교육에 대한 자세한 일정과 신청 방법은<br className="hidden sm:block" />
                  아래 연락처로 문의해 주세요.
                </p>
                <div className="space-y-2">
                  <p className="text-22 text-brand-blue font-medium">
                    📞 전화: 1588-0000
                  </p>
                  <p className="text-22 text-brand-blue font-medium">
                    📧 이메일: info@hotellaundry.co.kr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSeminar;
