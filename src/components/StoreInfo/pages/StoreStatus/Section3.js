import React, { useState } from 'react';
import Next from './StoreListImage/next.svg';
import ToNext from './StoreListImage/tonext.svg';
import StoreCard from './StoreCard';

const dummyStores = [
  { id: 1, name: '독산점', address: '서울특별시 금천구 두산로3길 16 101동 1층 101호', region: '서울' },
  { id: 2, name: '관악조원점', address: '서울특별시 관악구 남부순환로143가길 13 1층 101호 호텔런드리 관악조원점', region: '서울' },
  { id: 3, name: '신림본점', address: '서울특별시 관악구 조원로 177', region: '서울' },
  { id: 4, name: '신림점', address: '서울특별시 관악구 봉천로4길 25 1층', region: '서울' },
  { id: 5, name: '보라매점', address: '서울특별시 관악구 신림동길 32 1층', region: '서울' },
  { id: 6, name: '신림서원점', address: '서울특별시 관악구 신림로56길 7 1층', region: '서울' },
  { id: 7, name: '신림역점', address: '서울특별시 관악구 신림로70길 23 1층', region: '서울' },
  { id: 8, name: '신길점', address: '서울특별시 영등포구 도신로60길 8 2층', region: '서울' },
  { id: 9, name: '서울대학점', address: '서울특별시 관악구 대학10길 40 1층', region: '서울' },
  { id: 10, name: '봉천점', address: '서울특별시 관악구 장군봉2길 29 지1층 비02호', region: '서울' },
  { id: 11, name: '서울대점', address: '서울특별시 관악구 신림로11길 76 1층 101호', region: '서울' },
  { id: 12, name: '신림서림점', address: '서울특별시 관악구 서림3길 9 101호', region: '서울' },
  { id: 13, name: '청룡점', address: '서울특별시 관악구 청룡8길 32 101호', region: '서울' },
  { id: 14, name: '상도점', address: '서울특별시 동작구 성대로37길 11 1층 101호', region: '서울' },
  { id: 15, name: '봉천중앙점', address: '서울특별시 관악구 양녕로6길 20 101호', region: '서울' },
  { id: 16, name: '서울대입구점', address: '서울특별시 관악구 쑥고개로 118 1층', region: '서울' },
  { id: 17, name: '샤로수길점', address: '서울특별시 관악구 남부순환로228길 69 1층', region: '서울' },
  { id: 18, name: '서울대행운점', address: '서울특별시 관악구 남부순환로233길 31-1 1층 101호', region: '서울' },
  { id: 19, name: '사당점', address: '서울특별시 동작구 사당로20길 70 1층', region: '서울' },
  { id: 20, name: '항동점', address: '서울특별시 구로구 연동로11길 24 1층', region: '서울' },
  { id: 21, name: '낙성대점', address: '서울특별시 관악구 낙성대역길 83 1층 101호', region: '서울' },
  { id: 22, name: '평촌역점', address: '경기도 안양시 동안구 부림로 113 평촌아이파크 오피스텔 2층 201호', region: '경기' },
  { id: 23, name: '화곡점', address: '서울특별시 강서구 화곡로 137 제1층', region: '서울' },
  { id: 24, name: '서교점', address: '서울특별시 마포구 월드컵북로5나길 21 1층 102호', region: '서울' },
  { id: 25, name: '아이에스비즈점', address: '경기도 안양시 동안구 흥안대로427번길 57-2 평촌아이에스비즈타워 1층 105호', region: '경기' },
  { id: 26, name: '금정점', address: '경기도 군포시 번영로610번길 8 1층 2호', region: '경기' },
  { id: 27, name: '도래울점', address: '경기도 고양시 덕양구 서오릉로 625 1층 110호', region: '경기' },
  { id: 28, name: '안산중앙역점', address: '경기도 안산시 단원구 중앙대로 885 113호', region: '경기' },
  { id: 29, name: '한양대학로점', address: '경기도 안산시 상록구 학사7길 1 1층', region: '경기' },
  { id: 30, name: '갈매점', address: '경기도 구리시 갈매순환로166번길 45 B1층 B119호', region: '경기' },
  { id: 31, name: '성내점', address: '서울특별시 강동구 양재대로103길 29 1층', region: '서울' },
  { id: 32, name: '광교상현점', address: '경기도 용인시 수지구 광교중앙로 338 상가동(A동상가 헤어살롱 CU라인) 1층 106호', region: '경기' },
  { id: 33, name: '경희대점', address: '서울특별시 동대문구 이문로 34 제2층 제204호', region: '서울' },
  { id: 34, name: '송도랜드마크점', address: '인천광역시 연수구 아트센터대로168번길 101 송도랜드마크푸르지오시티 146호', region: '인천' },
  { id: 35, name: '장항점', address: '경기도 고양시 일산동구 중앙로 1341 1층 102호', region: '경기' },
  { id: 36, name: '성남금광점', address: '경기도 성남시 중원구 자혜로 68 1층', region: '경기' },
  { id: 37, name: '분당장안점', address: '경기도 성남시 분당구 장안로52번길 13 103호', region: '경기' },
  { id: 38, name: '곡반정점', address: '경기도 수원시 권선구 동수원로146번길 52 101호', region: '경기' },
  { id: 39, name: '미사헤븐시티점', address: '경기도 하남시 미사강변한강로 295 111호', region: '경기' },
  { id: 40, name: '동탄실리콘앨리점', address: '경기도 화성시 동탄영천로 150 SB2동 지하 218호', region: '경기' },
  { id: 41, name: '수진역점', address: '경기도 성남시 중원구 산성대로 194 더리브 프리미어 오피스텔 119호', region: '경기' },
  { id: 42, name: '동탄역점', address: '경기도 화성시 동탄기흥로 447-20 115호', region: '경기' },
  { id: 43, name: '포천이동교점', address: '경기도 포천시 소흘읍 호국로429번길 8', region: '경기' },
  { id: 44, name: '마장점', address: '서울특별시 성동구 마조로 56 1층', region: '서울' },
  { id: 45, name: '평택점', address: '경기도 평택시 세교7길 53-9 1층 101호', region: '경기' },
  { id: 46, name: '안성석정점', address: '경기도 안성시 석정2길 26-1 1층', region: '경기' },
  { id: 47, name: '광양중동점', address: '전라남도 광양시 사동로 52 1층', region: '전라' },
  { id: 48, name: '광주용봉점', address: '광주광역시 북구 설죽로214번길 75 1층', region: '전라' }
];

