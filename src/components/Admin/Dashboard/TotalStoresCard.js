import React from 'react';

const TotalStoresCard = ({ totalCount = 0, isLoading = false, error = null }) => {
  return (
    <div className="bg-gradient-to-r from-brand-blue to-brand-dark rounded-xl p-4 sm:p-6 lg:p-8 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-medium text-white/90 mb-1 sm:mb-2">
            전체 매장 수
          </h3>
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              <p className="text-white/80 text-xs sm:text-sm">불러오는 중...</p>
            </div>
          ) : error ? (
            <p className="text-white/80 text-xs sm:text-sm">데이터를 불러올 수 없습니다.</p>
          ) : (
            <>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{totalCount}</p>
              <p className="text-white/80 text-xs sm:text-sm mt-1 sm:mt-2">등록된 전체 매장</p>
            </>
          )}
        </div>
        <div className="text-4xl sm:text-5xl lg:text-6xl opacity-20">🏪</div>
      </div>
    </div>
  );
};

export default TotalStoresCard;
