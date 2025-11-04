import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStoreDetail } from '../../../hooks/queries/useStores';

// 매장 상태를 한글로 변환하는 함수
const getStoreStatusLabel = (status) => {
  const statusMap = {
    WAITING: '오픈 대기 중',
    RECRUITING: '모집 중',
    CLOSED: '모집 마감',
    COMPLETE: '모집 완료',
  };
  return statusMap[status] || '미정';
};

// 빈 값을 "미정"으로 변환하는 함수
const getDisplayValue = (value) => {
  if (value === null || value === undefined || value === '') {
    return '미정';
  }
  return value;
};

const StoreDetail = () => {
  const { storeId } = useParams();
  const { data, isLoading, error } = useStoreDetail(storeId);

  // 선택된 갤러리 이미지 인덱스 (메인 이미지 표시용)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const storeData = useMemo(() => {
    if (!data) return null;

    // 훅에서 select로 평탄화된 필드와 원본(raw)을 함께 제공하므로, 원본을 우선 사용
    const src = data.raw ?? data;

    // 새 응답 스키마: { storeId, images:[{imageId,key}], address:{address,detailAddress}, basicInfo:{...}, details:{...}, description:{...} }
    const addressObj = src.address || {};
    const location = [addressObj.address, addressObj.detailAddress]
      .filter(Boolean)
      .join(' ')
      .trim();

    const toImageUrl = (v) => {
      if (!v) return '';
      if (typeof v === 'string' && /^https?:\/\//i.test(v)) return v;
      const base = process.env.REACT_APP_IMAGE_BASE_URL;
      return `${base}${v}`;
    };
    const imageKeys = Array.isArray(src.images)
      ? src.images.map((img) => (typeof img === 'string' ? img : img?.key)).filter(Boolean)
      : [];
    const images = imageKeys.map(toImageUrl);
    const originalMainImage = images[0] || '/images/store-detail/store-main-image.png';
    const originalGalleryImages = images.slice(1);

    // 선택된 갤러리 이미지가 있으면 메인과 갤러리 이미지 교체
    let displayMainImage = originalMainImage;
    let displayGalleryImages = originalGalleryImages;

    if (selectedImageIndex !== null && originalGalleryImages[selectedImageIndex]) {
      // 선택된 갤러리 이미지를 메인으로
      displayMainImage = originalGalleryImages[selectedImageIndex];
      // 원래 메인 이미지를 갤러리 첫 번째로, 선택된 이미지는 제외
      displayGalleryImages = [
        originalMainImage,
        ...originalGalleryImages.filter((_, idx) => idx !== selectedImageIndex),
      ];
    }

    // 교체 후 갤러리에서 원래 갤러리 인덱스를 찾기 위한 맵핑 생성
    const galleryIndexMap = displayGalleryImages.map((img, idx) => {
      if (idx === 0 && selectedImageIndex !== null) {
        return null; // 원래 메인 이미지
      }
      if (selectedImageIndex !== null && idx > 0) {
        // 원래 갤러리에서 인덱스 찾기
        const originalIdx = originalGalleryImages.findIndex((origImg) => origImg === img);
        return originalIdx >= 0 ? originalIdx : null;
      }
      return idx; // 교체 전 상태
    });

    const basicInfo = src.basicInfo || {};
    const details = src.details || {};
    // const description = src.description || {};

    return {
      id: src.storeId,
      location,
      title: basicInfo.storeName || location,
      mainImage: displayMainImage,
      galleryImages: displayGalleryImages,
      originalMainImage, // 원래 메인 이미지 (복원용)
      galleryIndexMap, // 갤러리 인덱스 맵핑 (원래 갤러리 인덱스 찾기용)
      basicInfo: {
        storeName: basicInfo.storeName,
        status: basicInfo.status,
        targetRecruits: basicInfo.targetRecruits,
        targetOpeningDate: basicInfo.targetOpeningDate,
        areaSqm: basicInfo.areaSqm,
        washingMachines: basicInfo.washingMachines,
        dryers: basicInfo.dryers,
        operatingHours: basicInfo.operatingHours,
        areaType: basicInfo.areaType,
      },
      details: {
        location,
        interior: details.detailsInterior,
        floor: details.detailsFloor,
        rent: details.detailsRent,
        deposit: details.detailsDeposit,
        startupCost: details.detailsStartupCost,
        parking: details.detailsParking,
        size: details.detailsSize,
      },
      // 더미데이터
      marketAnalysis: {
        title: '상권 분석',
        text: getDisplayValue(
          // description.locationAnalysis ||
          //   description.marketAnalysis ||
          '반경내 세대수: 약 5,000세대\n연령대: 20-40대 직장인 비중 65%\n경쟁매장: 주변 세탁소 2개, 세탁물 수거함 3곳\n입지분석: 지하철역 도보 5분, 버스정류장 인접\n주변 상권: 상가밀집지역, 오피스빌딩 다수'
        ),
      },
    };
  }, [data, selectedImageIndex]);

  const detailItems = useMemo(() => {
    if (!storeData) return [];
    return [
      {
        label: '주소',
        value: getDisplayValue(storeData?.details?.location),
      },
      {
        label: '매장명',
        value: getDisplayValue(storeData?.basicInfo?.storeName),
      },
      {
        label: '모집 상태',
        value: getStoreStatusLabel(storeData?.basicInfo?.status),
      },
      {
        // TODO: api 수정되면 연동 필요, value만 바꾸면 됨
        // basicInfo.targetRecruits을 basicInfo.{원하는필드명}으로 변경
        label: '목표 모집 인원',
        value: getDisplayValue(storeData?.basicInfo?.targetRecruits),
      },
      {
        label: '오픈 예정일',
        value: getDisplayValue(storeData?.basicInfo?.targetOpeningDate),
      },
      {
        label: '면적(㎡)',
        value: getDisplayValue(storeData?.basicInfo?.areaSqm),
      },
      {
        label: '보증금/월세',
        value: getDisplayValue(storeData?.details?.rent),
      },
      {
        label: '권리금',
        value: getDisplayValue(storeData?.details?.deposit),
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
                  {storeData?.title || ''}
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
                {(storeData?.galleryImages || []).map((image, index) => {
                  // 원래 메인 이미지가 갤러리 첫 번째로 왔는지 확인
                  const isOriginalMain =
                    selectedImageIndex !== null &&
                    index === 0 &&
                    image === storeData?.originalMainImage;
                  // 현재 갤러리 인덱스에 해당하는 원래 갤러리 인덱스
                  const originalGalleryIndex = storeData?.galleryIndexMap?.[index];

                  return (
                    <div
                      key={index}
                      onClick={() => {
                        if (isOriginalMain) {
                          // 원래 메인 이미지 클릭 시 원래 상태로 복원
                          setSelectedImageIndex(null);
                        } else if (
                          originalGalleryIndex !== null &&
                          originalGalleryIndex !== undefined
                        ) {
                          // 갤러리 이미지 클릭 시 해당 원래 인덱스로 교체
                          setSelectedImageIndex(originalGalleryIndex);
                        }
                      }}
                      className={`flex-shrink-0 w-[180px] h-[180px] xs:w-[200px] xs:h-[200px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] lg:w-[250px] lg:h-[250px] xl:w-[260px] xl:h-[260px] 2xl:w-[264px] 2xl:h-[264px] rounded-lg xs:rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity ${
                        selectedImageIndex === originalGalleryIndex ? 'ring-2 ring-blue-500' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${storeData?.location || ''} 갤러리 ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Store Info Title */}
            <div className="mb-6 xs:mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-10">
              <h2 className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-bold leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum">
                매장 정보
              </h2>
            </div>

            {/* Store Details Card */}
            <div className="mb-12 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20">
              <div className="bg-white rounded-xl xs:rounded-2xl shadow-[0px_1px_13px_0px_rgba(17,17,17,0.1)] p-4 xs:p-6 sm:p-6 md:p-8 lg:p-8 xl:p-10 2xl:p-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 xs:gap-y-3 sm:gap-y-4 md:gap-y-4 lg:gap-y-5">
                  {detailItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] text-gray-600 font-KoPubWorldDotum mb-1 break-words">
                          {item.label}
                        </div>
                        <div className="text-[14px] xs:text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] font-medium leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum break-words whitespace-pre-wrap">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Market Analysis Title */}
            <div className="mb-6 xs:mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-10">
              <h2 className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-bold leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum">
                {storeData?.marketAnalysis?.title || '상권 분석'}
              </h2>
            </div>

            {/* Market Analysis Card */}
            <div className="mb-12 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20">
              <div className="bg-[#F3F4F6] rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-6 md:p-8 lg:p-8 xl:p-10 2xl:p-12">
                <div className="flex flex-col gap-3 xs:gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-5 2xl:gap-6">
                  {(storeData?.marketAnalysis?.text || '')
                    .split('\n')
                    .filter((line) => line.trim() !== '')
                    .map((line, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 xs:gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-4"
                      >
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 xs:mt-2 sm:mt-2 md:mt-3 lg:mt-3 xl:mt-3 2xl:mt-3 flex-shrink-0"></div>
                        <p className="text-[14px] xs:text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] font-medium leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum">
                          {line.trim()}
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
