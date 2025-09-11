import React from 'react';
import HygieneHeroSection from './HygieneHeroSection';
import HygieneOptimization from './HygieneOptimization';

const HygieneManagement = () => {
  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 메인 콘텐츠 */}
          <div>
            <HygieneHeroSection />
            <HygieneOptimization />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HygieneManagement;
