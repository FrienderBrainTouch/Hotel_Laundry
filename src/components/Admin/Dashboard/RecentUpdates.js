import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecentUpdates = () => {
  const navigate = useNavigate();
  const recentStores = [
    {
      id: 1,
      name: '호텔런드리 강남구점',
      location: '서울 강남구',
      status: '모집 중',
      updatedAt: '2024-01-15 14:30',
      statusColor: 'bg-green-100 text-green-800',
      targetOpening: '2025년 3월',
    },
    {
      id: 2,
      name: '호텔런드리 부산해운대점',
      location: '부산 해운대구',
      status: '준비 중',
      updatedAt: '2024-01-14 09:15',
      statusColor: 'bg-yellow-100 text-yellow-800',
      targetOpening: '2025년 2월',
    },
    {
      id: 3,
      name: '호텔런드리 대구중구점',
      location: '대구 중구',
      status: '운영 완료',
      updatedAt: '2024-01-13 16:45',
      statusColor: 'bg-blue-100 text-blue-800',
      targetOpening: '2024년 12월',
    },
    {
      id: 4,
      name: '호텔런드리 인천연수구점',
      location: '인천 연수구',
      status: '모집 마감',
      updatedAt: '2024-01-12 11:20',
      statusColor: 'bg-orange-100 text-orange-800',
      targetOpening: '2025년 4월',
    },
    {
      id: 5,
      name: '호텔런드리 광주서구점',
      location: '광주 서구',
      status: '모집 중',
      updatedAt: '2024-01-11 13:55',
      statusColor: 'bg-green-100 text-green-800',
      targetOpening: '2025년 5월',
    },
  ];

  return (
    <div className="space-y-2 lg:space-y-3">
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
    </div>
  );
};

export default RecentUpdates;
