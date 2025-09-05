import React from 'react';
import barChart from './StartupGuideImage/bar2.svg';
import circleChart from './StartupGuideImage/circle2.svg';
import lineChart from './StartupGuideImage/line_chart2.svg';

const Section3 = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 제목 영역 div */}
          <div className="text-center mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px]">
            <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.44px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[5px] sm:mb-[5px] md:mb-[10px] lg:mb-[12px] xl:mb-[8px] 2xl:mb-[12px] text-center">
              데이터로 입증된 창업 기회
            </h2>
            <div
              className="text-center mx-auto text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-light leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.36px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.64px] 2xl:tracking-[-0.64px]"
            >
              <div className="block sm:hidden">
                <p>수익성, 시장성, 운영 효율까지 수치로 확인하세요</p>
              </div>
              <div className="hidden sm:block lg:hidden">
                <p>수익성, 시장성, 운영 효율까지 수치로 확인하세요</p>
              </div>
              <div className="hidden lg:block xl:hidden">
                <p>수익성, 시장성, 운영 효율까지 수치로 확인하세요</p>
              </div>
              <div className="hidden xl:block">
                <p>수익성, 시장성, 운영 효율까지 수치로 확인하세요</p>
              </div>
            </div>
          </div>
          <div className="space-y-12 sm:space-y-16 md:space-y-20 xl:space-y-28">

            {/* 첫 번째 항목 (무인세탁 시장) */}
            <div className="flex flex-col md:flex-row md:items-stretch overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[20px] shadow-[5px_7px_11px_1px_rgba(164,198,224,0.25)]">
              {/* 이미지 컨테이너 */}
              <div className="relative w-full md:w-2/5 order-1 md:order-1 bg-[#A4C6E0] p-3 sm:p-4">
                <span className="absolute -top-10 -right-4 text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-black text-gray-100 -z-10">01</span>
                <img
                  src={barChart}
                  alt="무인 빨래방 현황 막대 그래프"
                  className="block w-full h-auto object-contain max-h-48 xs:max-h-56 sm:max-h-64 md:max-h-none"
                />
              </div>
              {/* 텍스트 컨테이너 */}
              <div className="w-full md:w-3/5 order-2 md:order-2 bg-white">
                <div className="h-full flex flex-col justify-center p-5 sm:p-6 md:p-8">
                  <h3 className="text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.4px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.48px] 2xl:tracking-[-0.48px] mb-[5px] sm:mb-[5px] md:mb-[10px] lg:mb-[12px] xl:mb-[8px] 2xl:mb-[12px]">무인세탁 시장의 폭발적 성장</h3>
                  <ul className="space-y-2 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px] list-disc list-outside pl-4">
                    <li>무인세탁소는 2020년 4,252개 → 2021년 약 6,800개로 증가</li>
                    <li>1인 가구-비대면 소비 확산에 따라 연평균 22.7% 빠른 성장</li>
                    <li>지금이 바로 스마트 세탁 창업의 최적기입니다.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 두 번째 항목 (고객 불편) */}
            <div className="flex flex-col md:flex-row md:items-stretch overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[20px] shadow-[5px_7px_11px_1px_rgba(164,198,224,0.25)]">
              {/* 텍스트 컨테이너 */}
              <div className="w-full md:w-3/5 order-2 md:order-1 bg-white">
                <div className="h-full flex flex-col justify-center p-5 sm:p-6 md:p-8">
                  <h3 className="text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.4px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.48px] 2xl:tracking-[-0.48px] mb-[5px] sm:mb-[5px] md:mb-[10px] lg:mb-[12px] xl:mb-[8px] 2xl:mb-[12px]">고객이 느끼는 불편과 한계</h3>
                  <ul className="space-y-2 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px] list-disc list-outside pl-4">
                    <li>이용자 절반 이상이 '점유 불만'을 가장 큰 문제로 인식</li>
                    <li>위생 관리, 대기 시간, 심야 이용률 등 기존 빨래방 한계 명확</li>
                    <li>호텔런드리는 이런 문제에 기술로 화답합니다.</li>
                  </ul>
                </div>
              </div>

              {/* 이미지 컨테이너 */}
              <div className="relative w-full md:order-2 md:w-2/5 bg-[#A4C6E0] p-3 sm:p-4">
                <span className="absolute -top-10 -left-4 text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-black text-gray-100 -z-10">02</span>
                <img
                  src={circleChart}
                  alt="고객 불편 사항 원형 그래프"
                  className="block w-full h-auto object-contain max-h-48 xs:max-h-56 sm:max-h-64 md:max-h-none"
                />
              </div>
            </div>

            {/* 세 번째 항목 (운영 효율) */}
            <div className="flex flex-col md:flex-row md:items-stretch overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[20px] shadow-[5px_7px_11px_1px_rgba(164,198,224,0.25)]">
              {/* 이미지 컨테이너 */}
              <div className="relative w-full md:w-2/5 bg-[#A4C6E0] p-3 sm:p-4">
                <span className="absolute -top-10 -right-4 text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-black text-gray-100 -z-10">03</span>
                <img
                  src={lineChart}
                  alt="시간대별 사용률 라인 그래프"
                  className="block w-full h-auto object-contain max-h-48 xs:max-h-56 sm:max-h-64 md:max-h-none"
                />
              </div>
              {/* 텍스트 컨테이너 */}
              <div className="w-full md:w-3/5 bg-white">
                <div className="h-full flex flex-col justify-center p-5 sm:p-6 md:p-8">
                  <h3 className="text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.4px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.48px] 2xl:tracking-[-0.48px] mb-[5px] sm:mb-[5px] md:mb-[10px] lg:mb-[12px] xl:mb-[8px] 2xl:mb-[12px]">운영 효율 향상 시뮬레이션 결과</h3>
                  <ul className="space-y-2 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px] list-disc list-outside pl-4">
                    <li>시간대별 할인 시스템 도입 시 가동률과 수익률 동기 확인</li>
                    <li>고객 패턴 기반 운영으로 수익과 효율 모두 상승합니다.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
