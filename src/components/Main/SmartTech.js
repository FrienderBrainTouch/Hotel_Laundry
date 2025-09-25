import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
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
  const isAutoPausedRef = useRef(false);

  // slides 고정
  const slides = useMemo(
    () => [
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
    ],
    []
  );

  const slidesLength = slides.length;
  const slidesExtended = useMemo(() => [...slides, slides[0]], [slides]);

  const beginAnimation = useCallback(() => {
    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    setIsAnimating(true);
    setIsTransitioning(true);
    // 안전 타임아웃: transitionEnd 누락 시 락 해제
    animTimeoutRef.current = setTimeout(() => setIsAnimating(false), 800);
  }, []);

  const nextSlide = useCallback(() => {
    if (isAnimating) return; // rapid clicks 무시
    beginAnimation();
    setCurrentIndex((prev) => prev + 1);
  }, [isAnimating, beginAnimation]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    beginAnimation();
    setCurrentIndex((prev) => (prev === 0 ? slidesLength - 1 : prev - 1));
  }, [isAnimating, beginAnimation, slidesLength]);

  // 자동 슬라이드 (5초) - 래핑 중에는 정지
  useEffect(() => {
    const id = setInterval(() => {
      if (!isAnimating && !isAutoPausedRef.current) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(id);
  }, [nextSlide, isAnimating]);

  // 래핑 로직: 마지막 클론 도달 시(= slidesLength) 0으로 점프
  useEffect(() => {
    if (currentIndex === slidesLength) {
      // 자동재생 일시정지 + 전환 제거 후 점프
      isAutoPausedRef.current = true;
      setIsTransitioning(false);
      setCurrentIndex(0);

      // 두 프레임 보장 후 전환 복구 및 재개
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setIsAnimating(false);
          isAutoPausedRef.current = false;
        });
      });
    } else if (currentIndex > slidesLength) {
      // 방어적 클램프 (예외 상황 대비)
      setCurrentIndex(slidesLength);
    } else if (currentIndex < 0) {
      setCurrentIndex(0);
    }
  }, [currentIndex, slidesLength]);

  // transition 끝난 뒤 정리만 수행 (래핑은 effect에서 처리)
  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (animTimeoutRef.current) {
      clearTimeout(animTimeoutRef.current);
      animTimeoutRef.current = null;
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
          <div className="relative overflow-hidden w-full h-[350px] sm:h-[500px] md:h-[500px] lg:h-[550px] xl:h-[600px] min-h-[350px]">
            <div
              className={`${
                isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''
              } flex`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slidesExtended.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  {/* Mobile: Integrated card design */}
                  <div className="block sm:hidden">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[350px]">
                      <img
                        src={slide.image}
                        alt={`Smart Tech Slide ${slide.id}`}
                        className="w-full h-[200px] object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-[#1C262B] font-['KoPubWorldDotum'] text-[14px] sm:text-[16px] font-bold mb-2">
                          {slide.title}
                        </h3>
                        <p className="text-[#1C262B] font-['KoPubWorldDotum'] text-[10px] sm:text-[12px] leading-relaxed whitespace-pre-line">
                          {slide.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tablet: Integrated card design (768px-1024px) */}
                  <div className="hidden sm:block lg:hidden">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-[600px] mx-auto h-[450px]">
                      <img
                        src={slide.image}
                        alt={`Smart Tech Slide ${slide.id}`}
                        className="w-full h-[300px] object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-[#1C262B] font-['KoPubWorldDotum'] text-[16px] md:text-[18px] font-bold mb-3">
                          {slide.title}
                        </h3>
                        <p className="text-[#1C262B] font-['KoPubWorldDotum'] text-[12px] md:text-[14px] leading-relaxed whitespace-pre-line">
                          {slide.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop: Image with overlapping text card (1024px+) */}
                  <div
                    className="hidden lg:block relative mx-auto"
                    style={{ width: 'fit-content' }}
                  >
                    {/* Image */}
                    <img
                      src={slide.image}
                      alt={`Smart Tech Slide ${slide.id}`}
                      className="rounded-[15px] w-[600px] h-[400px] xl:w-[880px] xl:h-[550px] 2xl:w-[980px] 2xl:h-[590px] object-cover"
                    />

                    {/* Text Card - Overlapping */}
                    <div className="absolute bottom-[-20px] right-[-20px] xl:bottom-[-30px] xl:right-[-30px] bg-white rounded-2xl xl:rounded-3xl p-6 xl:p-8 shadow-lg xl:shadow-xl w-[280px] xl:w-[400px] h-[220px] xl:h-[260px] z-10">
                      <h3 className="text-[#1C262B] font-['KoPubWorldDotum'] text-[16px] lg:text-[18px] xl:text-[20px] font-bold mb-3">
                        {slide.title}
                      </h3>
                      <p className="text-[#1C262B] font-['KoPubWorldDotum'] text-[12px] lg:text-[14px] xl:text-[16px] leading-relaxed whitespace-pre-line">
                        {slide.subtitle}
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
