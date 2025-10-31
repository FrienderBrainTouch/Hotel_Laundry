import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecentStores } from '../../../hooks/queries/useStores';

const RecentUpdates = () => {
  const navigate = useNavigate();
  const { data: recentData, isLoading, error } = useRecentStores(5);

  const getStatusInfo = (status) => {
    switch (status) {
      case 'RECRUITING':
        return { text: '모집 중', color: 'bg-green-100 text-green-800' };
      case 'WAITING':
        return { text: '오픈 대기 중', color: 'bg-yellow-100 text-yellow-800' };
      case 'CLOSED':
        return { text: '모집 마감', color: 'bg-orange-100 text-orange-800' };
      case 'COMPLETE':
        return { text: '모집 완료', color: 'bg-blue-100 text-blue-800' };
      default:
        return { text: status, color: 'bg-gray-100 text-gray-800' };
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const recentStores =
    recentData?.content?.map((store) => {
      const statusInfo = getStatusInfo(store.status);
      const location = [store.location, store.detailLocation].filter(Boolean).join(' ');

      return {
        id: store.storeId,
        name: `호텔런드리 ${location}점`,
        location,
        status: statusInfo.text,
        updatedAt: formatDate(store.modifiedAt),
        statusColor: statusInfo.color,
        targetOpening: store.targetOpeningDate || '',
      };
    }) || [];

  return (
    <div className="space-y-2 lg:space-y-3">
      {isLoading ? (
        <div className="flex items-center justify-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-brand-blue"></div>
          <span className="ml-2 text-gray-600 text-sm">불러오는 중...</span>
        </div>
      ) : error ? (
        <div className="text-center py-4 text-gray-500 text-sm">데이터를 불러올 수 없습니다.</div>
      ) : recentStores.length === 0 ? (
        <div className="text-center py-4 text-gray-500 text-sm">
          최근 업데이트된 매장이 없습니다.
        </div>
      ) : (
        <>
          {recentStores.map((store) => (
            <div key={store.id} className="p-2 lg:p-3 bg-gray-50 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 lg:space-x-3 mb-1">
                    <h4 className="font-medium text-gray-900 text-sm lg:text-base truncate">
                      {store.name}
                    </h4>
                    <span
                      className={`px-1.5 lg:px-2 py-0.5 lg:py-1 rounded-full text-xs font-medium ${store.statusColor} flex-shrink-0`}
                    >
                      {store.status}
                    </span>
                  </div>
                  <p className="text-xs lg:text-sm text-gray-600 truncate">{store.location}</p>
                </div>
                <div className="text-xs lg:text-sm text-gray-500 ml-2 flex-shrink-0">
                  {store.updatedAt}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs lg:text-sm text-gray-500">
                  <span className="font-medium">목표 오픈:</span> {store.targetOpening}
                </div>
              </div>
            </div>
          ))}

          <div className="text-center pt-2">
            <button
              onClick={() => navigate('/admin/stores')}
              className="text-blue-600 hover:text-blue-700 text-xs lg:text-sm font-medium"
            >
              전체 보기 →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RecentUpdates;
