import React, { useState } from 'react';

// Section3.js의 더미 데이터 사용 (추후 API로 대체 예정)
const dummyStores = [
  { id: 1, name: '독산점', address: '서울특별시 금천구 두산로3길 16 101동 1층 101호', region: '서울', lastUpdated: '2024-11-01', status: '정상' },
  { id: 2, name: '관악조원점', address: '서울특별시 관악구 남부순환로143가길 13 1층 101호 호텔런드리 관악조원점', region: '서울', lastUpdated: '2024-10-28', status: '정상' },
  { id: 3, name: '신림본점', address: '서울특별시 관악구 조원로 177', region: '서울', lastUpdated: '2024-10-25', status: '정상' },
  { id: 4, name: '신림점', address: '서울특별시 관악구 봉천로4길 25 1층', region: '서울', lastUpdated: '2024-11-03', status: '정상' },
  { id: 5, name: '보라매점', address: '서울특별시 관악구 신림동길 32 1층', region: '서울', lastUpdated: '2024-10-20', status: '정상' },
  { id: 6, name: '신림서원점', address: '서울특별시 관악구 신림로56길 7 1층', region: '서울', lastUpdated: '2024-10-15', status: '정상' },
  { id: 7, name: '신림역점', address: '서울특별시 관악구 신림로70길 23 1층', region: '서울', lastUpdated: '2024-10-18', status: '정상' },
  { id: 8, name: '신길점', address: '서울특별시 영등포구 도신로60길 8 2층', region: '서울', lastUpdated: '2024-10-22', status: '정상' },
  { id: 9, name: '서울대학점', address: '서울특별시 관악구 대학10길 40 1층', region: '서울', lastUpdated: '2024-11-02', status: '정상' },
  { id: 10, name: '봉천점', address: '서울특별시 관악구 장군봉2길 29 지1층 비02호', region: '서울', lastUpdated: '2024-10-30', status: '정상' },
  { id: 11, name: '서울대점', address: '서울특별시 관악구 신림로11길 76 1층 101호', region: '서울', lastUpdated: '2024-10-29', status: '정상' },
  { id: 12, name: '신림서림점', address: '서울특별시 관악구 서림3길 9 101호', region: '서울', lastUpdated: '2024-10-27', status: '정상' },
  { id: 13, name: '청룡점', address: '서울특별시 관악구 청룡8길 32 101호', region: '서울', lastUpdated: '2024-10-26', status: '정상' },
  { id: 14, name: '상도점', address: '서울특별시 동작구 성대로37길 11 1층 101호', region: '서울', lastUpdated: '2024-10-24', status: '정상' },
  { id: 15, name: '봉천중앙점', address: '서울특별시 관악구 양녕로6길 20 101호', region: '서울', lastUpdated: '2024-10-23', status: '정상' },
  { id: 16, name: '서울대입구점', address: '서울특별시 관악구 쑥고개로 118 1층', region: '서울', lastUpdated: '2024-10-21', status: '정상' },
  { id: 17, name: '샤로수길점', address: '서울특별시 관악구 남부순환로228길 69 1층', region: '서울', lastUpdated: '2024-10-19', status: '정상' },
  { id: 18, name: '서울대행운점', address: '서울특별시 관악구 남부순환로233길 31-1 1층 101호', region: '서울', lastUpdated: '2024-10-17', status: '정상' },
  { id: 19, name: '사당점', address: '서울특별시 동작구 사당로20길 70 1층', region: '서울', lastUpdated: '2024-10-16', status: '정상' },
  { id: 20, name: '항동점', address: '서울특별시 구로구 연동로11길 24 1층', region: '서울', lastUpdated: '2024-10-14', status: '정상' },
  { id: 21, name: '낙성대점', address: '서울특별시 관악구 낙성대역길 83 1층 101호', region: '서울', lastUpdated: '2024-10-13', status: '정상' },
  { id: 22, name: '평촌역점', address: '경기도 안양시 동안구 부림로 113 평촌아이파크 오피스텔 2층 201호', region: '경기', lastUpdated: '2024-10-12', status: '정상' },
  { id: 23, name: '화곡점', address: '서울특별시 강서구 화곡로 137 제1층', region: '서울', lastUpdated: '2024-10-11', status: '정상' },
  { id: 24, name: '서교점', address: '서울특별시 마포구 월드컵북로5나길 21 1층 102호', region: '서울', lastUpdated: '2024-10-10', status: '정상' },
  { id: 25, name: '아이에스비즈점', address: '경기도 안양시 동안구 흥안대로427번길 57-2 평촌아이에스비즈타워 1층 105호', region: '경기', lastUpdated: '2024-10-09', status: '정상' },
  { id: 26, name: '금정점', address: '경기도 군포시 번영로610번길 8 1층 2호', region: '경기', lastUpdated: '2024-10-08', status: '정상' },
  { id: 27, name: '도래울점', address: '경기도 고양시 덕양구 서오릉로 625 1층 110호', region: '경기', lastUpdated: '2024-10-07', status: '정상' },
  { id: 28, name: '안산중앙역점', address: '경기도 안산시 단원구 중앙대로 885 113호', region: '경기', lastUpdated: '2024-10-06', status: '정상' },
  { id: 29, name: '한양대학로점', address: '경기도 안산시 상록구 학사7길 1 1층', region: '경기', lastUpdated: '2024-10-05', status: '정상' },
  { id: 30, name: '갈매점', address: '경기도 구리시 갈매순환로166번길 45 B1층 B119호', region: '경기', lastUpdated: '2024-10-04', status: '정상' },
  { id: 31, name: '성내점', address: '서울특별시 강동구 양재대로103길 29 1층', region: '서울', lastUpdated: '2024-10-03', status: '정상' },
  { id: 32, name: '광교상현점', address: '경기도 용인시 수지구 광교중앙로 338 상가동(A동상가 헤어살롱 CU라인) 1층 106호', region: '경기', lastUpdated: '2024-10-02', status: '정상' },
  { id: 33, name: '경희대점', address: '서울특별시 동대문구 이문로 34 제2층 제204호', region: '서울', lastUpdated: '2024-10-01', status: '정상' },
  { id: 34, name: '송도랜드마크점', address: '인천광역시 연수구 아트센터대로168번길 101 송도랜드마크푸르지오시티 146호', region: '인천', lastUpdated: '2024-09-30', status: '정상' },
  { id: 35, name: '장항점', address: '경기도 고양시 일산동구 중앙로 1341 1층 102호', region: '경기', lastUpdated: '2024-09-29', status: '정상' },
  { id: 36, name: '성남금광점', address: '경기도 성남시 중원구 자혜로 68 1층', region: '경기', lastUpdated: '2024-09-28', status: '정상' },
  { id: 37, name: '분당장안점', address: '경기도 성남시 분당구 장안로52번길 13 103호', region: '경기', lastUpdated: '2024-09-27', status: '정상' },
  { id: 38, name: '곡반정점', address: '경기도 수원시 권선구 동수원로146번길 52 101호', region: '경기', lastUpdated: '2024-09-26', status: '정상' },
  { id: 39, name: '미사헤븐시티점', address: '경기도 하남시 미사강변한강로 295 111호', region: '경기', lastUpdated: '2024-09-25', status: '정상' },
  { id: 40, name: '동탄실리콘앨리점', address: '경기도 화성시 동탄영천로 150 SB2동 지하 218호', region: '경기', lastUpdated: '2024-09-24', status: '정상' },
  { id: 41, name: '수진역점', address: '경기도 성남시 중원구 산성대로 194 더리브 프리미어 오피스텔 119호', region: '경기', lastUpdated: '2024-09-23', status: '정상' },
  { id: 42, name: '동탄역점', address: '경기도 화성시 동탄기흥로 447-20 115호', region: '경기', lastUpdated: '2024-09-22', status: '정상' },
  { id: 43, name: '포천이동교점', address: '경기도 포천시 소흘읍 호국로429번길 8', region: '경기', lastUpdated: '2024-09-21', status: '정상' },
  { id: 44, name: '마장점', address: '서울특별시 성동구 마조로 56 1층', region: '서울', lastUpdated: '2024-09-20', status: '정상' },
  { id: 45, name: '평택점', address: '경기도 평택시 세교7길 53-9 1층 101호', region: '경기', lastUpdated: '2024-09-19', status: '정상' },
  { id: 46, name: '안성석정점', address: '경기도 안성시 석정2길 26-1 1층', region: '경기', lastUpdated: '2024-09-18', status: '정상' },
  { id: 47, name: '광양중동점', address: '전라남도 광양시 사동로 52 1층', region: '전라', lastUpdated: '2024-09-17', status: '정상' },
  { id: 48, name: '광주용봉점', address: '광주광역시 북구 설죽로214번길 75 1층', region: '전라', lastUpdated: '2024-09-16', status: '정상' }
];

