import React, { useState } from 'react';

const Section2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const businessAreas = [
    {
      title: "TECHNOLOGY",
      subtitle: "IoT 기반 세탁 기기 제어 시스템 개발 및 운영",
      image: "/images/CompanyInfo/Company-2-1.png"
    },
    {
      title: "DEVELOPMENT", 
      subtitle: "스마트 세탁장비 및 자동화 솔루션 연구 개발",
      image: "/images/CompanyInfo/Company-2-1.png"
    },
    {
      title: "AUTOMATION",
      subtitle: "세탁공정의 전 과정 자동화 및 무인화 설계",
      image: "/images/CompanyInfo/Company-2-1.png"
    },
    {
      title: "CLEANING",
      subtitle: "호텔급 침구 전문 클리닝 및 살균 세탁 서비스",
      image: "/images/CompanyInfo/Company-2-1.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-[1400px] mx-auto">
          {/* Title */}
          <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold text-[#1C262B] mb-8 text-center font-['KoPubWorldDotum']">
            핵심 사업 분야
          </h2>
          
          {/* Subtitle */}
          <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-medium text-[#1C262B] mb-16 text-center font-['KoPubWorldDotum']">
            스마트 세탁 비즈니스를 가능케 하는 4가지 핵심 기술
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessAreas.map((area, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                                 <div 
                   className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] p-6 sm:p-8 md:p-10 lg:p-[40px] flex flex-col justify-end items-start rounded-[10px] transition-all duration-300"
                   style={{
                     background: hoveredIndex === index 
                       ? `url(${area.image})`
                       : 'rgba(16, 34, 84, 0.15)',
                     backgroundSize: hoveredIndex === index ? 'cover' : 'auto',
                     backgroundPosition: 'center'
                   }}
                 >
                  {hoveredIndex === index ? (
                    <>
                      <h3 className="text-white text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-bold font-['KoPubWorldDotum'] mb-2">
                        {area.title}
                      </h3>
                      <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-medium font-['KoPubWorldDotum']">
                        {area.subtitle}
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-[#1C262B] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold font-['KoPubWorldDotum'] mb-2">
                        {area.title}
                      </h3>
                      <p className="text-[#1C262B] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium font-['KoPubWorldDotum']">
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
