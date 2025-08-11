import React from 'react';
import contactButton from './StartupGuideImage/contact_button.svg';

const Section6 = ({ onPageChange }) => {
  return (
    <section className="w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-blue-50 h-[300px] flex items-center justify-center font-pretendard">
      <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto text-center">
        <h1 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold text-[#1C262B] font-['KoPubWorldDotum'] leading-normal tracking-[-0.44px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px] text-center">
          지금이 바로, 스마트한 창업의 타이밍
        </h1>
        <img 
          src={contactButton} 
          alt="문의하기 버튼" 
          className="mx-auto cursor-pointer w-40 h-14 sm:w-48 sm:h-16 md:w-56 md:h-18 hover:opacity-80 transition-opacity" 
          onClick={() => onPageChange('contact')}
        />
      </div>
    </section>
  );
};

export default Section6;
