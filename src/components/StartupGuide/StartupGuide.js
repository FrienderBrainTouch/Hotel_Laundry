import React from 'react';
import section1MainImage from './StartupGuideImage/section1_main.svg';
import homeIcon from '../StoreInfo/common/home.svg';
import circleChart from './StartupGuideImage/circle2.svg';
import lineChart from './StartupGuideImage/line_chart2.svg';
import barChart from './StartupGuideImage/bar2.svg';
import onejob from './StartupGuideImage/onejob.svg';
import twojob from './StartupGuideImage/twojob.svg';
import cash from './StartupGuideImage/cash-coin.svg'
import step1 from './StartupGuideImage/step1.svg';
import step2 from './StartupGuideImage/step2.svg';
import step3 from './StartupGuideImage/step3.svg';
import step4 from './StartupGuideImage/step4.svg';
import step5 from './StartupGuideImage/step5.svg';      
import num01 from './StartupGuideImage/num01.svg';
import num02 from './StartupGuideImage/num02.svg';
import num03 from './StartupGuideImage/num03.svg';
import num04 from './StartupGuideImage/num04.svg';
import num05 from './StartupGuideImage/num05.svg';
import contactButton from './StartupGuideImage/contact_button.svg';

// ▼▼▼ 삽입된 '나에게 맞는 창업 방식' 섹션 컴포넌트 ▼▼▼
const startupOptionsData = [
  {
    icon: onejob,
    title: '전업 창업자형',
    features: ['직접 운영, 수익 극대화', '전담 관리로 매출 최적화'],
  },
  {
    icon: twojob,
    title: '투잡 창업자형',
    features: ['무인 운영 + 본사 원격 대응', '부업으로도 가능한 스마트 창업'],
  },
  {
    icon: cash,
    title: '소자본 창업자형',
    features: ['10평 기준 인테리어 무상 지원', '비용 부담 낮은 효율형 창업'],
  },
];

