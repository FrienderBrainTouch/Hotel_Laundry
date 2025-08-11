import React from 'react';

const Section2 = () => {
  return (
    <section className="w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-blue-50 py-16">
      {/* 내부 텍스트는 가독성을 위해 다시 중앙 컨테이너 안에 배치합니다. */}
      <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto text-center">
        <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-medium text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.36px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.64px] 2xl:tracking-[-0.64px]">
          4년간 쌓아온 누적 매장 수는 숫자를 넘어 신뢰의 지표입니다.
          <br />
          매년 지속적으로 늘어난 결과는 고객과 창업자가 모두 증명하고 있습니다.
        </p>
      </div>
    </section>
  );
};

export default Section2;
