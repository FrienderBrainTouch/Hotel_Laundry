import React from 'react';
import section1MainImage from './StartupGuideImage/section1_main.svg';
import homeIcon from '../StoreInfo/common/home.svg';
import circleChart from './StartupGuideImage/circle2.svg';
import lineChart from './StartupGuideImage/line_chart2.svg';
import barChart from './StartupGuideImage/bar2.svg';

const StartupGuide = () => {
  return (
    // 💡 1. 이 div가 StartupGuide 페이지의 전체 레이아웃을 책임집니다.
    // App.js에서 못해준 헤더와의 간격(pt-24)을 여기서 확보합니다.
    <div className="pt-20 sm:pt-24 md:pt-28 font-pretendard">

      {/* 💡 2. 콘텐츠의 최대 너비와 가운데 정렬을 위한 컨테이너를 정의합니다. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb와 아래 콘텐츠 사이의 간격을 위한 div */}
        <div className="mb-8 md:mb-12">
          {/* 간단한 Breadcrumb - 기존과 동일한 스타일 */}
          <div className="flex items-center gap-2 sm:gap-4 font-pretendard">
            <img src={homeIcon} alt="홈" />
            <span className="text-brand-dark text-20">/</span>
            <span className="text-brand-dark text-20">창업안내</span>
          </div>
        </div>

        {/* 실제 페이지 콘텐츠 */}
        <div>
          {/* 상단 콘텐츠 섹션 */}
          <section className="py-16">
            {/* 콘텐츠를 중앙에 모아주는 컨테이너 */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="mb-12">
                <img 
                  src={section1MainImage} 
                  alt="호텔런드리 매장 현황" 
                  className="w-full rounded-lg"
                />
              </div>
              
              {/* ✨ 1. 반응형 글자 크기 적용 */}
              <h2 className="text-hero-title font-bold text-center mb-4">
                처음 시작하는 창업, 호텔런드리라면 다릅니다.
              </h2>
              <p className="text-center text-gray-600 mb-12 text-24">
                복잡한 운영 없이도 시작할 수 있는 호텔런드리 창업은 무인 시스템으로 시간과 인력을 최소화한 효율적인 모델입니다.
                <br />
                누구나 쉽게 접근할 수 있도록 설계된 창업 구조와 본사의 운영 지원 시스템으로 부담 없이 안정적인 매장 운영이 가능합니다.
              </p>
            </div>
          </section>

          {/* ✨ 3. 배경이 전체 너비를 차지하는 새로운 섹션 */}
          <section className="w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-blue-50">
            {/* 내부 텍스트는 가독성을 위해 다시 중앙 컨테이너 안에 배치합니다. */}
            <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 text-center">
              <p className="text-section-title">
                4년간 쌓아온 누적 매장 수는 숫자를 넘어 신뢰의 지표입니다.
                <br />
                매년 지속적으로 늘어난 결과는 고객과 창업자가 모두 증명하고 있습니다.
              </p>
            </div>
          </section>

          {/* 데이터로 입증된 창업 기회 섹션 */}
          <section className="bg-white py-16 sm:py-24 px-4 font-sans">
            <div className="max-w-6xl mx-auto">
              {/* ▼ 1. 제목 영역 div */}
              <div className="text-center mb-16 md:mb-24">
                <h2 className="text-hero-title font-bold text-gray-800">
                  데이터로 입증된 창업 기회
                </h2>
                <p className="mt-4 text-section-subtitle text-gray-500">
                  수익성, 시장성, 운영 효율까지 수치로 확인하세요
                </p>
              </div>
              <div className="space-y-20 md:space-y-28">

  {/* ▼ 1. 첫 번째 항목 (무인세탁 시장) */}
  <div className="flex flex-col md:flex-row md:items-stretch overflow-hidden rounded-[20px] shadow-[5px_7px_11px_1px_rgba(164,198,224,0.25)]">
    {/* 이미지 컨테이너 */}
    <div className="relative w-full md:w-1/2 order-2 md:order-1 bg-[#A4C6E0]">
      <span className="absolute -top-10 -right-4 text-7xl sm:text-8xl font-black text-gray-100 -z-10">01</span>
      {/* ✨ 변경점: block 추가 */}
      <img 
        src={barChart} 
        alt="무인 빨래방 현황 막대 그래프" 
        className="block w-full h-full object-cover" 
      />
    </div>
    {/* 텍스트 컨테이너 */}
    <div className="w-full md:w-1/2 order-1 md:order-2 bg-white">
      <div className="h-full flex flex-col justify-center p-6 md:p-8">
        <h3 className="text-section-title font-bold text-gray-800 mb-4">무인세탁 시장의 폭발적 성장</h3>
        <p className="text-24 text-gray-600 leading-relaxed">
          무인세탁소는 2020년 4,252개 → 2021년 약 6,800개로 증가.
          <br />
          1인 가구-비대면 소비 확산에 따라 연평균 22.7% 빠른 성장.
          <br />
          지금이 바로 스마트 세탁 창업의 최적기입니다.
        </p>
      </div>
    </div>
  </div>

  {/* ▼ 2. 두 번째 항목 (고객 불편) */}
  <div className="flex flex-col md:flex-row md:items-stretch overflow-hidden rounded-[20px] shadow-[5px_7px_11px_1px_rgba(164,198,224,0.25)]">
    {/* 텍스트 컨테이너 */}
    <div className="w-full md:w-1/2 bg-white">
      <div className="h-full flex flex-col justify-center p-6 md:p-8">
        <h3 className="text-section-title font-bold text-gray-800 mb-4">고객이 느끼는 불편과 한계</h3>
        <ul className="space-y-2 text-24 text-gray-600 list-disc list-inside">
          <li>이용자 절반 이상이 '점유 불만'을 가장 큰 문제로 인식</li>
          <li>위생 관리, 대기 시간, 심야 이용률 등 기존 빨래방 한계 명확</li>
          <li>호텔런드리는 이런 문제에 기술로 화답합니다.</li>
        </ul>
      </div>
    </div>
    {/* 이미지 컨테이너 */}
    <div className="relative w-full md:w-1/2 bg-[#EDF4F9]">
      <span className="absolute -top-10 -left-4 text-7xl sm:text-8xl font-black text-gray-100 -z-10">02</span>
      {/* ✨ 변경점: block 추가 */}
      <img 
        src={circleChart} 
        alt="고객 불편 사항 원형 그래프" 
        className="block w-full h-full object-cover" 
      />
    </div>
  </div>


  {/* ▼ 3. 세 번째 항목 (운영 효율) */}
  <div className="flex flex-col md:flex-row md:items-stretch overflow-hidden rounded-[20px] shadow-[5px_7px_11px_1px_rgba(164,198,224,0.25)]">
    {/* 이미지 컨테이너 */}
    <div className="relative w-full md:w-1/2 bg-[#EDF4F9]">
      <span className="absolute -top-10 -right-4 text-7xl sm:text-8xl font-black text-gray-100 -z-10">03</span>
      {/* ✨ 변경점: block 추가 */}
      <img 
        src={lineChart} 
        alt="시간대별 사용률 라인 그래프" 
        className="block w-full h-full object-cover" 
      />
    </div>
    {/* 텍스트 컨테이너 */}
    <div className="w-full md:w-1/2 bg-white">
      <div className="h-full flex flex-col justify-center p-6 md:p-8">
        <h3 className="text-section-title font-bold text-gray-800 mb-4">운영 효율 향상 시뮬레이션 결과</h3>
        <ul className="space-y-2 text-24 text-gray-600 list-disc list-inside">
          <li>시간대별 할인 시스템 도입 시 가동률과 수익률 동기 확인</li>
          <li>고객 패턴 기반 운영으로 수익과 효율 모두 상승합니다.</li>
        </ul>
      </div>
    </div>
  </div>

</div>
            </div>
          </section>
        </div>
        
      </div>
    </div>
  );
};

export default StartupGuide; 