const StartupOptionsSection = () => {
  return (
    // 전체 너비 배경 적용
    <div className="w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-blue-50 py-16 sm:py-24 px-4 font-pretendard">
      <div className="max-w-7xl mx-auto text-center">
        {/* 섹션 제목 */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          나에게 맞는 창업 방식은?
        </h2>
        {/* 섹션 부제목 */}
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          전업, 투잡, 소자본까지 내 상황에 맞는 맞춤 창업 플랜 제안
        </p>
        
        {/* 옵션 카드 컨테이너: Grid 레이아웃으로 변경 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {startupOptionsData.map((option, index) => (
            <div key={index} className="bg-[#e1e4e8] rounded-xl p-8 text-center flex flex-col w-full max-w-sm">
              {/* 아이콘 - img 태그로 수정 */}
              <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg">
                <img 
                  src={option.icon} 
                  alt={`${option.title} 아이콘`}
                  className="w-24 h-24 object-contain"
                />
              </div>
              {/* 카드 제목 */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">{option.title}</h3>
              
              {/* ✨✨✨ 핵심 수정사항: 텍스트는 왼쪽, 블록은 중앙 정렬 ✨✨✨ */}
              <ul className="space-y-2 text-gray-700 text-base inline-block mx-auto text-left">
                {option.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <span className="mr-2 mt-1 text-gray-500">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// ▲▲▲ '나에게 맞는 창업 방식' 섹션 컴포넌트 종료 ▲▲▲

// ▼▼▼ '창업 진행 단계' 섹션 컴포넌트 (짝수는 왼쪽, 홀수는 오른쪽 / 아이콘·숫자만 교체) ▼▼▼
const processStepsData = [
  { step: num01, icon: step1, title: '상담 신청', details: ['창업 문의 접수 및 기본 창업 정보 제공', '창업 희망 지역, 예산, 규모 등 1차 조건 확인'] },
  { step: num02, icon: step2, title: '상권 분석 & 입지 제안', details: ['전문가 상권 분석 및 수익 컨설팅', '입지 조건별 맞춤 시뮬레이션 제시'] },
  { step: num03, icon: step3, title: '계약 및 매장 설계',   details: ['창업 조건 확정 후 가맹 계약 체결', '매장 맞춤 인테리어 설계 및 공사 진행'] },
  { step: num04, icon: step4, title: '장비 설치 & 본사 교육', details: ['스마트 세탁 장비 설치 및 테스트', '운영법, 정산 시스템, 고객 응대 교육 진행'] },
  { step: num05, icon: step5, title: '매장 오픈 & 본사 운영 지원', details: ['오픈 마케팅 진행 및 초기 고객 유입 지원', '24시간 원격 관리 및 콜센터 운영 개시'] },
];

const StartupProcessSection = () => {
  return (
    <div className="bg-white py-16 sm:py-24 px-4 font-pretendard">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">창업 진행 단계</h2>
        <p className="text-lg text-gray-600">처음 시작하는 분도 안심할 수 있도록 단계별로 체계적인 창업 과정을 제공합니다.</p>
      </div>

      <div className="relative max-w-5xl mx-auto mt-12">
        {/* 중앙 세로선 */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" aria-hidden="true" />

        <div className="space-y-12 md:space-y-0">
          {processStepsData.map((item, index) => (
            <div key={item.step} className="relative md:mb-12">
              {/* 짝수 → md:flex-row-reverse (왼쪽에 콘텐츠), 홀수 → 기본 md:flex-row (오른쪽에 콘텐츠) */}
              <div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* 반대편 빈 공간 */}
                <div className="hidden md:block w-1/2" />

                {/* 콘텐츠 블록 */}
                <div className="w-full md:w-1/2 md:px-8 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between gap-4 p-4 rounded-lg ">
                    
                    {/* 아이콘: 짝수→가장 바깥쪽(1), 홀수→가장 바깥쪽(3) */}
                    <div className={`flex-shrink-0 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                    <img src={item.icon} alt={`${item.title} 아이콘`} className="h-12 w-12" />
                    </div>

                    {/* 텍스트: 항상 가운데(2) */}
                    <div className="flex-grow text-left md:order-2">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        {item.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>

                    {/* 단계 번호: 짝수→가장 중앙쪽(3), 홀수→가장 중앙쪽(1) */}
                    <div className={`flex-shrink-0 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                      <img src={item.step} alt={`단계 ${index + 1}`} className="h-8 w-8" />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};





const StartupGuide = ({ onPageChange }) => {
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
              <div className="relative w-full md:w-2/5 order-1 md:order-1 bg-[#A4C6E0] p-4">
              <span className="absolute -top-10 -right-4 text-7xl sm:text-8xl font-black text-gray-100 -z-10">01</span>
              {/* ✨ 변경점: block 추가 */}
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



              {/* ▼ 2. 두 번째 항목 (고객 불편) */}
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
              {/* ✨ 변경점: block 추가 */}
              <img
              src={circleChart}
              alt="고객 불편 사항 원형 그래프"
              className="block w-full h-auto object-contain"
              />
              </div>
              </div>

              {/* ▼ 3. 세 번째 항목 (운영 효율) */}
              <div className="flex flex-col md:flex-row md:items-stretch overflow-hidden rounded-[20px] shadow-[5px_7px_11px_1px_rgba(164,198,224,0.25)]">
              {/* 이미지 컨테이너 */}
              <div className="relative w-full md:w-2/5 bg-[#A4C6E0] p-4">
              <span className="absolute -top-10 -right-4 text-7xl sm:text-8xl font-black text-gray-100 -z-10">03</span>
              {/* ✨ 변경점: block 추가 */}
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
          <section>
          <StartupOptionsSection />
          </section>
          <section>
          <StartupProcessSection />
          </section>
          <section className="w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-blue-50 h-[300px] flex items-center justify-center font-pretendard">
            <div className="text-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark mb-8">지금이 바로, 스마트한 창업의 타이밍</h1>
              <img 
                src={contactButton} 
                alt="문의하기 버튼" 
                className="mx-auto cursor-pointer w-32 h-12 hover:opacity-80 transition-opacity" 
                onClick={() => onPageChange('contact')}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StartupGuide; 