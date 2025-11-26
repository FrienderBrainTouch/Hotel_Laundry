import React from 'react';
import { ASSET_URL } from '../../../utils/constants';
// import ServiceOverview from './ServiceOverview';
// import HowItWorks from './HowItWorks';

const SameDayPickup = () => {
  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 메인 콘텐츠 */}
          {/* <div>
            <ServiceOverview />
            <HowItWorks />
          </div> */}

          {/* 준비중 메시지 */}
          <div className="text-center py-16">
            {/* 이미지 */}
            <div className="mb-4 bg-white rounded-lg p-4">
              <img
                src={`${ASSET_URL}/image/pickUpServiceV3.png`}
                alt="당일 수거 서비스"
                className="mx-auto max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
                style={{
                  background: 'white',
                  borderRadius: '8px',
                }}
              />
            </div>

            {/* 텍스트 */}
            <h2
              className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] font-[700] text-[#1C262B] mb-6"
              style={{ fontFamily: 'KoPubWorldBatang' }}
            >
              당일 수거 서비스는 현재 준비중입니다.
            </h2>
            <p
              className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-[500] text-[#666666]"
              style={{ fontFamily: 'KoPubWorldDotum' }}
            >
              더 나은 서비스로 찾아뵙겠습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SameDayPickup;
