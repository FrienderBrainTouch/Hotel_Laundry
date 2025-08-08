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
        <div className="max-w-[1400px] mx-auto px-4">

          {/* 제목 */}
          <div className="text-center mb-10">
            <h1 
              className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold leading-normal mb-4"
              style={{
                color: '#1C262B',
                fontFamily: 'KoPubWorldDotum, sans-serif',
                fontWeight: 700,
                lineHeight: 'normal'
              }}
            >
              스마트 매장 운영 시스템
            </h1>



            {/* 부제목 */}
            <p 
              className="text-center mx-auto text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] mb-16"
              style={{
                color: '#1C262B',
                fontFamily: 'KoPubWorldDotum, sans-serif',
                fontWeight: 500,
                lineHeight: 'normal',
                letterSpacing: '-0.48px'
              }}
            >
              고객과 점주 모두를 위한 자동화 기반 매장 운영 방식
            </p>
          </div>

          {/* 그리드 컨텐츠 */}
          <div className="space-y-6">
            {/* 첫 번째 행 - 3개 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cardData.slice(0, 3).map((card, index) => (
                <div
                  key={card.id}
                  className="relative cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div 
                    className="flex flex-col justify-end items-start rounded-lg transition-all duration-300"
                    style={{
                      width: '453px',
                      height: '300px',
                      padding: '30px 40px',
                      flexShrink: 0,
                      backgroundImage: hoveredIndex === index 
                        ? `linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), url(${card.backgroundImage})`
                        : 'none',
                      backgroundColor: hoveredIndex === index 
                        ? 'transparent' 
                        : 'rgba(16, 34, 84, 0.10)',
                      backgroundSize: hoveredIndex === index ? 'cover' : 'auto',
                      backgroundPosition: 'center'
                    }}
                  >
                    {hoveredIndex === index ? (
                      <>
                        <h3 
                          style={{
                            color: '#FFF',
                            fontFamily: 'KoPubWorldDotum',
                            fontSize: '28px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal'
                          }}
                          className="mb-4"
                        >
                          {card.title}
                        </h3>
                        <ul className="space-y-2">
                          {card.content.map((item, itemIndex) => (
                            <li 
                              key={itemIndex}
                              style={{
                                color: '#FFF',
                                fontFamily: 'KoPubWorldDotum',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal'
                              }}
                            >
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <>
                        <h3 
                          style={{
                            color: '#1C262B',
                            fontFamily: 'KoPubWorldDotum',
                            fontSize: '28px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal'
                          }}
                          className="mb-4"
                        >
                          {card.title}
                        </h3>
                        <ul className="space-y-2">
                          {card.content.map((item, itemIndex) => (
                            <li 
                              key={itemIndex}
                              style={{
                                color: '#1C262B',
                                fontFamily: 'KoPubWorldDotum',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal'
                              }}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cardData.slice(3, 5).map((card, index) => (
                <div
                  key={card.id}
                  className="relative cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index + 3)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div 
                    className="flex flex-col justify-end items-start rounded-lg transition-all duration-300"
                    style={{
                      width: '690px',
                      height: '300px',
                      padding: '40px',
                      flexShrink: 0,
                      backgroundImage: hoveredIndex === index + 3 
                        ? `linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), url(${card.backgroundImage})`
                        : 'none',
                      backgroundColor: hoveredIndex === index + 3 
                        ? 'transparent' 
                        : 'rgba(16, 34, 84, 0.10)',
                      backgroundSize: hoveredIndex === index + 3 ? 'cover' : 'auto',
                      backgroundPosition: 'center'
                    }}
                  >
                    {hoveredIndex === index + 3 ? (
                      <>
                        <h3 
                          style={{
                            color: '#FFF',
                            fontFamily: 'KoPubWorldDotum',
                            fontSize: '28px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal'
                          }}
                          className="mb-4"
                        >
                          {card.title}
                        </h3>
                        <ul className="space-y-2">
                          {card.content.map((item, itemIndex) => (
                            <li 
                              key={itemIndex}
                              style={{
                                color: '#FFF',
                                fontFamily: 'KoPubWorldDotum',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal'
                              }}
                            >
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <>
                        <h3 
                          style={{
                            color: '#1C262B',
                            fontFamily: 'KoPubWorldDotum',
                            fontSize: '28px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal'
                          }}
                          className="mb-4"
                        >
                          {card.title}
                        </h3>
                        <ul className="space-y-2">
                          {card.content.map((item, itemIndex) => (
                            <li 
                              key={itemIndex}
                              style={{
                                color: '#1C262B',
                                fontFamily: 'KoPubWorldDotum',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal'
                              }}
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
      </div>
    </section>
  );
};

export default SmartStoreOperation;
