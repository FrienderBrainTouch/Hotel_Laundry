import React from 'react';

const TechBenefits = () => {
  return (
    <div className="bg-gradient-to-br from-brand-light-blue to-white rounded-3xl p-8 md:p-16">
      <div className="text-center mb-16">
        <h2 className="section-title md:text-3xl lg:text-4xl font-bold text-brand-blue font-KoPubWorldBatang mb-6">
          첨단 기술의 혜택
        </h2>
        <p className="section-subtitle md:text-24 text-brand-dark leading-relaxed max-w-3xl mx-auto">
          호텔런드리의 첨단 기술이 가져다주는
          <br />
          실질적인 혜택과 가치를 확인해보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* 24시간 무인 운영 & 수익성 극대화 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">24</span>
            </div>
          </div>
          <div className="pt-8 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              수익성 극대화
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-light-blue mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed mb-6">
              셀프 드라이클리닝, 실시간 세탁예약, 사용 현황 보기 등 <br />
              다양한 고객 편의 서비스를 <br />
              첨단 기술로 구현하여 <br />
              독보적인 서비스로 수익 극대화
            </p>
          </div>
        </div>

        {/* 운영비 절약 & 점주 무노동 재테크 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-light-blue to-brand-blue rounded-full flex items-center justify-center shadow-lg">
              <span className="text-brand-blue text-2xl font-bold">30%</span>
            </div>
          </div>
          <div className="pt-8 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              점주 무노동 재테크
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-light-blue to-brand-blue mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed mb-6">
              IoT 기술로 중앙관제가 가능하여 점주는 별로의 관리 없이 수익만 가져가는 운영체계
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
            <p className="text-20 text-brand-dark leading-relaxed mb-6">
              첨단기술로 제공하는 최고 품질의 세탁 서비스와 과학적이고, <br /> 자동화 위생관리.
              타임대별 할인쿠폰으로 다양한 고객 니즈를 충족
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechBenefits;
