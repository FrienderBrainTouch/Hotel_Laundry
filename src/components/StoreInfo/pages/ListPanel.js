import React from 'react';
import Next from './StoreListImage/next.svg';
import ToNext from './StoreListImage/tonext.svg';

const ListPanel = ({ stores, totalPages, currentPage, handlePageChange }) => {
  return (
    <div className="flex flex-col h-full">
      {/* 스토어 목록 */}
      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-gray-200">
          {stores.length > 0 ? (
            stores.map(store => (
              <div key={store.id} className="p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="text-navy-800">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-lg text-gray-900">{store.name}</h3>
                    <p className="text-gray-600 mt-1">{store.address}</p>
                    <p className="text-gray-600 mt-1">02-1577-2657</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 p-4">검색 결과가 없습니다.</p>
          )}
        </div>
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="border-t p-4">
          <nav className="flex justify-center items-center space-x-2">
            <button 
              onClick={() => handlePageChange(1)} 
              disabled={currentPage === 1} 
              className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-50"
            >
              <img src={ToNext} alt="마지막 이전 페이지" className="h-5 w-5 rotate-180" />
            </button>
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1} 
              className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-50"
            >
              <img src={Next} alt="이전 페이지" className="h-5 w-5 rotate-180" />
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`w-8 h-8 rounded ${
                  currentPage === index + 1 
                    ? 'text-white bg-gray-800' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button 
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={currentPage === totalPages} 
              className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-50"
            >
              <img src={Next} alt="다음 페이지" className="h-5 w-5" />
            </button>
            <button 
              onClick={() => handlePageChange(totalPages)} 
              disabled={currentPage === totalPages} 
              className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-50"
            >
              <img src={ToNext} alt="마지막 페이지" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default ListPanel;