import React from 'react';

const StepByStep = () => {
  const steps = [
    {
      image: '/images/main-Images/main-step-1.png',
      title: '상담 및 상권 분석',
      subtitle: '창업 문의 후, 희망 지역에 대한 상권·입지 분석 제공'
    },
    {
      image: '/images/main-Images/main-step-2.png',
      title: '계약 및 공간 설계',
      subtitle: '가맹 계약 체결 후, 매장 실측 기반의 3D 설계 진행'
    },
    {
      image: '/images/main-Images/main-step-3.png',
      title: '장비 설치 및 교육',
      subtitle: 'IoT 장비 및 키오스크 설치, 점주 대상 운영 교육 진행'
    },
    {
      image: '/images/main-Images/main-step-4.png',
      title: '마케팅 지원 + 오픈 운영',
      subtitle: '오픈 이벤트, 앱 연동, 홍보 콘텐츠까지 본사가 지원'
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="px-4 w-full">
        {/* Title */}
        <h2 
          className="text-[40px] font-[500] text-[#1C262B] mb-4 text-center"
          style={{ fontFamily: 'KoPubWorldBatang, serif' }}
        >
          Step by Step, with Full Support
        </h2>
        
        {/* Subtitle */}
        <p 
          className="text-[32px] font-[500] text-[#1C262B] mb-12 text-center"
          style={{ fontFamily: 'KoPubWorldDotum, serif' }}
        >
          상담부터 오픈까지, 본사가 전 과정을 함께합니다.
        </p>

        {/* Steps Grid */}
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center justify-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className="2xl:w-[700px] xl:w-[650px] lg:w-[600px] md:w-[550px] sm:w-[500px] xs:w-[450px]">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full 2xl:h-[300px] xl:h-[280px] lg:h-[260px] md:h-[240px] sm:h-[220px] xs:h-[200px] object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="2xl:w-[700px] xl:w-[650px] lg:w-[600px] md:w-[550px] sm:w-[500px] xs:w-[450px] 2xl:h-[300px] xl:h-[280px] lg:h-[260px] md:h-[240px] sm:h-[220px] xs:h-[200px] flex flex-col justify-end 2xl:p-8 xl:p-7 lg:p-6 md:p-5 sm:p-4 xs:p-3" style={{ backgroundColor: '#1022540D' }}>
                <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <h3 
                    className="text-[28px] font-[700] text-[#1C262B] mb-4"
                    style={{ fontFamily: 'KoPubWorldDotum, serif' }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-[24px] font-[500] text-[#1C262B] leading-relaxed"
                    style={{ fontFamily: 'KoPubWorldDotum, serif' }}
                  >
                    {step.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <button 
            className="text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 2xl:w-[300px] 2xl:h-[80px] xl:w-[280px] xl:h-[75px] lg:w-[260px] lg:h-[70px] md:w-[240px] md:h-[65px] sm:w-[220px] sm:h-[60px] xs:w-[200px] xs:h-[55px]"
            style={{
              fontFamily: 'KoPubWorldBatang, serif',
              fontSize: '30px',
              fontWeight: '700',
              borderRadius: '8px',
              background: 'linear-gradient(90deg, #345D9D -2.08%, #102254 100%)'
            }}
          >
            View More &nbsp;&nbsp;&nbsp;-
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepByStep; 