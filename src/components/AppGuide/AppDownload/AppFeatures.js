import React, { useState } from 'react';

const VIDEO_SLIDES = [
  { title: '키오스크 사용법 회원', embedUrl: 'https://www.youtube.com/embed/tvugCTs-oJI' },
  { title: '키오스크 사용법 비회원', embedUrl: 'https://www.youtube.com/embed/f1-petfY79I' },
  { title: '어플로 세탁 이용방법', embedUrl: 'https://www.youtube.com/embed/n40X5O73tNo' },
  { title: '어플로 세탁기 예약방법', embedUrl: 'https://www.youtube.com/embed/c6gh-lbsIqU' },
  { title: '줄서기 기능 사용법', embedUrl: 'https://www.youtube.com/embed/TSqJmnsGDYQ' },
  { title: '시작 재전송 사용법', embedUrl: 'https://www.youtube.com/embed/4K671-sMYoY' },
  { title: '셀프 드라이클리닝 사용법', embedUrl: 'https://www.youtube.com/embed/bZK2iQ4CQ4g' },
  { title: '앱 주요기능 안내', embedUrl: 'https://www.youtube.com/embed/BBxfbYqKzkU' },
];

const AppFeatures = () => {
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
  const features = [
    {
      icon: '📱',
      title: '스마트 예약 시스템',
      description: '24시간 언제든지 세탁 예약 가능, 실시간 대기열 확인',
      details: [
        '실시간 대기열 확인',
        '예약 시간 선택',
        '매장별 운영시간 표시',
        '예약 취소 및 변경',
      ],
    },
    {
      icon: '💳',
      title: '간편 결제',
      description: '카드, 계좌이체, 간편결제 등 다양한 결제 수단 지원',
      details: [
        '카드 결제',
        '계좌이체',
        '간편결제 (카카오페이, 네이버페이)',
        '포인트 적립 및 사용',
      ],
    },
    {
      icon: '🔔',
      title: '실시간 알림',
      description: '세탁 완료, 픽업 알림 등 푸시 알림으로 편리한 관리',
      details: ['픽업 완료 알림', '세탁 시작 알림', '세탁 완료 알림', '배달 완료 알림'],
    },
    {
      icon: '📍',
      title: '매장 찾기',
      description: '내 주변 호텔런드리 매장 위치 및 운영시간 확인',
      details: ['GPS 기반 위치 검색', '매장별 운영시간', '실시간 대기 상황', '길찾기 연동'],
    },
    {
      icon: '📊',
      title: '이용 내역',
      description: '세탁 이력 관리 및 통계 확인으로 효율적인 관리',
      details: ['세탁 이력 관리', '월별 통계', '비용 분석', '환경 기여도'],
    },
    {
      icon: '🎯',
      title: '맞춤 서비스',
      description: '개인별 선호도 기반 맞춤형 세탁 서비스 제공',
      details: ['개인 설정 저장', '자주 이용하는 매장', '선호 세탁 옵션', '맞춤형 추천'],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 키오스크 & 앱 사용법 유튜브 슬라이드 - 앱설치 버튼 바로 아래 */}
        <div className="mb-16">
          <h3 className="section-title font-['KoPubWorldBatang'] font-bold text-[#102254] mb-8 text-center">
            키오스크 & 앱 사용법
          </h3>
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-[20px] sm:rounded-[25px] md:rounded-[30px]">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentVideoSlide * 100}%)` }}
              >
                {VIDEO_SLIDES.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-1">
                    <h4 className="text-center text-20 font-['KoPubWorldDotum'] text-[#1C262B] mb-3 md:mb-4">
                      {slide.title}
                    </h4>
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      {index === currentVideoSlide ? (
                        <iframe
                          className="absolute top-0 left-0 w-full h-full rounded-[16px] sm:rounded-[20px]"
                          src={slide.embedUrl}
                          title={slide.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      ) : (
                        <div className="absolute top-0 left-0 w-full h-full rounded-[16px] sm:rounded-[20px] bg-gray-100" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4 flex-wrap">
              <button
                type="button"
                onClick={() =>
                  setCurrentVideoSlide((prev) =>
                    prev === 0 ? VIDEO_SLIDES.length - 1 : prev - 1
                  )
                }
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="이전 영상"
              >
                <svg
                  className="w-6 h-6 text-[#102254]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex gap-1.5 sm:gap-2 flex-wrap justify-center max-w-full">
                {VIDEO_SLIDES.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentVideoSlide(index)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors flex-shrink-0 ${
                      index === currentVideoSlide ? 'bg-[#102254]' : 'bg-gray-300'
                    }`}
                    aria-label={`${index + 1}번 영상으로 이동`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() =>
                  setCurrentVideoSlide((prev) =>
                    prev === VIDEO_SLIDES.length - 1 ? 0 : prev + 1
                  )
                }
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="다음 영상"
              >
                <svg
                  className="w-6 h-6 text-[#102254]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 호텔런드리 특별한 기능들 - 헤더 */}
        <div className="text-center mb-16">
          <h2 className="section-title font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4">
            호텔런드리 앱의 특별한 기능들
          </h2>
          <p className="text-20 font-['KoPubWorldDotum'] text-[#1C262B] max-w-3xl mx-auto">
            스마트한 세탁 서비스를 위한 모든 기능이 한 곳에
          </p>
        </div>

        {/* 기능 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#E3F2FD] to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102"
            >
              <div className="text-6xl mb-6 text-center">{feature.icon}</div>
              <h3 className="text-20 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-20 font-['KoPubWorldDotum'] text-[#1C262B] mb-6 text-center leading-relaxed">
                {feature.description}
              </p>

              {/* 상세 기능 리스트 */}
              <div className="space-y-3">
                {feature.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-[#102254] rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <span className="text-18 font-['KoPubWorldDotum'] text-[#1C262B]">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 추가 정보 */}
        <div className="mt-16 bg-[#102254] rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-28 lg:text-32 font-['KoPubWorldBatang'] font-bold mb-4">
            더 많은 기능이 기다립니다
          </h3>
          <p className="text-22 font-['KoPubWorldDotum'] opacity-90 mb-8 max-w-3xl mx-auto">
            정기 업데이트를 통해 새로운 기능과 개선사항을 지속적으로 제공합니다
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h4 className="text-20 font-['KoPubWorldBatang'] font-bold mb-2">정기 업데이트</h4>
              <p className="text-16 font-['KoPubWorldDotum'] opacity-90">
                매월 새로운 기능과 개선사항
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="text-20 font-['KoPubWorldBatang'] font-bold mb-2">보안 강화</h4>
              <p className="text-16 font-['KoPubWorldDotum'] opacity-90">
                개인정보 보호 및 보안 강화
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="text-20 font-['KoPubWorldBatang'] font-bold mb-2">고객 피드백</h4>
              <p className="text-16 font-['KoPubWorldDotum'] opacity-90">고객 의견 반영 및 개선</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
