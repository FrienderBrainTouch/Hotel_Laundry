import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import StoreList from '../components/StoreInfo/StoreStatus/StoreList';
import StoreFinder from '../components/StoreInfo/FindStore/StoreFinder';

const StoreInfo = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || 'store-status';

  const breadcrumbItems = [
    {
      label: '매장 안내',
      link: '/store-info',
      isActive: false,
    },
    {
      label: getCurrentPageLabel(currentPath),
      hasDropdown: true,
      dropdownItems: [
        {
          label: '전국 매장 현황',
          link: '/store-info/store-status',
          isActive: currentPath === 'store-status',
        },
        {
          label: '매장 찾기',
          link: '/store-info/find-store',
          isActive: currentPath === 'find-store',
        },
      ],
    },
  ];

  function getCurrentPageLabel(path) {
    switch (path) {
      case 'store-status':
        return '전국 매장 현황';
      case 'find-store':
        return '매장 찾기';
      default:
        return '전국 매장 현황';
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
            <Route path="/" element={<StoreList />} />
            <Route path="/store-info" element={<StoreList />} />
            <Route path="/store-status" element={<StoreList />} />
            <Route path="/find-store" element={<StoreFinder />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default StoreInfo;
