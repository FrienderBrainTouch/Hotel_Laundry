import React, { useRef, useEffect } from 'react';

const Hero = () => {
  // 1. video 태그를 직접 가리키기 위해 ref를 생성합니다.
  const videoRef = useRef(null);

  // 2. 컴포넌트가 화면에 그려진 직후에 이 코드를 실행합니다.
  useEffect(() => {
    // 3. ref를 통해 비디오 요소가 실제로 존재할 때만 실행합니다.
    if (videoRef.current) {
      // 4. '재생하라'는 명령을 직접 내립니다.
      //    브라우저 정책에 따라 이 명령이 실패할 수도 있으므로 .catch()로 에러를 처리합니다.
      videoRef.current.play().catch(error => {
        console.error("비디오 자동 재생이 차단되었습니다:", error);
      });
    }
  }, []); // []를 넣어 처음 한 번만 실행되도록 합니다.

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 비디오 배경 */}
      <video
        // 5. ref를 video 태그에 연결합니다.
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        muted
        autoPlay
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        onContextMenu={(e) => e.preventDefault()}
      >
        <source src="/Videos/MainBanner_h264_silent.mp4" type="video/mp4" />
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