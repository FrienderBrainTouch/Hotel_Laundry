import React from 'react';

const StoreChart = () => {
  const data = [
    { status: '모집 중', count: 8, percentage: 33, color: 'bg-green-500' },
    { status: '준비 중', count: 6, percentage: 25, color: 'bg-yellow-500' },
    { status: '모집 마감', count: 4, percentage: 17, color: 'bg-orange-500' },
    { status: '운영 완료', count: 10, percentage: 42, color: 'bg-blue-500' },
  ];

  return (
    <div className="space-y-4">
      {/* 원형 차트 시뮬레이션 */}
      <div className="flex items-center justify-center">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
          <div
            className="absolute inset-0 rounded-full border-8 border-green-500 transform -rotate-90"
            style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)' }}
          ></div>
          <div
            className="absolute inset-0 rounded-full border-8 border-yellow-500 transform -rotate-90"
            style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)' }}
          ></div>
          <div
            className="absolute inset-0 rounded-full border-8 border-orange-500 transform -rotate-90"
            style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)' }}
          ></div>
          <div
            className="absolute inset-0 rounded-full border-8 border-blue-500 transform -rotate-90"
            style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)' }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">24</div>
              <div className="text-sm text-gray-600">총 매장</div>
            </div>
          </div>
        </div>
      </div>

      {/* 범례 */}
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
              <span className="text-sm font-medium text-gray-700">{item.status}</span>
            </div>
            <div className="text-sm text-gray-600">
              {item.count}개 ({item.percentage}%)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreChart;
