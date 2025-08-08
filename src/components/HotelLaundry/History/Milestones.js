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
        <div className="max-w-8xl mx-auto">
          {timelineData.map((yearData, yearIndex) => (
            <div key={yearData.year} className="mb-16">
              <div className="flex items-start gap-24">
                {/* 년도 */}
                <div 
                  className="text-left min-w-[120px]"
                  style={{
                    color: '#1C262B',
                    fontFamily: 'KoPubWorldDotum, sans-serif',
                    fontSize: '40px',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    letterSpacing: '-0.8px'
                  }}
                >
                  {yearData.year}
                </div>

                {/* 연혁 내용 */}
                <div className="flex-1">
                  <div className="space-y-6">
                    {yearData.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-start gap-32">
                        {/* 월 */}
                        <div 
                          className="text-left min-w-[60px]"
                          style={{
                            color: '#1C262B',
                            fontFamily: 'KoPubWorldDotum, sans-serif',
                            fontSize: '24px',
                            fontWeight: 700,
                            lineHeight: 'normal',
                            letterSpacing: '-0.48px'
                          }}
                        >
                          {String(event.month).padStart(2, '0')}
                        </div>
                        
                        {/* 연혁 내용 */}
                        <div className="flex-1">
                          <div className="space-y-2">
                            {event.content.map((item, itemIndex) => (
                              <div 
                                key={itemIndex}
                                className="text-left"
                                style={{
                                  color: '#1C262B',
                                  fontFamily: 'KoPubWorldDotum, sans-serif',
                                  fontSize: '20px',
                                  fontWeight: 500,
                                  lineHeight: 'normal',
                                  letterSpacing: '-0.4px'
                                }}
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

              {/* 구분선 (마지막 년도 제외) */}
              {yearIndex < timelineData.length - 1 && (
                <div 
                  className="mx-auto mt-8"
                  style={{
                    width: '1400px',
                    height: '1px',
                    background: '#E9E9E9'
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
