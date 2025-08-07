// components/StoreInfo/index.js
import React from 'react';
import StoreList from './pages/StoreList';
import StoreFinder from './pages/StoreFinder';
import Breadcrumb from './common/Breadcrumb';

const StoreInfo = ({ mode = 'list' , onPageChange}) => {
  return (
    // 💡 1. 이 div가 StoreInfo 페이지의 전체 레이아웃을 책임집니다.
    // App.js에서 못해준 헤더와의 간격(pt-24)을 여기서 확보합니다.
    <div className="pt-20 sm:pt-24 md:pt-28">

      {/* 💡 2. 콘텐츠의 최대 너비와 가운데 정렬을 위한 컨테이너를 정의합니다. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb와 아래 콘텐츠 사이의 간격을 위한 div */}
        <div className="mb-8 md:mb-12">
          <Breadcrumb 
            currentPage={mode === 'list' ? '전국 매장 현황' : '매장 찾기'} 
            onPageChange={onPageChange} // ✨ 받은 함수를 다시 props로 전달
          />
        </div>

        {/* 실제 페이지 콘텐츠 (StoreList 또는 StoreFinder) */}
        <div>
          {mode === 'list' ? <StoreList /> : <StoreFinder />}
        </div>
        
      </div>
    </div>
  );
};

export default StoreInfo;