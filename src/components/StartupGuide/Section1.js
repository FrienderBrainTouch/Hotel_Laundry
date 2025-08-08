import React from 'react';
import section1MainImage from './StartupGuideImage/section1_main.svg';
import homeIcon from '../StoreInfo/common/home.svg';

const Section1 = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white">
      <div className="flex justify-center">
        <div className="max-w-8xl mx-auto">
          {/* 브레드크럼 */}
          <div className="mb-6 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-2 sm:gap-4 font-pretendard">
              <img src={homeIcon} alt="홈" />
              <span className="text-brand-dark text-20">/</span>
              <span className="text-brand-dark text-20">창업안내</span>
            </div>
          </div>

          {/* 메인 이미지 */}
          <div className="mb-8 sm:mb-10">
            <img 
              src={section1MainImage} 
              alt="호텔런드리 창업 안내" 
              className="w-full max-w-[1400px] h-[320px] sm:h-[340px] md:h-[360px] lg:h-[380px] xl:h-[400px] object-contain rounded-lg mx-auto"
            />
          </div>

          {/* 제목 */}
          <div className="text-center mb-8 sm:mb-10">
            <h1 
              className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-normal mb-6 sm:mb-8 md:mb-10"
              style={{
                color: '#1C262B',
                fontFamily: 'KoPubWorldDotum, sans-serif',
                fontWeight: 700,
                lineHeight: 'normal'
              }}
            >
              처음 시작하는 창업, 호텔런드리라면 다릅니다.
            </h1>

            {/* 부제목 */}
            <div 
              className="text-center mx-auto"
              style={{
                color: '#1C262B',
                fontFamily: 'KoPubWorldDotum, sans-serif',
                fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.5rem)',
                fontWeight: 300,
                lineHeight: 'normal',
                letterSpacing: '-0.48px'
              }}
            >
              <p className="mb-3 sm:mb-4">
                복잡한 운영 없이도 시작할 수 있는 호텔런드리 창업은 무인 시스템으로 시간과 인력을 최소화한 효율적인 모델입니다.
              </p>
              <p>
                누구나 쉽게 접근할 수 있도록 설계된 창업 구조와 본사의 운영 지원 시스템으로 부담 없이 안정적인 매장 운영이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
