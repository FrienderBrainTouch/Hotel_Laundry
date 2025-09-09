import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../StoreInfo/common/home.svg';

const WashingMachine = () => {
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
                  세탁기
                  <span className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </button>
                {isMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[9998] min-w-[120px]">
                    <Link
                      to="/washing-machine"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-[#102254] font-medium hover:bg-gray-50 transition-colors"
                    >
                      세탁기
                    </Link>
                    <Link
                      to="/dryer"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
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
            <div className="relative">
              <img
                src="/images/CompanyInfo/Company-1.png"
                alt="호텔런드리 스마트 세탁기"
                className="mx-auto object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[50px] 2xl:rounded-[50px] w-full h-auto xs:w-[355px] xs:h-[180px] sm:w-[535px] sm:h-[200px] md:w-[728px] md:h-[300px] lg:w-[924px] lg:h-[300px] xl:w-[1200px] xl:h-[350px] 2xl:w-[1400px] 2xl:h-[400px]"
              />
              {/* HOTEL LAUNDRY 브랜딩 오버레이 */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#102254] rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white rounded-full relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[#102254] font-bold text-sm">HOTEL</div>
                    <div className="text-[#102254] font-bold text-lg">LAUNDRY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 제목 */}
          <div className="text-center mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px] w-full xs:w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
            <h1
              className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.48px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px]"
            >
              <span className="block 2xl:hidden">스마트 세탁기</span>
              <span className="hidden 2xl:block">스마트 세탁기 33kg & 23kg - 최신 기술로 구현된 고성능 세탁기</span>
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
                <p className="mb-8">스테인리스 스틸로 제작된 상업용 세탁기로 6가지 세탁 모드와 스마트 제어 시스템을 제공합니다.</p>
                <p>키오스크 전용, 원격제어, 모바일 예약, 살균수 공급장치 등 다양한 옵션을 지원합니다.</p>
              </div>
              <div className="hidden sm:block lg:hidden">
                <p>스테인리스 스틸로 제작된 상업용 세탁기로 6가지 세탁 모드와 스마트 제어 시스템을 제공합니다.</p>
                <p>키오스크 전용, 원격제어, 모바일 예약, 살균수 공급장치 등 <br />다양한 옵션을 지원합니다.</p>
              </div>
              <div className="hidden lg:block xl:hidden">
                <p>스테인리스 스틸로 제작된 상업용 세탁기로 6가지 세탁 모드와 스마트 제어 시스템을 제공합니다.</p>
                <p>키오스크 전용, 원격제어, 모바일 예약, 살균수 공급장치 등 다양한 옵션을 지원합니다.</p>
              </div>
              <div className="hidden xl:block">
                <p>스테인리스 스틸로 제작된 상업용 세탁기로 6가지 세탁 모드와 스마트 제어 시스템을 제공합니다.</p>
                <p>키오스크 전용, 원격제어, 모바일 예약, 살균수 공급장치 등 다양한 옵션을 지원합니다.</p>
              </div>
            </div>
          </div>

          {/* 세탁기 모델별 사양 섹션 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* 스마트 세탁기 33kg */}
            <div className="bg-white border-2 border-[#102254] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#102254] mb-6 text-center">스마트 세탁기 33kg</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">세탁용량</span>
                  <span className="text-[#102254] font-bold">33kg</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">전기사양</span>
                  <span className="text-[#102254] font-bold">AC 200V 2P / 380V 3P</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">탈수속도</span>
                  <span className="text-[#102254] font-bold">600~700RPM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">세탁코스</span>
                  <span className="text-[#102254] font-bold">6모드</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">크기(W/D/H)</span>
                  <span className="text-[#102254] font-bold">1100/1300/1720mm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">중량</span>
                  <span className="text-[#102254] font-bold">810kg</span>
                </div>
                <div className="pt-3">
                  <span className="font-semibold text-gray-700 block mb-2">옵션</span>
                  <div className="text-sm text-[#102254] space-y-1">
                    <div>• 키오스크전용, 원격제어시스템</div>
                    <div>• 모바일예약, 살균수 공급장치</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 스마트 세탁기 23kg */}
            <div className="bg-white border-2 border-[#102254] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#102254] mb-6 text-center">스마트 세탁기 23kg</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">세탁용량</span>
                  <span className="text-[#102254] font-bold">23kg</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">전기사양</span>
                  <span className="text-[#102254] font-bold">AC 200V 2P</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">탈수속도</span>
                  <span className="text-[#102254] font-bold">600~700RPM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">세탁코스</span>
                  <span className="text-[#102254] font-bold">6모드</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">크기(W/D/H)</span>
                  <span className="text-[#102254] font-bold">880/1000/1540mm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">중량</span>
                  <span className="text-[#102254] font-bold">470kg</span>
                </div>
                <div className="pt-3">
                  <span className="font-semibold text-gray-700 block mb-2">옵션</span>
                  <div className="text-sm text-[#102254] space-y-1">
                    <div>• 키오스크전용, 원격제어시스템</div>
                    <div>• 모바일예약, 살균수 공급장치</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 주요 특징 섹션 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#102254] mb-8 text-center">주요 특징</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-[#102254] p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 border-2 border-white rounded-full relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#102254] mb-3">스테인리스 스틸</h3>
                <p className="text-gray-600">내구성과 위생성을 극대화한 스테인리스 스틸 소재로 제작</p>
              </div>
              <div className="bg-white border-2 border-[#102254] p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl font-bold">6</div>
                </div>
                <h3 className="text-xl font-bold text-[#102254] mb-3">6가지 세탁 모드</h3>
                <p className="text-gray-600">다양한 세탁 요구사항에 맞춘 6가지 전문 세탁 프로그램</p>
              </div>
              <div className="bg-white border-2 border-[#102254] p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-xl">📱</div>
                </div>
                <h3 className="text-xl font-bold text-[#102254] mb-3">스마트 제어</h3>
                <p className="text-gray-600">키오스크, 원격제어, 모바일 예약 등 다양한 스마트 제어 옵션</p>
              </div>
              <div className="bg-white border-2 border-[#102254] p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-xl">💧</div>
                </div>
                <h3 className="text-xl font-bold text-[#102254] mb-3">살균수 공급</h3>
                <p className="text-gray-600">위생적인 세탁을 위한 살균수 공급장치 옵션 제공</p>
              </div>
              <div className="bg-white border-2 border-[#102254] p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-xl">⚡</div>
                </div>
                <h3 className="text-xl font-bold text-[#102254] mb-3">고속 탈수</h3>
                <p className="text-gray-600">600~700RPM의 고속 탈수로 빠른 건조와 에너지 효율성</p>
              </div>
              <div className="bg-white border-2 border-[#102254] p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-xl">🏢</div>
                </div>
                <h3 className="text-xl font-bold text-[#102254] mb-3">상업용 설계</h3>
                <p className="text-gray-600">호텔, 리조트 등 상업 시설에 최적화된 대용량 설계</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WashingMachine;
