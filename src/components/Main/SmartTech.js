import React, { useState, useEffect, useCallback } from 'react';
const slideLeft = '/images/slide-left.svg';
const slideRight = '/images/slide-right.svg';
const mainSmart1 = '/images/main-Images/main-smart-1.png';
const mainSmart2 = '/images/main-Images/main-smart-2.png';
const mainSmart3 = '/images/main-Images/main-smart-3.png';

const SmartTech = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { 
      id: 1, 
      image: mainSmart1,
      title: "IoT 기반 스마트 매장 운영",
      subtitle: "전 매장을 본사에서 원격 제어하고, 장비 상태와\n고객 이용 현황을 실시간으로 관리하는 스마트 시스템"
    },
    { 
      id: 2, 
      image: mainSmart2,
      title: "버블코인 제휴 포인트 서비스",
      subtitle: "세탁 이용 시 주변 상점과의 제휴로 버블코인을\n지급받고, 이를 포인트처럼 활용 가능"
    },
    { 
      id: 3, 
      image: mainSmart3,
      title: "셀프형 드라이클리닝 시스템",
      subtitle: "세계 최초 도입! 누구나 버튼 몇 번으로 간편하게\n사용하는 자동화 셀프 드라이클리닝 서비스"
    }
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
            Smart Tech
          </h2>
          <p 
            className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-['KoPubWorldDotum'] text-[#1C262B] max-w-4xl mx-auto leading-normal xl:leading-[30px] 2xl:leading-[30px] tracking-[-0.36px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.56px] 2xl:tracking-[-0.64px]"
            style={{ fontWeight: 500 }}
          >
            <span className="hidden sm:inline">단순한 빨래방이 아닌 </span>기술 기반의 프랜차이즈 경쟁력을 제공합니다.
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
            <img src={slideRight} alt="다음" className="2xl:w-12 2xl:h-12 w-8 h-8 md:w-12 md:h-12" />
          </button>

          {/* Navigation Buttons - Mobile (xs only) */}
          <div className="sm:hidden flex flex-col items-center">
            {/* Slide Container for xs */}
            <div className="relative overflow-hidden w-[355px] h-[330px]">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div 
                    key={slide.id} 
                    className="w-full flex-shrink-0 relative"
                  >
                    {/* Mobile Layout (xs only) */}
                    <div className="relative w-[355px] h-[330px]">
                      {/* Background Image */}
                      <div className="absolute inset-0 w-[355px] h-[230px] rounded-[15px] overflow-hidden">
                        <img 
                          src={slide.image} 
                          alt={`Smart Tech Slide ${slide.id}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Text Overlay - Bottom Half */}
                      <div 
                        className="absolute bottom-[10px] left-0 right-0 z-20 p-6 bg-white w-[355px] h-[140px] shadow-[3px_6px_10px_-5px_rgba(16,34,84,0.15)]"
                        style={{
                          borderBottomLeftRadius: '20px',
                          borderBottomRightRadius: '20px',
                          boxShadow: '3px 6px 10px -5px rgba(16, 34, 84, 0.15)'
                        }}
                      >
                      <h3 
                        className="text-[#1C262B] font-['KoPubWorldDotum'] text-[20px] font-[700] tracking-[-0.4px] mb-[11px]"
                        style={{ fontWeight: 700 }}
                      >
                          {slide.title}
                        </h3>
                      <p 
                        className="text-[#1C262B] font-['KoPubWorldDotum'] text-[15px] font-[500] tracking-[-0.3px] whitespace-pre-line"
                        style={{ fontWeight: 500 }}
                      >
                          {slide.subtitle}
                        </p>
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
                <div 
                  key={slide.id} 
                  className="w-full flex-shrink-0 relative"
                >
                  <div className='flex justify-center'>
                  {/* Desktop Layout (lg and above) */}
                  <div className="hidden lg:block relative 2xl:w-[1400px] 2xl:h-[525px] xl:w-[1200px] xl:h-[515px] lg:w-[825px] lg:h-[380px]">
                    {/* Image Area - Left Top */}
                    <div className="absolute top-0 left-0 2xl:w-[1135px] 2xl:h-[460px] xl:w-[900px] xl:h-[430px] lg:w-[637px] lg:h-[300px] 2xl:rounded-[20px] xl:rounded-[18px] lg:rounded-[15px] overflow-hidden">
                      <img 
                        src={slide.image} 
                        alt={`Smart Tech Slide ${slide.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Text Area - Right Bottom */}
                    <div 
                      className="absolute bottom-0 right-0 z-20 p-10 2xl:w-[600px] 2xl:h-[280px] xl:w-[600px] xl:h-[250px] lg:w-[540px] lg:h-[200px] 2xl:border-radius-[30px] xl:border-radius-[25px] lg:border-radius-[20px] 2xl:bg-white xl:bg-white lg:bg-white 2xl:shadow-[3px_6px_10px_-5px_rgba(16,34,84,0.15)] xl:shadow-[3px_6px_10px_-5px_rgba(16,34,84,0.15)] lg:shadow-[3px_6px_10px_-5px_rgba(16,34,84,0.15)] flex flex-col justify-center 2xl:right-[64px] 2xl:bottom-[10px] xl:right-[50px] xl:bottom-[10px] lg:right-[40px] lg:bottom-[10px]"
                      style={{
                        borderRadius: '30px',
                        background: '#FFF',
                        boxShadow: '3px 6px 10px -5px rgba(16, 34, 84, 0.15)'
                      }}
                    >
                      <h3 
                        className="text-[#1C262B] font-['KoPubWorldDotum'] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] 2xl:font-[700] xl:font-[700] lg:font-[700] lg:tracking-[-0.48px] xl:tracking-[-0.52px] 2xl:tracking-[-0.56px] lg:mb-[15px] xl:mb-[20px] 2xl:mb-[20px]"
                        style={{ fontWeight: 700 }}
                      >
                        {slide.title}
                      </h3>
                      <p 
                        className="text-[#1C262B] font-['KoPubWorldDotum'] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 2xl:font-[500] xl:font-[500] lg:font-[500] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px] whitespace-pre-line"
                        style={{ fontWeight: 500 }}
                      >
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Layout (md, sm) */}
                  <div className="lg:hidden relative w-[480px] h-[360px] sm:w-[480px] sm:h-[360px] md:w-[620px] md:h-[410px]">
                    {/* Background Image */}
                    <div className="absolute inset-0 w-[480px] h-[226px] sm:w-[480px] sm:h-[226px] md:w-[620px] md:h-[250px] rounded-[15px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden">
                      <img 
                        src={slide.image} 
                        alt={`Smart Tech Slide ${slide.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Text Overlay - Bottom Half */}
                    <div 
                      className="absolute bottom-[10px] left-0 right-0 z-20 p-10 bg-white w-[480px] h-[150px] sm:w-[480px] sm:h-[150px] md:w-[620px] md:h-[200px] shadow-[3px_6px_10px_-5px_rgba(16,34,84,0.15)]"
                      style={{
                        borderBottomLeftRadius: '20px',
                        borderBottomRightRadius: '20px',
                        boxShadow: '3px 6px 10px -5px rgba(16, 34, 84, 0.15)'
                      }}
                    >
                      <h3 
                        className="text-[#1C262B] font-['KoPubWorldDotum'] sm:text-[20px] md:text-[22px] font-[700] sm:tracking-[-0.4px] md:tracking-[-0.44px] sm:mb-[15px] md:mb-[15px]"
                        style={{ fontWeight: 700 }}
                      >
                        {slide.title}
                      </h3>
                      <p 
                        className="text-[#1C262B] font-['KoPubWorldDotum'] sm:text-[16px] md:text-[18px] font-[500] sm:tracking-[-0.32px] md:tracking-[-0.36px] whitespace-pre-line"
                        style={{ fontWeight: 500 }}
                      >
                        {slide.subtitle}
                      </p>
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