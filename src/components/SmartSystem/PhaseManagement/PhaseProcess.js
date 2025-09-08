import React from 'react';

const PhaseProcess = () => {
  return (
    <div className="bg-gradient-to-br from-brand-light-blue to-white rounded-3xl p-8 md:p-16 mb-20">
      <div className="text-center mb-16">
        <h2 className="section-title md:text-3xl lg:text-4xl font-bold text-brand-blue font-KoPubWorldBatang mb-6">
          설계 최적화 프로세스
        </h2>
        <p className="section-subtitle md:text-24 text-brand-dark leading-relaxed max-w-3xl mx-auto">
          호텔런드리는 체계적인 분석과 설계를 통해<br />
          최적의 세탁방 환경을 구축했습니다.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {/* 1단계: 데이터 수집 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
          </div>
          <div className="pt-8 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              데이터 수집
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-light-blue mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              고객의 이동 패턴과 사용 빈도를<br />
              실시간으로 수집하고 분석하여<br />
              설계에 필요한 데이터를 확보합니다.
            </p>
          </div>
        </div>

        {/* 2단계: 분석 및 진단 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-light-blue to-brand-blue rounded-full flex items-center justify-center shadow-lg">
              <span className="text-brand-blue text-2xl font-bold">2</span>
            </div>
          </div>
          <div className="pt-8 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              분석 및 진단
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-light-blue to-brand-blue mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              수집된 데이터를 바탕으로<br />
              공간 효율성과 사용자 경험을<br />
              종합적으로 분석하고 진단합니다.
            </p>
          </div>
        </div>

        {/* 3단계: 최적화 실행 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-dark rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
          </div>
          <div className="pt-8 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              최적화 실행
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-dark mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              분석 결과를 바탕으로<br />
              공간 배치와 설비 구성을<br />
              최적화하여 구현합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 추가 프로세스 섹션 */}
      <div className="mt-16 text-center">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-6">
            지속적인 개선
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-light-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-blue text-xl">📊</span>
              </div>
              <p className="text-20 font-medium text-brand-dark">성능 모니터링</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-light-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-blue text-xl">🔄</span>
              </div>
              <p className="text-20 font-medium text-brand-dark">지속적 개선</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-light-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-blue text-xl">📈</span>
              </div>
              <p className="text-20 font-medium text-brand-dark">효율성 향상</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-light-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-blue text-xl">✨</span>
              </div>
              <p className="text-20 font-medium text-brand-dark">사용자 만족</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseProcess;
