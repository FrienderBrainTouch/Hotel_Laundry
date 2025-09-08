import React, { useState } from 'react';

const Section2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const businessAreas = [
    {
      title: 'TECHNOLOGY',
      subtitle: 'IoT 기반 세탁 기기 제어 시스템 개발 및 운영',
      image: '/images/CompanyInfo/Company-2-1.png',
    },
    {
      title: 'DEVELOPMENT',
      subtitle: '스마트 세탁장비 및 자동화 솔루션 연구 개발',
      image: '/images/CompanyInfo/Company-2-1.png',
    },
    {
      title: 'AUTOMATION',
      subtitle: '세탁공정의 전 과정 자동화 및 무인화 설계',
      image: '/images/CompanyInfo/Company-2-1.png',
    },
    {
      title: 'CLEANING',
      subtitle: '호텔급 침구 전문 클리닝 및 살균 세탁 서비스',
      image: '/images/CompanyInfo/Company-2-1.png',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* Title */}
          <h2 className="text-[22px] xs:text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold text-[#1C262B] mb-[5px] xs:mb-[5px] sm:mb-[5px] md:mb-[10px] lg:mb-[12px] xl:mb-[8px] 2xl:mb-[12px] text-center font-['KoPubWorldDotum'] leading-normal tracking-[-0.44px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal">
            핵심 사업 분야
          </h2>

          {/* Subtitle */}
          <p className="text-[18px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-medium text-[#1C262B] mb-[20px] xs:mb-[20px] sm:mb-[20px] md:mb-[30px] lg:mb-[40px] xl:mb-[50px] 2xl:mb-[50px] text-center font-['KoPubWorldDotum'] leading-normal tracking-[-0.36px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.56px] 2xl:tracking-normal">
            스마트 세탁 비즈니스를 가능케 하는 4가지 핵심 기술
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-[15px] sm:gap-[15px] md:gap-[20px] lg:gap-[20px] xl:gap-[20px] 2xl:gap-[20px]">
            {businessAreas.map((area, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="w-full xl:w-[590px] 2xl:w-[690px] h-[200px] xs:h-[200px] sm:h-[200px] md:h-[230px] lg:h-[250px] xl:h-[280px] 2xl:h-[300px] p-[20px] xs:p-[20px] sm:p-[30px] md:p-[30px] lg:p-[30px] xl:p-[40px] 2xl:p-[40px] flex flex-col justify-end items-start rounded-[10px] transition-all duration-300 gap-[5px] xs:gap-[5px] sm:gap-[5px] md:gap-[10px] lg:gap-[10px] xl:gap-[5px] 2xl:gap-[5px]"
                  style={{
                    backgroundImage: hoveredIndex === index ? `url(${area.image})` : 'none',
                    backgroundColor:
                      hoveredIndex === index ? 'transparent' : 'rgba(16, 34, 84, 0.15)',
                    backgroundSize: hoveredIndex === index ? 'cover' : 'auto',
                    backgroundPosition: 'center',
                  }}
                >
                  {hoveredIndex === index ? (
                    <>
                      <h3 className="text-white text-[20px] xs:text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold font-['KoPubWorldDotum'] mb-[5px] leading-normal tracking-[-0.4px] xs:tracking-[-0.4px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.52px] 2xl:tracking-normal">
                        {area.title}
                      </h3>
                      <p className="text-white text-[15px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium font-['KoPubWorldDotum'] leading-normal tracking-[-0.3px] xs:tracking-[-0.3px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-normal">
                        {area.subtitle}
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-[#1C262B] text-[20px] xs:text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold font-['KoPubWorldDotum'] mb-[5px] leading-normal tracking-[-0.4px] xs:tracking-[-0.4px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.52px] 2xl:tracking-normal">
                        {area.title}
                      </h3>
                      <p className="text-[#1C262B] text-[15px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium font-['KoPubWorldDotum'] leading-normal tracking-[-0.3px] xs:tracking-[-0.3px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-normal">
                        {area.subtitle}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
