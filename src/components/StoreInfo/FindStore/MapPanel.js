import React, { useEffect, useState } from 'react';
import naverMapLoader from '../../../utils/naverMapLoader';

const MapPanel = ({ stores, className }) => {
  const [isMapReady, setIsMapReady] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);

  // 네이버 지도 API 로드 및 지도 초기화
  useEffect(() => {
    const initializeMap = async () => {
      try {
        // 네이버 지도 API 로드
        await naverMapLoader.loadMapAPI();
        
        // 지도 컨테이너 확인
        const mapContainer = document.getElementById('map');
        if (!mapContainer) {
          console.error('지도 컨테이너를 찾을 수 없습니다.');
          return;
        }

        // 지도 생성
        const map = naverMapLoader.createMap('map', {
          center: new window.naver.maps.LatLng(37.5665, 126.9780),
          zoom: 10,
          zoomControl: true,
        });

        setMapInstance(map);
        setIsMapReady(true);
      } catch (error) {
        console.error('지도 초기화 실패:', error);
      }
    };

    initializeMap();
  }, []);

  // 지점 마커 생성
  useEffect(() => {
    if (!isMapReady || !mapInstance || !stores || stores.length === 0) {
      return;
    }

    // 기존 마커 제거 (필요시)
    // markers.forEach(marker => marker.setMap(null));

    // 새로운 마커 생성
    stores.forEach(store => {
      if (store.latitude && store.longitude) {
        const markerPosition = new window.naver.maps.LatLng(store.latitude, store.longitude);
        naverMapLoader.createMarker(markerPosition, mapInstance);
      }
    });
  }, [isMapReady, mapInstance, stores]);

  return <div id="map" className={className}></div>;
};

export default MapPanel;