import React from 'react';
import { useParams, Link } from 'react-router-dom';

const StoreDetail = () => {
  const { storeId } = useParams();

  // 임시 매장 데이터 (실제로는 API에서 가져올 데이터)
  const storeData = {
    id: storeId,
    location: '서울시 동작구 상도동',
    mainImage: '/images/store-detail/store-main-image.png',
    galleryImages: [
      '/images/store-detail/gallery-1-173ec1.png',
      '/images/store-detail/gallery-2-173ec1.png',
      '/images/store-detail/gallery-3-173ec1.png',
      '/images/store-detail/gallery-4-173ec1.png',
      '/images/store-detail/gallery-5-173ec1.png',
    ],
    details: {
      location: '서울시 동작구 상도동',
      interior: '인테리어 없음',
      floor: '1층',
      rent: '월세 4,000/350 (관리비 포함)',
      deposit: '권리금 3,500',
      startupCost: '창업비용 3000만원',
      parking: '주차 가능 - 매장 앞 4대',
      size: '전용 52.99m2',
    },
    description: {
      title: '인근 주거 밀집 지역, 무인세탁방 창업 최적 입지',
      content: `평수: 약 16평
시설: 전기·급수·배수 설비 완비 (세탁장비 설치 즉시 영업 가능)
입지: 대단지 아파트 단지와 학원가, 편의시설 인접 / 상시 이용 고객 확보에 유리`,
      summary: `인근 주거 밀집 지역과 생활 편의시설이 결합된 안정적인 상권에 위치한 무인세탁방 매물로, 
바로 영업이 가능하며 꾸준한 수익 창출이 기대되는 입지입니다.`,
    },
  };

  const detailItems = [
    { icon: '/images/store-detail/icons/location-icon.png', value: storeData.details.location },
    { icon: '/images/store-detail/icons/floor-icon.png', value: storeData.details.floor },
    { icon: '/images/store-detail/icons/size-icon.png', value: storeData.details.size },
    { icon: '/images/store-detail/icons/rent-icon.png', value: storeData.details.rent },
    { icon: '/images/store-detail/icons/deposit-icon.png', value: storeData.details.deposit },
    { icon: '/images/store-detail/icons/interior-icon.png', value: storeData.details.interior },
    {
      icon: '/images/store-detail/icons/startup-cost-icon.png',
      value: storeData.details.startupCost,
    },
    { icon: '/images/store-detail/icons/parking-icon.png', value: storeData.details.parking },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="py-12">
        <div className="flex justify-center">
          <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-4">
            {/* Store Title */}
            <div className="mb-12">
              <h1 className="text-[32px] font-bold leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum mb-8">
                {storeData.location}
              </h1>

              {/* Main Store Image */}
              <div className="w-full h-[500px] rounded-2xl overflow-hidden mb-12">
                <img
                  src={storeData.mainImage}
                  alt={`${storeData.location} 매장`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Gallery Images */}
            <div className="mb-16">
              <div className="flex gap-6 overflow-x-auto pb-4">
                {storeData.galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[264px] h-[264px] rounded-xl overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${storeData.location} 갤러리 ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Section Title */}
            <h2 className="text-[32px] font-bold leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum mb-8">
              세부 정보
            </h2>

            {/* Details and Description Cards */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 mb-8">
                {/* Store Details Card */}
                <div className="bg-white rounded-2xl shadow-[0px_1px_13px_0px_rgba(17,17,17,0.1)] p-10 flex-1">
                  <div className="flex flex-col gap-6">
                    {detailItems.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-[20px] font-medium leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Icons Column - 주석 처리 */}
                  {/* <div className="flex gap-8">
                    <div className="flex flex-col gap-6 w-[42px] flex-shrink-0">
                      {detailItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-center">
                          {index === 7 ? (
                            <div className="w-[42px] h-[42px] flex items-center justify-center">
                              <img
                                src={item.icon}
                                alt={`아이콘 ${index + 1}`}
                                className="w-[33.25px] h-[29.75px]"
                              />
                            </div>
                          ) : (
                            <div className="w-[30px] h-[30px] flex items-center justify-center">
                              <img src={item.icon} alt={`아이콘 ${index + 1}`} className="w-6 h-6" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex-1">
                      {detailItems.map((item, index) => (
                        <div key={index} className="mb-4 last:mb-0">
                          <p className="text-[20px] font-medium leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div> */}
                </div>

                {/* Description Section */}
                <div className="bg-[#F3F4F6] rounded-2xl p-10 flex-1">
                  <div className="mb-6">
                    <h2 className="text-[24px] font-bold leading-[1.3] tracking-[-0.02em] text-black font-KoPubWorldDotum mb-4">
                      {storeData.description.title}
                    </h2>
                    <div className="w-full h-px bg-black mb-4"></div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-col gap-4">
                      {storeData.description.content.split('\n').map((line, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-[18px] font-medium leading-[1.3] tracking-[-0.02em] text-black font-KoPubWorldDotum">
                            {line}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-black font-KoPubWorldDotum">
                      {storeData.description.summary}
                    </p>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-[18px] font-medium leading-[1.3] tracking-[-0.02em] text-black font-KoPubWorldDotum text-left">
                ※ 본 문구는 이해를 돕기 위한 것으로, 최종 계약 조건과는 차이가 있을 수 있습니다.
              </p>
            </div>

            {/* Contact Button */}
            <div className="flex justify-center">
              <Link
                to={`/startup-guide/low-capital-startup/store-progress/${storeId}/inquiry`}
                className="bg-[rgba(164,198,224,0.2)] text-black px-8 py-5 rounded-lg text-[24px] font-bold font-KoPubWorldDotum hover:bg-[rgba(164,198,224,0.3)] transition-colors duration-200"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StoreDetail;
