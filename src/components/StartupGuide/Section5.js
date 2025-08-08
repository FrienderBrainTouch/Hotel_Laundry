import React from 'react';
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

const processStepsData = [
  { step: num01, icon: step1, title: '상담 신청', details: ['창업 문의 접수 및 기본 창업 정보 제공', '창업 희망 지역, 예산, 규모 등 1차 조건 확인'] },
  { step: num02, icon: step2, title: '상권 분석 & 입지 제안', details: ['전문가 상권 분석 및 수익 컨설팅', '입지 조건별 맞춤 시뮬레이션 제시'] },
  { step: num03, icon: step3, title: '계약 및 매장 설계',   details: ['창업 조건 확정 후 가맹 계약 체결', '매장 맞춤 인테리어 설계 및 공사 진행'] },
  { step: num04, icon: step4, title: '장비 설치 & 본사 교육', details: ['스마트 세탁 장비 설치 및 테스트', '운영법, 정산 시스템, 고객 응대 교육 진행'] },
  { step: num05, icon: step5, title: '매장 오픈 & 본사 운영 지원', details: ['오픈 마케팅 진행 및 초기 고객 유입 지원', '24시간 원격 관리 및 콜센터 운영 개시'] },
];

const Section5 = () => {
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

export default Section5;
