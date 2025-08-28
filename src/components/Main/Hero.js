import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
  const videoRef = useRef(null);
  const timerRef = useRef(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // 스크롤이 아래로 내려가면 자동 스크롤 비활성화
      if (currentScrollTop > lastScrollTop.current && currentScrollTop > 100) {
        if (isAutoScrollEnabled) {
          setIsAutoScrollEnabled(false);
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }
        }
      }
      
      // 맨 위로 스크롤되면 자동 스크롤 재활성화 및 비디오 재시작
      if (currentScrollTop <= 50) {
        if (!isAutoScrollEnabled) {
          setIsAutoScrollEnabled(true);
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          }
          startAutoScrollTimer();
        }
      }
      
      lastScrollTop.current = currentScrollTop;
    };

    const startAutoScrollTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      
      timerRef.current = setTimeout(() => {
        if (isAutoScrollEnabled) {
          const whyHotelLaundrySection = document.getElementById('why-hotel-laundry');
          if (whyHotelLaundrySection) {
            whyHotelLaundrySection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }, 9000);
    };

    // 초기 타이머 시작
    if (isAutoScrollEnabled) {
      startAutoScrollTimer();
    }

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAutoScrollEnabled]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 비디오 배경 */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        onContextMenu={(e) => e.preventDefault()}
      >
        <source src="/Videos/MainBanner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* 텍스트 콘텐츠 */}
      <div className="absolute inset-0 flex flex-col justify-center text-white text-left sm:text-center px-6 sm:px-4 sm:items-center">
        <h1 className="hero-title font-['KoPubWorldBatang'] font-[700] text-[30px] leading-[38px] tracking-[-0.6px] sm:text-[32px] sm:leading-normal sm:tracking-[-0.64px] md:text-[40px] md:tracking-[-0.8px] lg:text-[50px] lg:tracking-[-1px] xl:text-[60px] xl:tracking-[-1.2px] 2xl:text-[70px] 2xl:tracking-[-1.4px] mb-[12px] sm:mb-[10px] md:mb-[12px] lg:mb-[12px] xl:mb-[11px] 2xl:mb-[12px]">
          Start Your<br className="sm:hidden" /> Smart Laundry Business
        </h1>
        <p className="hero-subtitle font-['KoPubWorldDotum'] font-[500] leading-normal text-[20px] tracking-[-0.4px] sm:text-[24px] sm:tracking-[-0.48px] md:text-[34px] md:tracking-[-0.68px] lg:text-[38px] lg:tracking-[-0.76px] xl:text-[42px] xl:tracking-[-0.84px] 2xl:text-[50px] 2xl:tracking-[-1px]">
          스마트한 무인세탁 창업,<br className="sm:hidden" /> 호텔런드리에서 시작하세요
        </p>
      </div>
    </div>
  );
};

export default Hero; 