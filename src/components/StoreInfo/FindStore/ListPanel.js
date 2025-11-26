import React from 'react';
import { ASSET_URL } from '../../../utils/constants';

const ListPanel = ({ stores, totalPages, currentPage, handlePageChange }) => {
  return (
    <div className="flex flex-col h-full">
      {/* 스토어 목록 */}
      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-gray-200">
          {stores.length > 0 ? (
            stores.map(store => (
              <div key={store.id} className="p-[12px] sm:p-[14px] md:p-[16px] lg:p-[18px] xl:p-[20px] 2xl:p-[22px] hover:bg-gray-50 cursor-pointer min-h-[80px] sm:min-h-[90px] md:min-h-[100px] lg:min-h-[110px] xl:min-h-[120px] 2xl:min-h-[130px] flex items-center">
                <div className="flex items-start gap-3 w-full">
                  <div className="text-[#102254] flex-shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.32px] sm:tracking-[-0.36px] md:tracking-[-0.4px] lg:tracking-[-0.44px] xl:tracking-[-0.48px] 2xl:tracking-[-0.52px]">{store.name}</h3>
                    <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.24px] sm:tracking-[-0.28px] md:tracking-[-0.32px] lg:tracking-[-0.36px] xl:tracking-[-0.4px] 2xl:tracking-[-0.44px] mt-[4px] sm:mt-[6px] md:mt-[8px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px]">{store.address}</p>
                    <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.24px] sm:tracking-[-0.28px] md:tracking-[-0.32px] lg:tracking-[-0.36px] xl:tracking-[-0.4px] 2xl:tracking-[-0.44px] mt-[4px] sm:mt-[6px] md:mt-[8px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px]">02-1577-2657</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="min-h-[80px] sm:min-h-[90px] md:min-h-[100px] lg:min-h-[110px] xl:min-h-[120px] 2xl:min-h-[130px] flex items-center justify-center">
              <p className="text-center text-[#1C262B] font-KoPubWorldDotum text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-normal tracking-[-0.28px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px] p-[12px] sm:p-[14px] md:p-[16px] lg:p-[18px] xl:p-[20px] 2xl:p-[22px]">검색 결과가 없습니다.</p>
            </div>
          )}
        </div>
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="border-t p-[12px] sm:p-[14px] md:p-[16px] lg:p-[18px] xl:p-[20px] 2xl:p-[22px]">
          <nav className="flex justify-center items-center space-x-2">
            <button 
              onClick={() => handlePageChange(1)} 
              disabled={currentPage === 1} 
              className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-50"
            >
              <img src={`${ASSET_URL}/StoreListImage/tonext.svg`} alt="마지막 이전 페이지" className="h-5 w-5 rotate-180" />
            </button>
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1} 
              className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-50"
            >
              <img src={`${ASSET_URL}/StoreListImage/next.svg`} alt="이전 페이지" className="h-5 w-5 rotate-180" />
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`w-8 h-8 rounded text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-KoPubWorldDotum leading-normal tracking-[-0.24px] sm:tracking-[-0.28px] md:tracking-[-0.32px] lg:tracking-[-0.36px] xl:tracking-[-0.4px] 2xl:tracking-[-0.44px] ${
                  currentPage === index + 1 
                    ? 'text-white bg-gray-800' 
                    : 'text-[#1C262B] hover:bg-gray-200'
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
              <img src={`${ASSET_URL}/StoreListImage/next.svg`} alt="다음 페이지" className="h-5 w-5" />
            </button>
            <button 
              onClick={() => handlePageChange(totalPages)} 
              disabled={currentPage === totalPages} 
              className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-50"
            >
              <img src={`${ASSET_URL}/StoreListImage/tonext.svg`} alt="마지막 페이지" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default ListPanel;