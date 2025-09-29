import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import CompanyIntro from '../components/HotelLaundry/CompanyIntro';
import BrandStory from '../components/HotelLaundry/BrandStory';
import History from '../components/HotelLaundry/History';
import Certifications from '../components/HotelLaundry/Certifications';
import { useMetaTags } from '../hooks/useMetaTags';

const HotelLaundry = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || 'company-intro';
  
  // 호텔런드리 페이지 전용 메타태그 설정
  useMetaTags({
    title: '호텔런드리 소개 - 혁신적인 IoT 세탁 서비스 | 회사소개',
    description: '호텔런드리는 IoT 기술을 활용한 혁신적인 무인세탁 서비스를 제공합니다. 회사 소개, 브랜드 스토리, 연혁, 인증/특허 정보를 확인하세요.',
    keywords: '호텔런드리, 회사소개, 브랜드스토리, 연혁, 인증, 특허, IoT 세탁, 무인세탁, 혁신기업',
    ogTitle: '호텔런드리 소개 - IoT 세탁 서비스',
    ogDescription: 'IoT 기술을 활용한 혁신적인 무인세탁 서비스 호텔런드리를 소개합니다.',
    ogImage: 'https://hotellaundry.co.kr/images/CompanyInfo/Company-1.png',
    ogUrl: 'https://hotellaundry.co.kr/hotel-laundry',
    canonical: 'https://hotellaundry.co.kr/hotel-laundry'
  });

  const breadcrumbItems = [
    {
      label: '호텔런드리',
      link: '/hotel-laundry',
      isActive: false,
    },
    {
      label: getCurrentPageLabel(currentPath),
      hasDropdown: true,
      dropdownItems: [
        {
          label: '회사소개',
          link: '/hotel-laundry/company-intro',
          isActive: currentPath === 'company-intro',
        },
        { label: '연혁', link: '/hotel-laundry/history', isActive: currentPath === 'history' },
        {
          label: '브랜드 스토리',
          link: '/hotel-laundry/brand-story',
          isActive: currentPath === 'brand-story',
        },
        {
          label: '인증/특허',
          link: '/hotel-laundry/certifications',
          isActive: currentPath === 'certifications',
        },
      ],
    },
  ];

  function getCurrentPageLabel(path) {
    switch (path) {
      case 'company-intro':
        return '회사소개';
      case 'history':
        return '연혁';
      case 'brand-story':
        return '브랜드 스토리';
      case 'certifications':
        return '인증/특허';
      default:
        return '회사소개';
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 브레드크럼 */}
          <Breadcrumb items={breadcrumbItems} />

          {/* 개별 라우팅 */}
          <Routes>
            <Route path="/" element={<CompanyIntro />} />
            <Route path="/company-intro" element={<CompanyIntro />} />
            <Route path="/brand-story" element={<BrandStory />} />
            <Route path="/history" element={<History />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default HotelLaundry;
