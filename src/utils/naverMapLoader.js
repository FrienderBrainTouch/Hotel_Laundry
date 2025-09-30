// 네이버 지도 API 로더 유틸리티
class NaverMapLoader {
  constructor() {
    this.isLoaded = false;
    this.isLoading = false;
    this.loadPromise = null;
  }

  async loadMapAPI() {
    // 이미 로드되었거나 로딩 중이면 기존 Promise 반환
    if (this.isLoaded) {
      return Promise.resolve();
    }
    
    if (this.isLoading) {
      return this.loadPromise;
    }

    this.isLoading = true;
    
    this.loadPromise = new Promise((resolve, reject) => {
      // 환경변수 확인
      const apiKey = process.env.REACT_APP_NAVER_MAP_CLIENT_ID;
      if (!apiKey) {
        console.warn('네이버 지도 API 키가 설정되지 않았습니다.');
        reject(new Error('API 키가 설정되지 않았습니다.'));
        return;
      }

      // 이미 로드된 스크립트가 있는지 확인
      const existingScript = document.querySelector('script[src*="oapi.map.naver.com"]');
      if (existingScript) {
        this.isLoaded = true;
        this.isLoading = false;
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${apiKey}`;
      script.async = true;

      script.onload = () => {
        this.isLoaded = true;
        this.isLoading = false;
        resolve();
      };

      script.onerror = () => {
        this.isLoading = false;
        console.error('네이버 지도 API 로딩에 실패했습니다.');
        reject(new Error('네이버 지도 API 로딩 실패'));
      };

      document.head.appendChild(script);
    });

    return this.loadPromise;
  }

  // 네이버 지도 API가 로드되었는지 확인
  isMapAPILoaded() {
    return this.isLoaded && window.naver && window.naver.maps;
  }

  // 지도 인스턴스 생성
  createMap(containerId, options = {}) {
    if (!this.isMapAPILoaded()) {
      throw new Error('네이버 지도 API가 로드되지 않았습니다.');
    }

    const defaultOptions = {
      center: new window.naver.maps.LatLng(37.5665, 126.9780),
      zoom: 10,
      zoomControl: true,
    };

    const mapOptions = { ...defaultOptions, ...options };
    return new window.naver.maps.Map(containerId, mapOptions);
  }

  // 마커 생성
  createMarker(position, map, options = {}) {
    if (!this.isMapAPILoaded()) {
      throw new Error('네이버 지도 API가 로드되지 않았습니다.');
    }

    const markerOptions = {
      position: position,
      map: map,
      ...options
    };

    return new window.naver.maps.Marker(markerOptions);
  }
}

// 싱글톤 인스턴스 생성
const naverMapLoader = new NaverMapLoader();

export default naverMapLoader;
