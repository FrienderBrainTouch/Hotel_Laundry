import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateMetaTags, metaData } from '../utils/metaTags';

// 페이지별 메타태그를 자동으로 설정하는 커스텀 훅
export const useMetaTags = (customMetaData = {}) => {
  const location = useLocation();
  
  useEffect(() => {
    // 현재 경로에 따른 메타데이터 결정
    const path = location.pathname;
    let pageMetaData = {};
    
    // 경로별 기본 메타데이터 설정
    if (path === '/' || path === '') {
      pageMetaData = metaData.home;
    } else if (path.startsWith('/hotel-laundry')) {
      pageMetaData = metaData['hotel-laundry'];
    } else if (path.startsWith('/smart-system')) {
      pageMetaData = metaData['smart-system'];
    } else if (path.startsWith('/startup-guide')) {
      pageMetaData = metaData['startup-guide'];
    } else if (path.startsWith('/equipment')) {
      pageMetaData = metaData.equipment;
    } else if (path.startsWith('/app-guide')) {
      pageMetaData = metaData['app-guide'];
    } else if (path.startsWith('/store-info')) {
      pageMetaData = metaData['store-info'];
    } else if (path.startsWith('/management-support')) {
      pageMetaData = metaData['management-support'];
    } else if (path.startsWith('/contact')) {
      pageMetaData = metaData.contact;
    } else {
      // 기본값 (홈페이지)
      pageMetaData = metaData.home;
    }
    
    // 커스텀 메타데이터가 있으면 병합
    const finalMetaData = { ...pageMetaData, ...customMetaData };
    
    // 메타태그 업데이트
    updateMetaTags(finalMetaData);
  }, [location.pathname, customMetaData]);
};
