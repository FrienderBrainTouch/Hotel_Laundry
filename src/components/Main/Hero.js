import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 비디오 배경 */}
      <video
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
      <div className="absolute inset-0 flex flex-col sm:items-center justify-center text-white sm:text-center text-left px-6 sm:px-4">
        <h1 className="hero-title font-['KoPubWorldBatang'] font-[700] mb-6 leading-tight text-[30px] sm:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]">
          Start Your<br className="sm:hidden" /> Smart Laundry Business
        </h1>
        <p className="hero-subtitle font-['KoPubWorldDotum'] font-[500] leading-relaxed text-[20px] sm:text-[24px] md:text-[34px] lg:text-[38px] xl:text-[42px] 2xl:text-[50px]">
          스마트한 무인세탁 창업,<br className="sm:hidden" /> 호텔런드리에서 시작하세요
        </p>
      </div>
    </div>
  );
};

export default Hero; 