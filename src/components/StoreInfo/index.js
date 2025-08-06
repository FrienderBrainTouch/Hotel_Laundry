import React from 'react';

const StoreInfo = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">매장안내</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">전국 매장 현황</h2>
          <p className="text-gray-600">전국 매장 현황 내용이 들어갈 자리입니다.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">매장 찾기</h2>
          <p className="text-gray-600">매장 찾기 내용이 들어갈 자리입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo; 