import React from 'react';
import TotalStoresCard from './TotalStoresCard';
import StatusBreakdown from './StatusBreakdown';
import RecentUpdates from './RecentUpdates';
import InquiryRegionChart from './InquiryRegionChart';
import TopRegions from './TopRegions';
import { useStoreCounts } from '../../../hooks/queries/useStores';

const Dashboard = () => {
  const { data: storeCounts, isLoading, error } = useStoreCounts();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">대시보드</h2>
        <p className="text-gray-600">전체 매장 현황과 문의 분석을 확인하세요.</p>
      </div>

      {/* 전체 매장 수 - 강조 카드 */}
      <TotalStoresCard totalCount={storeCounts?.count || 0} isLoading={isLoading} error={error} />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
        {/* 왼쪽: 요약/현황 중심 */}
        <div className="space-y-4 lg:space-y-6">
          {/* 상태별 매장 수 */}
          <StatusBreakdown />

          {/* 최근 업데이트된 매장 */}
          <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">
              최근 업데이트된 매장
            </h3>
            <RecentUpdates />
          </div>
        </div>

        {/* 오른쪽: 분석/통계 중심 */}
        <div className="space-y-4 lg:space-y-6">
          {/* 지역별 문의 비율 */}
          <InquiryRegionChart />

          {/* 1지망 Top 3 */}
          <TopRegions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
