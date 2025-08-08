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
      subtitle: '가맹 오픈 마케팅,\nSNS 홍보, 운영 전략 지원',
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
        '호텔런드리는 IoT 기반 장비 제어, 키오스크 결제, 모바일 앱 예약 기능 등\n전 과정을 자동화한 시스템으로 운영의 부담을 최소화합니다.',
        '인건비 없이도 안정적인 매장 운영이 가능하며, 점주는 원격으로 상태를 관리하고\n고객은 대기 없이 세탁을 경험할 수 있습니다.'
      ]
    },
    space: {
      title: '호텔처럼 머물고 싶은 세탁 공간',
      content: [
        '단순한 세탁소가 아닌, 고객이 머무르고 싶은 공간을 설계합니다.',
        '쾌적한 조명, 공기질, 향까지 고려한 공간은 브랜드의 얼굴이자 고객 경험의 핵심입니다.\n매장에 들어서는 순간부터 퇴장할 때까지, 감성적인 공간이 브랜드의 프리미엄 가치를\n완성합니다.'
      ]
    },
    brand: {
      title: '모든 기술을 직접 설계하는 독립형 브랜드',
      content: [
        '호텔런드리는 외부 시스템에 의존하지 않고, 자체 개발한 세탁기 제어 시스템, 앱,\n키오스크, 마케팅 플랫폼까지 모든 운영 인프라를 직접 설계하고 보유하고 있습니다.',
        '기술의 자립성이 곧 운영의 신뢰로 이어지며, 브랜드의 지속 가능성을 뒷받침합니다.'
      ]
    },
    trust: {
      title: '고객과 창업자 모두에게 신뢰받는 브랜드',
      content: [
        '반복 이용률이 높은 고객, 오픈 후 안정적인 수익을 경험하는 점주,\n그리고 빠른 대응과 끊김 없는 운영 지원.',
        '호텔런드리는 서비스 하나하나에 "신뢰"를 가장 중요한 가치로 둡니다.\n믿고 찾는 브랜드가 되는 것, 그것이 호텔런드리의 핵심 철학입니다.'
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto">
              {teams.map((team) => (
                <div
                  key={team.id}
                  className="flex flex-col justify-center items-center gap-2 sm:gap-3 p-3 sm:p-4 h-[200px] sm:h-[220px] lg:h-[250px] rounded-lg border border-gray-400 bg-white"
                  style={{
                    border: '0.5px solid #666',
                    borderRadius: '8px',
                    background: '#FFF'
                  }}
                >
                  <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] flex-shrink-0">
                    <img src={team.icon} alt={team.title} className="w-full h-full" />
                  </div>
                  <h3 
                    className="text-base sm:text-lg lg:text-xl font-bold text-center px-2"
                    style={{
                      color: '#1C262B',
                      fontFamily: 'KoPubWorldDotum',
                      fontSize: 'clamp(16px, 2.5vw, 24px)',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      lineHeight: 'normal'
                    }}
                  >
                    {team.title}
                  </h3>
                  <p 
                    className="text-xs sm:text-sm lg:text-base text-center px-2"
                    style={{
                      color: '#1C262B',
                      textAlign: 'center',
                      fontFamily: 'KoPubWorldDotum',
                      fontSize: 'clamp(12px, 2vw, 18px)',
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
          <div className='flex flex-col items-center'>
            <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold text-gray-800 mb-8 text-center">
              기술, 공간, 일상 - 새로운 세탁의 가치
            </h2>
            
            {/* 콘텐츠 영역 */}
            <div className="flex flex-col 2xl:flex-row gap-8 sm:gap-10 md:gap-12 items-start">
              {/* 상단 이미지 (xl 이하) / 왼쪽 이미지 (2xl) */}
              <div className="flex-shrink-0 w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-auto order-1 2xl:order-1">
                <img
                  src="/images/CompanyInfo/Company-tech-1.png"
                  alt="호텔런드리 기술 시스템"
                  className="rounded-lg w-full h-auto hidden 2xl:block"
                />
                <img
                  src="/images/CompanyInfo/Company-Tech-2.png"
                  alt="호텔런드리 기술 시스템"
                  className="rounded-lg w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[250px] xl:h-[300px] 2xl:h-auto block 2xl:hidden object-cover"
                />
              </div>

              {/* 오른쪽 콘텐츠 */}
              <div className="flex-1 w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-auto order-2 2xl:order-2">
                {/* 탭 메뉴 - xs 모바일 드래그 버전 */}
                <div 
                  className="flex items-center mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-3 h-[50px] sm:h-[44px] md:h-[48px] lg:h-[52px] xl:h-[54px] 2xl:h-[56px] w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-auto overflow-x-auto flex-nowrap gap-[10px] xs:flex sm:hidden"
                  style={{
                    gap: '10px',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {tabs.map((tab) => (
                    <button
                      key={`xs-${tab.id}`}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-row justify-center items-center px-[10px] py-[5px] rounded-[50px] flex-shrink-0 text-[20px] font-light text-[#1C262B] w-[180px] whitespace-nowrap ${
                        activeTab === tab.id 
                          ? 'text-white font-bold border border-white bg-[#102254]' 
                          : 'text-[#1C262B] font-light border-[0.5px] border-[#102256] bg-white'
                      }`}
                      style={{
                        fontFamily: 'KoPubWorldDotum',
                        fontStyle: 'normal',
                        lineHeight: 'normal'
                      }}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>

                {/* 탭 메뉴 - sm 이상 기존 버전 */}
                <div 
                  className="hidden sm:flex justify-between items-center self-stretch mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-3 h-[40px] sm:h-[44px] md:h-[48px] lg:h-[52px] xl:h-[54px] 2xl:h-[56px] w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-auto"
                >
                  {tabs.map((tab) => (
                    <button
                      key={`sm-${tab.id}`}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative text-center mb-3 px-2 ${
                        tab.title.length > 4 ? 'min-w-[120px]' : 'min-w-[100px]'
                      }`}
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
                <div className="w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-auto">
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
                        <span className="xs:hidden sm:inline">{paragraph}</span>
                        <span className="xs:inline sm:hidden">{paragraph.replace(/\n/g, ' ')}</span>
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
