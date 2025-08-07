import React from 'react';

const Contact = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-full h-[180px] sm:h-[230px] md:h-[250px] lg:h-[280px] xl:h-[350px] 2xl:h-[500px]">
        {/* 배경 이미지 */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/main-Images/main-contact.png)',
            filter: 'blur(10px)'
          }}
        ></div>
        
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* 텍스트 콘텐츠 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h2 
          className="mb-6 font-['KoPubWorldBatang'] text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-normal font-[500] text-[#FFF]"
        >
          Ready to Start?
        </h2>
        <p 
          className="mb-8 font-['KoPubWorldDotum'] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-normal font-[500] leading-relaxed"
        >
          <span className="hidden sm:inline">호텔런드리 창업이 궁금하시다면, 지금 바로 상담을 신청해보세요.</span>
          <span className="sm:hidden">지금 바로 상담을 신청해보세요.</span>
        </p>
        
        {/* Contact 버튼 */}
        <button 
          className="px-8 xl:px-12 py-2 lg:py-4 border border-[#082567] bg-[#FFF] rounded-lg hover:bg-[#082567] hover:text-white transition-colors duration-300 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] 2xl:text-[30px]"
          style={{
            borderRadius: '8px',
            border: '1px solid #082567',
            background: '#FFF',
            color: '#082567',
            fontFamily: 'KoPubWorldBatang',
            fontStyle: 'normal',
            fontWeight: '500'
          }}
        >
          Contact
        </button>
        </div>
      </div>
    </div>
  );
};

export default Contact; 