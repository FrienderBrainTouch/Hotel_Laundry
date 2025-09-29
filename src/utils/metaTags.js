// 메타태그 관리 유틸리티
export const updateMetaTags = (metaData) => {
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    canonical,
    robots = 'index, follow'
  } = metaData;

  // Title 업데이트
  if (title) {
    document.title = title;
  }

  // Description 업데이트
  updateMetaTag('name', 'description', description);
  
  // Keywords 업데이트
  updateMetaTag('name', 'keywords', keywords);
  
  // Robots 업데이트
  updateMetaTag('name', 'robots', robots);

  // Open Graph 태그 업데이트
  updateMetaTag('property', 'og:title', ogTitle || title);
  updateMetaTag('property', 'og:description', ogDescription || description);
  updateMetaTag('property', 'og:image', ogImage);
  updateMetaTag('property', 'og:url', ogUrl);
  
  // Canonical URL 업데이트
  updateCanonicalUrl(canonical);
};

const updateMetaTag = (attribute, name, content) => {
  if (!content) return;
  
  let metaTag = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (metaTag) {
    metaTag.setAttribute('content', content);
  } else {
    metaTag = document.createElement('meta');
    metaTag.setAttribute(attribute, name);
    metaTag.setAttribute('content', content);
    document.head.appendChild(metaTag);
  }
};

const updateCanonicalUrl = (url) => {
  if (!url) return;
  
  let canonical = document.querySelector('link[rel="canonical"]');
  
  if (canonical) {
    canonical.setAttribute('href', url);
  } else {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', url);
    document.head.appendChild(canonical);
  }
};

