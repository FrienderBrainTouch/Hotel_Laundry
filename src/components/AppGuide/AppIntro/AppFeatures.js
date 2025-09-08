import React from 'react';

const AppFeatures = () => {
  const features = [
    {
      icon: '📱',
      title: '스마트 예약 시스템',
      description: '24시간 언제든지 세탁 예약 가능, 실시간 대기열 확인',
    },
    {
      icon: '💳',
      title: '간편 결제',
      description: '카드, 계좌이체, 간편결제 등 다양한 결제 수단 지원',
    },
    {
      icon: '🔔',
      title: '실시간 알림',
      description: '세탁 완료, 픽업 알림 등 푸시 알림으로 편리한 관리',
    },
    {
      icon: '📍',
      title: '매장 찾기',
      description: '내 주변 호텔런드리 매장 위치 및 운영시간 확인',
    },
    {
      icon: '📊',
      title: '이용 내역',
      description: '세탁 이력 관리 및 통계 확인으로 효율적인 관리',
    },
    {
      icon: '🎯',
      title: '맞춤 서비스',
      description: '개인별 선호도 기반 맞춤형 세탁 서비스 제공',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#E3F2FD] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="section-title font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4">
            호텔런드리 앱의 특별한 기능들
          </h2>
          <p className="text-24 font-['KoPubWorldDotum'] text-[#1C262B] max-w-3xl mx-auto">
            스마트한 세탁 서비스를 위한 모든 기능이 한 곳에
          </p>
        </div>

        {/* 기능 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 border border-gray-100"
            >
              <div className="text-6xl mb-6 text-center">{feature.icon}</div>
              <h3 className="text-24 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-20 font-['KoPubWorldDotum'] text-[#1C262B] text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA 섹션 */}
        <div className="text-center mt-16">
          <div className="bg-[#102254] rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-28 lg:text-32 font-['KoPubWorldBatang'] font-bold mb-4">
              지금 바로 앱을 다운로드하세요
            </h3>
            <p className="text-20 lg:text-24 font-['KoPubWorldDotum'] mb-8 opacity-90">
              더 편리하고 스마트한 세탁 경험을 시작하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#102254] rounded-xl font-bold text-20 hover:bg-gray-100 transition-colors"
              >
                📱 App Store에서 다운로드
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#102254] rounded-xl font-bold text-20 hover:bg-gray-100 transition-colors"
              >
                🤖 Google Play에서 다운로드
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
