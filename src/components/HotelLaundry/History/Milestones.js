import React from 'react';

const Section2 = () => {
  const timelineData = [
    {
      year: 2025,
      events: [
        { month: 10, content: ["서울대입구점 OPEN", "고양시 원당점 OPEN", "호텔런드리 APP서비스 오픈"] },
        { month: 8, content: ["서울 신길점 베타서비스 OPEN"] },
        { month: 1, content: ["전체 시스템 개발완료 및 테스트착수"] }
      ]
    },
    {
      year: 2024,
      events: [
        { month: 10, content: ["서울대입구점 OPEN", "고양시 원당점 OPEN", "호텔런드리 APP서비스 오픈"] },
        { month: 8, content: ["서울 신길점 베타서비스 OPEN"] },
        { month: 1, content: ["전체 시스템 개발완료 및 테스트착수"] }
      ]
    },
    {
      year: 2023,
      events: [
        { month: 10, content: ["서울대입구점 OPEN", "고양시 원당점 OPEN", "호텔런드리 APP서비스 오픈"] },
        { month: 8, content: ["서울 신길점 베타서비스 OPEN"] },
        { month: 1, content: ["전체 시스템 개발완료 및 테스트착수"] }
      ]
    },
    {
      year: 2022,
      events: [
        { month: 10, content: ["서울대입구점 OPEN", "고양시 원당점 OPEN", "호텔런드리 APP서비스 오픈"] },
        { month: 8, content: ["서울 신길점 베타서비스 OPEN"] },
        { month: 1, content: ["전체 시스템 개발완료 및 테스트착수"] }
      ]
    },
    {
      year: 2021,
      events: [
        { month: 10, content: ["서울대입구점 OPEN", "고양시 원당점 OPEN", "호텔런드리 APP서비스 오픈"] },
        { month: 8, content: ["서울 신길점 베타서비스 OPEN"] },
        { month: 1, content: ["전체 시스템 개발완료 및 테스트착수"] }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {timelineData.map((yearData, yearIndex) => (
            <div key={yearData.year} className="mb-16">
              {/* sm, xs 화면용 레이아웃 */}
              <div className="block md:hidden">
                                 {/* 년도 */}
                 <div className="text-start mb-6 text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[36px] 2xl:text-[40px] font-['KoPubWorldDotum'] font-bold text-[#1C262B] tracking-[-0.44px] sm:tracking-[-0.52px] md:tracking-[-0.6px] lg:tracking-[-0.68px] xl:tracking-[-0.72px] 2xl:tracking-[-0.8px]">
                   {yearData.year}
                 </div>

                {/* 연혁 내용 */}
                <div className="space-y-4">
                  {yearData.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex items-start gap-16 sm:gap-28">
                                                                     {/* 월 */}
                        <div className="text-start min-w-[40px] font-['KoPubWorldDotum'] font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] xl:text-[24px] 2xl:text-[24px] text-[#1C262B] tracking-[-0.36px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.44px] xl:tracking-[-0.48px] 2xl:tracking-[-0.48px]">
                          {String(event.month).padStart(2, '0')}
                        </div>

                      {/* 연혁 내용 */}
                      <div className="flex-1">
                        <div className="space-y-1">
                          {event.content.map((item, itemIndex) => (
                                                         <div
                               key={itemIndex}
                               className="text-left font-['KoPubWorldDotum'] font-medium text-[15px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[20px] text-[#1C262B] tracking-[-0.3px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.36px] xl:tracking-[-0.4px] 2xl:tracking-[-0.4px]"
                             >
                               {item}
                             </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* md 이상 화면용 레이아웃 */}
              <div className="hidden md:block">
                <div className="flex items-start gap-24 lg:gap-44 2xl:gap-24">
                                     {/* 년도 */}
                   <div className="text-center min-w-[120px] text-[30px] lg:text-[34px] xl:text-[36px] 2xl:text-[40px] font-['KoPubWorldDotum'] font-bold text-[#1C262B] tracking-[-0.6px] lg:tracking-[-0.68px] xl:tracking-[-0.72px] 2xl:tracking-[-0.8px]">
                     {yearData.year}
                   </div>

                  {/* 연혁 내용 */}
                  <div className="flex-1">
                    <div className="space-y-6">
                      {yearData.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="flex items-start gap-28 lg:gap-32">
                                                                                 {/* 월 */}
                            <div className="text-center min-w-[60px] font-['KoPubWorldDotum'] font-bold text-[22px] lg:text-[22px] xl:text-[24px] 2xl:text-[24px] text-[#1C262B] tracking-[-0.44px] lg:tracking-[-0.44px] xl:tracking-[-0.48px] 2xl:tracking-[-0.48px]">
                              {String(event.month).padStart(2, '0')}
                            </div>

                          {/* 연혁 내용 */}
                          <div className="flex-1">
                            <div className="space-y-2">
                              {event.content.map((item, itemIndex) => (
                                                                 <div
                                   key={itemIndex}
                                   className="text-left font-['KoPubWorldDotum'] font-medium text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[20px] text-[#1C262B] tracking-[-0.36px] lg:tracking-[-0.36px] xl:tracking-[-0.4px] 2xl:tracking-[-0.4px]"
                                 >
                                   {item}
                                 </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

                             {/* 구분선 (마지막 년도 제외) */}
               {yearIndex < timelineData.length - 1 && (
                 <div className="mx-auto mt-8 w-[1400px] h-[1px] bg-[#E9E9E9]"></div>
               )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
