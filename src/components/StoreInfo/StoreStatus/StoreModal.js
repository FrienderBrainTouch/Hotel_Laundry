import React, { useState } from 'react';

// SVG 아이콘들을 URL로 불러옵니다. 이 방식은 모든 React 환경에서 동작합니다.
import locationPinUrl from './ModalImage/modal_location.svg';
import subImage from './ModalImage/modal_sub.svg';
import washerUrl from './ModalImage/modal_washer.svg';
import shoeWasherUrl from './ModalImage/modal_shoe.svg';
import hangerUrl from './ModalImage/modal_hanger.svg';
import modal_chart from './ModalImage/modal_chart.svg';

// 각 지점별 이미지 가져오기 함수
const getStoreImages = (storeName) => {
  const imageMap = {
    '독산점': ['image 332.png', 'image 333.png', 'image 334.png'],
    '관악조원점': ['image 312.png', 'image 313.png', 'image 314.png'],
    '신림본점': ['image 225.png', 'image 226.png', 'image 227.png', 'image 228.png', 'image 229.png', 'image 230.png'],
    '신림점': ['image 329.png', 'image 331.png'],
    '신림역점': ['image 354.png', 'image 355.png', 'image 356.png', 'image 357.png', 'image 358.png', 'image 359.png', 'image 360.png', 'image 361.png', 'image 362.png'],
    '서울대학점': ['image 350.png', 'image 351.png', 'image 352.png', 'image 353.png'],
    '서울대점': ['image 350.png', 'image 351.png', 'image 352.png', 'image 353.png'],
    '성내점': ['image 385.png', 'image 386.png', 'image 387.png', 'image 388.png', 'image 389.png', 'image 390.png', 'image 391.png'],
    '보라매점': ['image 262.png', 'image 263.png', 'image 265.png'],
    '신림서원점': ['image 242.png', 'image 243.png', 'image 244.png', 'image 245.png'],
    '신길점': ['image 287.png', 'image 289.png', 'image 290.png', 'image 291.png'],
    '봉천점': ['image 301.png', 'image 302.png', 'image 303.png', 'image 304.png', 'image 305.png', 'image 306.png', 'image 307.png', 'image 309.png'],
    '신림서림점': ['image 242.png', 'image 243.png', 'image 244.png', 'image 245.png'],
    '청룡점': ['image 268.png', 'image 270.png', 'image 271.png', 'image 272.png', 'image 273.png', 'image 274.png'],
    '상도점': ['image 292.png', 'image 293.png', 'image 294.png', 'image 295.png', 'image 296.png'],
    '봉천중앙점': ['image 231.png', 'image 232.png', 'image 233.png', 'image 234.png', 'image 235.png', 'image 236.png'],
    '서울대입구점': ['image 251.png', 'image 252.png', 'image 253.png', 'image 254.png', 'image 255.png', 'image 256.png', 'image 257.png'],
    '샤로수길점': ['image 246.png', 'image 247.png', 'image 248.png', 'image 249.png', 'image 250.png'],
    '서울대행운점': ['image 346.png', 'image 347.png', 'image 348.png'],
    '사당점': ['image 315.png', 'image 316.png', 'image 317.png'],
    '항동점': ['image 261.png', 'image 264.png', 'image 266.png'],
    '낙성대점': ['image 259.png', 'image 260.png'],
    '평촌역점': ['image 275.png', 'image 276.png', 'image 278.png'],
    '화곡점': ['image 297.png', 'image 298.png', 'image 299.png', 'image 300.png'],
    '서교점': ['image 277.png', 'image 279.png', 'image 280.png', 'image 281.png', 'image 282.png', 'image 283.png', 'image 284.png', 'image 285.png', 'image 286.png', 'image 288.png'],
    '아이에스비즈점': ['image 318.png', 'image 320.png', 'image 321.png', 'image 322.png', 'image 323.png', 'image 324.png', 'image 325.png', 'image 326.png'],
    '도래울점': ['image 335.png', 'image 336.png', 'image 337.png', 'image 339.png', 'image 340.png', 'image 342.png', 'image 344.png', 'image 345.png'],
    '안산중앙역점': ['image 327.png', 'image 328.png', 'image 330.png'],
    '한양대학로점': ['image 308.png', 'image 310.png', 'image 311.png'],
    '갈매점': ['image 338.png', 'image 341.png', 'image 343.png'],
    '광교상현점': ['image 237.png', 'image 238.png', 'image 239.png', 'image 240.png', 'image 241.png'],
    '경희대점': ['image 220.png'],
    '송도랜드마크점': ['image 267.png', 'image 269.png', 'image 349.png'],
    '장항점': ['image 258.png'],
    '성남금광점': ['image 189.png', 'image 190.png', 'image 191.png', 'image 192.png', 'image 193.png', 'image 194.png', 'image 195.png'],
    '분당장안점': ['image 205.png', 'image 206.png', 'image 207.png', 'image 208.png', 'image 209.png', 'image 210.png', 'image 211.png', 'image 212.png', 'image 213.png'],
    '곡반정점': ['image 185.png', 'image 186.png', 'image 187.png', 'image 188.png'],
    '미사헤븐시티점': ['image 202.png', 'image 203.png', 'image 204.png'],
    '동탄실리콘앨리점': ['image 214.png', 'image 215.png', 'image 216.png', 'image 217.png', 'image 218.png', 'image 219.png'],
    '수진역점': ['image 197.png', 'image 198.png', 'image 199.png', 'image 200.png', 'image 201.png'],
    '동탄역점': ['image 180.png', 'image 181.png', 'image 182.png', 'image 183.png', 'image 184.png'],
    '포천이동교점': ['image 174.png', 'image 175.png', 'image 176.png', 'image 177.png'],
    '마장점': ['image 221.png', 'image 222.png', 'image 223.png', 'image 224.png'],
    '평택점': ['image 178.png', 'image 179.png'],
    '안성석정점': ['image 159.png', 'image 160.png', 'image 161.png', 'image 162.png', 'image 163.png'],
    '광양중동점': ['image 164.png', 'image 165.png', 'image 166.png', 'image 167.png', 'image 168.png', 'image 169.png', 'image 171.png', 'image 173.png'],
    '광주용봉점': ['image 156.png', 'image 157.png', 'image 158.png'],
  };
  
  const imageNames = imageMap[storeName];
  if (imageNames && imageNames.length > 0) {
    try {
      // 최대 5개까지만 가져오기 (첫 번째는 대표 이미지, 나머지 4개는 슬라이더용)
      const limitedImages = imageNames.slice(0, 5);
      return limitedImages.map(imageName => require(`./RealStoreImage/${storeName}/${imageName}`));
    } catch (error) {
      console.warn(`이미지를 찾을 수 없습니다: ${storeName}`, error);
      return [subImage]; // 기본 이미지 사용
    }
  }
  return [subImage]; // 기본 이미지 사용
};

