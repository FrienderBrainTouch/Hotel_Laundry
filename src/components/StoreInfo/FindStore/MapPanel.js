import React, { useEffect, useState } from 'react'; // useState를 import 합니다.

const MapPanel = ({ stores, className }) => {
  // 1. 스크립트가 로딩되었는지 확인하기 위한 state 추가
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // 2. [스크립트 로딩 전용] 이 useEffect는 컴포넌트가 처음 생성될 때 딱 한 번만 실행됩니다.
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`;
    script.async = true;

    // 스크립트 로딩이 성공하면 isScriptLoaded를 true로 변경
    script.onload = () => {
      setIsScriptLoaded(true);
    };

    document.head.appendChild(script);

    // 컴포넌트가 사라질 때 스크립트를 정리합니다.
    return () => {
      document.head.removeChild(script);
    };
  }, []); // []가 비어있으므로 최초 1회만 실행

  // 3. [지도 생성 전용] 이 useEffect는 스크립트가 로딩되거나, stores 데이터가 바뀔 때 실행됩니다.
  useEffect(() => {
    // 스크립트가 아직 로딩되지 않았다면 아무것도 하지 않습니다.
    if (!isScriptLoaded) {
      return;
    }

    // 여기서부터는 기존에 작성하신 코드와 거의 동일합니다.
    const mapContainer = document.getElementById('map');
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.5665, 126.9780), // 기본 중심 위치
      zoom: 10,
      zoomControl: true,
    };

    const map = new window.naver.maps.Map(mapContainer, mapOptions);

    // stores 데이터가 있을 경우 마커를 생성합니다.
    stores.forEach(store => {
      const markerPosition = new window.naver.maps.LatLng(store.latitude, store.longitude);
      new window.naver.maps.Marker({
        position: markerPosition,
        map: map,
      });
    });

  }, [isScriptLoaded, stores]); // isScriptLoaded나 stores가 변경될 때마다 다시 실행

  return <div id="map" className={className}></div>;
};

export default MapPanel;