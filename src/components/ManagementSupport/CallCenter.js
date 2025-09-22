import React from 'react';

const CallCenter = () => {
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
              24시간 콜센터
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
              언제든지 고객님의 문의사항을 해결해드리는 24시간 전문 상담 서비스
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
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
                  24시간 상담
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
                  연중무휴 24시간 전문 상담원이 고객님의 모든 문의사항을 신속하게 해결해드립니다.
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
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
                  전문 상담
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
                  세탁업계 전문 지식을 갖춘 상담원이 정확하고 신뢰할 수 있는 정보를 제공합니다.
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
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
                  신속 대응
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
                  고객님의 긴급한 상황에도 빠르게 대응하여 최상의 서비스를 제공합니다.
                </p>
              </div>
            </div>

            {/* 연락처 정보 */}
            <div className="bg-gradient-to-r from-[#102254] to-[#345D9D] rounded-lg p-8 text-white">
              <h2
                className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] font-bold mb-6"
                style={{
                  fontFamily: 'KoPubWorldBatang',
                  letterSpacing: 'clamp(-0.4px, -0.4px + 0.02vw, -0.6px)',
                }}
              >
                연락처 정보
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] 2xl:text-[34px] font-bold mb-2">
                  02-1577-2657 
                  </div>
                  <p
                    className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] opacity-90"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      fontWeight: '500',
                      letterSpacing: 'clamp(-0.28px, -0.28px + 0.02vw, -0.48px)',
                    }}
                  >
                    24시간 상담 가능
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold mb-2">
                  hotellaundry@naver.com
                  </div>
                  <p
                    className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] opacity-90"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      fontWeight: '500',
                      letterSpacing: 'clamp(-0.28px, -0.28px + 0.02vw, -0.48px)',
                    }}
                  >
                    이메일 문의
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

export default CallCenter;
