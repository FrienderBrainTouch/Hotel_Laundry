import React, { useState } from 'react';

const ServiceAreas = () => {
  const [selectedArea, setSelectedArea] = useState('seoul');

  const areas = [
    {
      id: 'seoul',
      name: '서울',
      districts: ['강남구', '서초구', '송파구', '강동구', '마포구', '용산구'],
      features: ['24시간 운영', '프리미엄 서비스', '빠른 배송'],
      storeCount: 45,
    },
    {
      id: 'gyeonggi',
      name: '경기도',
      districts: ['성남시', '수원시', '고양시', '용인시', '부천시', '화성시'],
      features: ['주거지 특화', '가족 할인', '대용량 세탁'],
      storeCount: 32,
    },
    {
      id: 'busan',
      name: '부산',
      districts: ['해운대구', '부산진구', '동래구', '남구', '북구', '사상구'],
      features: ['관광지 특화', '해변 세탁', '빠른 서비스'],
      storeCount: 18,
    },
    {
      id: 'incheon',
      name: '인천',
      districts: ['연수구', '남동구', '부평구', '계양구', '서구', '중구'],
      features: ['공항 근처', '24시간 서비스', '국제 서비스'],
      storeCount: 12,
    },
  ];

  const selectedAreaData = areas.find((area) => area.id === selectedArea);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="section-title font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4">
            전국 서비스 지역
          </h2>
          <p className="text-20 font-['KoPubWorldDotum'] text-[#1C262B] max-w-3xl mx-auto">
            전국 주요 도시에서 호텔런드리의 지역 맞춤 서비스를 경험하세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 지역 선택 탭 */}
          <div className="lg:col-span-1">
            <div className="bg-[#E3F2FD] rounded-2xl p-6">
              <h3 className="text-20 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-6">
                서비스 지역 선택
              </h3>
              <div className="space-y-3">
                {areas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setSelectedArea(area.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                      selectedArea === area.id
                        ? 'bg-[#102254] text-white'
                        : 'bg-white text-[#102254] hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-20 font-['KoPubWorldDotum'] font-bold">
                        {area.name}
                      </span>
                      <span
                        className={`text-16 ${
                          selectedArea === area.id ? 'text-white opacity-80' : 'text-gray-500'
                        }`}
                      >
                        {area.storeCount}개 매장
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 선택된 지역 정보 */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-[#102254] to-[#1C262B] rounded-2xl p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-28 font-['KoPubWorldBatang'] font-bold">
                  {selectedAreaData?.name} 지역 서비스
                </h3>
                <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <span className="text-18 font-bold">
                    {selectedAreaData?.storeCount}개 매장 운영
                  </span>
                </div>
              </div>

              {/* 구/군 정보 */}
              <div className="mb-8">
                <h4 className="text-22 font-['KoPubWorldBatang'] font-bold mb-4">서비스 구역</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedAreaData?.districts.map((district, index) => (
                    <div
                      key={index}
                      className="bg-white bg-opacity-10 rounded-lg px-4 py-2 text-center"
                    >
                      <span className="text-18 font-['KoPubWorldDotum']">{district}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 지역별 특화 서비스 */}
              <div>
                <h4 className="text-22 font-['KoPubWorldBatang'] font-bold mb-4">
                  지역별 특화 서비스
                </h4>
                <div className="space-y-3">
                  {selectedAreaData?.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-20 font-['KoPubWorldDotum']">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 지역별 통계 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-[#E3F2FD] rounded-xl p-6 text-center">
                <div className="text-32 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
                  {selectedAreaData?.storeCount}+
                </div>
                <div className="text-18 font-['KoPubWorldDotum'] text-[#1C262B]">운영 매장</div>
              </div>
              <div className="bg-[#E3F2FD] rounded-xl p-6 text-center">
                <div className="text-32 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
                  24시간
                </div>
                <div className="text-18 font-['KoPubWorldDotum'] text-[#1C262B]">무인 운영</div>
              </div>
              <div className="bg-[#E3F2FD] rounded-xl p-6 text-center">
                <div className="text-32 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
                  30분
                </div>
                <div className="text-18 font-['KoPubWorldDotum'] text-[#1C262B]">평균 대기시간</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