// 각 아이콘을 <img> 태그를 사용하는 컴포넌트로 만듭니다.
// 이렇게 하면 className으로 크기 조절이 가능합니다.
const LocationPinIcon = ({ className }) => <img src={locationPinUrl} alt="Location" className={className} />;
const CloseIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const WasherIcon = ({ className }) => <img src={washerUrl} alt="Washer" className={className} />;
const ShoeWasherIcon = ({ className }) => <img src={shoeWasherUrl} alt="Shoe Washer" className={className} />;
const HangerIcon = ({ className }) => <img src={hangerUrl} alt="Hanger" className={className} />;

// '사용 가능'/'사용 중' 아이콘 (이 부분은 기존 방식을 유지합니다)
const AvailableIcon = () => (
    <svg className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const InUseIcon = () => (
    <svg className="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
);


const Chart = ({ data }) => {
  // data가 import된 이미지인 경우 이미지로 표시
  if (data && typeof data === 'string' && data.includes('.svg')) {
    return (
      <div className="flex items-center justify-center h-full w-full bg-gray-50 p-4 rounded-lg"> {/* h-32 w-64에서 h-full w-full로 변경 */}
        <img 
          src={data} 
          alt="차트" 
          className="max-w-full max-h-full object-contain"
        />
      </div>
    );
  }
  
  // 기존 배열 데이터인 경우 기존 차트 표시
  if (Array.isArray(data)) {
    if (data.length === 0) {
      return <div className="flex items-center justify-center h-48 bg-gray-50 p-4 rounded-lg text-gray-500 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">차트 데이터가 없습니다.</div>;
    }
    const maxVal = Math.max(...data, 1);
    return (
      <div className="flex items-end h-48 space-x-2 bg-gray-50 p-4 rounded-lg">
        {data.map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-blue-500 rounded-t-sm"
              style={{ height: `${(value / maxVal) * 90}%` }}
            ></div>
            <span className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-gray-500 mt-1">{`0${index+2}`}</span>
          </div>
        ))}
      </div>
    );
  }
  
  return <div className="flex items-center justify-center h-48 bg-gray-50 p-4 rounded-lg text-gray-500 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">차트 데이터가 없습니다.</div>;
};


