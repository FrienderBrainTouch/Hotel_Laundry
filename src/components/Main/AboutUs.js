import React from 'react';

const AboutUs = () => {
  const features = [
    {
      icon: 'main-service-1.svg',
      title: '셀프 드라이클리닝',
      subtitle: '누구나 쉽게 조작하는<br />무인 드라이클리닝'
    },
    {
      icon: 'main-service-2.svg',
      title: '첨단 기술',
      subtitle: 'IoT 무인제어와 원격운영이<br />가능한 첨단 시스템'
    },
    {
      icon: 'main-service-3.svg',
      title: '청결 메커니즘',
      subtitle: '세탁 흐름과 위생 동선을<br />반영한 청결 중심 구조'
    },
    {
      icon: 'main-service-4.svg',
      title: '지역 플랫폼',
      subtitle: '세탁 흐름과 위생 동선을<br />반영한 청결 중심 구조'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full">
        {/* Title and Subtitle */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-[500] text-[#1C262B] mb-6" style={{ fontFamily: 'KoPubWorldBatang' }}>
            About Us
          </h2>
          <p className="text-[28px] font-[500] text-[#1C262B] mx-auto leading-relaxed" style={{ fontFamily: 'KoPubWorldDotum' }}>
            호텔런드리의 창업은 생계를 위한 고된 노동이나 반복적인 일상이 아닌,<br /> 시스템과 자동화 설비를 통해 노동력 없이도 안정적으로 운영되는 안전한 창업 방식입니다.
          </p>
        </div>

        {/* Features Grid */}
        <div className="bg-gray-100 py-16 w-full">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-0 w-full">
              {features.map((feature, index) => (
                <div key={index} className="relative">
                  <div className="text-center px-8">
                    <div className="mb-6">
                      <img 
                        src={`/images/main-Images/${feature.icon}`} 
                        alt={feature.title}
                        className="w-16 h-16 mx-auto"
                      />
                    </div>
                    <h3 className="text-[26px] font-bold text-[#1C262B] mb-4" style={{ fontFamily: 'KoPubWorldDotum' }}>
                      {feature.title}
                    </h3>
                    <p className="text-[22px] font-medium text-[#1C262B] leading-relaxed" style={{ fontFamily: 'KoPubWorldDotum' }} dangerouslySetInnerHTML={{ __html: feature.subtitle }}>
                    </p>
                  </div>
                  
                  {/* Vertical divider */}
                  {index < features.length - 1 && (
                    <div className="absolute top-0 right-0 bg-[#D4D4D4]" style={{ width: '1px', height: '255px' }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 