import React, { useState } from 'react';

// SVG 아이콘들을 URL로 불러옵니다. 이 방식은 모든 React 환경에서 동작합니다.
import locationPinUrl from './ModalImage/modal_location.svg';
import subImage from './ModalImage/modal_sub.svg';
import washerUrl from './ModalImage/modal_washer.svg';
import shoeWasherUrl from './ModalImage/modal_shoe.svg';
import hangerUrl from './ModalImage/modal_hanger.svg';
import modal_chart from './ModalImage/modal_chart.svg';

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
      return <div className="flex items-center justify-center h-48 bg-gray-50 p-4 rounded-lg text-gray-500 text-24">차트 데이터가 없습니다.</div>;
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
            <span className="text-20 text-gray-500 mt-1">{`0${index+2}`}</span>
          </div>
        ))}
      </div>
    );
  }
  
  return <div className="flex items-center justify-center h-48 bg-gray-50 p-4 rounded-lg text-gray-500 text-24">차트 데이터가 없습니다.</div>;
};


// 메인 모달 컴포넌트
const StoreModal = ({ store, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // TODO: 실제 데이터 연동 시 아래 defaultStore의 구조를 참고하여 데이터를 구성해야 합니다.
  // 필수 필드: name, address, phone, tags, images, machineTypes, machines, chartData, chartDescription
  const defaultStore = {
    name: '호텔런드리 암사점',
    address: '서울 강동구 올림픽로 98길 41 1층',
    phone: '02-1577-2657',
    tags: ['20평형', '서울'],
    images: [
      subImage, subImage, subImage, subImage, subImage  
    ],
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

  // 현재는 개발 목적으로 항상 defaultStore를 사용합니다.
  // 실제 데이터 연동 시에는 아래 주석을 해제하고 store || defaultStore로 변경하세요.
  const currentStore = defaultStore;
  // const currentStore = store || defaultStore;

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
          
          <h2 className="font-KoPubWorldDotum text-section-title font-bold text-center mb-6 text-gray-800">매장 상세 정보</h2>
          
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
                    <h3 className="font-KoPubWorldDotum text-section-title font-bold text-gray-800">{currentStore.name}</h3>
                    <p className="mt-2 text-24 text-gray-600">{currentStore.address}</p>
                    <p className="mt-1 text-24 text-gray-500">{currentStore.phone}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-20 font-semibold text-gray-700 bg-gray-200 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 세탁기 종류 */}
                <div className="mt-6 border-t pt-6 space-y-4">
                  {machineTypes.map(type => {
                    const IconComponent = type.icon;
                    return (
                      <div key={type.name} className="flex items-center justify-between text-24">
                        <div className="flex items-center gap-3 text-gray-700">
                          <IconComponent className="w-6 h-6" />
                          <span>{type.name}</span>
                        </div>
                        <div className="flex-grow border-b border-dashed mx-4"></div>
                        <span className="font-semibold text-gray-800">{type.count}대</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 실시간 세탁기 사용 현황 */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-KoPubWorldDotum text-section-title font-bold text-gray-800">실시간 세탁기 사용 현황</h4>
                <select className="text-24 border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>세탁기 종류</option>
                  <option>전체</option>
                </select>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {machines.map(machine => (
                  <div key={machine.id} className="border border-gray-200 rounded-lg p-3 flex flex-col items-center justify-center text-center space-y-2">
                    <WasherIcon className="w-10 h-10 text-gray-500" />
                    <p className="text-20 font-medium text-gray-700">{machine.name}</p>
                    <div className="flex items-center gap-1.5">
                      {machine.isAvailable ? <AvailableIcon /> : <InUseIcon />}
                      <p className={`text-20 font-semibold whitespace-nowrap ${machine.isAvailable ? 'text-green-600' : 'text-red-600'}`}>
                        {machine.isAvailable ? '사용가능' : '사용중'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 전월 대비 수익 상승률 */}
            <div>
              <h4 className="font-KoPubWorldDotum text-section-title font-bold text-gray-800 mb-4">전월 대비 수익 상승률</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> {/* md:grid-cols-3에서 md:grid-cols-2로 변경 */}
                <div className="md:col-span-1"> {/* 차트 영역 */}
                  <Chart data={chartData} />
                </div>
                <div className="md:col-span-1 text-24 text-gray-600"> {/* 설명 영역 */}
                  <p>{currentStore.chartDescription}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 닫기 버튼 */}
          <div className="mt-8 pt-6 border-t text-center">
            <button type="button" onClick={onClose}
              className="w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-10 py-2 bg-white text-24 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
