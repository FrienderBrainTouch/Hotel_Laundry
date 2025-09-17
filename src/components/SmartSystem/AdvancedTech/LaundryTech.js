import React from 'react';

const LaundryTech = () => {
  return (
    <div className="mb-20">
      {/* 섹션 타이틀 */}
      <div className="text-center mb-16">
        <h2 className="section-title md:text-3xl lg:text-4xl font-bold text-brand-blue font-KoPubWorldBatang mb-6">
          세탁방 최신 기술
        </h2>
        <p className="section-subtitle md:text-24 text-brand-dark leading-relaxed max-w-4xl mx-auto">
          호텔런드리는 세탁 산업의 혁신을 위해 최첨단 기술을 도입하여
          <br />
          고객에게 최고의 서비스를 제공합니다.
        </p>
      </div>

      {/* 기술 그리드 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 스마트 세탁기 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🧺</span>
            </div>
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              셀프 드라이 클리닝과 물세탁이 하나로
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-light-blue mx-auto mb-4"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              민감한 옷감도 손상 없이 세탁할 수 있는
              <br />
              강력한 에어 샤워 버블 기능과 최소한의 열만으로
              <br />
              강력한 공기 흐름을 만들어 옷감 변형 없이
              <br />
              건조시키는 첨단 장비입니다.
            </p>
          </div>
        </div>

        {/* 무인 결제 시스템 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-light-blue to-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">💳</span>
            </div>
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              스마트 결제 시스템
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-light-blue to-brand-blue mx-auto mb-4"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              QR코드, 카드, 모바일 결제를 통한
              <br />
              완전 무인 운영이 가능합니다.
            </p>
          </div>
        </div>

        {/* 실시간 모니터링 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">📱</span>
            </div>
            <h3 className="text-24 md:text-28 font-bold text-brand-blue font-KoPubWorldBatang mb-4">
              원격 관리 시스템
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-dark mx-auto mb-4"></div>
            <p className="text-20 text-brand-dark leading-relaxed">
              스마트폰으로 언제 어디서나
              <br />
              매장 상태를 실시간 확인할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaundryTech;
