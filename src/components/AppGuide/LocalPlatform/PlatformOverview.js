import React from 'react';

const PlatformOverview = () => {
  const benefits = [
    {
      icon: '🏪',
      title: '지역 맞춤 서비스',
      description: '각 지역의 특성에 맞는 맞춤형 세탁 서비스 제공',
    },
    {
      icon: '🤝',
      title: '지역 상생',
      description: '지역 상권과의 협력을 통한 상생 발전',
    },
    {
      icon: '📱',
      title: '지역 커뮤니티',
      description: '지역별 커뮤니티 기능으로 소통과 정보 공유',
    },
    {
      icon: '🚚',
      title: '지역 배송',
      description: '지역별 최적화된 배송 및 픽업 서비스',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#102254] to-[#1C262B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h1 className="hero-title font-['KoPubWorldBatang'] font-bold mb-6">
            지역 플랫폼 서비스
          </h1>
          <p className="hero-subtitle font-['KoPubWorldDotum'] max-w-4xl mx-auto opacity-90">
            전국 각 지역의 특성을 반영한 맞춤형 세탁 플랫폼으로
            <br />
            지역 상생과 고객 만족을 동시에 실현합니다
          </p>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* 텍스트 콘텐츠 */}
          <div>
            <h2 className="text-28 lg:text-32 font-['KoPubWorldBatang'] font-bold mb-6">
              지역 중심의 스마트 세탁 플랫폼
            </h2>
            <p className="text-22 font-['KoPubWorldDotum'] leading-relaxed mb-8 opacity-90">
              호텔런드리는 단순한 프랜차이즈가 아닌, 각 지역의 특성과 고객 니즈를 반영한 지역 맞춤형
              플랫폼을 구축합니다. 지역 상권과의 협력을 통해 상생 발전을 도모하고, 고객에게는 더욱
              편리하고 특화된 서비스를 제공합니다.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#102254] rounded-full"></div>
                </div>
                <span className="text-20 font-['KoPubWorldDotum']">지역별 특화된 세탁 서비스</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#102254] rounded-full"></div>
                </div>
                <span className="text-20 font-['KoPubWorldDotum']">지역 상권과의 협력 체계</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#102254] rounded-full"></div>
                </div>
                <span className="text-20 font-['KoPubWorldDotum']">지역 커뮤니티 기반 서비스</span>
              </div>
            </div>
          </div>

          {/* 시각적 요소 */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white bg-opacity-20 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-4">🏙️</div>
                  <h3 className="text-20 font-bold mb-2">도심 지역</h3>
                  <p className="text-16 opacity-90">빠른 서비스</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-4">🏘️</div>
                  <h3 className="text-20 font-bold mb-2">주거 지역</h3>
                  <p className="text-16 opacity-90">편리한 접근</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-4">🏢</div>
                  <h3 className="text-20 font-bold mb-2">상업 지역</h3>
                  <p className="text-16 opacity-90">24시간 운영</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-20 font-bold mb-2">대학가</h3>
                  <p className="text-16 opacity-90">학생 할인</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 혜택 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 rounded-2xl p-8 text-center backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="text-6xl mb-6">{benefit.icon}</div>
              <h3 className="text-20 font-['KoPubWorldBatang'] font-bold mb-4">{benefit.title}</h3>
              <p className="text-18 font-['KoPubWorldDotum'] opacity-90 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
