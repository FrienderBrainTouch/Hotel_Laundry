import React from 'react';
import {
  Hero,
  WhyHotelLaundry,
  SmartTech,
  AboutUs,
  BeyondLaundry,
  StepByStep,
  OurStores,
  Contact,
} from '../components/Main';
import { useMetaTags } from '../hooks/useMetaTags';

const Main = () => {
  // 메인 페이지 전용 메타태그 설정 (기본값 사용)
  useMetaTags();

  return (
    <>
      <Hero />
      <WhyHotelLaundry />
      <SmartTech />
      <AboutUs />
      <BeyondLaundry />
      <StepByStep />
      <OurStores />
      <Contact />
    </>
  );
};

export default Main;
