import React from 'react';

const Section2 = () => {
  return (
    <section className="w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-blue-50">
      {/* 내부 텍스트는 가독성을 위해 다시 중앙 컨테이너 안에 배치합니다. */}
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 text-center">
        <p cclassName="font-KoPubWorldDotum text-24 sm:section-title">
          4년간 쌓아온 누적 매장 수는 숫자를 넘어 신뢰의 지표입니다.
          <br />
          매년 지속적으로 늘어난 결과는 고객과 창업자가 모두 증명하고 있습니다.
        </p>
      </div>
    </section>
  );
};

export default Section2;
