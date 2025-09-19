// src/components/StoreInfo/pages/StoreCard.js
import React, { useState } from 'react';
import storeImage from './StoreListImage/store_example.svg';
import StoreModal from './StoreModal';

// 각 지점별 첫 번째 이미지 파일명 매핑
const getStoreImage = (storeName) => {
  const imageMap = {
    '독산점': 'image 332.png',
    '관악조원점': 'image 312.png',
    '신림본점': 'image 225.png',
    '신림점': 'image 329.png',
    '보라매점': 'image 262.png',
    '신림서원점': 'image 242.png',
    '신림역점': null, // 이미지 없음
    '신길점': 'image 287.png',
    '서울대학점': null, // 이미지 없음
    '봉천점': 'image 301.png',
    '서울대점': null, // 이미지 없음
    '신림서림점': 'image 242.png',
    '청룡점': 'image 268.png',
    '상도점': 'image 292.png',
    '봉천중앙점': 'image 231.png',
    '서울대입구점': 'image 251.png',
    '샤로수길점': 'image 246.png',
    '서울대행운점': 'image 346.png',
    '사당점': 'image 315.png',
    '항동점': 'image 261.png',
    '낙성대점': 'image 259.png',
    '평촌역점': 'image 275.png',
    '화곡점': 'image 297.png',
    '서교점': 'image 277.png',
    '아이에스비즈점': 'image 318.png',
    '금정점': null, // 이미지 없음
    '도래울점': 'image 335.png',
    '안산중앙역점': 'image 327.png',
    '한양대학로점': 'image 308.png',
    '갈매점': 'image 338.png',
    '성내점': null, // 이미지 없음
    '광교상현점': 'image 237.png',
    '경희대점': 'image 220.png',
    '송도랜드마크점': 'image 267.png',
    '장항점': 'image 258.png',
    '성남금광점': 'image 189.png',
    '분당장안점': 'image 205.png',
    '곡반정점': 'image 185.png',
    '미사헤븐시티점': 'image 202.png',
    '동탄실리콘앨리점': 'image 214.png',
    '수진역점': 'image 197.png',
    '동탄역점': 'image 180.png',
    '포천이동교점': 'image 174.png',
    '마장점': 'image 221.png',
    '평택점': 'image 178.png',
    '안성석정점': 'image 159.png',
    '광양중동점': 'image 164.png',
    '광주용봉점': 'image 156.png',
  };
  
  const imageName = imageMap[storeName];
  if (imageName) {
    try {
      return require(`./RealStoreImage/${storeName}/${imageName}`);
    } catch (error) {
      console.warn(`이미지를 찾을 수 없습니다: ${storeName}/${imageName}`);
      return storeImage; // 기본 이미지 사용
    }
  }
  return storeImage; // 기본 이미지 사용
};

const StoreCard = ({ store }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 font-pretendard"
      >
        <img src={getStoreImage(store.name)} alt={store.name} className="w-full h-48 object-cover" />
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