import React from 'react';
import homeIcon from '../StoreInfo/common/home.svg';

const IoTOverview = () => {

  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="max-w-8xl mx-auto">
          {/* 브레드크럼 */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-2 sm:gap-4 font-pretendard">
              <img src={homeIcon} alt="홈" />
              <span className="text-brand-dark text-20">/</span>
              <span className="text-brand-dark text-20">호텔런드리</span>
              <span className="text-brand-dark text-20">/</span>
              <span className="text-brand-dark text-20">스마트 시스템</span>
            </div>
          </div>

          {/* 메인 이미지 */}
          <div className="mb-12">
            <img 
              src="/images/SmartSystem/Smart-1.png" 
              alt="IoT 스마트 시스템" 
              className="w-full max-w-[1400px] h-[400px] object-cover rounded-lg mx-auto"
            />
          </div>

          {/* 제목 */}
          <div className="text-center mb-10">
            <h1 
              className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] mb-8"
              style={{
                color: '#1C262B',
                fontFamily: 'KoPubWorldDotum',
                fontSize: '40px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal'
              }}
            >
              IoT와 AI로 더 똑똑해진 프리미엄 세탁 시스템
            </h1>

            {/* 부제목 */}
            <div 
              className="text-center mx-auto text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]"
              style={{
                color: '#1C262B',
                textAlign: 'center',
                fontFamily: 'KoPubWorldDotum',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: 300,
                lineHeight: 'normal'
              }}
            >
              <p>
                호텔런드리의 스마트 시스템은 점주의 운영 효율을 높이기 위해 설계되었습니다.
              </p>
              <p>
                IoT 기반 원격제어 기능으로 기기 문제가 발생해도 본사에서 즉시 조치가 가능하며, 스마트폰 하나로 매장 관리가 가능합니다.
              </p>
              <p>
                AI 운영시스템은 시간대별 자동 할인 및 리포트 제공 기능을 통해 장비 가동률과 수익 향상을 지원합니다.
              </p>
              <p>
                처음 시작하는 1인 창업자도 안정적으로 운영할 수 있도록 돕는 스마트 세탁 솔루션입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTOverview;
