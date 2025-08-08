import React, { useState } from 'react';

const Section3 = () => {
  const [activeTab, setActiveTab] = useState('smart');

  const teams = [
    {
      id: 'tech',
      title: '기술개발팀',
      subtitle: 'IoT 장비 제어,\n키오스크 시스템, 앱 연동',
      icon: '/images/CompanyInfo/Company-infra-1.svg'
    },
    {
      id: 'design',
      title: '디자인팀',
      subtitle: '브랜드 UI/UX,\n매장 인테리어, 제품 디자인',
      icon: '/images/CompanyInfo/Company-infra-2.svg'
    },
    {
      id: 'mechanical',
      title: '기계기술팀',
      subtitle: '세탁·건조 장비 설계,\n자동화 시스템 구축',
      icon: '/images/CompanyInfo/Company-infra-3.svg'
    },
    {
      id: 'marketing',
      title: '마케팅팀',
      subtitle: '가맹 오픈 마케팅, SNS 홍보,\n운영 전략 지원',
      icon: '/images/CompanyInfo/Company-infra-4.svg'
    }
  ];

  const tabs = [
    { id: 'smart', title: '스마트 운영' },
    { id: 'space', title: '공간 테라피' },
    { id: 'brand', title: '기술 자립 브랜드' },
    { id: 'trust', title: '신뢰기반 서비스' }
  ];

  const tabContents = {
    smart: {
      title: '누구나 쉽게 운영할 수 있는 무인 세탁 시스템',
      content: [
        '호텔런드리는 IoT 기반 장비 제어, 키오스크 결제, 모바일 앱 예약 기능\n등 전 과정을 자동화한 시스템으로 운영의 부담을 최소화합니다.',
        '인건비 없이도 안정적인 매장 운영이 가능하며, 점주는 원격으로 상태를 관리하고\n고객은 대기 없이 세탁기 이용이 가능합니다.'
      ]
    },
    space: {
      title: '편안한 공간에서의 세탁 경험',
      content: [
        '호텔런드리는 단순한 세탁 공간을 넘어 고객이 편안하게\n머물 수 있는 공간으로 설계되었습니다.',
        '깔끔한 인테리어와 편의시설을 통해 세탁 시간을 즐거운 경험으로 만들어드립니다.'
      ]
    },
    brand: {
      title: '자체 기술로 구축한 독립적인 브랜드',
      content: [
        '호텔런드리는 외부 의존도 없이 자체 기술로 모든 시스템을 구축한 독립적인 브랜드입니다.',
        '장비부터 앱까지 모든 것을 직접 개발하여 안정적이고 신뢰할 수 있는 서비스를 제공합니다.'
      ]
    },
    trust: {
      title: '신뢰할 수 있는 서비스 제공',
      content: [
        '호텔런드리는 투명한 운영과 정확한 서비스로 고객의 신뢰를 얻고 있습니다.',
        '24시간 모니터링 시스템과 정기적인 점검을 통해 안전하고 깨끗한 세탁 서비스를 보장합니다.'
      ]
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[1400px] mx-auto">
          {/* 기술 인프라 섹션 */}
          <div className="mb-32">
            <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold text-gray-800 mb-4 text-center">
              호텔런드리 기술 인프라
            </h2>
            <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] text-gray-700 mb-12 text-center">
              장비부터 앱, 마케팅까지 직접 만드는 원스톱 체계
            </p>
            
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
              {teams.map((team) => (
                <div
                  key={team.id}
                  className="flex flex-col justify-center items-center gap-3 sm:gap-4 w-[280px] sm:w-[300px] md:w-[335px] h-[250px] sm:h-[280px] md:h-[300px] rounded-lg border border-gray-400 bg-white"
                  style={{
                    border: '0.5px solid #666',
                    borderRadius: '8px',
                    background: '#FFF'
                  }}
                >
                  <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[83px] md:h-[83px] flex-shrink-0">
                    <img src={team.icon} alt={team.title} className="w-full h-full" />
                  </div>
                  <h3 
                    className="text-lg sm:text-xl md:text-2xl font-bold text-center px-2"
                    style={{
                      color: '#1C262B',
                      fontFamily: 'KoPubWorldDotum',
                      fontSize: 'clamp(18px, 2.5vw, 28px)',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      lineHeight: 'normal'
                    }}
                  >
                    {team.title}
                  </h3>
                  <p 
                    className="text-sm sm:text-base md:text-lg text-center px-2"
                    style={{
                      color: '#1C262B',
                      textAlign: 'center',
                      fontFamily: 'KoPubWorldDotum',
                      fontSize: 'clamp(14px, 2vw, 20px)',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: 'normal',
                      whiteSpace: 'pre-line'
                    }}
                  >
                    {team.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 새로운 세탁의 가치 섹션 */}
          <div>
            <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold text-gray-800 mb-8 text-center">
              기술, 공간, 일상 - 새로운 세탁의 가치
            </h2>
            
            {/* 콘텐츠 영역 */}
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 items-start">
              {/* 왼쪽 이미지 */}
              <div className="flex-shrink-0 w-full lg:w-auto">
                <img
                  src="/images/CompanyInfo/Company-tech-1.png"
                  alt="호텔런드리 기술 시스템"
                  className="rounded-lg w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-auto"
                  style={{
                    width: 'clamp(300px, 50vw, 500px)',
                    height: 'auto',
                    aspectRatio: '500/330',
                    flexShrink: '0'
                  }}
                />
              </div>

              {/* 오른쪽 콘텐츠 */}
              <div className="flex-1 w-full lg:w-auto">
                {/* 탭 메뉴 */}
                <div 
                  className="flex justify-center items-center mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-3 flex-wrap h-[40px] sm:h-[44px] md:h-[48px] lg:h-[52px] xl:h-[54px] 2xl:h-[56px]"
                  style={{
                    width: 'clamp(300px, 60vw, 863px)',
                    gap: '70px'
                  }}
                >
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="relative text-center mb-3"
                      style={{
                        color: '#1C262B',
                        fontFamily: 'KoPubWorldDotum',
                        fontSize: 'clamp(18px, 2.5vw, 28px)',
                        fontStyle: 'normal',
                        fontWeight: activeTab === tab.id ? '700' : '300',
                        lineHeight: 'normal',
                        letterSpacing: '-0.56px'
                      }}
                    >
                      {tab.title}
                      <div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                        style={{
                          width: '100%',
                          height: '1px',
                          background: activeTab === tab.id ? '#102254' : '#E9E9E9'
                        }}
                      />
                    </button>
                  ))}
                </div>
                
                {/* 탭 메뉴 하단 외곽선 제거 */}

                {/* 콘텐츠 내용 */}
                <div>
                  <h3 
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6"
                    style={{
                      color: '#1C262B',
                      fontFamily: 'KoPubWorldDotum',
                      fontSize: 'clamp(20px, 3vw, 28px)',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      lineHeight: 'normal'
                    }}
                  >
                    {tabContents[activeTab].title}
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {tabContents[activeTab].content.map((paragraph, index) => (
                      <p 
                        key={index}
                        className="text-base sm:text-lg md:text-xl leading-relaxed"
                        style={{
                          color: '#1C262B',
                          fontFamily: 'KoPubWorldDotum',
                          fontSize: 'clamp(16px, 2.5vw, 24px)',
                          fontStyle: 'normal',
                          fontWeight: '300',
                          lineHeight: 'normal',
                          letterSpacing: '-0.48px',
                          whiteSpace: 'pre-line'
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
