import React, { useState, useEffect } from 'react';

const BeyondLaundry = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const gridItems = [
    {
      title: '모바일 세탁 예약 서비스',
      subtitle: {
        xs: [
          '스마트폰 앱을 통해 원하는 시간에 세탁기를 미리 예약',
          '실시간 장비 현황 확인으로 대기 없이 편리하게 이용 가능',
        ],
        sm: [
          '스마트폰 앱을 통해 원하는 시간에 세탁기를 미리 예약',
          '실시간 장비 현황 확인으로 대기 없이 편리하게 이용 가능',
        ],
        md: [
          '스마트폰 앱을 통해 원하는 시간에 세탁기를 미리 예약',
          '실시간 장비 현황 확인으로 대기 없이 편리하게 이용 가능',
        ],
        lg: [
          '스마트폰 앱을 통해 원하는 시간에 세탁기를 미리 예약',
          '실시간 장비 현황 확인으로 대기 없이 편리하게 이용 가능',
        ],
        xl: [
          '스마트폰 앱을 통해 원하는 시간에 세탁기를 미리 예약',
          '실시간 장비 현황 확인으로 대기 없이 편리하게 이용 가능',
        ],
        '2xl': [
          '스마트폰 앱을 통해 원하는 시간에 세탁기를 미리 예약',
          '실시간 장비 현황 확인으로 대기 없이 편리하게 이용 가능',
        ],
      },
      image: '/images/main-Images/main-Beyond-1.png',
    },
    {
      title: '쉽고 편리한 키오스크 & 앱 결제',
      subtitle: {
        xs: [
          '시간대별 차등가격 쿠폰 제공과 결제 포인트 적립',
          '카드, 모바일, 포인트 결제까지 다양한 방식으로 자유롭게 결제 가능한 무인 시스템',
        ],
        sm: [
          '시간대별 차등가격 쿠폰 제공과 결제 포인트 적립',
          '카드, 모바일, 포인트 결제까지 다양한 방식으로 자유롭게 결제 가능한 무인 시스템',
        ],
        md: [
          '시간대별 차등가격 쿠폰 제공과 결제 포인트 적립',
          '카드, 모바일, 포인트 결제까지 다양한 방식으로 자유롭게 결제 가능한 무인 시스템',
        ],
        lg: [
          '시간대별 차등가격 쿠폰 제공과 결제 포인트 적립',
          '카드, 모바일, 포인트 결제까지 다양한 방식으로 자유롭게 결제 가능한 무인 시스템',
        ],
        xl: [
          '시간대별 차등가격 쿠폰 제공과 결제 포인트 적립',
          '카드, 모바일, 포인트 결제까지 다양한 방식으로 자유롭게 결제 가능한 무인 시스템',
        ],
        '2xl': [
          '시간대별 차등가격 쿠폰 제공과 결제 포인트 적립',
          '카드, 모바일, 포인트 결제까지 다양한 방식으로 자유롭게 결제 가능한 무인 시스템',
        ],
      },
      image: '/images/main-Images/main-Beyond-2.png',
    },
    {
      title: '세계 최초 셀프 드라이클리닝',
      subtitle: {
        xs: [
          '유해물질, 발암물질이 없는 친환경 드라이클리닝 방식',
          '고객이 직접 쉽고 간단하게 이용할 수 있는 셀프 서비스',
        ],
        sm: [
          '유해물질, 발암물질이 없는 친환경 드라이클리닝 방식',
          '고객이 직접 쉽고 간단하게 이용할 수 있는 셀프 서비스',
        ],
        md: [
          '유해물질, 발암물질이 없는 친환경 드라이클리닝 방식',
          '고객이 직접 쉽고 간단하게 이용할 수 있는 셀프 서비스',
        ],
        lg: [
          '유해물질, 발암물질이 없는 친환경 드라이클리닝 방식',
          '고객이 직접 쉽고 간단하게 이용할 수 있는 셀프 서비스',
        ],
        xl: [
          '유해물질, 발암물질이 없는 친환경 드라이클리닝 방식',
          '고객이 직접 쉽고 간단하게 이용할 수 있는 셀프 서비스',
        ],
        '2xl': [
          '유해물질, 발암물질이 없는 친환경 드라이클리닝 방식',
          '고객이 직접 쉽고 간단하게 이용할 수 있는 셀프 서비스',
        ],
      },
      image: '/images/main-Images/main-Beyond-3.png',
    },
    {
      title: '빠르고 우수한 세탁서비스 제공',
      subtitle: {
        xs: [
          '전 코스 프리미엄 살균수로 항균세탁이 기본 제공',
          '고사양 장비로 짧은 시간에도 우수한 세탁 품질 보장',
        ],
        sm: [
          '전 코스 프리미엄 살균수로 항균세탁이 기본 제공',
          '고사양 장비로 짧은 시간에도 우수한 세탁 품질 보장',
        ],
        md: [
          '전 코스 프리미엄 살균수로 항균세탁이 기본 제공',
          '고사양 장비로 짧은 시간에도 우수한 세탁 품질 보장',
        ],
        lg: [
          '전 코스 프리미엄 살균수로 항균세탁이 기본 제공',
          '고사양 장비로 짧은 시간에도 우수한 세탁 품질 보장',
        ],
        xl: [
          '전 코스 프리미엄 살균수로 항균세탁이 기본 제공',
          '고사양 장비로 짧은 시간에도 우수한 세탁 품질 보장',
        ],
        '2xl': [
          '전 코스 프리미엄 살균수로 항균세탁이 기본 제공',
          '고사양 장비로 짧은 시간에도 우수한 세탁 품질 보장',
        ],
      },
      image: '/images/main-Images/main-Beyond-4.png',
    },
    {
      title: '전 매장 24시간 통합 고객센터 운영',
      subtitle: {
        xs: [
          '고객 문의, 장비 점검 요청 등 모든 문제 신속 대응',
          '24시간 운영으로 언제든지 고객 지원 서비스 이용 가능',
        ],
        sm: [
          '고객 문의, 장비 점검 요청 등 모든 문제 신속 대응',
          '24시간 운영으로 언제든지 고객 지원 서비스 이용 가능',
        ],
        md: [
          '고객 문의, 장비 점검 요청 등 모든 문제 신속 대응',
          '24시간 운영으로 언제든지 고객 지원 서비스 이용 가능',
        ],
        lg: [
          '고객 문의, 장비 점검 요청 등 모든 문제 신속 대응',
          '24시간 운영으로 언제든지 고객 지원 서비스 이용 가능',
        ],
        xl: [
          '고객 문의, 장비 점검 요청 등 모든 문제 신속 대응',
          '24시간 운영으로 언제든지 고객 지원 서비스 이용 가능',
        ],
        '2xl': [
          '고객 문의, 장비 점검 요청 등 모든 문제 신속 대응',
          '24시간 운영으로 언제든지 고객 지원 서비스 이용 가능',
        ],
      },
      image: '/images/main-Images/main-Beyond-5.png',
    },
    {
      title: 'IoT 기반 실시간 제어·모니터링',
      subtitle: {
        xs: [
          '본사에서 전국 매장을 원격 제어하며 운영 안정성 확보',
          '실시간 모니터링으로 긴급 상황 발생 시 즉시 대응',
        ],
        sm: [
          '본사에서 전국 매장을 원격 제어하며 운영 안정성 확보',
          '실시간 모니터링으로 긴급 상황 발생 시 즉시 대응',
        ],
        md: [
          '본사에서 전국 매장을 원격 제어하며 운영 안정성 확보',
          '실시간 모니터링으로 긴급 상황 발생 시 즉시 대응',
        ],
        lg: [
          '본사에서 전국 매장을 원격 제어하며 운영 안정성 확보',
          '실시간 모니터링으로 긴급 상황 발생 시 즉시 대응',
        ],
        xl: [
          '본사에서 전국 매장을 원격 제어하며 운영 안정성 확보',
          '실시간 모니터링으로 긴급 상황 발생 시 즉시 대응',
        ],
        '2xl': [
          '본사에서 전국 매장을 원격 제어하며 운영 안정성 확보',
          '실시간 모니터링으로 긴급 상황 발생 시 즉시 대응',
        ],
      },
      image: '/images/main-Images/main-Beyond-6.png',
    },
  ];

  // 현재 화면 크기에 따른 subtitle 반환 함수
  const getSubtitleForBreakpoint = (item) => {
    if (window.innerWidth >= 1920) return item.subtitle['2xl'];
    if (window.innerWidth >= 1440) return item.subtitle.xl;
    if (window.innerWidth >= 1024) return item.subtitle.lg;
    if (window.innerWidth >= 768) return item.subtitle.md;
    if (window.innerWidth >= 576) return item.subtitle.sm;
    return item.subtitle.xs;
  };

  // 슬라이드 자동 전환
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (window.innerWidth < 768) {
          // sm 576px 미만 (xs)
          if (prev >= 5) {
            // 6개 아이템 (0-5)
            return 0;
          }
          return prev + 1;
        } else {
          // sm 576px 이상
          if (prev >= 2) {
            // 6개 아이템 (0-5) - 수정된 부분
            return 0;
          }
          return prev + 1;
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderGridItem = (item, index) => (
    <div key={index} className="relative overflow-hidden rounded-[20px] h-full">
      {/* Background Image */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      />

      {/* Content Box */}
      <div
        className="absolute bottom-0 left-0 right-0 p-6"
        style={{
          borderRadius: '0 0 20px 20px',
          background: '#102254',
        }}
      >
        <h3
          className="text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-[700] text-white mb-2 text-left"
          style={{
            fontFamily: 'KoPubWorldDotum',
            letterSpacing: '-0.4px',
          }}
        >
          {item.title}
        </h3>
        <ul className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-[500] text-white text-left list-disc list-outside pl-4 space-y-1">
          {getSubtitleForBreakpoint(item).map((text, index) => (
            <li
              key={index}
              style={{
                fontFamily: 'KoPubWorldDotum',
                letterSpacing: '-0.3px',
                lineHeight: 'normal',
              }}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section className="w-full py-16 bg-white">
      <div className="px-2 sm:px-4 w-full">
        {/* Title */}
        <h2
          className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-[500] text-[#1C262B] text-center mb-[5px] md:mb-[12px]"
          style={{
            fontFamily: 'KoPubWorldBatang',
            letterSpacing: '-0.44px',
          }}
        >
          Beyond Laundry
        </h2>

        {/* Subtitle (xs, sm 전용) */}
        <p
          className="md:hidden text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-[500] text-[#1C262B] text-center mb-12 tracking-[-0.36px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.56px] 2xl:tracking-[-0.64px] 2xl:leading-[30px]"
          style={{ fontFamily: 'KoPubWorldDotum' }}
        >
          호텔런드리만의 프리미엄 세탁시스템을 소개합니다.
        </p>

        {/* Subtitle (md 이상 전용) */}
        <p
          className="hidden md:block text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-[500] text-[#1C262B] text-center mb-12 tracking-[-0.36px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.56px] 2xl:tracking-[-0.64px] 2xl:leading-[30px]"
          style={{ fontFamily: 'KoPubWorldDotum' }}
        >
          기술과 경헙이 결합된 호텔런드리만의 프리미엄 세탁 시스템을 소개합니다.
        </p>

        {/* xl 이상: 기존 6개 그리드 */}
        <div className="hidden xl:grid xl:grid-cols-3 2xl:grid-cols-3 gap-6 xl:max-w-[1400px] 2xl:max-w-[1880px] mx-auto">
          {gridItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[20px] h-[470px] 2xl:h-[470px]"
            >
              {/* Background Image */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />

              {/* Content Box */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 2xl:p-10"
                style={{
                  borderRadius: '0 0 20px 20px',
                  background: '#102254',
                }}
              >
                <h3
                  className="text-[26px] 2xl:text-[28px] font-[700] text-white mb-2 text-left"
                  style={{
                    fontFamily: 'KoPubWorldDotum',
                    letterSpacing: '-0.52px',
                  }}
                >
                  {item.title}
                </h3>
                <ul className="text-[22px] 2xl:text-[24px] font-[300] text-white text-left list-disc list-outside pl-4 space-y-1">
                  {getSubtitleForBreakpoint(item).map((text, index) => (
                    <li
                      key={index}
                      style={{
                        fontFamily: 'KoPubWorldDotum',
                        lineHeight: '30px',
                      }}
                    >
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* lg 이하: 슬라이드 */}
        <div className="xl:hidden">
          {/* sm까지: 1개씩 보이기 */}
          <div className="block md:hidden">
            <div className="relative overflow-hidden rounded-[20px]" style={{ height: '400px' }}>
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {gridItems.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 h-full">
                    {renderGridItem(item, index)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* md부터: 2개씩 보이기 */}
          <div className="hidden md:block">
            <div
              className="relative overflow-hidden rounded-[20px]"
              style={{
                height: '470px',
              }}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out h-full gap-4"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {/* 6개 아이템을 2개씩 3개 슬라이드로 구성 */}
                {/* 슬라이드 1: 아이템 0, 1 */}
                <div className="flex gap-4 w-full flex-shrink-0">
                  <div className="w-1/2">{renderGridItem(gridItems[0], 0)}</div>
                  <div className="w-1/2">{renderGridItem(gridItems[1], 1)}</div>
                </div>

                {/* 슬라이드 2: 아이템 2, 3 */}
                <div className="flex gap-4 w-full flex-shrink-0">
                  <div className="w-1/2">{renderGridItem(gridItems[2], 2)}</div>
                  <div className="w-1/2">{renderGridItem(gridItems[3], 3)}</div>
                </div>

                {/* 슬라이드 3: 아이템 4, 5 */}
                <div className="flex gap-4 w-full flex-shrink-0">
                  <div className="w-1/2">{renderGridItem(gridItems[4], 4)}</div>
                  <div className="w-1/2">{renderGridItem(gridItems[5], 5)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 네비게이션 닷 */}
          <div className="flex justify-center mt-4">
            {/* sm까지: 1개씩 보이므로 6개 닷 */}
            <div className="flex md:hidden">
              {Array.from({ length: 6 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 mx-1 ${
                    index === currentSlide ? 'bg-[#102254]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* md부터: 2개씩 보이므로 3개 닷 */}
            <div className="hidden md:flex">
              {Array.from({ length: 3 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 mx-1 ${
                    index === currentSlide ? 'bg-[#102254]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondLaundry;
