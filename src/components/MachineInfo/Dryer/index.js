import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../StoreInfo/common/home.svg';

const Dryer = () => {
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
                  건조기
                  <span className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </button>
                {isMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[9998] min-w-[120px]">
                    <Link
                      to="/washing-machine"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      세탁기
                    </Link>
                    <Link
                      to="/dryer"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-[#102254] font-medium hover:bg-gray-50 transition-colors"
                    >
                      건조기
                    </Link>
                    <Link
                      to="/self-dry-cleaning"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      셀프 드라이클리닝
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 메인 이미지 */}
          <div className="mb-[30px] sm:mb-[30px] md:mb-[30px] lg:mb-[40px] xl:mb-[50px] 2xl:mb-[50px]">
            <img
              src="/images/CompanyInfo/Company-1.png"
              alt="호텔런드리 건조기"
              className="mx-auto object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[50px] 2xl:rounded-[50px] w-full h-auto xs:w-[355px] xs:h-[180px] sm:w-[535px] sm:h-[200px] md:w-[728px] md:h-[300px] lg:w-[924px] lg:h-[300px] xl:w-[1200px] xl:h-[350px] 2xl:w-[1400px] 2xl:h-[400px]"
            />
          </div>

          {/* 제목 */}
          <div className="text-center mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px] w-full xs:w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
            <h1
              className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.48px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px]"
            >
              <span className="block 2xl:hidden">빠르고 효율적인 건조 시스템</span>
              <span className="hidden 2xl:block">빠르고 효율적인 건조 시스템으로 완벽한 의류 관리를 제공합니다.</span>
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
              className="text-center mx-auto text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-light leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px]"
            >
              <div className="block sm:hidden">
                <p className="mb-8">호텔런드리의 건조기는 스마트 센서 기술과 섬유 보호 시스템을 통해 완벽한 건조 서비스를 제공합니다.</p>
                <p>다양한 소재에 맞는 최적의 건조 프로그램으로 의류의 수명을 연장합니다.</p>
              </div>
              <div className="hidden sm:block lg:hidden">
                <p>호텔런드리의 건조기는 스마트 센서 기술과 섬유 보호 시스템을 통해 완벽한 건조 서비스를 제공합니다.</p>
                <p>다양한 소재에 맞는 최적의 건조 프로그램으로 <br />의류의 수명을 연장합니다.</p>
              </div>
              <div className="hidden lg:block xl:hidden">
                <p>호텔런드리의 건조기는 스마트 센서 기술과 섬유 보호 시스템을 통해 완벽한 건조 서비스를 제공합니다.</p>
                <p>다양한 소재에 맞는 최적의 건조 프로그램으로 의류의 수명을 연장합니다.</p>
              </div>
              <div className="hidden xl:block">
                <p>호텔런드리의 건조기는 스마트 센서 기술과 섬유 보호 시스템을 통해 완벽한 건조 서비스를 제공합니다.</p>
                <p>다양한 소재에 맞는 최적의 건조 프로그램으로 의류의 수명을 연장합니다.</p>
              </div>
            </div>
          </div>

          {/* 건조기 정보 섹션 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-[#102254] mb-4">주요 특징</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• 대용량 건조 가능</li>
                <li>• 에너지 효율성 극대화</li>
                <li>• 다양한 건조 프로그램</li>
                <li>• 자동 온도 조절</li>
                <li>• 섬유 보호 기술</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-[#102254] mb-4">기술 사양</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• 용량: 25kg ~ 50kg</li>
                <li>• 소비전력: A+++ 등급</li>
                <li>• 건조 시간: 40~80분</li>
                <li>• 온도 범위: 40°C ~ 80°C</li>
                <li>• 소음 수준: 50dB 이하</li>
              </ul>
            </div>
          </div>

          {/* 건조 프로그램 섹션 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#102254] mb-8 text-center">건조 프로그램</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#102254] mb-3">일반 건조</h3>
                <p className="text-gray-600 mb-4">일상적인 의류 건조에 최적화된 프로그램</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 건조 시간: 60분</li>
                  <li>• 온도: 60°C</li>
                  <li>• 습도: 자동 조절</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#102254] mb-3">강력 건조</h3>
                <p className="text-gray-600 mb-4">두꺼운 의류나 이불을 위한 강력한 건조</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 건조 시간: 80분</li>
                  <li>• 온도: 80°C</li>
                  <li>• 습도: 자동 조절</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#102254] mb-3">부드러운 건조</h3>
                <p className="text-gray-600 mb-4">섬세한 소재를 위한 부드러운 건조</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 건조 시간: 40분</li>
                  <li>• 온도: 40°C</li>
                  <li>• 습도: 자동 조절</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 건조 기술 섹션 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#102254] mb-8 text-center">건조 기술</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#102254] mb-4">스마트 센서 기술</h3>
                <p className="text-gray-600 mb-4">
                  의류의 습도를 실시간으로 감지하여 최적의 건조 시간을 자동으로 조절합니다.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 습도 센서</li>
                  <li>• 온도 센서</li>
                  <li>• 자동 타이머</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#102254] mb-4">섬유 보호 기술</h3>
                <p className="text-gray-600 mb-4">
                  다양한 섬유의 특성을 고려한 건조 기술로 의류의 수명을 연장합니다.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 섬유별 최적 온도</li>
                  <li>• 주름 방지 기능</li>
                  <li>• 색상 보호</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 문의 섹션 */}
          <div className="bg-[#102254] text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">건조기 문의하기</h2>
            <p className="text-lg mb-6">건조기에 대한 자세한 정보나 견적 문의가 필요하시면 언제든 연락주세요.</p>
            <button className="bg-white text-[#102254] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              문의하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dryer;
