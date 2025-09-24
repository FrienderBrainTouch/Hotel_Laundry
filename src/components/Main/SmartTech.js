import React, { useState, useEffect, useCallback, useRef } from 'react';
import mainImage2 from '../../image/ai_iot.jpeg';

const slideLeft = '/images/slide-left.svg';
const slideRight = '/images/slide-right.svg';
const mainSmart1 = '/images/main-Images/main-change-01.png';
const mainSmart3 = '/images/main-Images/main-change-03.png';

const SmartTech = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false); // rapid click guard
  const animTimeoutRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: mainSmart3,
      title: '셀프 드라이클리닝 도입 수익 걱정 끝!',
      subtitle: '이불 세탁과 양복 드라이클리닝이\n하나의 세탁기에서 모두 가능',
    },
    {
      id: 2,
      image: mainImage2,
      title: 'IOT기반 스마트 매장',
      subtitle: "'대기 시간 없는 세탁고객'\n'일하지 않아도 되는 점주'",
    },
    {
      id: 3,
      image: mainSmart1,
      title: '새벽에도 걸려오는 고객전화 스트레스로부터 해방!',
      subtitle: '전 매장 24시간 통합 콜센터',
    },
  ];

  // 확장 슬라이드 (마지막에 첫 슬라이드 클론 추가)
  const slidesExtended = [...slides, slides[0]];

  const beginAnimation = useCallback(() => {
    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    setIsAnimating(true);
    setIsTransitioning(true);
    // 안전 타임아웃: transitionEnd 누락 시 락 해제
    animTimeoutRef.current = setTimeout(() => setIsAnimating(false), 800);
  }, []);

  const nextSlide = useCallback(() => {
    if (isAnimating) return; // ignore rapid clicks
    beginAnimation();
    setCurrentIndex((prev) => prev + 1);
  }, [isAnimating, beginAnimation]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return; // ignore rapid clicks
    beginAnimation();
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [isAnimating, beginAnimation, slides.length]);

  // 자동 슬라이드 (5초)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isAnimating]);

  // 래핑 처리: (마지막 클론에 도달하면 transition 끄고 index를 0으로 즉시 이동)
  const handleTransitionEnd = () => {
    if (currentIndex === slides.length) {
      setIsTransitioning(false);
      requestAnimationFrame(() => {
        setCurrentIndex(0);
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setIsAnimating(false);
          if (animTimeoutRef.current) {
            clearTimeout(animTimeoutRef.current);
            animTimeoutRef.current = null;
          }
        });
      });
    } else {
      setIsAnimating(false);
      if (animTimeoutRef.current) {
        clearTimeout(animTimeoutRef.current);
        animTimeoutRef.current = null;
      }
    }
  };

  // 수동 버튼 핸들러
  const handleManualSlide = (direction) => {
    if (direction === 'next') nextSlide();
    else prevSlide();
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

        {/* Smart Solution Content */}
        <div className="relative max-w-[96rem] mx-auto">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={() => handleManualSlide('prev')}
            className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 z-50 hover:opacity-80 transition-opacity duration-200 pointer-events-auto"
            aria-label="이전 슬라이드"
          >
            <img src={slideLeft} alt="이전" className="2xl:w-12 2xl:h-12 w-8 h-8 md:w-12 md:h-12" />
          </button>

          <button
            onClick={() => handleManualSlide('next')}
            className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 z-50 hover:opacity-80 transition-opacity duration-200 pointer-events-auto"
            aria-label="다음 슬라이드"
          >
            <img
              src={slideRight}
              alt="다음"
              className="2xl:w-12 2xl:h-12 w-8 h-8 md:w-12 md:h-12"
            />
          </button>

          {/* Unified Slide Track (mobile + desktop) */}
          <div className="relative overflow-hidden w-full h-[400px] sm:h-[400px]">
            <div
              className={`${
                isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''
              } flex`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slidesExtended.map((slide, index) => (
                <div key={`${slide.id}-${index}`} className="w-full flex-shrink-0 relative">
                  {/* Centered inner wrapper to avoid left/right drifting */}
                  <div className="relative h-[400px] mx-auto w-[680px] sm:w-[720px] md:w-[900px] lg:w-[1100px] xl:w-[1200px]">
                    {/* Image at top-left with small inward offset */}
                    <img
                      src={slide.image}
                      alt={`Smart Tech Slide ${slide.id}`}
                      className="absolute top-0 left-6 sm:left-8 lg:left-10 object-cover rounded-[15px] w-[340px] h-[350px] sm:w-[400px] sm:h-[390px] md:w-[540px] md:h-[440px] lg:w-[780px] lg:h-[510px] xl:w-[880px] xl:h-[550px] 2xl:w-[980px] 2xl:h-[590px]"
                    />

                    {/* Text Box at bottom-right with small inward offset (overlaps image slightly) */}
                    <div className="absolute bottom-4 right-6 sm:bottom-6 sm:right-8 lg:bottom-8 lg:right-10 bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg lg:shadow-xl max-w-[280px] lg:max-w-[400px] z-10">
                      <h3 className="text-[#1C262B] font-['KoPubWorldDotum'] text-[18px] lg:text-[24px] font-bold mb-3 lg:mb-4">
                        IoT 기반 스마트 매장 운영
                      </h3>
                      <p className="text-[#1C262B] font-['KoPubWorldDotum'] text-[14px] lg:text-[18px] leading-relaxed">
                        전 매장을 본사에서 원격 제어하고, 장비 상태와
                        <br />
                        고객 이용 현황을 실시간으로 관리하는 스마트 시스템
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Button Area for xs */}
          <div className="sm:hidden flex justify-center items-center mt-4 space-x-4 z-50">
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
      </div>
    </section>
  );
};

export default SmartTech;
