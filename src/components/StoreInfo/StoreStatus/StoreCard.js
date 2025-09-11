// src/components/StoreInfo/pages/StoreCard.js
import React, { useState } from 'react';
import storeImage from './StoreListImage/store_example.svg';
import StoreModal from './StoreModal';

const StoreCard = ({ store }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 font-pretendard"
      >
        <img src={storeImage} alt={store.name} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="font-bold text-section-title mb-2">{store.name}</h3>
          <p className="flex items-center text-gray-600 text-20 mb-4">
            {/* 지도 핀 아이콘 SVG */}
            <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {store.address}
          </p>
          <div className="flex gap-2">
            <span className="bg-gray-100 text-gray-700 text-20 font-medium px-3 py-1 rounded-full">
              {store.region}
            </span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <StoreModal 
          store={store} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
};

export default StoreCard;