// 페이지별 메타데이터 정의
export const metaData = {
  home: {
    title: 'Hotel Laundry - 스마트 무인세탁 창업',
    description: '스마트 IoT 기술로 무인세탁 창업을 시작하세요. 셀프빨래방, 드라이클리닝, 소자본창업까지 호텔런드리에서 시작하세요. 원격 모니터링과 자동화로 효율적인 무인세탁 운영을 경험하세요.',
    keywords: '호텔 세탁, 무인세탁, IoT 세탁, 셀프빨래방, 소자본창업, 스마트 세탁, 드라이클리닝, 무인창업, 세탁기, 건조기, 호텔런드리',
    ogTitle: 'Hotel Laundry - 스마트 무인세탁 창업',
    ogDescription: 'IoT 기술로 무인세탁 창업을 시작하세요. 원격 모니터링과 자동화로 효율적인 세탁 사업을 운영하세요.',
    ogImage: 'https://hotellaundry.co.kr/images/CompanyInfo/Company-1.png',
    ogUrl: 'https://hotellaundry.co.kr/',
    canonical: 'https://hotellaundry.co.kr/'
  },
  
  'hotel-laundry': {
    title: '호텔런드리 소개 - 혁신적인 IoT 세탁 서비스 | 회사소개',
    description: '호텔런드리는 IoT 기술을 활용한 혁신적인 무인세탁 서비스를 제공합니다. 회사 소개, 브랜드 스토리, 연혁, 인증/특허 정보를 확인하세요.',
    keywords: '호텔런드리, 회사소개, 브랜드스토리, 연혁, 인증, 특허, IoT 세탁, 무인세탁',
    ogTitle: '호텔런드리 소개 - IoT 세탁 서비스',
    ogDescription: 'IoT 기술을 활용한 혁신적인 무인세탁 서비스 호텔런드리를 소개합니다.',
    ogImage: 'https://hotellaundry.co.kr/images/CompanyInfo/Company-1.png',
    ogUrl: 'https://hotellaundry.co.kr/hotel-laundry',
    canonical: 'https://hotellaundry.co.kr/hotel-laundry'
  },
  
  'smart-system': {
    title: '스마트 시스템 - IoT 무인세탁 관리 | 호텔런드리',
    description: 'IoT 기술로 세탁기 상태를 실시간 모니터링하고 관리하는 스마트 시스템. 원격 제어와 자동화로 효율적인 무인세탁 운영을 경험하세요.',
    keywords: '스마트 시스템, IoT 세탁, 무인세탁 관리, 원격 모니터링, 자동화, 세탁기 관리, 실시간 모니터링',
    ogTitle: '스마트 시스템 - IoT 무인세탁 관리',
    ogDescription: 'IoT 기술로 세탁기를 실시간 모니터링하고 관리하는 스마트 시스템을 경험하세요.',
    ogImage: 'https://hotellaundry.co.kr/images/SmartSystem/Smart-1.png',
    ogUrl: 'https://hotellaundry.co.kr/smart-system',
    canonical: 'https://hotellaundry.co.kr/smart-system'
  },
  
  'startup-guide': {
    title: '창업 안내 - 무인세탁 창업 가이드 | 호텔런드리',
    description: '무인세탁 창업을 위한 완벽한 가이드. 점주 인터뷰, 단독 창업, 사업 설명회, 카탈로그 다운로드까지 모든 정보를 확인하세요.',
    keywords: '무인세탁 창업, 셀프빨래방 창업, 소자본창업, 창업가이드, 점주인터뷰, 사업설명회, 창업비용',
    ogTitle: '무인세탁 창업 안내 - 호텔런드리',
    ogDescription: '무인세탁 창업을 위한 완벽한 가이드와 점주 인터뷰를 확인하세요.',
    ogImage: 'https://hotellaundry.co.kr/images/main-Images/main-slide-1.png',
    ogUrl: 'https://hotellaundry.co.kr/startup-guide',
    canonical: 'https://hotellaundry.co.kr/startup-guide'
  },
  
  'equipment': {
    title: '장비 소개 - 세탁기, 건조기, 드라이클리닝 | 호텔런드리',
    description: '호텔런드리의 최신 세탁 장비를 소개합니다. 고성능 세탁기, 건조기, 셀프 드라이클리닝 장비로 프리미엄 세탁 서비스를 제공합니다.',
    keywords: '세탁기, 건조기, 드라이클리닝, 셀프드라이클리닝, 세탁장비, 무인세탁기, 고성능세탁기',
    ogTitle: '장비 소개 - 세탁기, 건조기, 드라이클리닝',
    ogDescription: '최신 세탁 장비로 프리미엄 세탁 서비스를 제공합니다.',
    ogImage: 'https://hotellaundry.co.kr/images/main-Images/main-smart-1.png',
    ogUrl: 'https://hotellaundry.co.kr/equipment',
    canonical: 'https://hotellaundry.co.kr/equipment'
  },
  
  'app-guide': {
    title: '앱 가이드 - 지역 플랫폼 & 당일 수거서비스 | 호텔런드리',
    description: '호텔런드리 앱을 통한 지역 플랫폼 서비스와 당일 수거서비스를 이용하세요. 편리한 앱 다운로드와 사용법을 안내합니다.',
    keywords: '호텔런드리 앱, 지역플랫폼, 당일수거서비스, 앱다운로드, 모바일앱, 세탁앱',
    ogTitle: '앱 가이드 - 지역 플랫폼 & 당일 수거서비스',
    ogDescription: '호텔런드리 앱으로 편리한 세탁 서비스를 이용하세요.',
    ogImage: 'https://hotellaundry.co.kr/images/main-Images/main-contact.png',
    ogUrl: 'https://hotellaundry.co.kr/app-guide',
    canonical: 'https://hotellaundry.co.kr/app-guide'
  },
  
  'store-info': {
    title: '매장 안내 - 전국 호텔런드리 매장 찾기 | 매장 현황',
    description: '전국 호텔런드리 매장 현황과 매장 찾기 서비스. 가까운 매장을 찾아 편리한 세탁 서비스를 이용하세요.',
    keywords: '호텔런드리 매장, 매장찾기, 전국매장, 매장현황, 세탁소위치, 가까운세탁소',
    ogTitle: '매장 안내 - 전국 호텔런드리 매장',
    ogDescription: '전국 호텔런드리 매장을 찾아 편리한 세탁 서비스를 이용하세요.',
    ogImage: 'https://hotellaundry.co.kr/images/main-Images/main-ourstores.png',
    ogUrl: 'https://hotellaundry.co.kr/store-info',
    canonical: 'https://hotellaundry.co.kr/store-info'
  },
  
  'management-support': {
    title: '관리 지원 - 중앙관제 & 매장관리 | 호텔런드리',
    description: '호텔런드리의 중앙관제 시스템과 매장 관리 지원 서비스를 소개합니다. 원격 모니터링과 24시간 지원으로 안정적인 운영을 보장합니다.',
    keywords: '중앙관제, 매장관리, 원격모니터링, 24시간지원, 관리지원, 세탁소관리',
    ogTitle: '관리 지원 - 중앙관제 & 매장관리',
    ogDescription: '중앙관제 시스템과 24시간 지원으로 안정적인 매장 운영을 보장합니다.',
    ogImage: 'https://hotellaundry.co.kr/images/main-Images/main-Beyond-1.png',
    ogUrl: 'https://hotellaundry.co.kr/management-support',
    canonical: 'https://hotellaundry.co.kr/management-support'
  },
  
  'contact': {
    title: '문의하기 - 호텔런드리 고객센터 | 창업 상담',
    description: '호텔런드리 창업 상담 및 문의사항을 접수하세요. 전문 상담사가 무인세탁 창업에 대한 모든 질문에 답변드립니다.',
    keywords: '호텔런드리 문의, 창업상담, 고객센터, 문의하기, 상담신청, 무인세탁상담',
    ogTitle: '문의하기 - 호텔런드리 고객센터',
    ogDescription: '무인세탁 창업 상담 및 문의사항을 접수하세요.',
    ogImage: 'https://hotellaundry.co.kr/images/main-Images/main-contact.png',
    ogUrl: 'https://hotellaundry.co.kr/contact',
    canonical: 'https://hotellaundry.co.kr/contact'
  }
};
