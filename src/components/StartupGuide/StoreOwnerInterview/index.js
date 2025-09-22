import React from 'react';
import InterviewVideo from './InterviewVideo';
import RevenueComparison from './RevenueComparison';
import SuccessStories from './SuccessStories';

const StoreOwnerInterview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 메인 콘텐츠 */}
          <div className="text-center">
            <h1 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.48px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px]">
              점주 인터뷰
            </h1>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] text-gray-600 mb-12 font-KoPubWorldDotum">
              실제 호텔런드리 점주들의 생생한 경험담을 들어보세요
            </p>

            {/* 인터뷰 콘텐츠 영역 */}
            <div className="space-y-0">
              <InterviewVideo />
              <RevenueComparison />
              <SuccessStories />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreOwnerInterview;