const Section3 = () => {
  const [activeFilter, setActiveFilter] = useState('전국');
  const [currentPage, setCurrentPage] = useState(1);

  // 필터링 로직
  const filteredStores = dummyStores.filter(store => {
    if (activeFilter === '전국') {
      return true;
    }
    if (activeFilter === '그 외') {
      const mainRegions = ['서울', '경기', '인천'];
      return !mainRegions.includes(store.region); 
    }
    return store.region === activeFilter;
  });

  // 페이지네이션 로직
  const storesPerPage = 9;
  const indexOfLastStore = currentPage * storesPerPage;
  const indexOfFirstStore = indexOfLastStore - storesPerPage;
  const currentStores = filteredStores.slice(indexOfFirstStore, indexOfLastStore);
  const totalPages = Math.ceil(filteredStores.length / storesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-KoPubWorldDotum text-hero-title font-bold text-center mb-6">전국 매장 현황</h2>

        {/* 필터 버튼 */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button onClick={() => handleFilterChange('전국')} className={`px-6 py-2 rounded-full font-semibold text-24 ${activeFilter === '전국' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border'}`}>전국</button>
          <button onClick={() => handleFilterChange('서울')} className={`px-6 py-2 rounded-full font-semibold text-24 ${activeFilter === '서울' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border'}`}>서울</button>
          <button onClick={() => handleFilterChange('경기')} className={`px-6 py-2 rounded-full font-semibold text-24 ${activeFilter === '경기' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border'}`}>경기</button>
          <button onClick={() => handleFilterChange('인천')} className={`px-6 py-2 rounded-full font-semibold text-24 ${activeFilter === '인천' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border'}`}>인천</button>              
          <button onClick={() => handleFilterChange('그 외')} className={`px-6 py-2 rounded-full font-semibold text-24 ${activeFilter === '그 외' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border'}`}>그 외</button>              
        </div>

        {/* 매장 카드 그리드 - 모바일에서만 슬라이드, 태블릿/데스크톱에서는 그리드 */}
        {/* 모바일 슬라이드 컨테이너 */}
        <div className="md:hidden overflow-x-auto pb-4">
          <div className="flex space-x-4" style={{ width: `${filteredStores.length * 280}px` }}>
            {filteredStores.map(store => (
              <div key={store.id} className="flex-shrink-0 w-70">
                <StoreCard store={store} />
              </div>
            ))}
          </div>
        </div>

        {/* 태블릿/데스크톱 그리드 */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {currentStores.map(store => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>

        {/* 페이지네이션 - 태블릿/데스크톱에서만 표시 */}
        <nav className="hidden md:flex justify-center items-center mt-16 space-x-2">
          <button onClick={() => handlePageChange(1)} disabled={currentPage === 1} className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-50">
            <img src={ToNext} alt="마지막 이전 페이지" className="h-5 w-5 rotate-180" />
          </button>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-50">
            <img src={Next} alt="이전 페이지" className="h-5 w-5 rotate-180" />
          </button>
          
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`w-8 h-8 rounded text-24 ${currentPage === index + 1 ? 'text-white bg-gray-800' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              {index + 1}
            </button>
          ))}

          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-50">
            <img src={Next} alt="다음 페이지" className="h-5 w-5" />
          </button>
          <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-50">
            <img src={ToNext} alt="마지막 페이지" className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Section3;
