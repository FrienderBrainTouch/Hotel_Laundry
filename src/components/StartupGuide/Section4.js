import React from 'react';
import onejob from './StartupGuideImage/onejob.svg';
import twojob from './StartupGuideImage/twojob.svg';
import cash from './StartupGuideImage/cash-coin.svg';

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

const Section4 = () => {
  return (
    // 전체 너비 배경 적용
    <div className="w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-blue-50 py-10 sm:py-16 md:py-24 px-4 font-pretendard">
      <div className="max-w-7xl mx-auto text-center">
        {/* 섹션 제목 */}
        <h2 className="section-title font-bold text-gray-800 mb-3 sm:mb-4">
          나에게 맞는 창업 방식은?
        </h2>
        {/* 섹션 부제목 */}
        <p className="section-subtitle text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto">
          전업, 투잡, 소자본까지 내 상황에 맞는 맞춤 창업 플랜 제안
        </p>
        
        {/* 옵션 카드 컨테이너: Grid 레이아웃으로 변경 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {startupOptionsData.map((option, index) => (
            <div key={index} className="bg-[#e1e4e8] rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 text-center flex flex-col w-full max-w-[280px] xs:max-w-[320px] sm:max-w-sm">
              {/* 아이콘 - img 태그로 수정 */}
              <div className="mx-auto mb-5 sm:mb-6 flex h-24 w-24 xs:h-28 xs:w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full bg-white shadow-lg">
                <img 
                  src={option.icon} 
                  alt={`${option.title} 아이콘`}
                  className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 object-contain"
                />
              </div>
              {/* 카드 제목 */}
              <h3 className="text-28 md:section-title font-bold text-gray-800 mb-3 sm:mb-4">{option.title}</h3>
              
              {/* 텍스트는 왼쪽, 블록은 중앙 정렬 */}
              <ul className="space-y-2 text-gray-700 text-24 inline-block mx-auto text-left">
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

export default Section4;
