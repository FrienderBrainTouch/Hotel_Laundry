// src/components/StoreInfo/pages/StoreFinder.js
import React, { useState } from 'react';
import SearchIcon from './StoreFinderImage/search_icon.svg';
import MapPanel from './MapPanel';
import ListPanel from './ListPanel';

// 동일한 더미 데이터 사용
const dummyStores = [
  { id: 1, name: '독산점', address: '서울특별시 금천구 두산로3길 16 101동 1층 101호', region: '서울', latitude: 37.4712478895047, longitude: 126.889346013619 },
  { id: 2, name: '관악조원점', address: '서울특별시 관악구 남부순환로143가길 13 1층 101호 호텔런드리 관악조원점', region: '서울', latitude: 37.4824926037917, longitude: 126.909843277714 },
  { id: 3, name: '신림본점', address: '서울특별시 관악구 조원로 177', region: '서울', latitude: 37.4864155397469, longitude: 126.921916266664 },
  { id: 4, name: '신림점', address: '서울특별시 관악구 봉천로4길 25 1층', region: '서울', latitude: 37.4887138633456, longitude: 126.924180075053 },
  { id: 5, name: '보라매점', address: '서울특별시 관악구 신림동길 32 1층', region: '서울', latitude: 37.4870351876597, longitude: 126.92529890372 },
  { id: 6, name: '신림서원점', address: '서울특별시 관악구 신림로56길 7 1층', region: '서울', latitude: 37.481368000533, longitude: 126.930576378073 },
  { id: 7, name: '신림역점', address: '서울특별시 관악구 신림로70길 23 1층', region: '서울', latitude: 37.4877717480379, longitude: 126.93028924443 },
  { id: 8, name: '신길점', address: '서울특별시 영등포구 도신로60길 8 2층', region: '서울', latitude: 37.51120601062, longitude: 126.916911161604 },
  { id: 9, name: '서울대학점', address: '서울특별시 관악구 대학10길 40 1층', region: '서울', latitude: 37.4678643429028, longitude: 126.935426803607 },
  { id: 10, name: '봉천점', address: '서울특별시 관악구 장군봉2길 29 지1층 비02호', region: '서울', latitude: 37.4828595738122, longitude: 126.938631469511 },
  { id: 11, name: '서울대점', address: '서울특별시 관악구 신림로11길 76 1층 101호', region: '서울', latitude: 37.4670698270351, longitude: 126.938631040034 },
  { id: 12, name: '신림서림점', address: '서울특별시 관악구 서림3길 9 101호', region: '서울', latitude: 37.4735906065661, longitude: 126.939301972812 },
  { id: 13, name: '청룡점', address: '서울특별시 관악구 청룡8길 32 101호', region: '서울', latitude: 37.4801445050588, longitude: 126.944143314109 },
  { id: 14, name: '상도점', address: '서울특별시 동작구 성대로37길 11 1층 101호', region: '서울', latitude: 37.500146132611, longitude: 126.9405960576 },
  { id: 15, name: '봉천중앙점', address: '서울특별시 관악구 양녕로6길 20 101호', region: '서울', latitude: 37.4845232297269, longitude: 126.947895776905 },
  { id: 16, name: '서울대입구점', address: '서울특별시 관악구 쑥고개로 118 1층', region: '서울', latitude: 37.4788197088574, longitude: 126.9496628718 },
  { id: 17, name: '샤로수길점', address: '서울특별시 관악구 남부순환로228길 69 1층', region: '서울', latitude: 37.476750683845, longitude: 126.954223976403 },
  { id: 18, name: '서울대행운점', address: '서울특별시 관악구 남부순환로233길 31-1 1층 101호', region: '서울', latitude: 37.4806271136448, longitude: 126.958929560288 },
  { id: 19, name: '사당점', address: '서울특별시 동작구 사당로20길 70 1층', region: '서울', latitude: 37.4800291116543, longitude: 126.975475694987 },
  { id: 20, name: '항동점', address: '서울특별시 구로구 연동로11길 24 1층', region: '서울', latitude: 37.4829306266877, longitude: 126.821393615282 },
  { id: 21, name: '낙성대점', address: '서울특별시 관악구 낙성대역길 83 1층 101호', region: '서울', latitude: 37.4746541016814, longitude: 126.963472860683 },
  { id: 22, name: '평촌역점', address: '경기도 안양시 동안구 부림로 113 평촌아이파크 오피스텔 2층 201호', region: '경기', latitude: 37.3936590321843, longitude: 126.964573851392 },
  { id: 23, name: '화곡점', address: '서울특별시 강서구 화곡로 137 제1층', region: '서울', latitude: 37.5409831860522, longitude: 126.836983267414 },
  { id: 24, name: '서교점', address: '서울특별시 마포구 월드컵북로5나길 21 1층 102호', region: '서울', latitude: 37.557548719385, longitude: 126.916036711705 },
  { id: 25, name: '아이에스비즈점', address: '경기도 안양시 동안구 흥안대로427번길 57-2 평촌아이에스비즈타워 1층 105호', region: '경기', latitude: 37.3913437957123, longitude: 126.971712440657 },
  { id: 26, name: '금정점', address: '경기도 군포시 번영로610번길 8 1층 2호', region: '경기', latitude: 37.3629669126115, longitude: 126.943153486322 },
  { id: 27, name: '도래울점', address: '경기도 고양시 덕양구 서오릉로 625 1층 110호', region: '경기', latitude: 37.6346407784137, longitude: 126.873012673643 },
  { id: 28, name: '안산중앙역점', address: '경기도 안산시 단원구 중앙대로 885 113호', region: '경기', latitude: 37.3172188449114, longitude: 126.835427154909 },
  { id: 29, name: '한양대학로점', address: '경기도 안산시 상록구 학사7길 1 1층', region: '경기', latitude: 37.2998878760144, longitude: 126.840946140404 },
  { id: 30, name: '갈매점', address: '경기도 구리시 갈매순환로166번길 45 B1층 B119호', region: '경기', latitude: 37.6347039369487, longitude: 127.123335648168 },
  { id: 31, name: '성내점', address: '서울특별시 강동구 양재대로103길 29 1층', region: '서울', latitude: 37.5331471414018, longitude: 127.136092713766 },
  { id: 32, name: '광교상현점', address: '경기도 용인시 수지구 광교중앙로 338 상가동(A동상가 헤어살롱 CU라인) 1층 106호', region: '경기', latitude: 37.3003363600416, longitude: 127.071799505702 },
  { id: 33, name: '경희대점', address: '서울특별시 동대문구 이문로 34 제2층 제204호', region: '서울', latitude: 37.590366180605, longitude: 127.056577777177 },
  { id: 34, name: '송도랜드마크점', address: '인천광역시 연수구 아트센터대로168번길 101 송도랜드마크푸르지오시티 146호', region: '인천', latitude: 37.4052932077337, longitude: 126.627973305853 },
  { id: 35, name: '장항점', address: '경기도 고양시 일산동구 중앙로 1341 1층 102호', region: '경기', latitude: 37.6646434598442, longitude: 126.768328220359 },
  { id: 36, name: '성남금광점', address: '경기도 성남시 중원구 자혜로 68 1층', region: '경기', latitude: 37.4510038712266, longitude: 127.167026015111 },
  { id: 37, name: '분당장안점', address: '경기도 성남시 분당구 장안로52번길 13 103호', region: '경기', latitude: 37.3699788104619, longitude: 127.145729273916 },
  { id: 38, name: '곡반정점', address: '경기도 수원시 권선구 동수원로146번길 52 101호', region: '경기', latitude: 37.2448742387789, longitude: 127.032213092225 },
  { id: 39, name: '미사헤븐시티점', address: '경기도 하남시 미사강변한강로 295 111호', region: '경기', latitude: 37.5643669496561, longitude: 127.198338348148 },
  { id: 40, name: '동탄실리콘앨리점', address: '경기도 화성시 동탄영천로 150 SB2동 지하 218호', region: '경기', latitude: 37.2160652110584, longitude: 127.101630829182 },
  { id: 41, name: '수진역점', address: '경기도 성남시 중원구 산성대로 194 더리브 프리미어 오피스텔 119호', region: '경기', latitude: 37.4365304856121, longitude: 127.140305579879 },
  { id: 42, name: '동탄역점', address: '경기도 화성시 동탄기흥로 447-20 115호', region: '경기', latitude: 37.2011854000563, longitude: 127.091403911915 },
  { id: 43, name: '포천이동교점', address: '경기도 포천시 소흘읍 호국로429번길 8', region: '경기', latitude: 37.8121189393127, longitude: 127.13370466299 },
  { id: 44, name: '마장점', address: '서울특별시 성동구 마조로 56 1층', region: '서울', latitude: 37.5626554577749, longitude: 127.041919035369 },
  { id: 45, name: '평택점', address: '경기도 평택시 세교7길 53-9 1층 101호', region: '경기', latitude: 37.0059292539321, longitude: 127.088593791536 },
  { id: 46, name: '안성석정점', address: '경기도 안성시 석정2길 26-1 1층', region: '경기', latitude: 37.0097961698886, longitude: 127.26079294578 },
  { id: 47, name: '광양중동점', address: '전라남도 광양시 사동로 52 1층', region: '전라', latitude: 34.9438345584304, longitude: 127.687276429813 },
  { id: 48, name: '광주용봉점', address: '광주광역시 북구 설죽로214번길 75 1층', region: '전라', latitude: 35.1780682751955, longitude: 126.901867581921 },
];
const StoreFinder = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredStores = dummyStores.filter(store => {
    const keyword = searchKeyword.toLowerCase();
    return store.name.toLowerCase().includes(keyword) || store.address.toLowerCase().includes(keyword);
  });

  const storesPerPage = 5; // 오른쪽 패널에 보여줄 매장 수
  const indexOfLastStore = currentPage * storesPerPage;
  const indexOfFirstStore = indexOfLastStore - storesPerPage;
  const currentStores = filteredStores.slice(indexOfFirstStore, indexOfLastStore);
  const totalPages = Math.ceil(filteredStores.length / storesPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1); // 검색 시 항상 1페이지로
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* 검색바 */}
      <div className="w-full border-b">
        <div className="max-w-xl mx-auto p-4">
        <h2>매장 찾기</h2>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="지역명 또는 매장명을 입력하세요"
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg pr-12"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-1">
              <img src={SearchIcon} alt="검색" className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
  
    {/* 회색 배경 메인 영역 - 뷰포트 전체 너비 */}
    <div className="w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-gray-100">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row justify-center gap-6 p-6">
        {/* 왼쪽: 지도 */}
        <MapPanel 
          stores={filteredStores}
          className="w-full lg:w-[800px] h-[680px] rounded-lg shadow-md" 
        />
        
        {/* 오른쪽: 목록 패널 */}
        <div className="w-full lg:w-[580px] bg-white rounded-lg shadow-md">
          <ListPanel 
            stores={currentStores}
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>

      {/* 푸터 */}
      <footer className="bg-white border-t">
        <div className="container mx-auto py-8 px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 회사 정보 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">호텔런드리</h3>
              <p className="text-sm text-gray-600">
                최고의 세탁 서비스로<br />
                호텔급 세탁을 경험하세요
              </p>
            </div>
            
            {/* 고객 서비스 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">고객 서비스</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>이용 안내</li>
                <li>자주 묻는 질문</li>
                <li>1:1 문의</li>
              </ul>
            </div>
  
            {/* 회사 소개 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">회사 소개</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>회사 소개</li>
                <li>인재 채용</li>
                <li>제휴 문의</li>
              </ul>
            </div>
  
            {/* 연락처 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">고객센터</h3>
              <p className="text-2xl font-bold text-blue-600">1544-0000</p>
              <p className="text-sm text-gray-600">
                평일 09:00 - 18:00<br />
                주말 및 공휴일 휴무
              </p>
            </div>
          </div>
  
          {/* 카피라이트 */}
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
            <p>© 2024 호텔런드리. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StoreFinder;