import React from 'react';
import contactButton from './StartupGuideImage/contact_button.svg';

const Section6 = ({ onPageChange }) => {
  return (
    <section className="w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-blue-50 h-[300px] flex items-center justify-center font-pretendard">
      <div className="text-center">
      <h1 className="section-title font-bold text-gray-800 mb-6 sm:mb-8">      지금이 바로, 스마트한 창업의 타이밍</h1>
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
