import React from 'react';
import StatsCards from './StatsCards';
import StoreChart from './StoreChart';
import RecentUpdates from './RecentUpdates';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">대시보드</h2>
        <p className="text-gray-600">전체 매장 현황과 최근 업데이트를 확인하세요.</p>
      </div>

      {/* 통계 카드 */}
      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 매장 상태별 차트 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">매장 상태별 분포</h3>
          <StoreChart />
        </div>

        {/* 최근 업데이트 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">최근 업데이트된 매장</h3>
          <RecentUpdates />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
