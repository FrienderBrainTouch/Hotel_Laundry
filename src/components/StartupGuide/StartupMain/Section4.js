import React from 'react';
import onejob from './image/onejob.svg';
import twojob from './image/twojob.svg';
import cash from './image/cash-coin.svg';

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
    <div className="w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-blue-50 py-16 font-pretendard">
      <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto text-center">
        {/* 섹션 제목 */}
        <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.44px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[5px] sm:mb-[5px] md:mb-[10px] lg:mb-[12px] xl:mb-[8px] 2xl:mb-[12px] text-center">
          나에게 맞는 창업 방식은?
        </h2>
        {/* 섹션 부제목 */}
        <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-medium text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.36px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.64px] 2xl:tracking-[-0.64px] mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px] max-w-3xl mx-auto">
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
              <h3 className="text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.4px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.48px] 2xl:tracking-[-0.48px] mb-[5px] sm:mb-[5px] md:mb-[10px] lg:mb-[12px] xl:mb-[8px] 2xl:mb-[12px]">{option.title}</h3>
              
              {/* 텍스트는 왼쪽, 블록은 중앙 정렬 */}
              <ul className="space-y-2 text-[#1C262B] text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-medium font-KoPubWorldDotum leading-normal tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px] inline-block mx-auto text-left">
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
