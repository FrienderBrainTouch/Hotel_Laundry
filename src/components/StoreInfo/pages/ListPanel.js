import React from 'react';
import StoreCard from './StoreCard';

const ListPanel = ({ stores, totalPages, currentPage, handlePageChange }) => {
  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {stores.length > 0 ? (
          stores.map(store => <StoreCard key={store.id} store={store} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">검색 결과가 없습니다.</p>
        )}
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <nav className="flex justify-center items-center mt-8 space-x-2">
          {/* ... 페이지네이션 버튼 JSX (기존과 동일) ... */}
        </nav>
      )}
    </div>
  );
};

export default ListPanel;