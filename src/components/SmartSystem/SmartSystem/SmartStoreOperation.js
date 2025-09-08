import React, { useState } from 'react';

const SmartStoreOperation = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardData = [
    {
      id: 1,
      title: "IoT 원격제어 시스템",
      content: [
        "기기 오류 발생 시 원격 대응",
        "현장 방문 없이 본사에서 즉시 문제 해결 가능"
      ],
      backgroundImage: "/images/SmartSystem/Smart-2-1.png"
    },
    {
      id: 2,
      title: "고객 전용 앱",
      content: [
        "실시간 매장 상태 및 시간대별 예약 가능",
        "모바일 결제 및 쿠폰 수령 기능 포함"
      ],
      backgroundImage: "/images/SmartSystem/Smart-2-1.png"
    },
    {
      id: 3,
      title: "문자알림 서비스",
      content: [
        "세탁 및 건조 종료 5분 전 문자 안내",
        "고객 대기시간 절감"
      ],
      backgroundImage: "/images/SmartSystem/Smart-2-1.png"
    },
    {
      id: 4,
      title: "자동 할인 시스템",
      content: [
        "성수/비혼잡 시간대 자동 할인 적용",
        "장비 가동률 증가 → 매출 증가"
      ],
      backgroundImage: "/images/SmartSystem/Smart-2-1.png"
    },
    {
      id: 5,
      title: "AI 운영 마케팅",
      content: [
        "성수/비혼잡 시간대 자동 할인 적용",
        "장비 가동률 증가 → 매출 증가"
      ],
      backgroundImage: "/images/SmartSystem/Smart-2-1.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
                 <div className="w-full xs:max-w-[355px] sm:max-w-[555px] md:max-w-[728px] lg:max-w-[984px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">

          {/* 제목 */}
          <div className="text-center">
            <h1 className="mb-[5px] sm:mb-[5px] md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold text-[#1C262B] font-['KoPubWorldDotum'] leading-normal tracking-[-0.44px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal">
              스마트 매장 운영 시스템
            </h1>

                         {/* 부제목 */}
             <p className="text-center mx-auto mb-5 sm:mb-5 md:mb-[30px] lg:mb-10 xl:mb-10 2xl:mb-7 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] text-[#1C262B] font-['KoPubWorldDotum'] font-medium leading-normal tracking-[-0.36px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.56px] 2xl:tracking-normal">
               <span className="xs:hidden sm:inline">고객과 점주 모두를 위한 자동화 기반 매장 운영 방식</span>
               <span className="sm:hidden">고객과 점주를 위한 자동화 기반 매장 운영 방식</span>
             </p>
          </div>

                                                                                                                                   {/* 그리드 컨텐츠 */}
             {/* 2xl: 1줄 3개, 2줄 2개 */}
             {/* xl, lg: 1줄 2개, 2줄 2개, 3줄 1개 */}
             {/* md, sm, xs: 4행 1열 */}
             
             {/* 2xl에서만 분리된 레이아웃 */}
             <div className="hidden 2xl:block space-y-6">
               {/* 첫 번째 행 - 3개 카드 */}
               <div className="grid grid-cols-3 gap-6">
                 {cardData.slice(0, 3).map((card, index) => (
                   <div
                     key={card.id}
                     className="relative cursor-pointer"
                     onMouseEnter={() => setHoveredIndex(index)}
                     onMouseLeave={() => setHoveredIndex(null)}
                   >
                     <div
                       className={`flex flex-col justify-end items-start rounded-lg transition-all duration-300 w-full h-[300px] p-[30px_40px] flex-shrink-0 ${
                         hoveredIndex === index
                           ? 'bg-cover bg-center'
                           : 'bg-[rgba(16,34,84,0.10)]'
                       }`}
                       style={{
                         backgroundImage: hoveredIndex === index
                           ? `linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), url(${card.backgroundImage})`
                           : 'none'
                       }}
                     >
                       {hoveredIndex === index ? (
                         <>
                           <h3 className="mb-4 text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-white font-['KoPubWorldDotum'] leading-normal tracking-[-0.4px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.52px] 2xl:tracking-normal">
                             {card.title}
                           </h3>
                           <ul className="space-y-2">
                             {card.content.map((item, itemIndex) => (
                               <li
                                 key={itemIndex}
                                 className="text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] font-medium text-white font-['KoPubWorldDotum'] leading-normal"
                               >
                                 • {item}
                               </li>
                             ))}
                           </ul>
                         </>
                       ) : (
                         <>
                           <h3 className="mb-4 text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-[#1C262B] font-['KoPubWorldDotum'] leading-normal tracking-[-0.4px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.52px] 2xl:tracking-normal">
                             {card.title}
                           </h3>
                           <ul className="space-y-2">
                             {card.content.map((item, itemIndex) => (
                               <li
                                 key={itemIndex}
                                 className="text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] font-medium text-[#1C262B] font-['KoPubWorldDotum'] leading-normal"
                               >
                                 • {item}
                               </li>
                             ))}
                           </ul>
                         </>
                       )}
                     </div>
                   </div>
                 ))}
               </div>

               {/* 두 번째 행 - 2개 카드 */}
               <div className="grid grid-cols-2 gap-6">
                 {cardData.slice(3, 5).map((card, index) => (
                   <div
                     key={card.id}
                     className="relative cursor-pointer"
                     onMouseEnter={() => setHoveredIndex(index + 3)}
                     onMouseLeave={() => setHoveredIndex(null)}
                   >
                     <div
                       className={`flex flex-col justify-end items-start rounded-lg transition-all duration-300 w-full h-[300px] p-10 flex-shrink-0 ${
                         hoveredIndex === index + 3
                           ? 'bg-cover bg-center'
                           : 'bg-[rgba(16,34,84,0.10)]'
                       }`}
                       style={{
                         backgroundImage: hoveredIndex === index + 3
                           ? `linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), url(${card.backgroundImage})`
                           : 'none'
                       }}
                     >
                       {hoveredIndex === index + 3 ? (
                         <>
                           <h3 className="mb-4 text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-white font-['KoPubWorldDotum'] leading-normal tracking-[-0.4px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.52px] 2xl:tracking-normal">
                             {card.title}
                           </h3>
                           <ul className="space-y-2">
                             {card.content.map((item, itemIndex) => (
                               <li
                                 key={itemIndex}
                                 className="text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] font-medium text-white font-['KoPubWorldDotum'] leading-normal"
                               >
                                 • {item}
                               </li>
                             ))}
                           </ul>
                         </>
                       ) : (
                         <>
                           <h3 className="mb-4 text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-[#1C262B] font-['KoPubWorldDotum'] leading-normal tracking-[-0.4px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.52px] 2xl:tracking-normal">
                             {card.title}
                           </h3>
                           <ul className="space-y-2">
                             {card.content.map((item, itemIndex) => (
                               <li
                                 key={itemIndex}
                                 className="text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] font-medium text-[#1C262B] font-['KoPubWorldDotum'] leading-normal"
                               >
                                 • {item}
                               </li>
                             ))}
                           </ul>
                         </>
                       )}
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* xl 이하에서 사용하는 통합 그리드 */}
             <div className="2xl:hidden grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
               {cardData.map((card, index) => (
                 <div
                   key={card.id}
                   className="relative cursor-pointer"
                   onMouseEnter={() => setHoveredIndex(index)}
                   onMouseLeave={() => setHoveredIndex(null)}
                 >
                   <div
                     className={`flex flex-col justify-end items-start rounded-lg transition-all duration-300 w-full h-[300px] ${
                       index < 3 ? 'p-[30px_40px]' : 'p-10'
                     } flex-shrink-0 ${
                       hoveredIndex === index
                         ? 'bg-cover bg-center'
                         : 'bg-[rgba(16,34,84,0.10)]'
                     }`}
                     style={{
                       backgroundImage: hoveredIndex === index
                         ? `linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), url(${card.backgroundImage})`
                         : 'none'
                     }}
                   >
                     {hoveredIndex === index ? (
                       <>
                         <h3 className="mb-4 text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-white font-['KoPubWorldDotum'] leading-normal tracking-[-0.4px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.52px] 2xl:tracking-normal">
                           {card.title}
                         </h3>
                         <ul className="space-y-2">
                           {card.content.map((item, itemIndex) => (
                             <li
                               key={itemIndex}
                               className="text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] font-medium text-white font-['KoPubWorldDotum'] leading-normal"
                             >
                               • {item}
                             </li>
                           ))}
                         </ul>
                       </>
                     ) : (
                       <>
                         <h3 className="mb-4 text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-[#1C262B] font-['KoPubWorldDotum'] leading-normal tracking-[-0.4px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.52px] 2xl:tracking-normal">
                           {card.title}
                         </h3>
                         <ul className="space-y-2">
                           {card.content.map((item, itemIndex) => (
                             <li
                               key={itemIndex}
                               className="text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] font-medium text-[#1C262B] font-['KoPubWorldDotum'] leading-normal"
                             >
                               • {item}
                             </li>
                           ))}
                         </ul>
                       </>
                     )}
                   </div>
                 </div>
               ))}
             </div>
        </div>
      </div>
    </section>
  );
};

export default SmartStoreOperation;
