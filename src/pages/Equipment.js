import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import WashingMachine from '../components/Equipment/WashingMachine';
import Dryer from '../components/Equipment/Dryer';
import SelfDryCleaning from '../components/Equipment/SelfDryCleaning';
import { useMetaTags } from '../hooks/useMetaTags';

const EquipmentPage = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || 'washing-machine';
  
  // 장비 소개 페이지 전용 메타태그 설정
  useMetaTags({
    title: '장비 소개 - 세탁기, 건조기, 드라이클리닝 | 호텔런드리',
    description: '호텔런드리의 최신 세탁 장비를 소개합니다. 고성능 세탁기, 건조기, 셀프 드라이클리닝 장비로 프리미엄 세탁 서비스를 제공합니다.',
    keywords: '세탁기, 건조기, 드라이클리닝, 셀프드라이클리닝, 세탁장비, 무인세탁기, 고성능세탁기, 세탁장비소개',
    ogTitle: '장비 소개 - 세탁기, 건조기, 드라이클리닝',
    ogDescription: '최신 세탁 장비로 프리미엄 세탁 서비스를 제공합니다.',
    ogImage: 'https://hotellaundry.co.kr/images/main-Images/main-smart-1.png',
    ogUrl: 'https://hotellaundry.co.kr/equipment',
    canonical: 'https://hotellaundry.co.kr/equipment'
  });

  const breadcrumbItems = [
    {
      label: '장비소개',
      link: '/equipment',
      isActive: false,
    },
    {
      label: getCurrentPageLabel(currentPath),
      hasDropdown: true,
      dropdownItems: [
        {
          label: '세탁기',
          link: '/equipment/washing-machine',
          isActive: currentPath === 'washing-machine',
        },
        {
          label: '건조기',
          link: '/equipment/dryer',
          isActive: currentPath === 'dryer',
        },
        {
          label: '셀프 드라이클리닝',
          link: '/equipment/self-dry-cleaning',
          isActive: currentPath === 'self-dry-cleaning',
        },
      ],
    },
  ];

  function getCurrentPageLabel(path) {
    switch (path) {
      case 'washing-machine':
        return '세탁기';
      case 'dryer':
        return '건조기';
      case 'self-dry-cleaning':
        return '셀프 드라이클리닝';
      default:
        return '세탁기';
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
            <Route path="/" element={<WashingMachine />} />
            <Route path="/washing-machine" element={<WashingMachine />} />
            <Route path="/dryer" element={<Dryer />} />
            <Route path="/self-dry-cleaning" element={<SelfDryCleaning />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default EquipmentPage;
