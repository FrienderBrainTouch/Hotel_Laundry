import React, { useState } from 'react';
import OperatingStoreForm from './OperatingStoreForm';
import useApi from '../../../hooks/useApi';

// 더미 데이터 제거 - 테스트용 빈 배열
const dummyStores = [];

const OperatingStores = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const storesPerPage = 10;
  const [view, setView] = useState('list'); // 'list' | 'form'
  const [selectedStore, setSelectedStore] = useState(null);
  const api = useApi();

  // 매장 등록 핸들러
  const handleAddStore = () => {
    setSelectedStore(null);
    setView('form');
  };

  // 매장 수정 핸들러
  const handleEditStore = (store) => {
    // TODO: API로 상세 정보 가져오기
    setSelectedStore(store);
    setView('form');
  };

  // 목록으로 돌아가기
  const handleBackToList = () => {
    setSelectedStore(null);
    setView('list');
  };

  // 저장 핸들러
  const handleSave = async (formData) => {
    try {
      const endpoint = selectedStore
        ? `/admin/operating-store/${selectedStore.id}`
        : '/admin/operating-store';
      
      let result;
      if (selectedStore) {
        // 수정
        result = await api.patch(endpoint, formData);
      } else {
        // 생성
        result = await api.post(endpoint, formData);
      }

      console.log('✅ 저장 성공:', result);

      alert(selectedStore ? '운영 매장이 수정되었습니다.' : '운영 매장이 등록되었습니다.');
      
      // TODO: 목록 새로고침 (실제 API 연동 시 구현)
      handleBackToList();
    } catch (error) {
      console.error('❌ 저장 실패:', error);
      alert(`저장에 실패했습니다: ${error.message}`);
    }
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

  // 폼 뷰 렌더링
  if (view === 'form') {
    return (
      <OperatingStoreForm 
        store={selectedStore} 
        onBack={handleBackToList} 
        onSave={handleSave} 
      />
    );
  }

  // 목록 뷰 렌더링
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">운영 매장 현황</h2>
          <p className="text-gray-600">현재 운영 중인 매장 정보를 확인하고 관리할 수 있습니다.</p>
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
                  운영 현황
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

