import React from 'react';
// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LowCapitalStartup = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const slides = [
  //   '/images/LowcapitalStartup/lowCap3-slide1.png',
  //   '/images/LowcapitalStartup/lowCap3-slide2.png',
  //   '/images/LowcapitalStartup/lowCap3-slide3.png',
  // ];

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  // // 자동 슬라이드
  // useEffect(() => {
  //   const autoSlide = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 2000); // 2초마다 자동 슬라이드

  //   return () => clearInterval(autoSlide); // cleanup
  // }, [slides.length]);

  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-[70%] mx-auto">
          {/* 새 이미지 */}
          <div className="space-y-0">
            <img src="/images/low-capital-final-final.png" alt="소자본창업" className="w-full" />
          </div>

          {/* 기존 코드 주석 처리 */}
          {/* <div className="space-y-0">
            <img
              src="/images/LowcapitalStartup/lowCap1.png"
              alt="소자본창업 1"
              className="w-full"
            />
            <img
              src="/images/LowcapitalStartup/lowCap2.png"
              alt="소자본창업 2"
              className="w-full"
            />

            <div className="relative w-full bg-[#e1e7f3] pt-[70px] pb-[30px] text-center">
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

              <div className="relative overflow-hidden">
                <img
                  src={slides[currentSlide]}
                  alt={`소자본창업 슬라이드 ${currentSlide + 1}`}
                  className="w-full transition-opacity duration-500"
                />
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="이전 슬라이드"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="다음 슬라이드"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index ? 'bg-[#102254] w-8' : 'bg-white/60'
                    }`}
                    aria-label={`슬라이드 ${index + 1}로 이동`}
                  />
                ))}
              </div>
            </div>

            <img
              src="/images/LowcapitalStartup/lowCap4.png"
              alt="소자본창업 4"
              className="w-full"
            />
            <img
              src="/images/LowcapitalStartup/lowCap5.png"
              alt="소자본창업 5"
              className="w-full"
            />
            <img
              src="/images/LowcapitalStartup/lowCap6.png"
              alt="소자본창업 6"
              className="w-full"
            />
            <img
              src="/images/LowcapitalStartup/lowCap7.png"
              alt="소자본창업 7"
              className="w-full"
            />
            <img
              src="/images/LowcapitalStartup/lowCap8.png"
              alt="소자본창업 8"
              className="w-full"
            />
            <img
              src="/images/LowcapitalStartup/lowCap9.png"
              alt="소자본창업 9"
              className="w-full"
            />
          </div> */}

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