const OperatingStores = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const storesPerPage = 10;

  // 매장 등록 핸들러
  const handleAddStore = () => {
    // TODO: 운영 매장 등록 모달 또는 페이지로 이동
    alert('운영 매장 등록 기능 (추후 구현)');
  };

  // 매장 수정 핸들러
  const handleEditStore = (store) => {
    // TODO: 운영 매장 수정 모달 또는 페이지로 이동
    alert(`${store.name} 수정 기능 (추후 구현)`);
  };

  // 필터링된 매장 목록
  const filteredStores = dummyStores.filter(store => {
    // 검색 필터
    const searchMatch = searchTerm === '' || 
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase());

    return searchMatch;
  });

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredStores.length / storesPerPage);
  const indexOfLastStore = currentPage * storesPerPage;
  const indexOfFirstStore = indexOfLastStore - storesPerPage;
  const currentStores = filteredStores.slice(indexOfFirstStore, indexOfLastStore);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 검색 시 첫 페이지로 이동
  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">운영 매장 현황</h2>
          <p className="text-gray-600">현재 운영 중인 매장 정보를 확인하고 관리할 수 있습니다.</p>
          <div className="mt-2 inline-flex items-center px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-lg">
            <span className="text-yellow-800 text-sm">⚠️ API 연동 예정 (현재 더미 데이터)</span>
          </div>
        </div>
        <button
          onClick={handleAddStore}
          className="bg-brand-blue hover:bg-brand-dark text-white px-4 py-2 rounded-md font-medium transition-colors"
        >
          + 운영 매장 등록
        </button>
      </div>

      {/* 검색 바 */}
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
          <div className="flex-1 w-full sm:max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="매장명 또는 주소로 검색..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              총 <span className="font-bold text-brand-blue text-lg">{filteredStores.length}</span>개 매장
            </span>
            <div className="h-6 w-px bg-gray-300"></div>
            <span className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">{currentPage}</span> / {totalPages} 페이지
            </span>
          </div>
        </div>

        {/* 매장 목록 테이블 */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  번호
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  매장명
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  주소
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  지역
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  상태
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  최근 업데이트
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  관리
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentStores.map((store, index) => (
                <tr key={store.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {indexOfFirstStore + index + 1}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{store.name}</div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 max-w-md truncate">
                    {store.address}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {store.region}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {store.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {store.lastUpdated}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-center">
                    <button 
                      onClick={() => handleEditStore(store)}
                      className="text-brand-blue hover:text-brand-dark text-sm font-medium"
                    >
                      수정
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStores.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">검색 결과 없음</h3>
            <p className="mt-1 text-sm text-gray-500">다른 검색어로 시도해보세요.</p>
          </div>
        )}

        {/* 페이지네이션 */}
        {filteredStores.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600 text-center mb-4">
              {indexOfFirstStore + 1} - {Math.min(indexOfLastStore, filteredStores.length)} / 총 {filteredStores.length}개
            </div>
            
            <div className="flex items-center justify-center gap-2">
              {/* 첫 페이지 */}
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                «
              </button>
              
              {/* 이전 페이지 */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                ‹
              </button>

              {/* 페이지 번호 */}
              <div className="flex gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        currentPage === pageNum
                          ? 'bg-brand-blue text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              {/* 다음 페이지 */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                ›
              </button>

              {/* 마지막 페이지 */}
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                »
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OperatingStores;

