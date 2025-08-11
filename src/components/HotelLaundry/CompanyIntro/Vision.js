import React from 'react';

const Section4 = () => {
  return (
    <section 
      className="py-16 relative"
      style={{
        backgroundImage: 'url(/images/CompanyInfo/Company-gradient.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="
          w-full xs:max-w-[340px]  mx-auto text-center
          sm:max-w-[383px]
          md:max-w-[715px]
          lg:max-w-[890px]
          xl:max-w-[965px]
          2xl:max-w-[1039px]
        ">
          {/* 로고 */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/images/logo.svg" 
              alt="Hotel Laundry Logo"
              className="
                w-[108px] h-[67px] flex-shrink-0
                sm:w-[108px] sm:h-[67px]
                md:w-[108px] md:h-[67px]
                lg:w-[137px] lg:h-[85px]
                xl:w-[145px] xl:h-[90px]
                2xl:w-[145px] 2xl:h-[90px]
              "
              style={{
                aspectRatio: '29/18'
              }}
            />
          </div>
          
          {/* 텍스트 내용 */}
          <div className="text-white">
            <p 
              className="
                text-white text-center font-['KoPubWorldDotum'] text-[16px] font-medium leading-normal tracking-[-0.32px]
                sm:text-[18px] sm:tracking-[-0.36px]
                md:text-[22px] md:tracking-[-0.44px]
                lg:text-[24px] lg:tracking-[-0.48px]
                xl:text-[26px] xl:tracking-[-0.52px]
                2xl:text-[28px] 2xl:tracking-[-0.56px]
              "
            >
              {/* xs (기본) */}
              <span className="block sm:hidden">
                호텔런드리는 세탁을 고객에게는 편안한 라이프스타일, 창업자에게는 안정적인 비즈니스 모델로 제안합니다.
                <br />
                머물고 싶은 공간, 믿고 맡길 수 있는 서비스, 
                <br />
                누구나 쉽게 운영할 수 있는 시스템까지.
                <br />
                호텔런드리는 세탁의 모든 과정을 스마트하게{' '}
                <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[16px] font-bold leading-normal tracking-[-0.32px]
                  "
                >
                  설계
                </span>
                하고 브랜드 가치를{' '}
                <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[16px] font-bold leading-normal tracking-[-0.32px]
                  "
                >
                  공간
                </span>
                과{' '}
                <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[16px] font-bold leading-normal tracking-[-0.32px]
                  "
                >
                  기술
                </span>
                로 완성합니다.
              </span>
              
              {/* sm */}
              <span className="hidden sm:block md:hidden">
                호텔런드리는 세탁을 고객에게는 편안한 라이프스타일, 창업자에게는 안정적인 비즈니스 모델로 제안합니다.
                <br />
                머물고 싶은 공간, 믿고 맡길 수 있는 서비스, 
                <br />
                누구나 쉽게 운영할 수 있는 시스템까지.
              <br />
                호텔런드리는 세탁의 모든 과정을 스마트하게{' '}
                <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[18px] font-bold leading-normal tracking-[-0.36px]
                  "
                >
                  설계
                </span>
                하고 브랜드 가치를{' '}
                <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[18px] font-bold leading-normal tracking-[-0.36px]
                  "
                >
                  공간
                </span>
                과{' '}
                <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[18px] font-bold leading-normal tracking-[-0.36px]
                  "
                >
                  기술
                </span>
                로 완성합니다.
              </span>
              
              {/* md */}
              <span className="hidden md:block lg:hidden">
                호텔런드리는 세탁을 단순한 가사노동이 아닌 고객에게는 편안한 라이프스타일,<br />창업자에게는 안정적인 비즈니스 모델로 제안합니다.
                <br />
                머물고 싶은 공간, 믿고 맡길 수 있는 서비스, 누구나 쉽게 운영할 수 있는 시스템까지.
                <br />
                호텔런드리는 세탁의 모든 과정을 스마트하게{' '}
                <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[22px] font-bold leading-normal tracking-[-0.44px]
                  "
                >
                  설계
                </span>
                <br />하고 브랜드 가치를{' '}
                <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[22px] font-bold leading-normal tracking-[-0.44px]
                  "
                >
                  공간
                </span>
                과{' '}
                <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[22px] font-bold leading-normal tracking-[-0.44px]
                  "
                >
                  기술
                </span>
                로 완성합니다.
              </span>
              
              {/* lg */}
              <span className="hidden lg:block xl:hidden">
                호텔런드리는 세탁을 단순한 가사노동이 아닌 고객에게는 편안한 라이프스타일,<br /> 창업자에게는 안정적인 비즈니스 모델로 제안합니다.
                <br />
              머물고 싶은 공간, 믿고 맡길 수 있는 서비스, 누구나 쉽게 운영할 수 있는 시스템까지.
                <br />
                호텔런드리는 세탁의 모든 과정을 스마트하게{' '}
                <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[24px] font-bold leading-normal tracking-[-0.48px]
                  "
                >
                  설계
                </span>
                하고 브랜드 가치를{' '}
                <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[24px] font-bold leading-normal tracking-[-0.48px]
                  "
                >
                  공간
                </span>
                과{' '}
                <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[24px] font-bold leading-normal tracking-[-0.48px]
                  "
                >
                  기술
                </span>
                로 완성합니다.
              </span>
              
              {/* xl */}
              <span className="hidden xl:block 2xl:hidden">
                호텔런드리는 세탁을 단순한 가사노동이 아닌 고객에게는 편안한 라이프스타일,<br />창업자에게는 안정적인 비즈니스 모델로 제안합니다.
                <br />
                머물고 싶은 공간, 믿고 맡길 수 있는 서비스, 누구나 쉽게 운영할 수 있는 시스템까지.
                <br />
                호텔런드리는 세탁의 모든 과정을 스마트하게{' '}
                <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[26px] font-bold leading-normal tracking-[-0.52px]
                  "
                >
                  설계
                </span>
                하고 브랜드 가치를{' '}
                <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[26px] font-bold leading-normal tracking-[-0.52px]
                  "
                >
                  공간
                </span>
                과{' '}
                <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[26px] font-bold leading-normal tracking-[-0.52px]
                  "
                >
                  기술
                </span>
                로 완성합니다.
              </span>
              
              {/* 2xl */}
              <span className="hidden 2xl:block">
                호텔런드리는 세탁을 단순한 가사노동이 아닌 고객에게는 편안한 라이프스타일,<br /> 창업자에게는 안정적인 비즈니스 모델로 제안합니다.
                <br />
                머물고 싶은 공간, 믿고 맡길 수 있는 서비스, 누구나 쉽게 운영할 수 있는 시스템까지.
                <br />
              호텔런드리는 세탁의 모든 과정을 스마트하게{' '}
              <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[28px] font-bold leading-normal tracking-[-0.56px]
                  "
              >
                설계
              </span>
              하고 브랜드 가치를{' '}
              <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[28px] font-bold leading-normal tracking-[-0.56px]
                  "
              >
                공간
              </span>
              과{' '}
              <span 
                  className="
                    text-[#102254] font-['KoPubWorldDotum'] text-[28px] font-bold leading-normal tracking-[-0.56px]
                  "
              >
                기술
              </span>
              로 완성합니다.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
