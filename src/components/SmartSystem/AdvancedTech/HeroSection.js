import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative">
      {/* 메인 히어로 이미지 */}
      <div className="relative mb-12">
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gradient-to-br from-brand-blue via-brand-light-blue to-white rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="hero-title md:text-4xl lg:text-5xl font-bold font-KoPubWorldBatang mb-4">
                첨단기술
              </h1>
              <p className="hero-subtitle md:text-24 lg:text-28 font-light">
                Next-Generation Technology
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 서브 타이틀 섹션 */}
      <div className="text-center mb-16">
        <h2 className="section-title md:text-3xl lg:text-4xl font-bold text-brand-blue font-KoPubWorldBatang mb-6">
          호텔런드리의 혁신적인 첨단기술
        </h2>
        <p className="section-subtitle md:text-24 text-brand-dark leading-relaxed max-w-4xl mx-auto">
          최신 IoT, AI, 자동화 기술을 활용하여 세탁 산업의 새로운 패러다임을 제시합니다.<br />
          스마트한 세탁 솔루션으로 고객의 편의성과 운영 효율성을 극대화합니다.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
