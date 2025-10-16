import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import StartupGuide from '../components/StartupGuide/StartupMain/StartupGuide';
import StoreOwnerInterview from '../components/StartupGuide/StoreOwnerInterview';
import SoloStartup from '../components/StartupGuide/SoloStartup';
import BusinessSeminar from '../components/StartupGuide/BusinessSeminar';
import Catalog from '../components/StartupGuide/Catalog';
import LowCapitalStartup from '../components/StartupGuide/LowCapitalStartup';
import StoreProgress from '../components/StartupGuide/StoreProgress';
import { useMetaTags } from '../hooks/useMetaTags';

const StartupGuidePage = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || 'startup-guide';

  // 창업 안내 페이지 전용 메타태그 설정
  useMetaTags({
    title: '창업 안내 - 무인세탁 창업 가이드 | 호텔런드리',
    description:
      '무인세탁 창업을 위한 완벽한 가이드. 점주 인터뷰, 단독 창업, 사업 설명회, 카탈로그 다운로드까지 모든 정보를 확인하세요.',
    keywords:
      '무인세탁 창업, 셀프빨래방 창업, 소자본창업, 창업가이드, 점주인터뷰, 사업설명회, 창업비용, 무인창업',
    ogTitle: '무인세탁 창업 안내 - 호텔런드리',
    ogDescription: '무인세탁 창업을 위한 완벽한 가이드와 점주 인터뷰를 확인하세요.',
    ogImage: 'https://hotellaundry.co.kr/images/main-Images/main-slide-1.png',
    ogUrl: 'https://hotellaundry.co.kr/startup-guide',
    canonical: 'https://hotellaundry.co.kr/startup-guide',
  });

  // 진행 매장 페이지인 경우 4단계 브레드크럼
  const isStoreProgressPage = currentPath === 'store-progress';

  const breadcrumbItems = [
    {
      label: '창업 안내',
      link: '/startup-guide',
      isActive: false,
    },
    {
      label: isStoreProgressPage ? '소자본 창업' : getCurrentPageLabel(currentPath),
      link: isStoreProgressPage ? '/startup-guide/low-capital-startup' : undefined,
      isActive: false,
      hasDropdown: true,
      dropdownItems: [
        {
          label: '창업안내',
          link: '/startup-guide/startup-guide-main',
          isActive: currentPath === 'startup-guide-main',
        },
        {
          label: '소자본 창업',
          link: '/startup-guide/low-capital-startup',
          isActive: currentPath === 'low-capital-startup',
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
    ...(isStoreProgressPage
      ? [
          {
            label: '진행 매장',
            link: '/startup-guide/low-capital-startup/store-progress',
            isActive: true,
          },
        ]
      : []),
  ];

  function getCurrentPageLabel(path) {
    switch (path) {
      case 'startup-guide':
      case 'startup-guide-main':
        return '창업안내';
      case 'low-capital-startup':
        return '소자본 창업';
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
            <Route path="/low-capital-startup" element={<LowCapitalStartup />} />
            <Route path="/low-capital-startup/store-progress" element={<StoreProgress />} />
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
