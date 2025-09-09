import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../StoreInfo/common/home.svg';

const SoloStartup = () => {
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
                  단독 창업
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
                      className="block w-full text-left px-4 py-2 text-[#102254] font-medium hover:bg-gray-50 transition-colors"
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

          {/* 메인 콘텐츠 */}
          <div className="text-center">
            <h1
              className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.48px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px]"
            >
              단독 창업
            </h1>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] text-gray-600 mb-12 font-KoPubWorldDotum">
              혼자서도 충분히 운영할 수 있는 호텔세탁소 창업 가이드
            </p>
            
            {/* 단독 창업 콘텐츠 영역 */}
            <div className="space-y-0">
              {/* 단독 창업 영상 섹션 */}
              <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto mb-12">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                      <div className="aspect-video bg-gray-900 relative">
                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/aqt5o-1ViGY?si=OT-PitYAknqvRhxO&amp;start=141" 
                      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                      picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                      <div className="p-8">
                        <h3 className="section-title font-bold text-brand-dark mb-4">
                          55세 은퇴 후, 무인 빨래방으로 다시 태어난 사장님
                        </h3>
                        <p className="text-24 text-gray-600 mb-6">
                          25년간의 회사 생활을 마치고 은퇴한 안영준씨가 3개 매장을 운영하며 경험한 실제 성공 사례를 확인해보세요.
                        </p>
                        <div className="flex items-center gap-4 text-20 text-gray-500">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            ✓ 3개 매장 운영
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            ✓ 월 1300만원 수익
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                            ✓ 80% 수익률
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 단독 운영의 장점 */}
              <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="section-title font-bold text-brand-dark mb-4">
                      단독 운영의 핵심 장점
                    </h2>
                    <p className="text-24 text-gray-600 max-w-3xl mx-auto">
                      혼자서도 효율적으로 운영할 수 있는 이유를 확인해보세요
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4 text-center">🤖</div>
                      <h4 className="text-lg font-bold text-brand-dark mb-3 text-center">
                        자동화 시스템
                      </h4>
                      <p className="text-sm text-gray-600 mb-4 text-center">
                        스마트 시스템으로 24시간 무인 운영 가능
                      </p>
                      <ul className="space-y-2">
                        <li className="text-xs text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          원격 모니터링 시스템
                        </li>
                        <li className="text-xs text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          자동 결제 시스템
                        </li>
                        <li className="text-xs text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          실시간 알림 서비스
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4 text-center">💰</div>
                      <h4 className="text-lg font-bold text-brand-dark mb-3 text-center">
                        높은 수익성
                      </h4>
                      <p className="text-sm text-gray-600 mb-4 text-center">
                        인건비 없이 순수익 극대화
                      </p>
                      <ul className="space-y-2">
                        <li className="text-xs text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                          인건비 0원
                        </li>
                        <li className="text-xs text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                          월 1300만원 이상 수익
                        </li>
                        <li className="text-xs text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                          빠른 투자 회수
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4 text-center">⏰</div>
                      <h4 className="text-lg font-bold text-brand-dark mb-3 text-center">
                        자유로운 시간
                      </h4>
                      <p className="text-sm text-gray-600 mb-4 text-center">
                        본업과 병행하거나 여유로운 생활 가능
                      </p>
                      <ul className="space-y-2">
                        <li className="text-xs text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                          하루 1-2시간 관리
                        </li>
                        <li className="text-xs text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                          주말/휴일 자유
                        </li>
                        <li className="text-xs text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                          부업으로도 가능
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 성공 사례 및 운영 팁 */}
              <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="section-title font-bold text-brand-dark mb-4">
                      단독 창업 성공 사례
                    </h2>
                    <p className="text-24 text-gray-600 max-w-3xl mx-auto">
                      실제 단독 운영자들의 성공 스토리를 확인해보세요
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="text-lg font-bold text-brand-dark mb-4">안영준씨 (55세, 은퇴 후 창업)</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-600">운영 매장 수</span>
                          <span className="text-sm font-bold text-green-600">3개 매장</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-600">월 평균 순수익</span>
                          <span className="text-sm font-bold text-green-600">1,300만원</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-600">수익률</span>
                          <span className="text-sm font-bold text-green-600">80%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-600">관리 방식</span>
                          <span className="text-sm font-bold text-blue-600">휴대폰으로만</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                          "25년간의 회사 생활을 마치고 은퇴 후 창업했는데, 
                          크게 힘들이지 않고 안정적인 수익을 얻을 수 있어서 만족합니다."
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="text-lg font-bold text-brand-dark mb-4">최근 신규 매장 성과</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-600">개업 후 기간</span>
                          <span className="text-sm font-bold text-green-600">2개월</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-600">월 매출</span>
                          <span className="text-sm font-bold text-green-600">800만원</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-600">수익률</span>
                          <span className="text-sm font-bold text-green-600">80%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-600">창업 비용</span>
                          <span className="text-sm font-bold text-blue-600">1억~1.3억원</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                          "신규 매장도 두 달 만에 월 매출 800만원을 달성했습니다. 
                          본사에서 위탁 운영을 해주어 관리 부담이 거의 없어요."
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 운영 팁 */}
                  <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <h3 className="section-title font-bold text-brand-dark mb-8 text-center">
                      단독 운영 성공 팁
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">📱</span>
                        </div>
                        <h4 className="text-lg font-bold text-brand-dark mb-2">휴대폰으로만 관리</h4>
                        <p className="text-sm text-gray-600">
                          CCTV와 매출 현황을 휴대폰으로 확인하고, 직접 매장에 상주할 필요가 없습니다
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🏢</span>
                        </div>
                        <h4 className="text-lg font-bold text-brand-dark mb-2">본사 위탁 운영</h4>
                        <p className="text-sm text-gray-600">
                          고객 문의(CS), 청소, 세제 교체 등 대부분의 관리를 본사에서 대신 처리해줍니다
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🤖</span>
                        </div>
                        <h4 className="text-lg font-bold text-brand-dark mb-2">24시간 무인 운영</h4>
                        <p className="text-sm text-gray-600">
                          고객은 스마트폰 앱으로 빈 세탁기를 확인하고 예약하며, 세탁 완료 시 알림을 받습니다
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoloStartup;
