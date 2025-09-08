import React from 'react';

const PhaseOptimization = () => {
  return (
    <div className="mb-20">
      {/* 섹션 타이틀 */}
      <div className="text-center mb-16">
        <h2 className="section-title md:text-3xl lg:text-4xl font-bold text-brand-blue font-KoPubWorldBatang mb-6">
          설계 최적화 요소
        </h2>
        <p className="section-subtitle md:text-24 text-brand-dark leading-relaxed max-w-4xl mx-auto">
          호텔런드리는 고객의 움직임과 사용 패턴을 분석하여<br />
          세탁방 공간을 최적화했습니다.
        </p>
      </div>

      {/* 최적화 그리드 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 공간 배치 최적화 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🏗️</span>
            </div>
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              공간 배치 최적화
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-light-blue mx-auto mb-4"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              고객의 이동 경로를 분석하여<br />
              세탁기와 건조기를 최적 위치에 배치하여<br />
              대기 시간을 최소화했습니다.
            </p>
          </div>
        </div>

        {/* 대기 공간 설계 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-light-blue to-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🪑</span>
            </div>
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              대기 공간 설계
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-light-blue to-brand-blue mx-auto mb-4"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              세탁 대기 시간을 고려하여<br />
              편안한 대기 공간과 휴게 공간을<br />
              전략적으로 배치했습니다.
            </p>
          </div>
        </div>

        {/* 조명 및 환경 최적화 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">💡</span>
            </div>
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              조명 및 환경 최적화
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-dark mx-auto mb-4"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              자연광과 인공조명을 조화롭게 배치하여<br />
              쾌적한 환경을 조성하고<br />
              에너지 효율성을 높였습니다.
            </p>
          </div>
        </div>

        {/* 환기 시스템 설계 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-dark to-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🌪️</span>
            </div>
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              환기 시스템 설계
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-dark to-brand-blue mx-auto mb-4"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              습기와 냄새를 효과적으로 제거하는<br />
              환기 시스템을 설계하여<br />
              쾌적한 실내 환경을 유지합니다.
            </p>
          </div>
        </div>

        {/* 접근성 개선 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">♿</span>
            </div>
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              접근성 개선
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-light-blue mx-auto mb-4"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              모든 고객이 편리하게 이용할 수 있도록<br />
              휠체어 접근 가능한 설계와<br />
              사용자 친화적 인터페이스를 적용했습니다.
            </p>
          </div>
        </div>

        {/* 안전 설계 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-light-blue to-brand-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🛡️</span>
            </div>
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              안전 설계
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-light-blue to-brand-dark mx-auto mb-4"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              비상 상황에 대비한 안전 설비와<br />
              화재 예방 시스템을 구축하여<br />
              고객의 안전을 최우선으로 고려했습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseOptimization;
