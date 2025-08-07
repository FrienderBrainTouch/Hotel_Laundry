import React from 'react';

const Contact = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="2xl:w-[1920px] 2xl:h-[500px] w-full h-screen">
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
          className="mb-6 font-['KoPubWorldBatang'] 2xl:text-[40px] font-normal font-[500] text-[#FFF]"
        >
          Ready to Start?
        </h2>
        <p 
          className="mb-8 font-['KoPubWorldDotum'] 2xl:text-[32px] font-normal font-[500] leading-relaxed"
        >
          호텔런드리 창업이 궁금하시다면, 지금 바로 상담을 신청해보세요.
        </p>
        
        {/* Contact 버튼 */}
        <button 
          className="2xl:w-[300px] 2xl:h-[80px] px-8 py-4 border border-[#082567] bg-[#FFF] rounded-lg hover:bg-[#082567] hover:text-white transition-colors duration-300"
          style={{
            borderRadius: '8px',
            border: '1px solid #082567',
            background: '#FFF',
            color: '#082567',
            fontFamily: 'KoPubWorldBatang',
            fontSize: '30px',
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