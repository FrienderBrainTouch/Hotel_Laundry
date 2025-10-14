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
  // 메인 페이지 전용 메타태그 설정
  useMetaTags({
    title: '호텔런드리 - Hotel Laundry',
    description: '스마트 IoT 기술로 무인세탁 창업을 시작하세요. 셀프빨래방, 드라이클리닝, 소자본창업까지 호텔런드리에서 시작하세요. 원격 모니터링과 자동화로 효율적인 무인세탁 운영을 경험하세요.',
    keywords: '호텔 세탁, 무인세탁, IoT 세탁, 셀프빨래방, 소자본창업, 스마트 세탁, 드라이클리닝, 무인창업, 세탁기, 건조기, 호텔런드리, 워시업, 워시업코리아',
    ogTitle: '호텔런드리 - Hotel Laundry - 스마트 무인세탁 창업',
    ogDescription: 'IoT 기술로 무인세탁 창업을 시작하세요. 원격 모니터링과 자동화로 효율적인 세탁 사업을 운영하세요.',
    ogImage: 'https://hotellaundry.co.kr/images/CompanyInfo/Company-1.png',
    ogUrl: 'https://hotellaundry.co.kr/',
    canonical: 'https://hotellaundry.co.kr/'
  });

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
