import React from 'react';

const Contact = ({ onPageChange }) => {
  // Contact 버튼 클릭 시 문의하기 페이지로 이동
  const handleContactClick = () => {
    onPageChange('contact');
  };

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
            className="mb-6 text-center font-['KoPubWorldBatang'] text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-normal font-[500] text-[#FFF] leading-normal"
          >
            Ready to Start?
          </h2>
          <p
            className="mb-8 text-center font-['KoPubWorldDotum'] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-normal font-[500] leading-normal"
          >
            <span className="hidden sm:inline">호텔런드리 창업이 궁금하시다면, 지금 바로 상담을 신청해보세요.</span>
            <span className="inline sm:hidden">지금 바로 상담을 신청해보세요.</span>
          </p>

          {/* Contact 버튼 */}
          <button
            className="inline-flex justify-center items-center gap-2.5 w-[142px] h-[39px] sm:w-[150px] sm:h-[40px] md:w-[170px] md:h-[49px] lg:w-[200px] lg:h-[54px] xl:w-[223px] xl:h-[60px] 2xl:w-[300px] 2xl:h-[80px] px-[42px] sm:px-[19px] md:px-[24px] lg:px-[30px] xl:px-[30px] 2xl:px-[30px] py-[7px] sm:py-[6px] md:py-[9px] lg:py-[10px] xl:py-[10px] 2xl:py-[10px] bg-[#FFF] text-[#102254] text-center font-['KoPubWorldBatang'] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] 2xl:text-[30px] font-[700] leading-normal border-[0.5px] md:border-[0.5px] lg:border border-[#102254] hover:bg-[#102254] hover:text-white transition-colors duration-300 flex-shrink-0 tracking-[-0.32px] sm:tracking-[-0.36px] md:tracking-[-0.4px] lg:tracking-[-0.44px] xl:tracking-[-0.52px] 2xl:tracking-[-0.6px] rounded-[8px]"
            onClick={handleContactClick}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact; 