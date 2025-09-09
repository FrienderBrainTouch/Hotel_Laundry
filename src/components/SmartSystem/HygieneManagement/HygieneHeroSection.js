import React from 'react';

const HygieneHeroSection = () => {
  return (
    <div className="relative">
      {/* 메인 히어로 이미지 */}
      <div className="relative mb-12">
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gradient-to-br from-brand-blue via-brand-light-blue to-white rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="hero-title md:text-4xl lg:text-5xl font-bold font-KoPubWorldBatang mb-4">
                위생관리
              </h1>
              <p className="hero-subtitle md:text-24 lg:text-28 font-light">
                Intelligent Hygiene Management
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HygieneHeroSection;
