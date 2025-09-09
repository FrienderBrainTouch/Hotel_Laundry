import React from 'react';

const ServiceOverview = () => {
  const features = [
    {
      icon: '🚚',
      title: '당일 픽업',
      description: '오전 9시까지 신청 시 당일 픽업 서비스',
    },
    {
      icon: '⏰',
      title: '빠른 세탁',
      description: '픽업 후 2-4시간 내 세탁 완료',
    },
    {
      icon: '🏠',
      title: '문 앞 배달',
      description: '세탁 완료 후 지정 시간에 문 앞 배달',
    },
    {
      icon: '📱',
      title: '실시간 추적',
      description: '앱에서 세탁 진행 상황 실시간 확인',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#102254] to-[#1C262B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h1 className="hero-title font-['KoPubWorldBatang'] font-bold mb-6">
            당일수거 배달서비스
          </h1>
          <p className="hero-subtitle font-['KoPubWorldDotum'] max-w-4xl mx-auto opacity-90">
            바쁜 일상 속에서도 깨끗한 옷을 입고 싶다면?
            <br />
            호텔런드리 당일수거 배달서비스로 편리함을 경험하세요
          </p>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* 텍스트 콘텐츠 */}
          <div>
            <h2 className="text-28 lg:text-32 font-['KoPubWorldBatang'] font-bold mb-6">
              집에서 편하게, 깨끗하게
            </h2>
            <p className="text-22 font-['KoPubWorldDotum'] leading-relaxed mb-8 opacity-90">
              출근 전에 세탁물을 문 앞에 두고, 퇴근 후에는 깨끗하게 세탁된 옷을 받아보세요. 더 이상
              세탁소를 찾아다닐 필요 없이 집에서 편안하게 세탁 서비스를 이용할 수 있습니다.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#102254] rounded-full"></div>
                </div>
                <span className="text-20 font-['KoPubWorldDotum']">
                  오전 9시까지 신청 시 당일 픽업
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#102254] rounded-full"></div>
                </div>
                <span className="text-20 font-['KoPubWorldDotum']">2-4시간 내 세탁 완료</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#102254] rounded-full"></div>
                </div>
                <span className="text-20 font-['KoPubWorldDotum']">지정 시간에 문 앞 배달</span>
              </div>
            </div>
          </div>

          {/* 시각적 요소 */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              {/* 서비스 플로우 */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-20 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-20 font-bold">앱으로 신청</h3>
                    <p className="text-16 opacity-90">오전 9시까지 신청</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-20 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-20 font-bold">픽업</h3>
                    <p className="text-16 opacity-90">문 앞에서 세탁물 수거</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-20 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-20 font-bold">세탁</h3>
                    <p className="text-16 opacity-90">2-4시간 내 세탁 완료</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-20 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-20 font-bold">배달</h3>
                    <p className="text-16 opacity-90">지정 시간에 문 앞 배달</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 주요 기능 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 rounded-2xl p-8 text-center backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-20 font-['KoPubWorldBatang'] font-bold mb-4">{feature.title}</h3>
              <p className="text-18 font-['KoPubWorldDotum'] opacity-90 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
