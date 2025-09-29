import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import SmartSystem from '../components/SmartSystem/SmartSystem';
import AdvancedTech from '../components/SmartSystem/AdvancedTech';
import HygieneManagement from '../components/SmartSystem/HygieneManagement';
import { useMetaTags } from '../hooks/useMetaTags';

const SmartSystemPage = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || 'smart-system';
  
  // 스마트 시스템 페이지 전용 메타태그 설정
  useMetaTags({
    title: '스마트 시스템 - IoT 무인세탁 관리 | 호텔런드리',
    description: 'IoT 기술로 세탁기 상태를 실시간 모니터링하고 관리하는 스마트 시스템. 원격 제어와 자동화로 효율적인 무인세탁 운영을 경험하세요.',
    keywords: '스마트 시스템, IoT 세탁, 무인세탁 관리, 원격 모니터링, 자동화, 세탁기 관리, 실시간 모니터링, IoT 기술',
    ogTitle: '스마트 시스템 - IoT 무인세탁 관리',
    ogDescription: 'IoT 기술로 세탁기를 실시간 모니터링하고 관리하는 스마트 시스템을 경험하세요.',
    ogImage: 'https://hotellaundry.co.kr/images/SmartSystem/Smart-1.png',
    ogUrl: 'https://hotellaundry.co.kr/smart-system',
    canonical: 'https://hotellaundry.co.kr/smart-system'
  });

  const breadcrumbItems = [
    {
      label: '스마트 시스템',
      link: '/smart-system',
      isActive: false,
    },
    {
      label: getCurrentPageLabel(currentPath),
      hasDropdown: true,
      dropdownItems: [
        {
          label: '스마트 시스템',
          link: '/smart-system/smart-system',
          isActive: currentPath === 'smart-system',
        },
        {
          label: '첨단 기술',
          link: '/smart-system/advanced-technology',
          isActive: currentPath === 'advanced-technology',
        },
        {
          label: '위생 관리',
          link: '/smart-system/status-management',
          isActive: currentPath === 'status-management',
        },
      ],
    },
  ];

  function getCurrentPageLabel(path) {
    switch (path) {
      case 'smart-system':
        return '스마트 시스템';
      case 'advanced-technology':
        return '첨단 기술';
      case 'status-management':
        return '위생 관리';
      default:
        return '스마트 시스템';
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
            <Route path="/" element={<SmartSystem />} />
            <Route path="/smart-system" element={<SmartSystem />} />
            <Route path="/advanced-technology" element={<AdvancedTech />} />
            <Route path="/status-management" element={<HygieneManagement />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default SmartSystemPage;
