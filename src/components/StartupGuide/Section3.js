import React from 'react';
import barChart from './StartupGuideImage/bar2.svg';
import circleChart from './StartupGuideImage/circle2.svg';
import lineChart from './StartupGuideImage/line_chart2.svg';

const Section3 = () => {
  return (
    <section className="bg-white py-16 sm:py-24 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* 제목 영역 div */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-hero-title font-bold text-gray-800">
            데이터로 입증된 창업 기회
          </h2>
          <p className="mt-4 text-section-subtitle text-gray-500">
            수익성, 시장성, 운영 효율까지 수치로 확인하세요
          </p>
        </div>
        <div className="space-y-20 md:space-y-28">

          {/* 첫 번째 항목 (무인세탁 시장) */}
          <div className="flex flex-col md:flex-row md:items-stretch overflow-hidden rounded-[20px] shadow-[5px_7px_11px_1px_rgba(164,198,224,0.25)]">
            {/* 이미지 컨테이너 */}
            <div className="relative w-full md:w-2/5 order-1 md:order-1 bg-[#A4C6E0] p-4">
              <span className="absolute -top-10 -right-4 text-7xl sm:text-8xl font-black text-gray-100 -z-10">01</span>
              <img
                src={barChart}
                alt="무인 빨래방 현황 막대 그래프"
                className="block w-full h-auto object-contain"
              />
            </div>
            {/* 텍스트 컨테이너 */}
            <div className="w-full md:w-3/5 order-2 md:order-2 bg-white">
              <div className="h-full flex flex-col justify-center p-6 md:p-8">
                <h3 className="text-section-title font-bold text-gray-800 mb-4">무인세탁 시장의 폭발적 성장</h3>
                <ul className="space-y-2 text-24 text-gray-600 list-disc list-inside">
                  <li>무인세탁소는 2020년 4,252개 → 2021년 약 6,800개로 증가</li>
                  <li>1인 가구-비대면 소비 확산에 따라 연평균 22.7% 빠른 성장</li>
                  <li>지금이 바로 스마트 세탁 창업의 최적기입니다.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 두 번째 항목 (고객 불편) */}
          <div className="flex flex-col md:flex-row md:items-stretch overflow-hidden rounded-[20px] shadow-[5px_7px_11px_1px_rgba(164,198,224,0.25)]">
            {/* 텍스트 컨테이너 */}
            <div className="w-full md:w-3/5 order-2 md:order-1 bg-white">
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
            <div className="relative w-full md:order-2 md:w-2/5 bg-[#A4C6E0] p-4">
              <span className="absolute -top-10 -left-4 text-7xl sm:text-8xl font-black text-gray-100 -z-10">02</span>
              <img
                src={circleChart}
                alt="고객 불편 사항 원형 그래프"
                className="block w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* 세 번째 항목 (운영 효율) */}
          <div className="flex flex-col md:flex-row md:items-stretch overflow-hidden rounded-[20px] shadow-[5px_7px_11px_1px_rgba(164,198,224,0.25)]">
            {/* 이미지 컨테이너 */}
            <div className="relative w-full md:w-2/5 bg-[#A4C6E0] p-4">
              <span className="absolute -top-10 -right-4 text-7xl sm:text-8xl font-black text-gray-100 -z-10">03</span>
              <img
                src={lineChart}
                alt="시간대별 사용률 라인 그래프"
                className="block w-full h-auto object-contain"
              />
            </div>
            {/* 텍스트 컨테이너 */}
            <div className="w-full md:w-3/5 bg-white">
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
  );
};

export default Section3;
