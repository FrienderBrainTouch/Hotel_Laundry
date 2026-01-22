import React from 'react';
import { ASSET_URL } from '../../../utils/constants';

const Section1 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 메인 이미지 */}
          <div className="mb-[30px] sm:mb-[30px] md:mb-[30px] lg:mb-[40px] xl:mb-[50px] 2xl:mb-[50px]">
            <img
              src={`${ASSET_URL}/image/banner.jpg`}
              alt="호텔런드리 창업 안내"
              className="mx-auto object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[50px] 2xl:rounded-[50px] w-full h-auto xs:w-[355px] xs:h-[180px] sm:w-[535px] sm:h-[200px] md:w-[728px] md:h-[300px] lg:w-[924px] lg:h-[300px] xl:w-[1200px] xl:h-[350px] 2xl:w-[1400px] 2xl:h-[400px]"
            />
          </div>

          {/* 제목 */}
          <div className="text-center mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px] w-full xs:w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
            <h1 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.48px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px]">
              처음 시작하는 창업, 호텔런드리라면 다릅니다.
            </h1>

            {/* 부제목 */}
            <div className="text-center mx-auto text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-light leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px]">
              <div className="block sm:hidden">
                <p className="mb-8">
                  복잡한 운영 없이도 시작할 수 있는 호텔런드리 창업은 무인 시스템으로 시간과 인력을
                  최소화한 효율적인 모델입니다.
                </p>
                <p>
                  누구나 쉽게 접근할 수 있도록 설계된 창업 구조와 본사의 운영 지원 시스템으로 부담
                  없이 안정적인 매장 운영이 가능합니다.
                </p>
              </div>
              <div className="hidden sm:block lg:hidden">
                <p>
                  복잡한 운영 없이도 시작할 수 있는 호텔런드리 창업은 무인 시스템으로 시간과 인력을
                  최소화한 효율적인 모델입니다.
                </p>
                <p>
                  우리는 단순한 셀프 빨래방이 아닌, <br />
                  고객의 일상에 새로운 라이프스타일을 제안하는 브랜드를 만들고자 합니다.
                </p>
                <p>
                  누구나 쉽게 접근할 수 있도록 설계된 창업 구조와 본사의 운영 지원 시스템으로 부담
                  없이 안정적인 매장 운영이 가능합니다.
                </p>
              </div>
              <div className="hidden lg:block xl:hidden">
                <p>
                  복잡한 운영 없이도 시작할 수 있는 호텔런드리 창업은 무인 시스템으로 시간과 인력을
                  최소화한 효율적인 모델입니다.
                </p>
                <p>
                  우리는 단순한 셀프 빨래방이 아닌, 고객의 일상에 새로운 라이프스타일을 제안하는
                  브랜드를 만들고자 합니다.
                </p>
                <p>
                  누구나 쉽게 접근할 수 있도록 설계된 창업 구조와 본사의 운영 지원 시스템으로 부담
                  없이 안정적인 매장 운영이 가능합니다.
                </p>
              </div>
              <div className="hidden xl:block">
                <p>
                  복잡한 운영 없이도 시작할 수 있는 호텔런드리 창업은 무인 시스템으로 시간과 인력을
                  최소화한 효율적인 모델입니다.
                </p>
                <p>
                  우리는 단순한 셀프 빨래방이 아닌, 고객의 일상에 새로운 라이프스타일을 제안하는
                  브랜드를 만들고자 합니다.
                </p>
                <p>
                  누구나 쉽게 접근할 수 있도록 설계된 창업 구조와 본사의 운영 지원 시스템으로 부담
                  없이 안정적인 매장 운영이 가능합니다.
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
