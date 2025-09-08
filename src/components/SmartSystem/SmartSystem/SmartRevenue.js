import React from 'react';

// 재사용 가능한 카드 컴포넌트
const RevenueCard = ({ imageSrc, alt, title, description }) => {
  return (
    <div className="flex flex-col bg-white rounded-[10px] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] p-5 sm:p-6 md:p-7 lg:p-5 xl:p-6 2xl:p-10 w-full min-h-[180px] sm:min-h-[180px] md:min-h-[220px] lg:min-h-[220px] xl:min-h-[250px] 2xl:min-h-[260px]">
      <div className="flex flex-col items-start h-full">
        <div className="flex items-center justify-center w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[65px] lg:h-[65px] xl:w-[75px] xl:h-[75px] 2xl:w-[80px] 2xl:h-[80px]">
          <img
            src={imageSrc}
            alt={alt}
            className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[65px] lg:h-[65px] xl:w-[75px] xl:h-[75px] 2xl:w-[80px] 2xl:h-[80px] flex-shrink-0 aspect-square opacity-50"
            style={{
              filter: 'brightness(0) saturate(100%) invert(8%) sepia(10%) saturate(7482%) hue-rotate(214deg) brightness(95%) contrast(101%)'
            }}
          />
        </div>
        <h3 className="text-28 font-bold text-brand-dark font-koPubWorldDotum mt-3 sm:mt-3.5 md:mt-4 lg:mt-3.5 xl:mt-4.5 2xl:mt-5 mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-1.5 xl:mb-2 2xl:mb-2">
          {title}
        </h3>
        <p className="text-base lg:text-lg xl:text-xl text-brand-dark font-koPubWorldDotum font-medium leading-[1.4] flex-1">
          {description}
        </p>
      </div>
    </div>
  );
};

const SmartRevenue = () => {
  // 카드 데이터 배열
  const revenueCards = [
    {
      imageSrc: "/images/SmartSystem/smartmodel-1.svg",
      alt: "장비 원격제어",
      title: "장비 원격제어",
      description: "스마트폰으로 제어 및 진단"
    },
    {
      imageSrc: "/images/SmartSystem/smartmodel-2.svg",
      alt: "세탁조 살균",
      title: "세탁조 살균",
      description: "HOCL 살균수, 매회 자동 세척"
    },
    {
      imageSrc: "/images/SmartSystem/smartmodel-3.svg",
      alt: "장비 예약",
      title: "장비 예약",
      description: "앱 통해 시간 예약 가능"
    },
    {
      imageSrc: "/images/SmartSystem/smartmodel-4.svg",
      alt: "정산 리포트 제공",
      title: "정산 리포트 제공",
      description: "가맹점 전용 정산 리포트 제공"
    }
  ];

  return (
    <section
      className="py-20"
      style={{
        background: 'rgba(238, 243, 255, 0.73)',
        minHeight: '600px'
      }}
    >
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[600px] sm:max-w-[600px] md:max-w-[768px] lg:max-w-[1000px] xl:max-w-[1400px] 2xl:max-w-[1400px] mx-auto">
          {/* 제목 */}
          <div className="text-center mb-12">
            <h1 className="section-title font-bold mb-3 text-brand-dark font-koPubWorldDotum">
              스마트 수익 모델
            </h1>

            {/* 부제목 */}
            <p className="section-subtitle text-brand-dark font-koPubWorldDotum font-medium">
              기술이 만든 실질적인 매출 증대 효과
            </p>
          </div>

          {/* 카드 컨테이너 */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 sm:gap-6 md:gap-6 lg:gap-4 xl:gap-6 2xl:gap-6 w-full">
              {/* 카드들을 map으로 렌더링 */}
              {revenueCards.map((card, index) => (
                <RevenueCard
                  key={index}
                  imageSrc={card.imageSrc}
                  alt={card.alt}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartRevenue;
