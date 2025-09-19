import React, { useState, useEffect } from 'react';

const BeyondLaundry = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const gridItems = [
    {
      title: '세계 최초 셀프 드라이클리닝',
      subtitle: {
        xs: [
          '이불 세탁과 양복 드라이클리닝이 하나의 세탁기에서 모두 가능',
          '세탁소나 크린토XX를 위협하는 가장 강력한 매출 극대화',
          '친환경 세제와 물로 하는 웨트클리닝',
        ],
        sm: [
          '이불 세탁과 양복 드라이클리닝이 하나의 세탁기에서 모두 가능',
          '세탁소나 크린토XX를 위협하는 가장 강력한 매출 극대화',
          '친환경 세제와 물로 하는 웨트클리닝',
        ],
        md: [
          '이불 세탁과 양복 드라이클리닝이 하나의 세탁기에서 모두 가능',
          '세탁소나 크린토XX를 위협하는 가장 강력한 매출 극대화',
          '친환경 세제와 물로 하는 웨트클리닝',
        ],
        lg: [
          '이불 세탁과 양복 드라이클리닝이 하나의 세탁기에서 모두 가능',
          '세탁소나 크린토XX를 위협하는 가장 강력한 매출 극대화',
          '친환경 세제와 물로 하는 웨트클리닝',
        ],
        xl: [
          '이불 세탁과 양복 드라이클리닝이 하나의 세탁기에서 모두 가능',
          '세탁소나 크린토XX를 위협하는 가장 강력한 매출 극대화',
          '친환경 세제와 물로 하는 웨트클리닝',
        ],
        '2xl': [
          '이불 세탁과 양복 드라이클리닝이 하나의 세탁기에서 모두 가능',
          '세탁소나 크린토XX를 위협하는 가장 강력한 매출 극대화',
          '친환경 세제와 물로 하는 웨트클리닝',
        ],
      },
      image: '/images/main-Images/main-Beyond-3.png',
    },
    {
      title: '유일한 고객 전용 어플/키오스크',
      subtitle: {
        xs: [
          '실시간 장비 사용을 어플로 확인하고 원하는 시간에 예약하는 기능',
          '현장 결제와 줄서기 기능, 분자 알림 등 다양한 편의성',
        ],
        sm: [
          '실시간 장비 사용을 어플로 확인하고 원하는 시간에 예약하는 기능',
          '현장 결제와 줄서기 기능, 분자 알림 등 다양한 편의성',
        ],
        md: [
          '실시간 장비 사용을 어플로 확인하고 원하는 시간에 예약하는 기능',
          '현장 결제와 줄서기 기능, 분자 알림 등 다양한 편의성',
        ],
        lg: [
          '실시간 장비 사용을 어플로 확인하고 원하는 시간에 예약하는 기능',
          '현장 결제와 줄서기 기능, 분자 알림 등 다양한 편의성',
        ],
        xl: [
          '실시간 장비 사용을 어플로 확인하고 원하는 시간에 예약하는 기능',
          '현장 결제와 줄서기 기능, 분자 알림 등 다양한 편의성',
        ],
        '2xl': [
          '실시간 장비 사용을 어플로 확인하고 원하는 시간에 예약하는 기능',
          '현장 결제와 줄서기 기능, 분자 알림 등 다양한 편의성',
        ],
      },
      image: '/images/main-Images/main-Beyond-2.png',
    },
    {
      title: 'IoT 실시간 원격 제어 및 관리',
      subtitle: {
        xs: [
          '다양한 고객의 민원과 문제점을 매장 방문없이 원격으로 문제해결',
          '민첩한 고객 응대로 서비스 만족율 UP 완전한 무인화 운영',
        ],
        sm: [
          '다양한 고객의 민원과 문제점을 매장 방문없이 원격으로 문제해결',
          '민첩한 고객 응대로 서비스 만족율 UP 완전한 무인화 운영',
        ],
        md: [
          '다양한 고객의 민원과 문제점을 매장 방문없이 원격으로 문제해결',
          '민첩한 고객 응대로 서비스 만족율 UP 완전한 무인화 운영',
        ],
        lg: [
          '다양한 고객의 민원과 문제점을 매장 방문없이 원격으로 문제해결',
          '민첩한 고객 응대로 서비스 만족율 UP 완전한 무인화 운영',
        ],
        xl: [
          '다양한 고객의 민원과 문제점을 매장 방문없이 원격으로 문제해결',
          '민첩한 고객 응대로 서비스 만족율 UP 완전한 무인화 운영',
        ],
        '2xl': [
          '다양한 고객의 민원과 문제점을 매장 방문없이 원격으로 문제해결',
          '민첩한 고객 응대로 서비스 만족율 UP 완전한 무인화 운영',
        ],
      },
      image: '/images/main-Images/main-Beyond-1.png',
    },
    {
      title: '24시간 본사 고객 센터 운영',
      subtitle: {
        xs: [
          '영화 한편 맘 편히 볼 수 없는 고객 전화는 가장 큰 스트레스',
          '365일 모든 전화 응대를 본사가 직접 받고 원격으로 처리하여',
          '노동없는 제테크 창업을 제공',
        ],
        sm: [
          '영화 한편 맘 편히 볼 수 없는 고객 전화는 가장 큰 스트레스',
          '365일 모든 전화 응대를 본사가 직접 받고 원격으로 처리하여',
          '노동없는 제테크 창업을 제공',
        ],
        md: [
          '영화 한편 맘 편히 볼 수 없는 고객 전화는 가장 큰 스트레스',
          '365일 모든 전화 응대를 본사가 직접 받고 원격으로 처리하여',
          '노동없는 제테크 창업을 제공',
        ],
        lg: [
          '영화 한편 맘 편히 볼 수 없는 고객 전화는 가장 큰 스트레스',
          '365일 모든 전화 응대를 본사가 직접 받고 원격으로 처리하여',
          '노동없는 제테크 창업을 제공',
        ],
        xl: [
          '영화 한편 맘 편히 볼 수 없는 고객 전화는 가장 큰 스트레스',
          '365일 모든 전화 응대를 본사가 직접 받고 원격으로 처리하여',
          '노동없는 제테크 창업을 제공',
        ],
        '2xl': [
          '영화 한편 맘 편히 볼 수 없는 고객 전화는 가장 큰 스트레스',
          '365일 모든 전화 응대를 본사가 직접 받고 원격으로 처리하여',
          '노동없는 제테크 창업을 제공',
        ],
      },
      image: '/images/main-Images/main-Beyond-5.png',
    },
    {
      title: 'AI 운영관리 시스템',
      subtitle: {
        xs: [
          '4차 산업 시대에 가장 중요한 빅데이터를 활용하여 고객 맞춤형 관리 시스템 적용',
          '독보적인 쿠폰 시스템은 고객 재방문과 매출 차별화로 연결',
        ],
        sm: [
          '4차 산업 시대에 가장 중요한 빅데이터를 활용하여 고객 맞춤형 관리 시스템 적용',
          '독보적인 쿠폰 시스템은 고객 재방문과 매출 차별화로 연결',
        ],
        md: [
          '4차 산업 시대에 가장 중요한 빅데이터를 활용하여 고객 맞춤형 관리 시스템 적용',
          '독보적인 쿠폰 시스템은 고객 재방문과 매출 차별화로 연결',
        ],
        lg: [
          '4차 산업 시대에 가장 중요한 빅데이터를 활용하여 고객 맞춤형 관리 시스템 적용',
          '독보적인 쿠폰 시스템은 고객 재방문과 매출 차별화로 연결',
        ],
        xl: [
          '4차 산업 시대에 가장 중요한 빅데이터를 활용하여 고객 맞춤형 관리 시스템 적용',
          '독보적인 쿠폰 시스템은 고객 재방문과 매출 차별화로 연결',
        ],
        '2xl': [
          '4차 산업 시대에 가장 중요한 빅데이터를 활용하여 고객 맞춤형 관리 시스템 적용',
          '독보적인 쿠폰 시스템은 고객 재방문과 매출 차별화로 연결',
        ],
      },
      image: '/images/main-Images/main-Beyond-6.png',
    },
    {
      title: 'Hocl 살균수 세탁',
      subtitle: {
        xs: [
          '정부 지원 고객 반응도 조사 결과 1위는 위생',
          '모든 세탁, 헹굼 과정에서 자동 투입되는 Hocl 살균수는',
          '고객의 안심과 브랜드 신뢰를 상승시킴',
        ],
        sm: [
          '정부 지원 고객 반응도 조사 결과 1위는 위생',
          '모든 세탁, 헹굼 과정에서 자동 투입되는 Hocl 살균수는',
          '고객의 안심과 브랜드 신뢰를 상승시킴',
        ],
        md: [
          '정부 지원 고객 반응도 조사 결과 1위는 위생',
          '모든 세탁, 헹굼 과정에서 자동 투입되는 Hocl 살균수는',
          '고객의 안심과 브랜드 신뢰를 상승시킴',
        ],
        lg: [
          '정부 지원 고객 반응도 조사 결과 1위는 위생',
          '모든 세탁, 헹굼 과정에서 자동 투입되는 Hocl 살균수는',
          '고객의 안심과 브랜드 신뢰를 상승시킴',
        ],
        xl: [
          '정부 지원 고객 반응도 조사 결과 1위는 위생',
          '모든 세탁, 헹굼 과정에서 자동 투입되는 Hocl 살균수는',
          '고객의 안심과 브랜드 신뢰를 상승시킴',
        ],
        '2xl': [
          '정부 지원 고객 반응도 조사 결과 1위는 위생',
          '모든 세탁, 헹굼 과정에서 자동 투입되는 Hocl 살균수는',
          '고객의 안심과 브랜드 신뢰를 상승시킴',
        ],
      },
      image: '/images/main-Images/main-Beyond-4.png',
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
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const renderGridItem = (item, index) => (
    <div key={index} className="relative overflow-hidden rounded-[20px] h-full flex flex-col">
      {/* Background Image */}
      <div
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      />

      {/* Content Box - 고정 높이 */}
      <div
        className="p-4 h-[160px] md:h-[180px] flex flex-col justify-start"
        style={{
          borderRadius: '0 0 20px 20px',
          background: '#102254',
        }}
      >
        <h3
          className="text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] font-[700] text-white mb-2 text-left"
          style={{
            fontFamily: 'KoPubWorldDotum',
            letterSpacing: '-0.4px',
          }}
        >
          {item.title}
        </h3>
        <ul className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px] font-[500] text-white text-left list-disc list-outside pl-4 space-y-1 flex-1 overflow-hidden">
          {getSubtitleForBreakpoint(item).map((text, index) => (
            <li
              key={index}
              style={{
                fontFamily: 'KoPubWorldDotum',
                letterSpacing: '-0.3px',
                lineHeight: '1.3',
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
              className="relative overflow-hidden rounded-[20px] h-[470px] 2xl:h-[470px] flex flex-col"
            >
              {/* Background Image */}
              <div
                className="flex-1 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />

              {/* Content Box - 고정 높이 */}
              <div
                className="p-6 2xl:p-8 h-[180px] flex flex-col justify-start"
                style={{
                  borderRadius: '0 0 20px 20px',
                  background: '#102254',
                }}
              >
                <h3
                  className="text-[22px] 2xl:text-[24px] font-[700] text-white mb-2 text-left"
                  style={{
                    fontFamily: 'KoPubWorldDotum',
                    letterSpacing: '-0.52px',
                  }}
                >
                  {item.title}
                </h3>
                <ul className="text-[16px] 2xl:text-[17px] font-[500] text-white text-left list-disc list-outside pl-4 space-y-1 flex-1 overflow-hidden">
                  {getSubtitleForBreakpoint(item).map((text, index) => (
                    <li
                      key={index}
                      style={{
                        fontFamily: 'KoPubWorldDotum',
                        lineHeight: '1.3',
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
