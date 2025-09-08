import React from 'react';

const TechCards = () => {
  return (
    <div className="mb-20">
      {/* 섹션 타이틀 */}
      <div className="text-center mb-12">
        <h2 className="section-title md:text-3xl lg:text-4xl font-bold text-brand-blue font-KoPubWorldBatang mb-4">
          핵심 기술
        </h2>
        <p className="section-subtitle text-brand-dark">
          호텔런드리를 차별화하는 3가지 핵심 기술
        </p>
      </div>

      {/* 기술 카드들 */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {/* AI 기술 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">AI</span>
            </div>
          </div>
          <div className="pt-6 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              인공지능
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-light-blue mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              머신러닝과 딥러닝을 활용한<br />
              스마트 세탁 최적화 시스템으로<br />
              최적의 세탁 조건을 자동으로 설정합니다.
            </p>
          </div>
        </div>

        {/* IoT 기술 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-light-blue to-brand-blue rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">IoT</span>
            </div>
          </div>
          <div className="pt-6 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              사물인터넷
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-light-blue to-brand-blue mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              모든 기기를 연결하여<br />
              실시간 모니터링과 원격 제어가<br />
              가능한 통합 관리 시스템입니다.
            </p>
          </div>
        </div>

        {/* 자동화 시스템 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-dark rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">AUTO</span>
            </div>
          </div>
          <div className="pt-6 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              자동화 시스템
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-dark mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              무인 운영을 위한<br />
              완전 자동화 솔루션으로<br />
              24시간 안정적인 서비스를 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCards;
