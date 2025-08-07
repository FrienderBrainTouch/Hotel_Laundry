// src/components/StoreInfo/pages/MapPanel.js
import React, { useEffect } from 'react';

const MapPanel = ({ stores }) => {
  useEffect(() => {
    // ✨ naver 객체가 로드되었는지 확인합니다.
    if (!window.naver || !window.naver.maps) {
      console.error("Naver Maps script not loaded yet.");
      return;
    }

    const mapContainer = document.getElementById('map');
    const mapOptions = {
      // ✨ naver.maps.LatLng로 변경
      center: new window.naver.maps.LatLng(37.5665, 126.9780), 
      zoom: 9, // 네이버는 level 대신 zoom을 사용합니다.
      zoomControl: true,
    };

    // ✨ naver.maps.Map으로 변경
    const map = new window.naver.maps.Map(mapContainer, mapOptions);

    stores.forEach(store => {
      // ✨ naver.maps.LatLng로 변경
      const markerPosition = new window.naver.maps.LatLng(store.latitude, store.longitude);
      
      // ✨ naver.maps.Marker로 변경
      new window.naver.maps.Marker({
        position: markerPosition,
        map: map // map 객체를 직접 전달합니다.
      });
    });

  }, [stores]); 

  return (
    <div id="map" className="w-full h-full"></div>
  );
};

export default MapPanel;