import React, { useState, useEffect } from 'react';
import OperatingStoreForm from './OperatingStoreForm';
import useApi from '../../../hooks/useApi';

// 대한민국 광역시/도 목록
const REGION_OPTIONS = [
  { value: '서울', label: '서울특별시' },
  { value: '부산', label: '부산광역시' },
  { value: '대구', label: '대구광역시' },
  { value: '인천', label: '인천광역시' },
  { value: '광주', label: '광주광역시' },
  { value: '대전', label: '대전광역시' },
  { value: '울산', label: '울산광역시' },
  { value: '세종', label: '세종특별자치시' },
  { value: '경기', label: '경기도' },
  { value: '강원', label: '강원특별자치도' },
  { value: '충북', label: '충청북도' },
  { value: '충남', label: '충청남도' },
  { value: '전북', label: '전북특별자치도' },
  { value: '전남', label: '전라남도' },
  { value: '경북', label: '경상북도' },
  { value: '경남', label: '경상남도' },
  { value: '제주', label: '제주특별자치도' },
];

const OperatingStores = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0); // 서버는 0부터 시작
  const [storesPerPage] = useState(10);
  const [view, setView] = useState('list'); // 'list' | 'form'
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [storesData, setStoresData] = useState({
    content: [],
    totalElements: 0,
    totalPages: 0,
    number: 0,
    first: true,
    last: true,
  });
  const [loading, setLoading] = useState(false);
  const api = useApi();

  // 운영 매장 목록 조회
  const fetchStores = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage.toString(),
        size: storesPerPage.toString(),
        sort: 'modifiedAt,desc',
      });

      if (selectedStatus) {
        params.append('status', selectedStatus);
      }
      if (selectedRegion) {
        params.append('region', selectedRegion);
      }
      if (searchTerm) {
        params.append('keyword', searchTerm);
      }

      const response = await api.get(`/operating-stores?${params.toString()}`);
      console.log('✅ 운영 매장 목록 조회 성공 - 전체 응답:', response);
      console.log('✅ content 배열:', response.content);
      if (response.content && response.content.length > 0) {
        console.log('✅ 첫 번째 매장 객체:', response.content[0]);
        console.log('✅ 첫 번째 매장의 ID 필드들:', {
          storeId: response.content[0].storeId,
          operatingStoreId: response.content[0].operatingStoreId,
          id: response.content[0].id,
        });
      }
      setStoresData(response);
    } catch (error) {
      console.error('❌ 운영 매장 목록 조회 실패:', error);
      alert('운영 매장 목록을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // 페이지, 검색어, 필터 변경 시 데이터 조회
  useEffect(() => {
    if (view === 'list') {
      fetchStores();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, selectedStatus, selectedRegion, searchTerm, view]);

  // 매장 등록 핸들러
  const handleAddStore = () => {
    setSelectedStore(null);
    setView('form');
  };

  // 매장 수정 핸들러
  const handleEditStore = async (store) => {
    try {
      setLoading(true);
      // storeId, operatingStoreId 또는 id 필드 사용
      const storeId = store.storeId || store.operatingStoreId || store.id;
      if (!storeId) {
        console.error('❌ 매장 ID를 찾을 수 없습니다. store 객체:', store);
        alert('매장 ID를 찾을 수 없습니다.');
        return;
      }

      console.log('🔍 상세 정보 조회 요청 - storeId:', storeId);
      // 상세 정보 조회 API 호출
      const response = await api.get(`/operating-stores/${storeId}`);
      
      // 이미지 URL 생성 및 existingImages 구성
      const imageBaseUrl = process.env.REACT_APP_IMAGE_BASE_URL || '';
      const existingImages = response.images?.map((img) => ({
        id: img.imageId,
        url: imageBaseUrl ? `${imageBaseUrl}${img.key}` : '',
        key: img.key,
      })) || [];

      // StoreForm과 유사한 구조로 데이터 변환
      const storeDetail = {
        // API 응답의 ID 필드를 모두 매핑 (어떤 필드명이 오더라도 대응)
        storeId: response.storeId || response.operatingStoreId,
        operatingStoreId: response.operatingStoreId || response.storeId,
        storeName: response.storeName,
        address: response.address,
        region: response.region,
        phone: response.phone,
        areaSqm: response.areaSqm,
        status: response.status,
        serialNumber: response.serialNumber,
        // 이미지 처리
        existingImages: existingImages,
        images: existingImages.map(img => img.url), // 미리보기용
        mainImage: existingImages.length > 0 ? existingImages[0].url : null,
        galleryImages: existingImages.length > 1 ? existingImages.slice(1).map(img => img.url) : [],
      };

      console.log('✅ 운영 매장 상세 정보 조회 성공:', storeDetail);
      setSelectedStore(storeDetail);
      setView('form');
    } catch (error) {
      console.error('❌ 운영 매장 상세 정보 조회 실패:', error);
      alert('운영 매장 정보를 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // 목록으로 돌아가기
  const handleBackToList = () => {
    setSelectedStore(null);
    setView('list');
  };

  // 저장 핸들러
  const handleSave = async (formData) => {
    try {
      // 수정과 생성 모두 같은 엔드포인트 사용 (수정 시 DTO 안에 operatingStoreId 포함)
      const endpoint = '/admin/operating-store';
      
      let result;
      if (selectedStore) {
        // 수정
        console.log('🔍 수정 요청 - endpoint:', endpoint);
        result = await api.patch(endpoint, formData);
      } else {
        // 생성
        result = await api.post(endpoint, formData);
      }

      console.log('✅ 저장 성공:', result);

      alert(selectedStore ? '운영 매장이 수정되었습니다.' : '운영 매장이 등록되었습니다.');
      
      // 목록 새로고침
      handleBackToList();
      fetchStores();
    } catch (error) {
      console.error('❌ 저장 실패:', error);
      alert(`저장에 실패했습니다: ${error.message}`);
    }
  };

  // 매장 삭제 핸들러
  const handleDeleteStore = async (store) => {
    const storeId = store.storeId || store.operatingStoreId || store.id;
    const storeName = store.storeName || '선택한 매장';
    
    if (!storeId) {
      alert('매장 ID를 찾을 수 없습니다.');
      return;
    }

    // 삭제 확인
    if (!window.confirm(`정말로 "${storeName}"을(를) 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.`)) {
      return;
    }

    try {
      setLoading(true);
      console.log('🗑️ 삭제 요청 - operatingStoreId:', storeId);
      
      await api.del(`/admin/operating-store/${storeId}`);
      
      console.log('✅ 삭제 성공');
      alert('운영 매장이 삭제되었습니다.');
      
      // 목록 새로고침
      fetchStores();
    } catch (error) {
      console.error('❌ 삭제 실패:', error);
      alert(`삭제에 실패했습니다: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // 페이지 변경 핸들러 (서버는 0부터 시작)
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber - 1); // UI는 1부터, 서버는 0부터
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 검색 시 첫 페이지로 이동
  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(0);
  };

  // 상태 포맷팅
  const formatStatus = (status) => {
    const statusMap = {
      OPERATING: '운영 중',
      WAITING: '운영 대기 중',
      CLOSED: '운영 중단',
    };
    return statusMap[status] || status || '-';
  };

  // 상태별 색상
  const getStatusColor = (status) => {
    const colorMap = {
      OPERATING: 'bg-green-100 text-green-800',
      WAITING: 'bg-yellow-100 text-yellow-800',
      CLOSED: 'bg-red-100 text-red-800',
    };
    return colorMap[status] || 'bg-gray-100 text-gray-800';
  };

  // 날짜 포맷팅
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return '-';
    }
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

          {/* 필터 */}
          <div className="flex gap-4">
            <select
              value={selectedRegion}
              onChange={(e) => {
                setSelectedRegion(e.target.value);
                setCurrentPage(0);
              }}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue text-sm"
            >
              <option value="">전체 지역</option>
              {REGION_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => {
                setSelectedStatus(e.target.value);
                setCurrentPage(0);
              }}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue text-sm"
            >
              <option value="">전체 상태</option>
              <option value="OPERATING">운영 중</option>
              <option value="WAITING">운영 대기 중</option>
              <option value="CLOSED">운영 중단</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              총 <span className="font-bold text-brand-blue text-lg">{storesData.totalElements}</span>개 매장
            </span>
            <div className="h-6 w-px bg-gray-300"></div>
            <span className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">{storesData.number + 1}</span> / {storesData.totalPages || 1} 페이지
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
              {loading ? (
                <tr>
                  <td colSpan="7" className="px-4 py-12 text-center text-gray-500">
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin h-8 w-8 text-brand-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="ml-3">로딩 중...</span>
                    </div>
                  </td>
                </tr>
              ) : (
                storesData.content.map((store, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {storesData.number * storesData.size + index + 1}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{store.storeName}</div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 max-w-md">
                      <div className="truncate">
                        {store.address?.address} {store.address?.detailAddress}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {store.region || '-'}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(store.status)}`}>
                        {formatStatus(store.status)}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(store.modifiedAt)}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center gap-3">
                        <button 
                          onClick={() => {
                            console.log('🔍 수정 버튼 클릭 - store 객체:', store);
                            console.log('🔍 store.storeId:', store.storeId);
                            console.log('🔍 store.operatingStoreId:', store.operatingStoreId);
                            console.log('🔍 store.id:', store.id);
                            handleEditStore(store);
                          }}
                          className="text-brand-blue hover:text-brand-dark text-sm font-medium"
                        >
                          수정
                        </button>
                        <button 
                          onClick={() => handleDeleteStore(store)}
                          className="text-red-600 hover:text-red-800 text-sm font-medium"
                        >
                          삭제
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {!loading && storesData.content.length === 0 && (
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
        {!loading && storesData.content.length > 0 && storesData.totalPages > 1 && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600 text-center mb-4">
              {storesData.number * storesData.size + 1} - {Math.min((storesData.number + 1) * storesData.size, storesData.totalElements)} / 총 {storesData.totalElements}개
            </div>
            
            <div className="flex items-center justify-center gap-2">
              {/* 첫 페이지 */}
              <button
                onClick={() => handlePageChange(1)}
                disabled={storesData.first}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  storesData.first
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                «
              </button>
              
              {/* 이전 페이지 */}
              <button
                onClick={() => handlePageChange(storesData.number)}
                disabled={storesData.first}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  storesData.first
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                ‹
              </button>

              {/* 페이지 번호 */}
              <div className="flex gap-1">
                {Array.from({ length: Math.min(5, storesData.totalPages) }, (_, i) => {
                  let pageNum;
                  const currentUIPage = storesData.number + 1;
                  if (storesData.totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentUIPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentUIPage >= storesData.totalPages - 2) {
                    pageNum = storesData.totalPages - 4 + i;
                  } else {
                    pageNum = currentUIPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        storesData.number + 1 === pageNum
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
                onClick={() => handlePageChange(storesData.number + 2)}
                disabled={storesData.last}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  storesData.last
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                ›
              </button>

              {/* 마지막 페이지 */}
              <button
                onClick={() => handlePageChange(storesData.totalPages)}
                disabled={storesData.last}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  storesData.last
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

