import React, { useState } from 'react';

const ServiceAreas = () => {
  const [selectedArea, setSelectedArea] = useState('seoul');

  const areas = [
    {
      id: 'seoul',
      name: '서울',
      districts: ['금천구', '관악구', '영등포구', '동작구', '구로구', '강서구', '마포구', '강동구', '동대문구', '성동구'],
      features: ['24시간 운영', '대학가 특화', '주거지 밀집', '교통편리'],
      storeCount: 25,
    },
    {
      id: 'gyeonggi',
      name: '경기도',
      districts: ['안양시', '군포시', '고양시', '안산시', '구리시', '용인시', '성남시', '수원시', '하남시', '화성시', '포천시', '평택시', '안성시'],
      features: ['신도시 특화', '가족 할인', '대용량 세탁', '주거지 밀집'],
      storeCount: 20,
    },
    {
      id: 'incheon',
      name: '인천',
      districts: ['연수구'],
      features: ['송도 특화', '국제 서비스', '신도시 밀집'],
      storeCount: 1,
    },
    {
      id: 'jeolla',
      name: '전라',
      districts: ['광양시', '광주광역시'],
      features: ['지역 특화', '친환경 서비스', '지역 맞춤'],
      storeCount: 2,
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