// 메인 모달 컴포넌트
const StoreModal = ({ store, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 기본 매장 데이터 (이미지가 없는 지점용)
  const defaultStore = {
    name: '호텔런드리 암사점',
    address: '서울 강동구 올림픽로 98길 41 1층',
    phone: '02-1577-2657',
    tags: ['20평형', '서울'],
    images: [subImage, subImage, subImage, subImage, subImage],
    machineTypes: [
      { name: '프리미엄 살균 세탁기', count: 10, icon: WasherIcon },
      { name: '운동화 세탁기', count: 3, icon: ShoeWasherIcon },
      { name: '드라이클리닝', count: 2, icon: HangerIcon },
    ],
    machines: Array.from({ length: 11 }, (_, i) => ({
        id: i + 1,
        name: `${[1,2,3,4,5,20,21,22,23,4,5][i]}번 세탁기`,
        isAvailable: Math.random() > 0.3,
    })),
    chartData: modal_chart,
    chartDescription: '개점 이후 누적 수익이 꾸준히 증가하고 있는 매장입니다. 실제 데이터를 통해 안정적인 성장 흐름을 확인할 수 있습니다.'
  };

  // 실제 지점 데이터가 있으면 사용, 없으면 기본 데이터 사용
  const currentStore = store ? {
    ...store,
    images: getStoreImages(store.name),
    phone: '02-1577-2657', // 기본 전화번호
    tags: [store.region, '20평형'], // 지역과 기본 태그
    machineTypes: [
      { name: '프리미엄 살균 세탁기', count: 10, icon: WasherIcon },
      { name: '운동화 세탁기', count: 3, icon: ShoeWasherIcon },
      { name: '드라이클리닝', count: 2, icon: HangerIcon },
    ],
    machines: Array.from({ length: 11 }, (_, i) => ({
        id: i + 1,
        name: `${[1,2,3,4,5,20,21,22,23,4,5][i]}번 세탁기`,
        isAvailable: Math.random() > 0.3,
    })),
    chartData: modal_chart,
    chartDescription: '개점 이후 누적 수익이 꾸준히 증가하고 있는 매장입니다. 실제 데이터를 통해 안정적인 성장 흐름을 확인할 수 있습니다.'
  } : defaultStore;

  const images = currentStore.images || [];
  const tags = currentStore.tags || [];
  const machineTypes = currentStore.machineTypes || [];
  const machines = currentStore.machines || [];
  const chartData = currentStore.chartData || [];

  const nextImage = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-pretendard" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>

        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl w-full p-6 sm:p-8">
          
          <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.48px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px] text-center">매장 상세 정보</h2>
          
          <button onClick={onClose} className="absolute right-6 top-6 text-gray-400 hover:text-gray-600">
            <CloseIcon className="w-6 h-6" />
          </button>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 이미지 슬라이더 */}
              <div className="relative w-full">
                <img 
                  src={images[currentImageIndex] || 'https://placehold.co/800x600/E2E8F0/4A5568?text=No+Image'} 
                  alt={currentStore.name || '매장 이미지'} 
                  className="w-full h-64 md:h-80 object-cover rounded-lg bg-gray-200" 
                />
                {images.length > 1 && (
                  <>
                    <div className="absolute inset-0 flex items-center justify-between px-2">
                      <button onClick={prevImage} className="text-white bg-black bg-opacity-30 rounded-full p-1 hover:bg-opacity-50">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                      </button>
                      <button onClick={nextImage} className="text-white bg-black bg-opacity-30 rounded-full p-1 hover:bg-opacity-50">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      {images.map((img, index) => (
                        <img key={index} src={img} alt={`thumbnail ${index + 1}`} onClick={() => setCurrentImageIndex(index)}
                          className={`w-1/5 h-16 object-cover rounded-md cursor-pointer transition-all ${index === currentImageIndex ? 'ring-2 ring-blue-500' : 'opacity-60 hover:opacity-100'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* 매장 정보 */}
              <div className="flex flex-col justify-start pt-2">
                <div className="flex items-start gap-3">
                  <div className="text-blue-600 mt-1">
                    <LocationPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.4px] sm:tracking-[-0.44px] md:tracking-[-0.48px] lg:tracking-[-0.52px] xl:tracking-[-0.56px] 2xl:tracking-[-0.6px]">{currentStore.name}</h3>
                    <p className="mt-2 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px]">{currentStore.address}</p>
                    <p className="mt-1 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px]">{currentStore.phone}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-semibold text-[#1C262B] bg-gray-200 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 세탁기 종류 */}
                <div className="mt-6 border-t pt-6 space-y-4">
                  {machineTypes.map(type => {
                    const IconComponent = type.icon;
                    return (
                      <div key={type.name} className="flex items-center justify-between text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                        <div className="flex items-center gap-3 text-[#1C262B]">
                          <IconComponent className="w-6 h-6" />
                          <span>{type.name}</span>
                        </div>
                        <div className="flex-grow border-b border-dashed mx-4"></div>
                        <span className="font-semibold text-[#1C262B]">{type.count}대</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 실시간 세탁기 사용 현황 */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.4px] sm:tracking-[-0.44px] md:tracking-[-0.48px] lg:tracking-[-0.52px] xl:tracking-[-0.56px] 2xl:tracking-[-0.6px]">실시간 세탁기 사용 현황</h4>
                <select className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>세탁기 종류</option>
                  <option>전체</option>
                </select>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {machines.map(machine => (
                  <div key={machine.id} className="border border-gray-200 rounded-lg p-3 flex flex-col items-center justify-center text-center space-y-2">
                    <WasherIcon className="w-10 h-10 text-gray-500" />
                    <p className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px] whitespace-nowrap">{machine.name}</p>
                    <div className="flex items-center gap-1.5">
                      {machine.isAvailable ? <AvailableIcon /> : <InUseIcon />}
                      <p className={`text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-semibold whitespace-nowrap font-KoPubWorldDotum leading-normal tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px] ${machine.isAvailable ? 'text-green-600' : 'text-red-600'}`}>
                        {machine.isAvailable ? '사용가능' : '사용중'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 전월 대비 수익 상승률 */}
            <div>
              <h4 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.4px] sm:tracking-[-0.44px] md:tracking-[-0.48px] lg:tracking-[-0.52px] xl:tracking-[-0.56px] 2xl:tracking-[-0.6px] mb-4">전월 대비 수익 상승률</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> {/* md:grid-cols-3에서 md:grid-cols-2로 변경 */}
                <div className="md:col-span-1"> {/* 차트 영역 */}
                  <Chart data={chartData} />
                </div>
                <div className="md:col-span-1 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px]"> {/* 설명 영역 */}
                  <p>{currentStore.chartDescription}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 닫기 버튼 */}
          <div className="mt-8 pt-6 border-t text-center">
            <button type="button" onClick={onClose}
              className="w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-10 py-2 bg-white text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreModal;
