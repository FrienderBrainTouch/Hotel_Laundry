import React, { useState, useEffect, useCallback } from 'react';
const slideLeft = '/images/slide-left.svg';
const slideRight = '/images/slide-right.svg';
const mainSmart1 = '/images/main-Images/self-dry.png';
const mainSmart2 = '/images/main-Images/main-smart-2.png';
const mainSmart3 = '/images/main-Images/callcenter.png';

const SmartTech = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: mainSmart1,
      title: '셀프 드라이클리닝 도입 수익 걱정 끝!',
      subtitle: '이불 세탁과 양복 드라이클리닝이\n하나의 세탁기에서 모두 가능',
    },
    {
      id: 2,
      image: mainSmart2,
      title: 'IOT기반 스마트 매장',
      subtitle: "'대기 시간 없는 세탁고객'\n'일하지 않아도 되는 점주'",
    },
    {
      id: 3,
      image: mainSmart3,
      title: '새벽에도 걸려오는 고객전화 스트레스로부터 해방!',
      subtitle: '전 매장 24시간 통합 콜센터',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // 자동 슬라이드 (5초마다) - currentSlide가 변경될 때마다 타이머 리셋
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  // 수동 슬라이드 버튼 클릭 시 자동 슬라이드 리셋
  const handleManualSlide = (direction) => {
    if (direction === 'next') {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="px-0 sm:px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="text-center font-['KoPubWorldBatang'] text-[#1C262B] text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] tracking-[-0.44px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-[-0.8px] mb-[5px] sm:mb-[5px] md:mb-[12px] lg:mb-[12px] xl:mb-[12px] 2xl:mb-[12px]"
            style={{ fontWeight: 500 }}
          >
            Smart Solution
          </h2>
          <p
            className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-['KoPubWorldDotum'] text-[#1C262B] max-w-4xl mx-auto leading-normal xl:leading-[30px] 2xl:leading-[30px] tracking-[-0.36px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.56px] 2xl:tracking-[-0.64px]"
            style={{ fontWeight: 500 }}
          >
            <span className="hidden sm:inline">단순한 빨래방이 아닌 </span>혁신 기술 기반의 독보적인
            경쟁력을 제공합니다.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-[96rem] mx-auto">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={() => handleManualSlide('prev')}
            className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hover:opacity-80 transition-opacity duration-200 sm:left-[-5px]"
            aria-label="이전 슬라이드"
          >
            <img src={slideLeft} alt="이전" className="2xl:w-12 2xl:h-12 w-8 h-8 md:w-12 md:h-12" />
          </button>

          <button
            onClick={() => handleManualSlide('next')}
            className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hover:opacity-80 transition-opacity duration-200 sm:right-[-5px]"
            aria-label="다음 슬라이드"
          >
            <img
              src={slideRight}
              alt="다음"
              className="2xl:w-12 2xl:h-12 w-8 h-8 md:w-12 md:h-12"
            />
          </button>

          {/* Navigation Buttons - Mobile (xs only) */}
          <div className="sm:hidden flex flex-col items-center">
            {/* Slide Container for xs */}
            <div className="relative overflow-hidden w-full h-[330px] sm:w-[355px] sm:h-[330px]">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={slide.id} className="w-full flex-shrink-0 relative">
                    {/* Mobile Layout (xs only) */}
                    <div className="relative w-full h-[330px] sm:w-[355px] sm:h-[330px] rounded-[15px] overflow-hidden">
                      {/* Background Image - Full Area */}
                      <div className="absolute inset-0 w-full h-full">
                        <img
                          src={slide.image}
                          alt={`Smart Tech Slide ${slide.id}`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Text Overlay - Direct on Image */}
                      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                        <div className="p-4">
                          <h3
                            className="text-white font-['KoPubWorldDotum'] text-[20px] font-[700] tracking-[-0.4px] mb-[11px] drop-shadow-2xl"
                            style={{
                              fontWeight: 700,
                              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)',
                            }}
                          >
                            {slide.title}
                          </h3>
                          <p
                            className="text-white font-['KoPubWorldDotum'] text-[13px] xs:text-[15px] font-[500] tracking-[-0.3px] whitespace-pre-line drop-shadow-2xl"
                            style={{
                              fontWeight: 500,
                              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)',
                            }}
                          >
                            {slide.id === 3 ? slide.subtitle : slide.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Button Area for xs */}
            <div className="flex justify-center items-center mt-4 space-x-4">
              <button
                onClick={() => handleManualSlide('prev')}
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="이전 슬라이드"
              >
                <img src={slideLeft} alt="이전" className="w-8 h-8" />
              </button>

              <button
                onClick={() => handleManualSlide('next')}
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="다음 슬라이드"
              >
                <img src={slideRight} alt="다음" className="w-8 h-8" />
              </button>
            </div>
          </div>

          {/* Slide Container for sm and above */}
          <div className="hidden sm:block relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0 relative">
                  <div className="flex justify-center">
                    {/* Desktop Layout (lg and above) */}
                    <div className="hidden lg:block relative 2xl:w-[1400px] 2xl:h-[525px] xl:w-[1200px] xl:h-[515px] lg:w-[825px] lg:h-[380px] rounded-[20px] xl:rounded-[18px] lg:rounded-[15px] overflow-hidden">
                      {/* Background Image - Full Area */}
                      <div className="absolute inset-0 w-full h-full">
                        <img
                          src={slide.image}
                          alt={`Smart Tech Slide ${slide.id}`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Text Overlay - Direct on Image */}
                      <div className="absolute inset-0 z-20 flex flex-col justify-end p-10">
                        <div className="p-6 2xl:w-[600px] xl:w-[600px] lg:w-[540px]">
                          <h3
                            className="text-white font-['KoPubWorldDotum'] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] 2xl:font-[700] xl:font-[700] lg:font-[700] lg:tracking-[-0.48px] xl:tracking-[-0.52px] 2xl:tracking-[-0.56px] lg:mb-[15px] xl:mb-[20px] 2xl:mb-[20px] drop-shadow-2xl"
                            style={{
                              fontWeight: 700,
                              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)',
                            }}
                          >
                            {slide.title}
                          </h3>
                          <p
                            className="text-white font-['KoPubWorldDotum'] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 2xl:font-[500] xl:font-[500] lg:font-[500] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px] whitespace-pre-line drop-shadow-2xl"
                            style={{
                              fontWeight: 500,
                              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)',
                            }}
                          >
                            {slide.id === 3 ? slide.subtitle.replace('\n', ' ') : slide.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Layout (md, sm) */}
                    <div className="lg:hidden relative w-[480px] h-[360px] sm:w-[480px] sm:h-[360px] md:w-[620px] md:h-[410px] rounded-[15px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden">
                      {/* Background Image - Full Area */}
                      <div className="absolute inset-0 w-full h-full">
                        <img
                          src={slide.image}
                          alt={`Smart Tech Slide ${slide.id}`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Text Overlay - Direct on Image */}
                      <div className="absolute inset-0 z-20 flex flex-col justify-end p-10">
                        <div className="p-4">
                          <h3
                            className="text-white font-['KoPubWorldDotum'] sm:text-[20px] md:text-[22px] font-[700] sm:tracking-[-0.4px] md:tracking-[-0.44px] sm:mb-[15px] md:mb-[15px] drop-shadow-2xl"
                            style={{
                              fontWeight: 700,
                              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)',
                            }}
                          >
                            {slide.title}
                          </h3>
                          <p
                            className="text-white font-['KoPubWorldDotum'] sm:text-[16px] md:text-[18px] font-[500] sm:tracking-[-0.32px] md:tracking-[-0.36px] whitespace-pre-line drop-shadow-2xl"
                            style={{
                              fontWeight: 500,
                              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)',
                            }}
                          >
                            {slide.id === 3 ? slide.subtitle.replace('\n', ' ') : slide.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartTech;
