import React from 'react';

const StoreManagement = () => {
  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 메인 콘텐츠 */}
          <div className="text-center">
            <h1
              className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] font-bold text-[#1C262B] mb-6"
              style={{
                fontFamily: 'KoPubWorldBatang',
                letterSpacing: 'clamp(-0.48px, -0.48px + 0.04vw, -0.88px)',
              }}
            >
              매장관리 대행 서비스
            </h1>

            <p
              className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] text-[#666] mb-12 max-w-4xl mx-auto"
              style={{
                fontFamily: 'KoPubWorldDotum',
                fontWeight: '500',
                letterSpacing: 'clamp(-0.32px, -0.32px + 0.02vw, -0.52px)',
                lineHeight: '1.6',
              }}
            >
              전문적인 매장 운영 노하우로 성공적인 사업을 지원하는 종합 매장관리 서비스
            </p>

            {/* 서비스 특징 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3
                  className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-[#1C262B] mb-4"
                  style={{
                    fontFamily: 'KoPubWorldDotum',
                    letterSpacing: 'clamp(-0.36px, -0.36px + 0.02vw, -0.56px)',
                  }}
                >
                  매장 운영 관리
                </h3>
                <p
                  className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#666]"
                  style={{
                    fontFamily: 'KoPubWorldDotum',
                    fontWeight: '500',
                    letterSpacing: 'clamp(-0.28px, -0.28px + 0.02vw, -0.48px)',
                    lineHeight: '1.5',
                  }}
                >
                  일일 매장 운영부터 고객 서비스까지 전반적인 매장 관리를 대행합니다.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3
                  className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-[#1C262B] mb-4"
                  style={{
                    fontFamily: 'KoPubWorldDotum',
                    letterSpacing: 'clamp(-0.36px, -0.36px + 0.02vw, -0.56px)',
                  }}
                >
                  매출 최적화
                </h3>
                <p
                  className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#666]"
                  style={{
                    fontFamily: 'KoPubWorldDotum',
                    fontWeight: '500',
                    letterSpacing: 'clamp(-0.28px, -0.28px + 0.02vw, -0.48px)',
                    lineHeight: '1.5',
                  }}
                >
                  데이터 분석을 통한 매출 증대 방안을 제시하고 실행합니다.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-[#1C262B] mb-4"
                  style={{
                    fontFamily: 'KoPubWorldDotum',
                    letterSpacing: 'clamp(-0.36px, -0.36px + 0.02vw, -0.56px)',
                  }}
                >
                  직원 교육 관리
                </h3>
                <p
                  className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#666]"
                  style={{
                    fontFamily: 'KoPubWorldDotum',
                    fontWeight: '500',
                    letterSpacing: 'clamp(-0.28px, -0.28px + 0.02vw, -0.48px)',
                    lineHeight: '1.5',
                  }}
                >
                  전문적인 직원 교육 프로그램을 통해 서비스 품질을 향상시킵니다.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-[#1C262B] mb-4"
                  style={{
                    fontFamily: 'KoPubWorldDotum',
                    letterSpacing: 'clamp(-0.36px, -0.36px + 0.02vw, -0.56px)',
                  }}
                >
                  품질 관리
                </h3>
                <p
                  className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#666]"
                  style={{
                    fontFamily: 'KoPubWorldDotum',
                    fontWeight: '500',
                    letterSpacing: 'clamp(-0.28px, -0.28px + 0.02vw, -0.48px)',
                    lineHeight: '1.5',
                  }}
                >
                  엄격한 품질 관리 시스템으로 일관된 서비스 품질을 보장합니다.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3
                  className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-[#1C262B] mb-4"
                  style={{
                    fontFamily: 'KoPubWorldDotum',
                    letterSpacing: 'clamp(-0.36px, -0.36px + 0.02vw, -0.56px)',
                  }}
                >
                  성과 분석
                </h3>
                <p
                  className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#666]"
                  style={{
                    fontFamily: 'KoPubWorldDotum',
                    fontWeight: '500',
                    letterSpacing: 'clamp(-0.28px, -0.28px + 0.02vw, -0.48px)',
                    lineHeight: '1.5',
                  }}
                >
                  정기적인 성과 분석을 통해 지속적인 개선 방안을 제시합니다.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-[#1C262B] mb-4"
                  style={{
                    fontFamily: 'KoPubWorldDotum',
                    letterSpacing: 'clamp(-0.36px, -0.36px + 0.02vw, -0.56px)',
                  }}
                >
                  24시간 지원
                </h3>
                <p
                  className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#666]"
                  style={{
                    fontFamily: 'KoPubWorldDotum',
                    fontWeight: '500',
                    letterSpacing: 'clamp(-0.28px, -0.28px + 0.02vw, -0.48px)',
                    lineHeight: '1.5',
                  }}
                >
                  언제든지 필요한 지원을 받을 수 있는 24시간 관리 서비스입니다.
                </p>
              </div>
            </div>

            {/* 서비스 프로세스 */}
            <div className="bg-gradient-to-r from-[#102254] to-[#345D9D] rounded-lg p-8 text-white mb-16">
              <h2
                className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] font-bold mb-8"
                style={{
                  fontFamily: 'KoPubWorldBatang',
                  letterSpacing: 'clamp(-0.4px, -0.4px + 0.02vw, -0.6px)',
                }}
              >
                매장관리 대행 프로세스
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[24px] font-bold">1</span>
                  </div>
                  <h3
                    className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] font-bold mb-2"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      letterSpacing: 'clamp(-0.32px, -0.32px + 0.02vw, -0.52px)',
                    }}
                  >
                    현황 분석
                  </h3>
                  <p
                    className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] opacity-90"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      fontWeight: '500',
                      letterSpacing: 'clamp(-0.24px, -0.24px + 0.02vw, -0.44px)',
                    }}
                  >
                    매장 현황 파악
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[24px] font-bold">2</span>
                  </div>
                  <h3
                    className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] font-bold mb-2"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      letterSpacing: 'clamp(-0.32px, -0.32px + 0.02vw, -0.52px)',
                    }}
                  >
                    계획 수립
                  </h3>
                  <p
                    className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] opacity-90"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      fontWeight: '500',
                      letterSpacing: 'clamp(-0.24px, -0.24px + 0.02vw, -0.44px)',
                    }}
                  >
                    맞춤형 관리 계획
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[24px] font-bold">3</span>
                  </div>
                  <h3
                    className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] font-bold mb-2"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      letterSpacing: 'clamp(-0.32px, -0.32px + 0.02vw, -0.52px)',
                    }}
                  >
                    실행 관리
                  </h3>
                  <p
                    className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] opacity-90"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      fontWeight: '500',
                      letterSpacing: 'clamp(-0.24px, -0.24px + 0.02vw, -0.44px)',
                    }}
                  >
                    전문가 직접 관리
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[24px] font-bold">4</span>
                  </div>
                  <h3
                    className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] font-bold mb-2"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      letterSpacing: 'clamp(-0.32px, -0.32px + 0.02vw, -0.52px)',
                    }}
                  >
                    성과 평가
                  </h3>
                  <p
                    className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] opacity-90"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      fontWeight: '500',
                      letterSpacing: 'clamp(-0.24px, -0.24px + 0.02vw, -0.44px)',
                    }}
                  >
                    정기 성과 분석
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

export default StoreManagement;
