import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import StartupGuide from '../components/StartupGuide/StartupMain/StartupGuide';
import StoreOwnerInterview from '../components/StartupGuide/StoreOwnerInterview';
import SoloStartup from '../components/StartupGuide/SoloStartup';
import BusinessSeminar from '../components/StartupGuide/BusinessSeminar';
import Catalog from '../components/StartupGuide/Catalog';

const StartupGuidePage = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || 'startup-guide';

  const breadcrumbItems = [
    {
      label: '창업 안내',
      link: '/startup-guide',
      isActive: false,
    },
    {
      label: getCurrentPageLabel(currentPath),
      hasDropdown: true,
      dropdownItems: [
        {
          label: '창업안내',
          link: '/startup-guide/startup-guide-main',
          isActive: currentPath === 'startup-guide-main',
        },
        {
          label: '점주 인터뷰',
          link: '/startup-guide/store-owner-interview',
          isActive: currentPath === 'store-owner-interview',
        },
        {
          label: '단독 창업',
          link: '/startup-guide/solo-startup',
          isActive: currentPath === 'solo-startup',
        },
        {
          label: '사업 설명회',
          link: '/startup-guide/business-seminar',
          isActive: currentPath === 'business-seminar',
        },
        {
          label: '카탈로그',
          link: '/startup-guide/catalog',
          isActive: currentPath === 'catalog',
        },
      ],
    },
  ];

  function getCurrentPageLabel(path) {
    switch (path) {
      case 'startup-guide':
      case 'startup-guide-main':
        return '창업안내';
      case 'store-owner-interview':
        return '점주 인터뷰';
      case 'solo-startup':
        return '단독 창업';
      case 'business-seminar':
        return '사업 설명회';
      case 'catalog':
        return '카탈로그';
      default:
        return '창업안내';
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
            <Route path="/" element={<StartupGuide />} />
            <Route path="/startup-guide" element={<StartupGuide />} />
            <Route path="/startup-guide-main" element={<StartupGuide />} />
            <Route path="/store-owner-interview" element={<StoreOwnerInterview />} />
            <Route path="/solo-startup" element={<SoloStartup />} />
            <Route path="/business-seminar" element={<BusinessSeminar />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default StartupGuidePage;
