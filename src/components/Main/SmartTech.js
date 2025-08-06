import React, { useState, useEffect, useCallback } from 'react';
const slideLeft = '/images/slide-left.svg';
const slideRight = '/images/slide-right.svg';
const mainSlide1 = '/images/main-Images/main-slide-1.png';
const mainSlide2 = '/images/main-Images/main-slide-2.png';
const mainSlide3 = '/images/main-Images/main-slide-3.png';

const SmartTech = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { id: 1, image: mainSlide1 },
    { id: 2, image: mainSlide2 },
    { id: 3, image: mainSlide3 }
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
      <div className="px-4 ">
        {/* Title and Subtitle */}
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="text-[36px] font-normal font-['KoPubWorldBatang'] text-[#1C262B] mb-3 md:mb-4"
            style={{ fontWeight: 500 }}
          >
            Smart Tech
          </h2>
          <p 
            className="text-[28px] font-normal font-['KoPubWorldDotum'] text-[#1C262B] max-w-4xl mx-auto px-4"
            style={{ fontWeight: 500 }}
          >
            단순한 빨래방이 아닌 기술 기반의 프랜차이즈 경쟁력을 제공합니다.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-[96rem] mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={() => handleManualSlide('prev')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hover:opacity-80 transition-opacity duration-200"
            aria-label="이전 슬라이드"
          >
            <img src={slideLeft} alt="이전" className="w-8 h-8 md:w-12 md:h-12" />
          </button>
          
          <button
            onClick={() => handleManualSlide('next')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hover:opacity-80 transition-opacity duration-200"
            aria-label="다음 슬라이드"
          >
            <img src={slideRight} alt="다음" className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          {/* Slide Container */}
          <div className="relative overflow-hidden mx-24">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div 
                  key={slide.id} 
                  className="w-full flex-shrink-0"
                >
                  <img 
                    src={slide.image} 
                    alt={`Smart Tech Slide ${slide.id}`}
                    className="w-full h-auto object-cover"
                  />
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