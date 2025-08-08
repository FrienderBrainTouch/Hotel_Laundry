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
        <div className="text-center mb-[20px] sm:mb-[18px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[35px]">
          <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-[500] text-[#1C262B] text-center leading-[normal] tracking-[-0.44px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-[-0.8px] mb-[5px] sm:mb-[6px] md:mb-[12px] lg:mb-[12px] xl:mb-[12px] 2xl:mb-[12px]" style={{ fontFamily: 'KoPubWorldBatang' }}>
            About Us
          </h2>
          <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-[500] text-[#1C262B] mx-auto leading-[normal] text-center tracking-[-0.36px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.56px] 2xl:tracking-[-0.64px]" style={{ fontFamily: 'KoPubWorldDotum' }}>
            <span className="block sm:hidden">호텔런드리 창업은 자동화 설비를 통해 운영됩니다.</span>
            <span className="hidden sm:block md:hidden">호텔런드리의 창업은 고된 노동이나 반복적인 일상이 아닌,<br />자동화 설비를 통해 안정적으로 운영됩니다.</span>
            <span className="hidden md:block lg:hidden">호텔런드리의 창업은 생계를 위한 고된 노동이나 반복적인 일상이 아닌,<br />시스템과 자동화 설비를 통해 안정적으로 운영되는 창업 방식입니다.</span>
            <span className="hidden md:hidden lg:block">호텔런드리의 창업은 생계를 위한 고된 노동이나 반복적인 일상이 아닌,<br />시스템과 자동화 설비를 통해 노동력 없이도 안정적으로 운영되는 안전한 창업 방식입니다.</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="bg-gray-100 py-16 w-full">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-0 w-full relative">
              {features.map((feature, index) => (
                <div key={index} className="relative w-[278px] h-[180px] sm:w-[278px] sm:h-[180px] md:w-[364px] md:h-[230px] lg:w-[400px] lg:h-[300px] xl:w-auto xl:h-auto 2xl:w-auto 2xl:h-auto mx-auto flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className=" flex justify-center">
                      <img 
                        src={`/images/main-Images/${feature.icon}`} 
                        alt={feature.title}
                        className="w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-[93px] xl:h-[93px] 2xl:w-[118px] 2xl:h-[118px]"
                      />
                    </div>
                    <h3 className="text-[20px] sm:text-[22px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-[#1C262B] leading-[normal] tracking-[-0.4px] sm:tracking-[-0.44px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.52px] 2xl:tracking-[-0.56px] mb-[10px] sm:mb-[10px] md:mb-[10px] lg:mb-[10px] xl:mb-[12px] 2xl:mb-[12px]" style={{ fontFamily: 'KoPubWorldDotum' }}>
                      {feature.title}
                    </h3>
                    <p className="text-[15px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium text-[#1C262B] text-center leading-[normal] tracking-[-0.3px] sm:tracking-[-0.36px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px]" style={{ fontFamily: 'KoPubWorldDotum' }} dangerouslySetInnerHTML={{ __html: feature.subtitle }}>
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Vertical dividers between items */}
              {/* Between 1-2 for 2x2 layout */}
              <div className="hidden sm:block lg:block xl:hidden absolute top-0 left-1/2 bg-[#D4D4D4]" style={{ width: '1px', height: '40%', transform: 'translateX(-50%)' }}></div>
              
              {/* Between 3-4 for 2x2 layout */}
              <div className="hidden sm:block lg:block xl:hidden absolute bottom-0 left-1/2 bg-[#D4D4D4]" style={{ width: '1px', height: '40%', transform: 'translateX(-50%)' }}></div>
              
              {/* Between 1-2, 2-3, 3-4 for 4x1 layout */}
              <div className="hidden xl:block 2xl:block absolute top-0 left-1/4 bg-[#D4D4D4]" style={{ width: '1px', height: '255px' }}></div>
              <div className="hidden xl:block 2xl:block absolute top-0 left-2/4 bg-[#D4D4D4]" style={{ width: '1px', height: '255px' }}></div>
              <div className="hidden xl:block 2xl:block absolute top-0 left-3/4 bg-[#D4D4D4]" style={{ width: '1px', height: '255px' }}></div>
              
              {/* Horizontal dividers for 2x2 layout */}
              {/* Top row horizontal divider */}
              <div className="hidden sm:block lg:block xl:hidden absolute top-1/2 left-0 right-0 bg-[#D4D4D4]" style={{ height: '1px', transform: 'translateY(-50%)' }}></div>
              
              {/* Bottom row horizontal divider */}
              <div className="hidden sm:block lg:block xl:hidden absolute top-1/2 left-0 right-0 bg-[#D4D4D4]" style={{ height: '1px', transform: 'translateY(-50%)' }}></div>
              
              {/* Horizontal dividers for xs layout */}
              <div className="block sm:hidden  xl:hidden absolute top-[180px] left-0 right-0 bg-[#D4D4D4]" style={{ height: '1px' }}></div>
              <div className="block sm:hidden xl:hidden absolute top-[360px] left-0 right-0 bg-[#D4D4D4]" style={{ height: '1px' }}></div>
              <div className="block sm:hidden xl:hidden absolute top-[540px] left-0 right-0 bg-[#D4D4D4]" style={{ height: '1px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 