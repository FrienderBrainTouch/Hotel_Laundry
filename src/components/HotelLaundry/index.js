import React from 'react';

const HotelLaundry = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">호텔런드리</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">회사소개</h2>
          <p className="text-gray-600">회사소개 내용이 들어갈 자리입니다.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">연혁</h2>
          <p className="text-gray-600">연혁 내용이 들어갈 자리입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default HotelLaundry; 