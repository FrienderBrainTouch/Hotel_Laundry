import React from 'react';

const CentralControl = () => {
  return (
    <section className="py-20 bg-gray-50">
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
              중앙관제 시스템
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
              전국 매장을 실시간으로 모니터링하고 관리하는 첨단 중앙관제 시스템
            </p>

            {/* 시스템 특징 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-lg">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
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
                  실시간 모니터링
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
                  전국 모든 매장의 운영 현황을 실시간으로 모니터링하여 즉시 대응할 수 있습니다.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
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
                  자동 알림 시스템
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
                  이상 상황 발생 시 즉시 알림을 받아 신속한 대응이 가능합니다.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
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
                  보안 관리
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
                  매장 보안 상태를 실시간으로 확인하고 안전한 운영을 보장합니다.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
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
                  매장별 운영 데이터를 분석하여 효율적인 관리 방안을 제시합니다.
                </p>
              </div>
            </div>

            {/* 시스템 구조 */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2
                className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] font-bold text-[#1C262B] mb-8"
                style={{
                  fontFamily: 'KoPubWorldBatang',
                  letterSpacing: 'clamp(-0.4px, -0.4px + 0.02vw, -0.6px)',
                }}
              >
                중앙관제 시스템 구조
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-white"
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
                    className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] font-bold text-[#1C262B] mb-2"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      letterSpacing: 'clamp(-0.32px, -0.32px + 0.02vw, -0.52px)',
                    }}
                  >
                    매장 단말기
                  </h3>
                  <p
                    className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] text-[#666]"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      fontWeight: '500',
                      letterSpacing: 'clamp(-0.24px, -0.24px + 0.02vw, -0.44px)',
                    }}
                  >
                    각 매장의 운영 데이터 수집
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-[#345D9D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] font-bold text-[#1C262B] mb-2"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      letterSpacing: 'clamp(-0.32px, -0.32px + 0.02vw, -0.52px)',
                    }}
                  >
                    통신 네트워크
                  </h3>
                  <p
                    className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] text-[#666]"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      fontWeight: '500',
                      letterSpacing: 'clamp(-0.24px, -0.24px + 0.02vw, -0.44px)',
                    }}
                  >
                    실시간 데이터 전송
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] font-bold text-[#1C262B] mb-2"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      letterSpacing: 'clamp(-0.32px, -0.32px + 0.02vw, -0.52px)',
                    }}
                  >
                    중앙관제센터
                  </h3>
                  <p
                    className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] text-[#666]"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      fontWeight: '500',
                      letterSpacing: 'clamp(-0.24px, -0.24px + 0.02vw, -0.44px)',
                    }}
                  >
                    통합 모니터링 및 관리
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

export default CentralControl;
