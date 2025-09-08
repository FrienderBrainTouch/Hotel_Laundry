import React from 'react';

const PhaseHeroSection = () => {
  return (
    <div className="relative">
      {/* 메인 히어로 이미지 */}
      <div className="relative mb-12">
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gradient-to-br from-brand-blue via-brand-light-blue to-white rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="hero-title md:text-4xl lg:text-5xl font-bold font-KoPubWorldBatang mb-4">
                위상관리
              </h1>
              <p className="hero-subtitle md:text-24 lg:text-28 font-light">
                Intelligent Phase Management
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 서브 타이틀 섹션 */}
      <div className="text-center mb-16">
        <h2 className="section-title md:text-3xl lg:text-4xl font-bold text-brand-blue font-KoPubWorldBatang mb-6">
          세탁방 설계 최적화
        </h2>
        <p className="section-subtitle md:text-24 text-brand-dark leading-relaxed max-w-4xl mx-auto">
          호텔런드리는 고객의 편의성과 운영 효율성을 극대화하기 위해<br />
          세탁방 공간을 과학적으로 분석하고 설계를 최적화했습니다.
        </p>
      </div>
    </div>
  );
};

export default PhaseHeroSection;
