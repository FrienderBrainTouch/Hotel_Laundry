import React from 'react';

const PhaseBenefits = () => {
  return (
    <div className="text-center">
      <h2 className="section-title md:text-3xl lg:text-4xl font-bold text-brand-blue font-KoPubWorldBatang mb-8">
        설계 최적화의 혜택
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {/* 고객 만족도 향상 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">95%</span>
            </div>
          </div>
          <div className="pt-8 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              고객 만족도 향상
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-light-blue mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              최적화된 공간 설계로<br />
              고객의 편의성이 크게 향상되어<br />
              만족도가 95%에 달합니다.
            </p>
          </div>
        </div>

        {/* 운영 효율성 증대 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-light-blue to-brand-blue rounded-full flex items-center justify-center shadow-lg">
              <span className="text-brand-blue text-2xl font-bold">40%</span>
            </div>
          </div>
          <div className="pt-8 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              운영 효율성 증대
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-light-blue to-brand-blue mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              최적화된 설계로<br />
              장비 가동률과 처리량이<br />
              40% 향상되었습니다.
            </p>
          </div>
        </div>

        {/* 에너지 절약 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-dark rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">25%</span>
            </div>
          </div>
          <div className="pt-8 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              에너지 절약
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-dark mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              효율적인 공간 배치와<br />
              조명 설계로 전력 사용량을<br />
              25% 절약할 수 있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 추가 혜택 섹션 */}
      <div className="mt-16">
        <div className="bg-gradient-to-br from-brand-light-blue to-white rounded-2xl p-8 md:p-12">
          <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-8">
            기대 효과
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-brand-blue text-2xl">⏱️</span>
              </div>
              <h4 className="text-22 font-bold text-brand-blue mb-2">대기시간 단축</h4>
              <p className="text-20 text-brand-dark">최적화된 공간 배치로 대기시간 30% 단축</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-brand-blue text-2xl">💰</span>
              </div>
              <h4 className="text-22 font-bold text-brand-blue mb-2">수익 증대</h4>
              <p className="text-20 text-brand-dark">효율성 향상으로 매출 20% 증가</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-brand-blue text-2xl">🌱</span>
              </div>
              <h4 className="text-22 font-bold text-brand-blue mb-2">친환경</h4>
              <p className="text-20 text-brand-dark">에너지 효율성으로 환경 부담 감소</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-brand-blue text-2xl">📈</span>
              </div>
              <h4 className="text-22 font-bold text-brand-blue mb-2">성장성</h4>
              <p className="text-20 text-brand-dark">확장 가능한 설계로 미래 성장 대비</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseBenefits;
