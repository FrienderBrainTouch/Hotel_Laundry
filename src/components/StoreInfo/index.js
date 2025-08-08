// components/StoreInfo/index.js
import React from 'react';
import StoreList from './pages/StoreStatus/StoreList'; // 경로 수정
import StoreFinder from './pages/FindStore/StoreFinder'; // 경로 수정

const StoreInfo = ({ mode = 'list' , onPageChange}) => {
  return (
    <div className="store-info">
      {/* 실제 페이지 콘텐츠 (StoreList 또는 StoreFinder) */}
      {mode === 'list' || mode === 'store-status' ? (
        <StoreList onPageChange={onPageChange} />
      ) : (
        <StoreFinder onPageChange={onPageChange} />
      )}
    </div>
  );
};

export default StoreInfo;