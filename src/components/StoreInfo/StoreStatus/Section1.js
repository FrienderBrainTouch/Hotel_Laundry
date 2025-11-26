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
              alt="호텔런드리 매장 현황"
              className="mx-auto object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[50px] 2xl:rounded-[50px] w-full h-auto xs:w-[355px] xs:h-[180px] sm:w-[535px] sm:h-[200px] md:w-[728px] md:h-[300px] lg:w-[924px] lg:h-[300px] xl:w-[1200px] xl:h-[350px] 2xl:w-[1400px] 2xl:h-[400px]"
            />
          </div>

          {/* 제목 */}
          <div className="text-center mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px] w-full xs:w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
            <h1 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.48px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px]">
              지금 이 순간에도, 전국에서 운영되고 있습니다.
            </h1>

            {/* 부제목 */}
            <div className="text-center mx-auto text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-light leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px]">
              <p className="mb-8">
                호텔런드리는 서울, 경기, 수도권을 비롯해 전국 각지에서 지속적으로 매장을 오픈하여
                무인 세탁 시장을 선도하고 있습니다.
              </p>
              <p>
                전국 매장이 꾸준히 늘어나는 동시에, <span className="font-semibold">폐점율 0%</span>
                의 기록을 유지하고 있습니다.
              </p>
            </div>
          </div>

          {/* 차트와 지도 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={`${ASSET_URL}/StoreListImage/ListChartImage.svg`}
                alt="전국 매장 현황 이미지"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={`${ASSET_URL}/StoreListImage/ListMap.svg`}
                alt="전국 매장 현황 이미지"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
