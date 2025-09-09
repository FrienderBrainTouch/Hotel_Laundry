import React from 'react';

const TechBenefits = () => {
  return (
    <div className="bg-gradient-to-br from-brand-light-blue to-white rounded-3xl p-8 md:p-16">
      <div className="text-center mb-16">
        <h2 className="section-title md:text-3xl lg:text-4xl font-bold text-brand-blue font-KoPubWorldBatang mb-6">
          첨단 기술의 혜택
        </h2>
        <p className="section-subtitle md:text-24 text-brand-dark leading-relaxed max-w-3xl mx-auto">
          호텔런드리의 첨단 기술이 가져다주는<br />
          실질적인 혜택과 가치를 확인해보세요.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {/* 24시간 무인 운영 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">24</span>
            </div>
          </div>
          <div className="pt-8 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              24시간 무인 운영
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-light-blue mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              첨단 기술로 언제든지<br />
              안전하고 편리한 세탁 서비스를<br />
              제공합니다.
            </p>
          </div>
        </div>

        {/* 운영비 절약 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-light-blue to-brand-blue rounded-full flex items-center justify-center shadow-lg">
              <span className="text-brand-blue text-2xl font-bold">30%</span>
            </div>
          </div>
          <div className="pt-8 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              운영비 절약
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-light-blue to-brand-blue mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              스마트 시스템으로<br />
              인건비와 전력비를<br />
              대폭 절약할 수 있습니다.
            </p>
          </div>
        </div>

        {/* 고객 만족도 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-dark rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">99%</span>
            </div>
          </div>
          <div className="pt-8 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              고객 만족도
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-dark mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              첨단 기술로 제공하는<br />
              최고 품질의 세탁 서비스로<br />
              고객 만족도를 극대화합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechBenefits;
