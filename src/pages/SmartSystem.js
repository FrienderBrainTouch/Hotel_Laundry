import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import SmartSystem from '../components/SmartSystem/SmartSystem';
import AdvancedTech from '../components/SmartSystem/AdvancedTech';
import HygieneManagement from '../components/SmartSystem/HygieneManagement';

const SmartSystemPage = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || 'smart-system';

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
