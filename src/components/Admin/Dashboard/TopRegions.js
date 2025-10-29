import React from 'react';
import { useTop3Regions } from '../../../hooks/queries/useContacts';

const TopRegions = () => {
  const { data: top3Data, isLoading, error } = useTop3Regions();

  const topRegions =
    top3Data?.top3Regions?.map((item, index) => ({
      rank: index + 1,
      region: item.region,
      count: item.count,
      percentage: item.percentage,
      icon: index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉',
    })) || [];

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-yellow-50 border-yellow-200';
      case 2:
        return 'bg-gray-50 border-gray-200';
      case 3:
        return 'bg-orange-50 border-orange-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getRankTextColor = (rank) => {
    switch (rank) {
      case 1:
        return 'text-yellow-800';
      case 2:
        return 'text-gray-800';
      case 3:
        return 'text-orange-800';
      default:
        return 'text-gray-800';
    }
  };

  return (
    <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">1지망 Top 3</h3>
      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue"></div>
          <span className="ml-2 text-gray-600">불러오는 중...</span>
        </div>
      ) : error ? (
        <div className="text-center py-8 text-gray-500">데이터를 불러올 수 없습니다.</div>
      ) : topRegions.length === 0 ? (
        <div className="text-center py-8 text-gray-500">아직 문의 데이터가 없습니다.</div>
      ) : (
        <div className="space-y-2 lg:space-y-3">
          {topRegions.map((item) => (
            <div
              key={item.rank}
              className={`p-3 lg:p-4 rounded-lg border-2 ${getRankColor(item.rank)}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <span className="text-lg lg:text-2xl">{item.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`font-semibold text-sm lg:text-base ${getRankTextColor(
                        item.rank
                      )} truncate`}
                    >
                      {item.region}
                    </p>
                    <p className="text-xs lg:text-sm text-gray-600">{item.count}건 선택</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-sm lg:text-lg font-bold text-gray-900">
                    {item.percentage}%
                  </div>
                  <div className="w-16 lg:w-20 bg-gray-200 rounded-full h-1.5 lg:h-2 mt-1">
                    <div
                      className={`h-1.5 lg:h-2 rounded-full ${
                        item.rank === 1
                          ? 'bg-yellow-400'
                          : item.rank === 2
                          ? 'bg-gray-400'
                          : 'bg-orange-400'
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopRegions;
