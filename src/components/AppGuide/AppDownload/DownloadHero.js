import React from 'react';

const DownloadHero = () => {
  const stats = [
    { number: '50만+', label: '다운로드' },
    { number: '4.8★', label: '앱스토어 평점' },
    { number: '98%', label: '고객 만족도' },
    { number: '24시간', label: '서비스 운영' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#102254] to-[#1C262B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 콘텐츠 */}
          <div>
            <h1 className="hero-title font-['KoPubWorldBatang'] font-bold mb-6">
              호텔런드리 앱<br />
              지금 다운로드하세요
            </h1>
            <p className="hero-subtitle font-['KoPubWorldDotum'] mb-8 opacity-90">
              스마트한 무인세탁 서비스를 언제 어디서나
              <br />
              편리하게 이용하세요
            </p>

            {/* 주요 기능 */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#102254] rounded-full"></div>
                </div>
                <span className="text-20 font-['KoPubWorldDotum']">실시간 예약 및 대기열 확인</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#102254] rounded-full"></div>
                </div>
                <span className="text-20 font-['KoPubWorldDotum']">간편한 결제 시스템</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#102254] rounded-full"></div>
                </div>
                <span className="text-20 font-['KoPubWorldDotum']">당일수거 배달서비스</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#102254] rounded-full"></div>
                </div>
                <span className="text-20 font-['KoPubWorldDotum']">실시간 알림 및 추적</span>
              </div>
            </div>
          </div>

          {/* 앱 미리보기 */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-3xl p-8 backdrop-blur-sm">
              {/* 모바일 화면 시뮬레이션 */}
              <div className="bg-white rounded-2xl p-6 mx-auto max-w-sm">
                <div className="bg-[#102254] rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between text-white mb-4">
                    <h3 className="text-18 font-bold">호텔런드리</h3>
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-14 font-bold text-white">매장 찾기</div>
                      <div className="text-12 text-white opacity-80">내 주변 매장</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-14 font-bold text-white">예약하기</div>
                      <div className="text-12 text-white opacity-80">세탁 예약</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-14 font-bold text-white">배달 서비스</div>
                      <div className="text-12 text-white opacity-80">당일수거</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-16 font-bold text-[#102254] mb-2">지금 다운로드하세요</div>
                  <div className="text-14 text-gray-600">iOS & Android 지원</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 통계 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-32 lg:text-40 font-['KoPubWorldBatang'] font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-18 font-['KoPubWorldDotum'] opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadHero;
