import React, { useMemo } from 'react';

const StatusBreakdown = ({ storeCounts, isLoading }) => {
  const countsByStatus = useMemo(() => {
    const map = { WAITING: 0, RECRUITING: 0, CLOSED: 0, COMPLETE: 0 };
    const list = storeCounts?.storeCountDto || [];
    list.forEach((item) => {
      if (item?.status && typeof item?.count === 'number') {
        map[item.status] = item.count;
      }
    });
    return map;
  }, [storeCounts]);

  const statusData = [
    {
      status: '모집 중',
      count: countsByStatus.RECRUITING,
      color: 'bg-green-100 text-green-800',
      bgColor: 'bg-green-50',
    },
    {
      status: '준비 중',
      count: countsByStatus.WAITING,
      color: 'bg-yellow-100 text-yellow-800',
      bgColor: 'bg-yellow-50',
    },
    {
      status: '모집 마감',
      count: countsByStatus.CLOSED,
      color: 'bg-orange-100 text-orange-800',
      bgColor: 'bg-orange-50',
    },
    {
      status: '운영 완료',
      count: countsByStatus.COMPLETE,
      color: 'bg-blue-100 text-blue-800',
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">
        상태별 매장 수
      </h3>
      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue"></div>
          <span className="ml-2 text-gray-600">불러오는 중...</span>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 lg:gap-4">
          {statusData.map((item, index) => (
            <div key={index} className={`${item.bgColor} p-3 lg:p-4 rounded-lg`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs lg:text-sm font-medium text-gray-600">{item.status}</p>
                  <p className="text-xl lg:text-2xl font-bold text-gray-900 mt-1">{item.count}</p>
                </div>
                <div className={`p-1.5 lg:p-2 rounded-full ${item.color}`}>
                  <span className="text-xs lg:text-sm font-medium">
                    {item.status === '모집 중' && '📢'}
                    {item.status === '준비 중' && '🔧'}
                    {item.status === '모집 마감' && '⏸️'}
                    {item.status === '운영 완료' && '✅'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusBreakdown;
