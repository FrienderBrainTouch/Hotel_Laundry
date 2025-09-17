import React from 'react';

const TechCards = () => {
  return (
    <div className="mb-20">
      {/* 섹션 타이틀 */}
      <div className="text-center mb-12">
        <h2 className="section-title md:text-3xl lg:text-4xl font-bold text-brand-blue font-KoPubWorldBatang mb-4">
          핵심 기술
        </h2>
        <p className="section-subtitle text-brand-dark">호텔런드리를 차별화하는 4가지 핵심 기술</p>
      </div>

      {/* 기술 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* IoT 복합플랫폼 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-light-blue to-brand-blue rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">IoT</span>
            </div>
          </div>
          <div className="pt-6 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              IOT 복합플랫폼
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-light-blue to-brand-blue mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              매장 내 모든 장비와 기기를 연결하여
              <br />
              실시간 모니터링과 원격 제어가
              <br />
              가능한 통합 관리 시스템입니다.
            </p>
          </div>
        </div>

        {/* 장비 자동화솔루션 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-dark rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">AUTO</span>
            </div>
          </div>
          <div className="pt-6 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              장비 자동화솔루션
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-dark mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              고객 이용에 문제가 없도록
              <br />
              장비 사용 오류를 실시간으로
              <br />
              자동 점검하는 시스템입니다.
            </p>
          </div>
        </div>

        {/* AI운영체계 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">AI</span>
            </div>
          </div>
          <div className="pt-6 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              AI운영체계
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              고객 이용 패턴을 분석하고
              <br />
              데이터화하여 맞춤형 고객 관리를
              <br />
              가능하게 하는 첨단 운영체계입니다.
            </p>
          </div>
        </div>

        {/* O2O스마트시스템 */}
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">O2O</span>
            </div>
          </div>
          <div className="pt-6 text-center">
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              O2O스마트시스템
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto mb-6"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              온라인과 오프라인을 연결하여
              <br />
              실시간 세탁 예약, 장비 사용 현황,
              <br />
              실시간 알림 등을 제공하는
              <br />
              호텔런드리만의 고유 서비스입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCards;
