import React from 'react';

const WhyHotelLaundry = () => {
  return (
    <section className="w-full py-20 bg-white">
      {/* 상단 제목 섹션 */}
      <div className="mb-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-medium text-[#1C262B] mb-4" style={{ fontFamily: 'KoPubWorldBatang' }}>
            Why Hotel Laundry
          </h2>
          <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-medium text-[#1C262B]" style={{ fontFamily: 'KoPubWorldDotum' }}>
            이런 고민, 해본 적 있나요?
          </p>
        </div>
      </div>

      {/* 배경 이미지 섹션 */}
      <div className="mb-10">
        <div className="flex items-center justify-center">
          <picture className="w-full 2xl:h-[430px] object-cover opacity-15">
            <source media="(min-width: 1536px)" srcSet="/images/main-Images/main-second-1920.png" />
            <source media="(min-width: 1280px)" srcSet="/images/main-Images/main-second-1440.png" />
            <source media="(min-width: 1024px)" srcSet="/images/main-Images/main-second-1024.png" />
            <source media="(min-width: 768px)" srcSet="/images/main-Images/main-second-768.png" />
            <source media="(min-width: 640px)" srcSet="/images/main-Images/main-second-575.png" />
            <source media="(min-width: 375px)" srcSet="/images/main-Images/main-second-375.png" />
            <img 
              src="/images/main-Images/main-second-375.png" 
              alt="Main Second Background" 
              className="w-full 2xl:h-[430px] object-cover opacity-15"
            />
          </picture>
        </div>
      </div>

      {/* 하단 결론 섹션 */}
      <div>
        <div className="px-4 text-center">
          <div className="w-full">
            <p className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium text-[#1C262B]" style={{ fontFamily: 'KoPubWorldDotum' }}>
              이제는 매장을 '직접 운영'하는 시대가 아닙니다.
            </p>
            <p className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium text-[#1C262B]" style={{ fontFamily: 'KoPubWorldDotum' }}>
              고객 응대, 운영, 마케팅, 본사 관리까지<br className="sm:hidden" />{' '}
              <span className="font-bold text-[#102254]">'완전 자동화'</span>에 가까운{' '}
              <span className="font-bold text-[#102254]">시스템</span>을 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHotelLaundry; 