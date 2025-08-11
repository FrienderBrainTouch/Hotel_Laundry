import React from 'react';

const Section2 = () => {
  const timelineData = [
    {
      year: 2025,
      events: [
        { month: 8, content: ["호텔런드리 셀프드라이클리닝 런칭", "호텔런드리 어플 그랜드오픈"] },
        { month: 7, content: ["추가 12개점 오픈 / 평촌아이에스비즈점, 신림서원점, 신림서림점, 곡반정점, 금정점, 신림역점, 포천이동교점, 신림본점, 항동점, 서울대점, 수진역점, 마장점"] },
        { month: 3, content: ["프렌차이즈 혁신기업 부문 '2025 혁신한국인 & POWER KOREA' 대상 수상"] }
      ]
    },
    {
      year: 2024,
      events: [
        { month: 12, content: ["추가 23개점 오픈 / 평택점, 광주용봉점, 화곡점, 낙성대점, 안성석정점, 서울대행운점, 평촌역점, 봉천점, 샤로수길점, 갈매점, 한양대학로점, 도래울점, 서울대학점, 분당장안점, 장항점, 성남금광점, 서교점, 독산점, 안산중앙역점, 광양중동점, 봉천중앙점, 경희대점, 사당점"] },
        { month: 11, content: ["IoT관련 3가지 특허등록 (제10-2733753호 / 제10-1906237호 / 제10-2273367호)", "호텔런드리 상표등록"] },
        { month: 10, content: ["ESG 경영수준 A+기업인증", "경영혁신 중소기업 인증", "기술혁신 중소기업 인증"] }
      ]
    },
    {
      year: 2023,
      events: [
        { month: 12, content: ["확장 시스템 고도화 개발 착수", "기존 시스템 고도화"] },
        { month: 11, content: ["2023 국민브랜드 빨래방 부문 대상 수상", "프렌차이즈 기업 등록"] },
        { month: 10, content: ["추가 7개점 오픈 / 청룡점, 동탄역점, 실리콘앨리점, 송도랜드마크점, 광교상현점, 상도점, 보라매점"] }
      ]
    },
    {
      year: 2022,
      events: [
        { month: 12, content: ["호텔런드리 시스템 고도화 착수", "추가 4개점 오픈 / 탄현점, 미사역점, 헤븐시티점, 성내점"] },
        { month: 11, content: ["무선제어장치 특허 (제10-1564141호)"] },
        { month: 10, content: ["세탁관리 플랫폼 특허 (제 10-2424447호)"] }
      ]
    },
    {
      year: 2021,
      events: [
        { month: 10, content: ["서울대입구점, 원당점 오픈", "위치기반을 통한 컨텐츠 제공방법 특허(제 10-1165989호)"] },
        { month: 8, content: ["호텔런드리 브랜드 런칭, 어플 베타버전 오픈", "호텔런드리 신길1호점 오픈"] }
      ]
    },
    {
      year: 2020,
      events: [
        { month: 10, content: ["워시업코리아 벤처기업등록"] },
        { month: 6, content: ["기업부설연구소설립"] },
        { month: 4, content: ["ai무인세탁소 어플리케이션 저작권 등록"] },
        { month: 3, content: ["중소벤처기업부 중소기업확인"] },
        { month: 1, content: ["주식회사 워시업코리아 법인설립"] }
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
