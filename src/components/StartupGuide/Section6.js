import React from 'react';
import contactButton from './StartupGuideImage/contact_button.svg';

const Section6 = ({ onPageChange }) => {
  return (
    <section className="w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-blue-50 h-[300px] flex items-center justify-center font-pretendard">
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark mb-8">
          지금이 바로, 스마트한 창업의 타이밍
        </h1>
        <img 
          src={contactButton} 
          alt="문의하기 버튼" 
          className="mx-auto cursor-pointer w-32 h-12 hover:opacity-80 transition-opacity" 
          onClick={() => onPageChange('contact')}
        />
      </div>
    </section>
  );
};

export default Section6;
