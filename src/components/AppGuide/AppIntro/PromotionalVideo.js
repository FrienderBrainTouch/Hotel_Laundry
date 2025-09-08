import React, { useState } from 'react';

const PromotionalVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    '24시간 무인 운영',
    '스마트 예약 시스템',
    '실시간 알림 서비스',
    '간편 결제 시스템',
    '당일 픽업 서비스',
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#E3F2FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="section-title font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4">
            호텔런드리 앱 홍보 영상
          </h2>
          <p className="text-24 font-['KoPubWorldDotum'] text-[#1C262B] max-w-3xl mx-auto">
            혁신적인 무인세탁 서비스의 모든 것을 한눈에 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 비디오 섹션 */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-video bg-gradient-to-br from-[#102254] to-[#1C262B] rounded-2xl overflow-hidden shadow-2xl">
              {!isPlaying ? (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer hover:bg-opacity-10 bg-black bg-opacity-20 transition-all"
                  onClick={() => setIsPlaying(true)}
                >
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                    <div className="w-0 h-0 border-l-[30px] border-l-white border-y-[18px] border-y-transparent ml-3"></div>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-2 h-8 bg-white"></div>
                      <div className="w-2 h-8 bg-white ml-1"></div>
                    </div>
                    <p className="text-20 font-bold">영상 재생 중...</p>
                  </div>
                </div>
              )}

              {/* 비디오 정보 오버레이 */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-24 font-['KoPubWorldBatang'] font-bold mb-2">
                    호텔런드리 앱 소개 영상
                  </h3>
                  <p className="text-18 font-['KoPubWorldDotum'] opacity-90">
                    총 재생시간: 3분 30초
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 콘텐츠 섹션 */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-28 lg:text-32 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-6">
                  스마트한 세탁의 새로운 기준
                </h3>
                <p className="text-22 font-['KoPubWorldDotum'] text-[#1C262B] leading-relaxed mb-8">
                  호텔런드리 앱은 단순한 세탁 서비스를 넘어, 당신의 일상을 더욱 편리하게 만들어주는
                  스마트한 솔루션입니다.
                </p>
              </div>

              {/* 주요 기능 리스트 */}
              <div className="space-y-4">
                <h4 className="text-24 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4">
                  주요 특징
                </h4>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#102254] rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-20 font-['KoPubWorldDotum'] text-[#1C262B]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* 통계 */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-32 lg:text-40 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
                    50만+
                  </div>
                  <div className="text-18 font-['KoPubWorldDotum'] text-[#1C262B]">앱 다운로드</div>
                </div>
                <div className="text-center">
                  <div className="text-32 lg:text-40 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
                    4.8★
                  </div>
                  <div className="text-18 font-['KoPubWorldDotum'] text-[#1C262B]">
                    앱스토어 평점
                  </div>
                </div>
              </div>

              {/* CTA 버튼 */}
              <div className="pt-6">
                <button
                  className="w-full bg-[#102254] text-white py-4 px-8 rounded-xl font-bold text-20 hover:bg-[#1C262B] transition-colors"
                  onClick={() => setIsPlaying(true)}
                >
                  🎬 홍보 영상 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalVideo;
