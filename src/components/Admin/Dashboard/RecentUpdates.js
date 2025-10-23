import React from 'react';

const RecentUpdates = () => {
  const recentStores = [
    {
      id: 1,
      name: '강남구 세탁소',
      location: '서울 강남구',
      status: '모집 중',
      updatedAt: '2024-01-15',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 2,
      name: '부산 해운대점',
      location: '부산 해운대구',
      status: '준비 중',
      updatedAt: '2024-01-14',
      statusColor: 'bg-yellow-100 text-yellow-800',
    },
    {
      id: 3,
      name: '대구 중구점',
      location: '대구 중구',
      status: '운영 완료',
      updatedAt: '2024-01-13',
      statusColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: 4,
      name: '인천 연수구점',
      location: '인천 연수구',
      status: '모집 마감',
      updatedAt: '2024-01-12',
      statusColor: 'bg-orange-100 text-orange-800',
    },
  ];

  return (
    <div className="space-y-3">
      {recentStores.map((store) => (
        <div key={store.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex-1">
            <div className="flex items-center space-x-3">
              <h4 className="font-medium text-gray-900">{store.name}</h4>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${store.statusColor}`}>
                {store.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{store.location}</p>
          </div>
          <div className="text-sm text-gray-500">{store.updatedAt}</div>
        </div>
      ))}

      <div className="text-center pt-2">
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          전체 보기 →
        </button>
      </div>
    </div>
  );
};

export default RecentUpdates;
