import React from 'react';

const Section1 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 메인 이미지 */}
          <div className="mb-[30px] sm:mb-[30px] md:mb-[30px] lg:mb-[40px] xl:mb-[50px] 2xl:mb-[50px]">
            <img
              src="/images/CompanyInfo/Company-1.png"
              alt="호텔런드리 세탁기"
              className="mx-auto object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[50px] 2xl:rounded-[50px] w-full h-auto xs:w-[355px] xs:h-[180px] sm:w-[535px] sm:h-[200px] md:w-[728px] md:h-[300px] lg:w-[924px] lg:h-[300px] xl:w-[1200px] xl:h-[350px] 2xl:w-[1400px] 2xl:h-[400px]"
            />
          </div>

          {/* 제목 */}
          <div className="text-center mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px] w-full xs:w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
            <h1 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.48px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px]">
              <span className="block 2xl:hidden">우리는 기술로 세탁의 기준을 만듭니다.</span>
              <span className="hidden 2xl:block">우리는 기술로 세탁의 새로운 기준을 만듭니다.</span>
            </h1>

            {/* 구분선 */}
            <div
              className="mx-auto mb-[50px]"
              style={{
                width: '50px',
                height: '5px',
                background: '#102254',
              }}
            ></div>

            {/* 부제목 */}
            <div className="text-center mx-auto text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-light leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px]">
              <div className="block sm:hidden">
                <p className="mb-8">
                  호텔런드리는 분야별 전문가들이 모여 설립한 프리미엄 세탁 브랜드입니다. 우리는
                  단순한 셀프 빨래방이 아닌, 고객의 일상에 새로운 라이프스타일을 제안하는 브랜드를
                  만들고자 합니다.
                </p>
                <p>
                  4차 산업혁명 시대에 맞는 IoT 기반 시스템과 스마트 자동화 기술을 바탕으로, 세탁
                  서비스의 미래를 선도하며 세계 시장을 향해 나아갑니다.
                </p>
              </div>
              <div className="hidden sm:block lg:hidden">
                <p>호텔런드리는 분야별 전문가들이 모여 설립한 프리미엄 세탁 브랜드입니다.</p>
                <p>
                  우리는 단순한 셀프 빨래방이 아닌, <br />
                  고객의 일상에 새로운 라이프스타일을 제안하는 브랜드를 만들고자 합니다.
                </p>
                <p>
                  4차 산업혁명 시대에 맞는 IoT 기반 시스템과 스마트 자동화 기술을 바탕으로, 세탁
                  서비스의 미래를 선도하며 세계 시장을 향해 나아갑니다.
                </p>
              </div>
              <div className="hidden lg:block xl:hidden">
                <p>호텔런드리는 분야별 전문가들이 모여 설립한 프리미엄 세탁 브랜드입니다.</p>
                <p>
                  우리는 단순한 셀프 빨래방이 아닌, 고객의 일상에 새로운 라이프스타일을 제안하는
                  브랜드를 만들고자 합니다.
                </p>
                <p>
                  4차 산업혁명 시대에 맞는 IoT 기반 시스템과 스마트 자동화 기술을 바탕으로, <br />
                  세탁 서비스의 미래를 선도하며 세계 시장을 향해 나아갑니다.
                </p>
              </div>
              <div className="hidden xl:block">
                <p>호텔런드리는 분야별 전문가들이 모여 설립한 프리미엄 세탁 브랜드입니다.</p>
                <p>
                  우리는 단순한 셀프 빨래방이 아닌, 고객의 일상에 새로운 라이프스타일을 제안하는
                  브랜드를 만들고자 합니다.
                </p>
                <p>
                  4차 산업혁명 시대에 맞는 IoT 기반 시스템과 스마트 자동화 기술을 바탕으로, 세탁
                  서비스의 미래를 선도하며 세계 시장을 향해 나아갑니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
