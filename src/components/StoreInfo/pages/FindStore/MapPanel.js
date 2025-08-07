import React, { useEffect } from 'react';

const MapPanel = ({ stores, className }) => {
  useEffect(() => {
    if (!window.naver || !window.naver.maps) {
      console.error("Naver Maps script not loaded yet.");
      return;
    }

    const mapContainer = document.getElementById('map');
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.5665, 126.9780),
      zoom: 10,
      zoomControl: true,
    };

    const map = new window.naver.maps.Map(mapContainer, mapOptions);

    stores.forEach(store => {
      const markerPosition = new window.naver.maps.LatLng(store.latitude, store.longitude);
      new window.naver.maps.Marker({
        position: markerPosition,
        map: map
      });
    });
  }, [stores]);

  return <div id="map" className={className}></div>;
};

export default MapPanel;