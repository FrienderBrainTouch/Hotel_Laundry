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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="hero-title font-['KoPubWorldBatang'] font-[700] mb-6 leading-tight">
          Start Your Smart Laundry Business
        </h1>
        <p className="hero-subtitle font-['KoPubWorldDotum'] font-[500] leading-relaxed text-center">
          스마트한 무인세탁 창업, 호텔런드리에서 시작하세요
        </p>
      </div>
    </div>
  );
};

export default Hero; 