import React from 'react';
import Section1 from './Section1';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';

const StartupGuide = () => {

  return (
    <section className="bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 메인 콘텐츠 */}
          <div>
            <Section1 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupGuide; 