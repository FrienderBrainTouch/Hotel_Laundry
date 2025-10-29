import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStoreDetail } from '../../../hooks/queries/useStores';

const StoreDetail = () => {
  const { storeId } = useParams();
  const { data, isLoading, error } = useStoreDetail(storeId);

  const storeData = useMemo(() => {
    if (!data) return null;
    const location = [data.address, data.detailAddress].filter(Boolean).join(' ').trim();
    const toImageUrl = (v) => {
      if (!v) return '';
      if (typeof v === 'string' && /^https?:\/\//i.test(v)) return v;
      const base = process.env.REACT_APP_IMAGE_BASE_URL;
      return `${base}${v}`;
    };
    const images = Array.isArray(data.images) ? data.images.map(toImageUrl) : [];
    const mainImage = images[0] || '/images/store-detail/store-main-image.png';
    const galleryImages = images.slice(1);

    return {
      id: data.storeId,
      location,
      mainImage,
      galleryImages,
      details: {
        location,
        interior: data.detailsInterior,
        floor: data.detailsFloor,
        rent: data.detailsRent,
        deposit: data.detailsDeposit,
        startupCost: data.detailsStartupCost,
        parking: data.detailsParking,
        size: data.detailsSize,
      },
      marketAnalysis: {
        title: '상권 분석',
        items: [
          `반경내 세대수: ${data.householdCountInRadius || '-'}`,
          `연령대: ${data.populationByAgeGroup || '-'}`,
          `경쟁매장: ${data.competitorStores || '-'}`,
          `입지분석: ${data.locationAnalysis || '-'}`,
        ],
      },
    };
  }, [data]);

  const detailItems = useMemo(() => {
    if (!storeData) return [];
    return [
      {
        icon: '/images/store-detail/icons/location-icon.png',
        label: '주소',
        value: storeData?.details?.location || '',
      },
      {
        icon: '/images/store-detail/icons/floor-icon.png',
        label: '층수',
        value: storeData?.details?.floor || '',
      },
      {
        icon: '/images/store-detail/icons/size-icon.png',
        label: '면적',
        value: storeData?.details?.size || '',
      },
      {
        icon: '/images/store-detail/icons/rent-icon.png',
        label: '보증금/월세',
        value: storeData?.details?.rent || '',
      },
      {
        icon: '/images/store-detail/icons/deposit-icon.png',
        label: '권리금',
        value: storeData?.details?.deposit || '',
      },
      {
        icon: '/images/store-detail/icons/startup-cost-icon.png',
        label: '창업비용',
        value: storeData?.details?.startupCost || '',
      },
    ];
  }, [storeData]);

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="py-12">
        <div className="flex justify-center">
          <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-4">
            {/* Store Title */}
            <div className="mb-8 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-12 2xl:mb-16">
              {isLoading ? (
                <h1 className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-bold leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum mb-6 xs:mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-10">
                  불러오는 중…
                </h1>
              ) : error ? (
                <h1 className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-bold leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum mb-6 xs:mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-10">
                  매장 정보를 불러오지 못했습니다.
                </h1>
              ) : (
                <h1 className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-bold leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum mb-6 xs:mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-10">
                  {storeData?.location || ''}
                </h1>
              )}

              {/* Main Store Image */}
              <div className="w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] rounded-xl xs:rounded-2xl overflow-hidden mb-8 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-12 2xl:mb-16">
                <img
                  src={storeData?.mainImage || '/images/store-detail/store-main-image.png'}
                  alt={`${storeData?.location || ''} 매장`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Gallery Images */}
            <div className="mb-12 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20">
              <div className="flex gap-3 xs:gap-4 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-8 overflow-x-auto pb-4">
                {(storeData?.galleryImages || []).map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[180px] h-[180px] xs:w-[200px] xs:h-[200px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] lg:w-[250px] lg:h-[250px] xl:w-[260px] xl:h-[260px] 2xl:w-[264px] 2xl:h-[264px] rounded-lg xs:rounded-xl overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${storeData?.location || ''} 갤러리 ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Section Titles */}
            <div className="flex flex-col lg:flex-row gap-4 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10 mb-6 xs:mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-10">
              <div className="flex-1">
                <h2 className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-bold leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum">
                  매장 정보
                </h2>
              </div>
              <div className="flex-1">
                <h2 className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-bold leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum">
                  {storeData?.marketAnalysis?.title || '상권 분석'}
                </h2>
              </div>
            </div>

            {/* Details and Description Cards */}
            <div className="mb-12 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20">
              <div className="flex flex-col lg:flex-row gap-4 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10 mb-6 xs:mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-10">
                {/* Store Details Card */}
                <div className="bg-white rounded-xl xs:rounded-2xl shadow-[0px_1px_13px_0px_rgba(17,17,17,0.1)] p-4 xs:p-6 sm:p-6 md:p-8 lg:p-8 xl:p-10 2xl:p-12 flex-1">
                  <div className="flex flex-col gap-3 xs:gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-5 2xl:gap-6">
                    {detailItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 xs:gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-4"
                      >
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 xs:mt-2 sm:mt-2 md:mt-3 lg:mt-3 xl:mt-3 2xl:mt-3 flex-shrink-0"></div>
                        <p className="text-[14px] xs:text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] font-medium leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum">
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

                {/* Market Analysis Card */}
                <div className="bg-[#F3F4F6] rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-6 md:p-8 lg:p-8 xl:p-10 2xl:p-12 flex-1">
                  <div className="flex flex-col gap-3 xs:gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-5 2xl:gap-6">
                    {(storeData?.marketAnalysis?.items || []).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 xs:gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-4"
                      >
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 xs:mt-2 sm:mt-2 md:mt-3 lg:mt-3 xl:mt-3 2xl:mt-3 flex-shrink-0"></div>
                        <p className="text-[14px] xs:text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] font-medium leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] 2xl:text-[19px] font-medium leading-[1.3] tracking-[-0.02em] text-black font-KoPubWorldDotum text-left">
                ※ 본 문구는 이해를 돕기 위한 것으로, 최종 계약 조건과는 차이가 있을 수 있습니다.
              </p>
            </div>

            {/* Contact Button */}
            <div className="flex justify-center mt-8 xs:mt-6 sm:mt-8 md:mt-8 lg:mt-10 xl:mt-10 2xl:mt-12">
              <Link
                to="/contact?type=lowCapital"
                className="bg-[rgba(164,198,224,0.2)] text-black px-6 py-3 xs:px-8 xs:py-4 sm:px-10 sm:py-4 md:px-12 md:py-4 lg:px-14 lg:py-5 xl:px-16 xl:py-5 2xl:px-20 2xl:py-6 rounded-lg text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[24px] 2xl:text-[26px] font-bold font-KoPubWorldDotum hover:bg-[rgba(164,198,224,0.3)] transition-colors duration-200"
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
