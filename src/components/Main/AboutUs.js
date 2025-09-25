import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: 'main-service-1.svg',
      title: '셀프 드라이클리닝',
      path: '/equipment/self-dry-cleaning',
      subtitle: {
        xs: '빨래방과 드라이클리닝을 하나로\n경제성을 극대화 했습니다',
        sm: '빨래방과 드라이클리닝을 하나로\n경제성을 극대화 했습니다',
        md: '빨래방과 드라이클리닝을 하나로\n경제성을 극대화 했습니다',
        lg: '빨래방과 드라이클리닝을 하나로\n경제성을 극대화 했습니다',
        xl: '빨래방과 드라이클리닝을 하나로\n경제성을 극대화 했습니다',
        '2xl': '빨래방과 드라이클리닝을 하나로\n경제성을 극대화 했습니다',
      },
    },
    {
      icon: 'main-service-2.svg',
      title: '첨단 기술',
      path: '/smart-system/advanced-technology',
      subtitle: {
        xs: 'IOT원격제어와 AI운영관리 시스템으로\n완전한 무인운영이 가능',
        sm: 'IOT원격제어와 AI운영관리 시스템으로\n완전한 무인운영이 가능',
        md: 'IOT원격제어와 AI운영관리 시스템으로\n완전한 무인운영이 가능',
        lg: 'IOT원격제어와 AI운영관리 시스템으로\n  완전한 무인운영이 가능',
        xl: 'IOT원격제어와 AI운영관리\n 시스템으로 완전한 무인운영이 가능',
        '2xl': 'IOT원격제어와 AI운영관리 시스템으로\n완전한 무인운영이 가능',
      },
    },
    {
      icon: 'main-service-3.svg',
      title: '청결 메커니즘',
      path: '/smart-system/status-management',
      subtitle: {
        xs: '모든 세탁, 헹굼 과정에서\n자동 투입하는 Hol 살균수',
        sm: '모든 세탁, 헹굼 과정에서\n자동 투입하는 Hol 살균수',
        md: '모든 세탁, 헹굼 과정에서\n자동 투입하는 Hol 살균수',
        lg: '모든 세탁, 헹굼 과정에서\n자동 투입하는 Hol 살균수',
        xl: '모든 세탁, 헹굼 과정에서\n자동 투입하는 Hol 살균수',
        '2xl': '모든 세탁, 헹굼 과정에서\n자동 투입하는 Hol 살균수',
      },
    },
    {
      icon: 'main-service-4.svg',
      title: '지역 플랫폼',
      path: '/app-guide/local-platform',
      subtitle: {
        xs: '호텔런드리 각 매장을 중심으로\n인근 상가 커뮤니티 제공',
        sm: '호텔런드리 각 매장을 중심으로\n인근 상가 커뮤니티 제공',
        md: '호텔런드리 각 매장을 중심으로\n인근 상가 커뮤니티 제공',
        lg: '호텔런드리 각 매장을 중심으로\n인근 상가 커뮤니티 제공',
        xl: '호텔런드리 각 매장을 중심으로\n인근 상가 커뮤니티 제공',
        '2xl': '호텔런드리 각 매장을 중심으로\n인근 상가 커뮤니티 제공',
      },
    },
  ];

  const handleFeatureClick = (path) => {
    navigate(path);
  };

  const renderSubtitle = (subtitle) => {
    return (
      <>
        <span className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
          {subtitle.xs.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < subtitle.xs.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
        <span className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
          {subtitle.sm.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < subtitle.sm.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
        <span className="hidden md:block lg:hidden xl:hidden 2xl:hidden">
          {subtitle.md.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < subtitle.md.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
        <span className="hidden lg:block xl:hidden 2xl:hidden">
          {subtitle.lg.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < subtitle.lg.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
        <span className="hidden xl:block 2xl:hidden">
          {subtitle.xl.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < subtitle.xl.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
        <span className="hidden 2xl:block">
          {subtitle['2xl'].split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < subtitle['2xl'].split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
      </>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="w-full">
        {/* Title and Subtitle */}
        <div className="text-center mb-[20px] sm:mb-[18px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[35px]">
          <h2
            className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-[500] text-[#1C262B] text-center leading-[normal] tracking-[-0.44px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-[-0.8px] mb-[5px] sm:mb-[6px] md:mb-[12px] lg:mb-[12px] xl:mb-[12px] 2xl:mb-[12px]"
            style={{ fontFamily: 'KoPubWorldBatang' }}
          >
            About Us
          </h2>
          <p
            className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-[500] text-[#1C262B] mx-auto leading-[normal] text-center tracking-[-0.36px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.56px] 2xl:tracking-[-0.64px]"
            style={{ fontFamily: 'KoPubWorldDotum' }}
          >
            <span className="block sm:hidden">
              첨단기술을 기반으로 하이엔드 라이프스타일
              <br />
              서비스를 제공하는 셀프 세탁 브랜드입니다.
            </span>
            <span className="hidden sm:block md:hidden">
              첨단기술을 기반으로 하이엔드 라이프스타일
              <br />
              서비스를 제공하는 셀프 세탁 브랜드입니다.
            </span>
            <span className="hidden md:block lg:hidden">
              첨단기술을 기반으로 하이엔드 라이프스타일
              <br />
              서비스를 제공하는 셀프 세탁 브랜드입니다.
            </span>
            <span className="hidden md:hidden lg:block">
              첨단기술을 기반으로 하이엔드 라이프스타일
              <br />
              서비스를 제공하는 셀프 세탁 브랜드입니다.
            </span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="bg-gray-100 py-16 w-full">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-0 w-full relative">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative w-full h-[200px] sm:w-[300px] sm:h-[200px] md:w-[390px] md:h-[250px] lg:w-[430px] lg:h-[320px] xl:w-auto xl:h-auto 2xl:w-auto 2xl:h-auto mx-auto flex items-center justify-center cursor-pointer hover:shadow-[4px_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out rounded-lg"
                  onClick={() => handleFeatureClick(feature.path)}
                >
                  <div className="text-center px-8 sm:px-4 md:px-8">
                    <div className=" flex justify-center">
                      <img
                        src={`/images/main-Images/${feature.icon}`}
                        alt={feature.title}
                        className="w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-[93px] xl:h-[93px] 2xl:w-[118px] 2xl:h-[118px]"
                      />
                    </div>
                    <h3
                      className="text-[20px] sm:text-[22px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-[#1C262B] leading-[normal] tracking-[-0.4px] sm:tracking-[-0.44px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.52px] 2xl:tracking-[-0.56px] mb-[10px] sm:mb-[10px] md:mb-[10px] lg:mb-[10px] xl:mb-[12px] 2xl:mb-[12px]"
                      style={{ fontFamily: 'KoPubWorldDotum' }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-[15px] sm:text-[14px] md:text-[15px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px] font-medium text-[#1C262B] text-center leading-[normal] tracking-[-0.3px] sm:tracking-[-0.36px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px]"
                      style={{ fontFamily: 'KoPubWorldDotum' }}
                    >
                      {renderSubtitle(feature.subtitle)}
                    </p>
                  </div>
                </div>
              ))}

              {/* Vertical dividers for horizontal layouts (sm, lg, xl, 2xl) */}
              {/* Between 1-2 for 2x2 layout (sm, lg) */}
              <div
                className="hidden sm:block lg:block xl:hidden 2xl:hidden absolute top-0 left-1/2 bg-[#D4D4D4]"
                style={{ width: '1px', height: '100%', transform: 'translateX(-50%)' }}
              ></div>

              {/* Between 1-2, 2-3, 3-4 for 4x1 layout (xl, 2xl) */}
              <div
                className="hidden xl:block 2xl:block absolute top-0 left-1/4 bg-[#D4D4D4]"
                style={{ width: '1px', height: '100%', transform: 'translateX(-50%)' }}
              ></div>
              <div
                className="hidden xl:block 2xl:block absolute top-0 left-2/4 bg-[#D4D4D4]"
                style={{ width: '1px', height: '100%', transform: 'translateX(-50%)' }}
              ></div>
              <div
                className="hidden xl:block 2xl:block absolute top-0 left-3/4 bg-[#D4D4D4]"
                style={{ width: '1px', height: '100%', transform: 'translateX(-50%)' }}
              ></div>

              {/* Horizontal dividers for vertical layout (xs) */}
              <div
                className="block sm:hidden absolute top-[200px] left-0 right-0 bg-[#D4D4D4]"
                style={{ height: '1px' }}
              ></div>
              <div
                className="block sm:hidden absolute top-[400px] left-0 right-0 bg-[#D4D4D4]"
                style={{ height: '1px' }}
              ></div>
              <div
                className="block sm:hidden absolute top-[600px] left-0 right-0 bg-[#D4D4D4]"
                style={{ height: '1px' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
