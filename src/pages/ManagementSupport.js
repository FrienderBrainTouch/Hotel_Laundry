import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import CallCenter from '../components/ManagementSupport/CallCenter';
import CentralControl from '../components/ManagementSupport/CentralControl';
import StoreManagement from '../components/ManagementSupport/StoreManagement';
import { useMetaTags } from '../hooks/useMetaTags';

const ManagementSupport = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || 'management-support';
  
  // 관리 지원 페이지 전용 메타태그 설정
  useMetaTags({
    title: '관리 지원 - 중앙관제 & 매장관리 | 호텔런드리',
    description: '호텔런드리의 중앙관제 시스템과 매장 관리 지원 서비스를 소개합니다. 원격 모니터링과 24시간 지원으로 안정적인 운영을 보장합니다.',
    keywords: '중앙관제, 매장관리, 원격모니터링, 24시간지원, 관리지원, 세탁소관리, 중앙관제시스템',
    ogTitle: '관리 지원 - 중앙관제 & 매장관리',
    ogDescription: '중앙관제 시스템과 24시간 지원으로 안정적인 매장 운영을 보장합니다.',
    ogImage: 'https://hotellaundry.co.kr/images/main-Images/main-Beyond-1.png',
    ogUrl: 'https://hotellaundry.co.kr/management-support',
    canonical: 'https://hotellaundry.co.kr/management-support'
  });

  const breadcrumbItems = [
    {
      label: '관리지원',
      link: '/management-support',
      isActive: false,
    },
    {
      label: getCurrentPageLabel(currentPath),
      hasDropdown: true,
      dropdownItems: [
        {
          label: '24시간 콜센터',
          link: '/management-support/management-support',
          isActive: currentPath === 'management-support',
        },
        {
          label: '중앙관제',
          link: '/management-support/central-control',
          isActive: currentPath === 'central-control',
        },
        {
          label: '매장관리 대행',
          link: '/management-support/store-management',
          isActive: currentPath === 'store-management',
        },
      ],
    },
  ];

  function getCurrentPageLabel(path) {
    switch (path) {
      case 'management-support':
        return '24시간 콜센터';
      case 'central-control':
        return '중앙관제';
      case 'store-management':
        return '매장관리 대행';
      default:
        return '24시간 콜센터';
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
            <Route path="/" element={<CallCenter />} />
            <Route path="/management-support" element={<CallCenter />} />
            <Route path="/central-control" element={<CentralControl />} />
            <Route path="/store-management" element={<StoreManagement />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default ManagementSupport;
