import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import LocalPlatform from '../components/AppGuide/LocalPlatform';
import SameDayPickup from '../components/AppGuide/SameDayPickup';
import AppDownload from '../components/AppGuide/AppDownload';
import { useMetaTags } from '../hooks/useMetaTags';

const AppGuidePage = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  const lastPart = pathParts[pathParts.length - 1];
  const currentPath =
    lastPart && lastPart !== 'app-guide' ? lastPart : 'app-download';
  
  // 앱 가이드 페이지 전용 메타태그 설정 (기본값 사용)
  useMetaTags();

  const breadcrumbItems = [
    {
      label: '앱 가이드',
      link: '/app-guide/app-download',
      isActive: false,
    },
    {
      label: getCurrentPageLabel(currentPath),
      hasDropdown: true,
      dropdownItems: [
        {
          label: '사용 가이드 / APP',
          link: '/app-guide/app-download',
          isActive: currentPath === 'app-download',
        },
        {
          label: '지역 플랫폼',
          link: '/app-guide/local-platform',
          isActive: currentPath === 'local-platform',
        },
        {
          label: '당일 수거서비스',
          link: '/app-guide/same-day-pickup',
          isActive: currentPath === 'same-day-pickup',
        },
      ],
    },
  ];

  function getCurrentPageLabel(path) {
    switch (path) {
      case 'local-platform':
        return '지역 플랫폼';
      case 'same-day-pickup':
        return '당일 수거서비스';
      case 'app-download':
        return '사용 가이드 / APP';
      default:
        return '사용 가이드 / APP';
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
            <Route path="/" element={<AppDownload />} />
            <Route path="/local-platform" element={<LocalPlatform />} />
            <Route path="/same-day-pickup" element={<SameDayPickup />} />
            <Route path="/app-download" element={<AppDownload />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default AppGuidePage;
