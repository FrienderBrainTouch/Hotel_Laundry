import React, { useState, useMemo } from 'react';
import { useAdminStoresList } from '../../../hooks/queries/useStores';

const StoreList = ({ onEditStore }) => {
  const [filters, setFilters] = useState({
    status: '',
    region: '',
    search: '',
  });
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);

  const {
    data: storesData,
    isLoading,
    error,
  } = useAdminStoresList({
    page: currentPage,
    size: pageSize,
  });

  const stores = useMemo(() => {
    if (!storesData?.content) return [];

    return storesData.content.map((store) => ({
      id: store.storeId,
      name: `호텔런드리 ${store.location}점`,
      location: [store.location, store.detailLocation].filter(Boolean).join(' '),
      area: `${store.areaSqm}평`,
      washingMachines: store.washingMachines,
      dryers: store.dryers,
      status: getStatusText(store.status),
      targetMonth: store.targetOpeningDate
        ? new Date(store.targetOpeningDate).toISOString().slice(0, 7)
        : '',
      targetRecruits: store.targetRecruits,
      createdAt: new Date(store.createdAt).toLocaleDateString('ko-KR'),
      modifiedAt: new Date(store.modifiedAt).toLocaleDateString('ko-KR'),
      imageKey: store.imageKey,
    }));
  }, [storesData]);

  const getStatusText = (status) => {
    const statusMap = {
      WAITING: '준비 중',
      RECRUITING: '모집 중',
      CLOSED: '모집 마감',
      COMPLETE: '운영 완료',
    };
    return statusMap[status] || status;
  };

  const getStatusColor = (status) => {
    const colors = {
      '모집 중': 'bg-green-100 text-green-800',
      '준비 중': 'bg-yellow-100 text-yellow-800',
      '모집 마감': 'bg-orange-100 text-orange-800',
      '운영 완료': 'bg-blue-100 text-blue-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* 필터 */}
      <div className="p-6 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">상태</label>
            <select
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <option value="">전체</option>
              <option value="모집 중">모집 중</option>
              <option value="준비 중">준비 중</option>
              <option value="모집 마감">모집 마감</option>
              <option value="운영 완료">운영 완료</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">지역</label>
            <select
              value={filters.region}
              onChange={(e) => setFilters({ ...filters, region: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <option value="">전체</option>
              <option value="서울">서울</option>
              <option value="부산">부산</option>
              <option value="대구">대구</option>
              <option value="인천">인천</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">검색</label>
            <input
              type="text"
              placeholder="매장명 검색"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
          <div className="flex items-end">
            <button className="w-full bg-brand-blue hover:bg-brand-dark text-white px-4 py-2 rounded-md font-medium transition-colors">
              필터 적용
            </button>
          </div>
        </div>
      </div>

      {/* 매장 목록 */}
      <div className="overflow-x-auto">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue"></div>
            <span className="ml-2 text-gray-600">불러오는 중...</span>
          </div>
        ) : error ? (
          <div className="text-center py-12 text-gray-500">데이터를 불러올 수 없습니다.</div>
        ) : stores.length === 0 ? (
          <div className="text-center py-12 text-gray-500">등록된 매장이 없습니다.</div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  매장명
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  위치
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  평수
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  세탁기/건조기
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  상태
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  목표 오픈
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  모집 인원
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  작업
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stores.map((store) => (
                <tr key={store.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{store.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{store.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{store.area}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {store.washingMachines}/{store.dryers}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        store.status
                      )}`}
                    >
                      {store.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{store.targetMonth}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{store.targetRecruits}명</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => onEditStore(store)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        수정
                      </button>
                      <button className="text-red-600 hover:text-red-900">삭제</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* 페이지네이션 */}
      {!isLoading && !error && storesData && (
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              총 <span className="font-medium">{storesData.totalElements}</span>개 매장
              <span className="text-gray-500 ml-2">
                ({currentPage + 1} / {storesData.totalPages} 페이지)
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
                disabled={currentPage === 0}
                className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                이전
              </button>
              <span className="px-3 py-1 text-sm text-gray-700">{currentPage + 1}</span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(storesData.totalPages - 1, prev + 1))
                }
                disabled={currentPage >= storesData.totalPages - 1}
                className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                다음
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreList;
