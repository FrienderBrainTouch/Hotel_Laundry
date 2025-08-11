import React from 'react';

const StepByStep = () => {
  const steps = [
    {
      image: '/images/main-Images/main-step-1.png',
      title: '상담 및 상권 분석',
      subtitle: '창업 문의 후, 희망 지역에 대한 상권·입지 분석 제공',
      subtitleMd: '창업 문의 후, 희망 지역에 대한\n상권·입지 분석 제공'
    },
    {
      image: '/images/main-Images/main-step-2.png',
      title: '계약 및 공간 설계',
      subtitle: '가맹 계약 체결 후, 매장 실측 기반의 3D 설계 진행',
      subtitleMd: '가맹 계약 체결 후,\n 매장 실측 기반의 3D 설계 진행'
    },
    {
      image: '/images/main-Images/main-step-3.png',
      title: '장비 설치 및 교육',
      subtitle: 'IoT 장비 및 키오스크 설치, 점주 대상 운영 교육 진행',
      subtitleMd: 'IoT 장비 및 키오스크 설치,\n 점주 대상 운영 교육 진행'
    },
    {
      image: '/images/main-Images/main-step-4.png',
      title: '마케팅 지원 + 오픈 운영',
      subtitle: '오픈 이벤트, 앱 연동, 홍보 콘텐츠까지 본사가 지원',
      subtitleMd: '오픈 이벤트, 앱 연동,\n 홍보 콘텐츠까지 본사가 지원'
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="px-4 w-full">
        {/* Title */}
        <h2
          className="text-[22px] xs:text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-[500] text-[#1C262B] mb-4 text-center"
          style={{
            fontFamily: 'KoPubWorldBatang',
            letterSpacing: '-0.44px'
          }}
        >
          Step by Step, with Full Support
        </h2>

        {/* Subtitle */}
        <p
          className="text-[18px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-[500] text-[#1C262B] mb-12 text-center"
          style={{
            fontFamily: 'KoPubWorldDotum',
            letterSpacing: '-0.36px'
          }}
        >
          상담부터 오픈까지, 본사가 전 과정을 함께합니다.
        </p>

        {/* Steps Grid */}
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={index} className="w-full">
              {/* xs, sm: 세로 배치 */}
              <div className="md:hidden w-full mb-8">
                <div className="w-[275px] h-[180px] xs:w-[355px] xs:h-[180px] sm:w-[535px] sm:h-[180px] mx-auto">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[275px] h-[100px] xs:w-[355px] xs:h-[100px] sm:w-[535px] sm:h-[120px] mx-auto p-3 sm:p-4" style={{ backgroundColor: '#1022540D' }}>
                  <h3
                    className="text-[20px] xs:text-[20px] sm:text-[20px] font-[700] text-[#1C262B] mb-4 text-center"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      letterSpacing: '-0.4px'
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[15px] xs:text-[15px] sm:text-[16px] font-[500] text-[#1C262B] leading-relaxed text-center"
                    style={{
                      fontFamily: 'KoPubWorldDotum',
                      letterSpacing: '-0.3px'
                    }}
                  >
                    {step.subtitle}
                  </p>
                </div>
              </div>

              {/* md 이상: 가로 배치 */}
              <div className={`hidden md:flex items-center justify-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="w-[275px] h-[180px] xs:w-[365px] xs:h-[180px] lg:w-[495px] lg:h-[200px] xl:w-[600px] xl:h-[230px] 2xl:w-[700px] 2xl:h-[300px]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="w-[275px] h-[180px] xs:w-[365px] xs:h-[180px] lg:w-[495px] lg:h-[200px] xl:w-[600px] xl:h-[230px] 2xl:w-[700px] 2xl:h-[300px] flex flex-col justify-end p-5 lg:p-4 xl:p-5 2xl:p-8" style={{ backgroundColor: '#1022540D' }}>
                  <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <h3
                      className="text-[20px] xs:text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-[700] text-[#1C262B] mb-4"
                      style={{
                        fontFamily: 'KoPubWorldDotum',
                        letterSpacing: '-0.4px'
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[15px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[24px] font-[500] text-[#1C262B] leading-relaxed md:whitespace-pre-line"
                      style={{
                        fontFamily: 'KoPubWorldDotum',
                        letterSpacing: '-0.3px'
                      }}
                    >
                      <span className="hidden md:inline lg:hidden">{step.subtitleMd}</span>
                      <span className="md:hidden lg:inline">{step.subtitle}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <button
            className="text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-[142px] h-[39px] sm:w-[150px] sm:h-[40px] md:w-[169px] md:h-[49px] lg:w-[201px] lg:h-[54px] xl:w-[225px] xl:h-[60px] 2xl:w-[300px] 2xl:h-[80px] flex items-center justify-center"
            style={{
              fontFamily: 'KoPubWorldBatang',
              fontWeight: '700',
              borderRadius: '8px',
              background: 'linear-gradient(90deg, #345D9D -2.08%, #102254 100%)',
              padding: 'clamp(7px 20px, 7px 20px + 0.5vw, 10px 30px)',
              gap: '10px'
            }}
          >
            <span
              className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] 2xl:text-[30px]"
              style={{
                letterSpacing: 'clamp(-0.32px, -0.32px + 0.04vw, -0.6px)',
                fontWeight: 'clamp(700, 700, 700)'
              }}
            >
              View More &nbsp;&nbsp;&nbsp;-
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepByStep; 