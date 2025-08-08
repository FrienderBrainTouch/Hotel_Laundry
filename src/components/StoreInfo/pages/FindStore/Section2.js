import React from 'react';
import MapPanel from './MapPanel';
import ListPanel from './ListPanel';

const Section2 = ({ filteredStores, currentStores, totalPages, currentPage, handlePageChange }) => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-gray-100">
        <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row justify-center gap-6 p-6">
          {/* 왼쪽: 지도 */}
          <MapPanel 
            stores={filteredStores}
            className="w-full lg:w-[800px] h-[680px] rounded-lg shadow-md" 
          />
          
          {/* 오른쪽: 목록 패널 */}
          <div className="w-full lg:w-[580px] bg-white rounded-lg shadow-md">
            <ListPanel 
              stores={currentStores}
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
