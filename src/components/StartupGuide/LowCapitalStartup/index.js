import React from 'react';
import { Link } from 'react-router-dom';
import { ASSET_URL } from '../../../utils/constants';

const LowCapitalStartup = () => {

  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full mx-auto">
          {/* 데스크톱 (1024px 이상): 새 통합 이미지 */}
          <div className="hidden lg:block">
            <img src={`${ASSET_URL}/images/low-capital-final-final1.png`} alt="소자본창업" className="w-full" />
            {/* 유튜브 영상 */}
            <div className="w-full">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/XujIAFTmirM?si=un3ebSyPfyyvF634" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </div>
            <img src={`${ASSET_URL}/images/low-capital-final-final2.png`} alt="소자본창업" className="w-full" />
          </div>

          {/* 모바일/태블릿 (1024px 미만): 기존 이미지들 */}
          <div className="block lg:hidden space-y-0">
            <img
              src={`${ASSET_URL}/images/LowcapitalStartup/lowCap1.png`}
              alt="소자본창업 1"
              className="w-full"
            />
            <img
              src={`${ASSET_URL}/images/LowcapitalStartup/lowCap2.png`}
              alt="소자본창업 2"
              className="w-full"
            />

            {/* 유튜브 영상 */}
            <div className="w-full">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/XujIAFTmirM?si=un3ebSyPfyyvF634" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </div>

            <div className="w-full bg-[#e1e7f3] pt-[70px] pb-[30px] text-center">
              <div className="mb-5">
                <p
                  className="text-[#6e8aa9] text-[16px] xs:text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-semibold pb-3 xs:pb-4 sm:pb-5"
                  style={{ letterSpacing: '10px' }}
                >
                  공유창업 수익 배분
                </p>
                <div className="text-[28px] xs:text-[30px] sm:text-[36px] md:text-[40px] lg:text-[42px] xl:text-[44px] 2xl:text-[48px] font-bold leading-[1.2]">
                  실제 매장 <span className="text-[#194a89]">공유창업주 순익</span>을<br />
                  투명하게 공개합니다
                </div>
                <div className="text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px] pt-3 xs:pt-4 sm:pt-5">
                  ※본사가 지분에 참여하여 모든 관리 및 운영을 도와드립니다.
                </div>
              </div>

              <div className="w-full">
                <img
                  src={`${ASSET_URL}/images/LowcapitalStartup/lowCap3-slide2.png`}
                  alt="소자본창업 공유창업 수익 배분"
                  className="w-full"
                />
              </div>
            </div>

            <img
              src={`${ASSET_URL}/images/LowcapitalStartup/lowCap4.png`}
              alt="소자본창업 4"
              className="w-full"
            />
            <img
              src={`${ASSET_URL}/images/LowcapitalStartup/lowCap5.png`}
              alt="소자본창업 5"
              className="w-full"
            />
            <img
              src={`${ASSET_URL}/images/LowcapitalStartup/lowCap6.png`}
              alt="소자본창업 6"
              className="w-full"
            />
            <img
              src={`${ASSET_URL}/images/LowcapitalStartup/lowCap7.png`}
              alt="소자본창업 7"
              className="w-full"
            />
            <img
              src={`${ASSET_URL}/images/LowcapitalStartup/lowCap8.png`}
              alt="소자본창업 8"
              className="w-full"
            />
            <img
              src={`${ASSET_URL}/images/LowcapitalStartup/lowCap9.png`}
              alt="소자본창업 9"
              className="w-full"
            />
          </div>

          {/* CTA 버튼 */}
          <div className="text-center mt-8 xs:mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16">
            <Link
              to="/startup-guide/low-capital-startup/store-progress"
              className="inline-block bg-[#102254] text-white px-6 py-4 xs:px-8 xs:py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 lg:px-16 lg:py-7 xl:px-20 xl:py-8 2xl:px-24 2xl:py-10 rounded-lg text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold hover:bg-[#0a1a3a] transition-colors duration-200"
            >
              지금 바로 진행 매장 확인하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowCapitalStartup;
