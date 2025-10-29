import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import {
  statusOptions,
  targetRecruitsOptions,
  interiorOptions,
  floorOptions,
  sizeOptions,
  washingMachineOptions,
  dryerOptions,
  operatingHoursOptions,
  areaTypeOptions,
} from './constants';

const StoreForm = ({ store, onBack, onSave }) => {
  const [formData, setFormData] = useState({
    // address
    address: store?.address?.address || '',
    detailAddress: store?.address?.detailAddress || '',

    // storeBasicInfo
    storeName: store?.storeBasicInfo?.storeName || '',
    status: store?.storeBasicInfo?.status || 'WAITING',
    targetRecruits: store?.storeBasicInfo?.targetRecruits || '',
    targetOpeningDate: store?.storeBasicInfo?.targetOpeningDate || '',
    areaSqm: store?.storeBasicInfo?.areaSqm || '',
    washingMachines: store?.storeBasicInfo?.washingMachines || '',
    dryers: store?.storeBasicInfo?.dryers || '',
    operatingHours: store?.storeBasicInfo?.operatingHours || '',
    areaType: store?.storeBasicInfo?.areaType || '',

    // storeDetails
    detailsLocation: store?.storeDetails?.detailsLocation || '',
    detailsInterior: store?.storeDetails?.detailsInterior || '',
    detailsFloor: store?.storeDetails?.detailsFloor || '',
    detailsRent: store?.storeDetails?.detailsRent || '',
    detailsDeposit: store?.storeDetails?.detailsDeposit || '',
    detailsStartupCost: store?.storeDetails?.detailsStartupCost || '',
    detailsParking: store?.storeDetails?.detailsParking || '',
    detailsSize: store?.storeDetails?.detailsSize || '',

    // storeDescription
    householdCountInRadius: store?.storeDescription?.householdCountInRadius || '',
    populationByAgeGroup: store?.storeDescription?.populationByAgeGroup || '',
    competitorStores: store?.storeDescription?.competitorStores || '',
    locationAnalysis: store?.storeDescription?.locationAnalysis || '',
  });

  const [images, setImages] = useState({
    main: store?.mainImage || null,
    gallery: store?.galleryImages || [],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // FormData 생성 - 스웨거 방식
    const formDataToSend = new FormData();

    const dto = {
      address: {
        address: formData.address,
        detailAddress: formData.detailAddress,
      },
      storeBasicInfo: {
        areaSqm: parseInt(formData.areaSqm) || 0,
        targetRecruits: parseInt(formData.targetRecruits) || 0,
        areaType: formData.areaType,
        storeName: formData.storeName,
        operatingHours: formData.operatingHours,
        washingMachines: parseInt(formData.washingMachines) || 0,
        status: formData.status,
        targetOpeningDate: formData.targetOpeningDate,
        dryers: parseInt(formData.dryers) || 0,
      },
      storeDetails: {
        detailsLocation: formData.detailsLocation,
        detailsInterior: formData.detailsInterior,
        detailsFloor: formData.detailsFloor,
        detailsRent: formData.detailsRent,
        detailsDeposit: formData.detailsDeposit,
        detailsStartupCost: formData.detailsStartupCost,
        detailsParking: formData.detailsParking,
        detailsSize: formData.detailsSize,
      },
      storeDescription: {
        householdCountInRadius: formData.householdCountInRadius,
        populationByAgeGroup: formData.populationByAgeGroup,
        competitorStores: formData.competitorStores,
        locationAnalysis: formData.locationAnalysis,
      },
    };

    formDataToSend.append('dto', JSON.stringify(dto));

    // 이미지 파일들 추가
    if (images.main) {
      formDataToSend.append('files', images.main);
    }
    if (images.gallery && images.gallery.length > 0) {
      images.gallery.forEach((image) => {
        formDataToSend.append('files', image);
      });
    }

    onSave(formDataToSend);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">
            {store ? '매장 수정' : '새 매장 등록'}
          </h3>
          <button
            type="button"
            onClick={onBack}
            className="text-gray-500 hover:text-gray-700 text-sm font-medium"
          >
            ← 목록으로
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-8">
        {/* 기본 정보 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">기본 정보</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">매장명 *</label>
              <input
                type="text"
                name="storeName"
                value={formData.storeName || ''}
                onChange={handleInputChange}
                required
                placeholder="호텔런드리 강남점"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">매장 위치 *</label>
              <input
                type="text"
                name="address"
                value={formData.address || ''}
                onChange={handleInputChange}
                required
                placeholder="인천시 남동구"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">상세 주소</label>
              <input
                type="text"
                name="detailAddress"
                value={formData.detailAddress || ''}
                onChange={handleInputChange}
                placeholder="구월동 123-45"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">상태 *</label>
              <select
                name="status"
                value={formData.status || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                목표 모집 인원 *
              </label>
              <select
                name="targetRecruits"
                value={formData.targetRecruits || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                {targetRecruitsOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">목표 오픈 시기</label>
              <input
                type="text"
                name="targetOpeningDate"
                value={formData.targetOpeningDate || ''}
                onChange={handleInputChange}
                placeholder="2025년 9월 오픈 목표"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>
        </div>

        {/* 매장 정보 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">매장 정보</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">평수 *</label>
              <select
                name="areaSqm"
                value={formData.areaSqm || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                {sizeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">세탁기 대수 *</label>
              <select
                name="washingMachines"
                value={formData.washingMachines || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                {washingMachineOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">건조기 대수 *</label>
              <select
                name="dryers"
                value={formData.dryers || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                {dryerOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">운영시간</label>
              <select
                name="operatingHours"
                value={formData.operatingHours || ''}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                {operatingHoursOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">지역 특성</label>
              <select
                name="areaType"
                value={formData.areaType || ''}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                {areaTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 상세 정보 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">상세 정보</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">상세 위치 정보</label>
              <input
                type="text"
                name="detailsLocation"
                value={formData.detailsLocation}
                onChange={handleInputChange}
                placeholder="서울시 동작구 상도동"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">인테리어 상태</label>
              <select
                name="detailsInterior"
                value={formData.detailsInterior}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                {interiorOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">층수</label>
              <select
                name="detailsFloor"
                value={formData.detailsFloor}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                {floorOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">월세 정보</label>
              <input
                type="text"
                name="detailsRent"
                value={formData.detailsRent}
                onChange={handleInputChange}
                placeholder="월세 4,000/350 (관리비 포함)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">권리금</label>
              <input
                type="text"
                name="detailsDeposit"
                value={formData.detailsDeposit}
                onChange={handleInputChange}
                placeholder="권리금 3,500"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">창업비용</label>
              <input
                type="text"
                name="detailsStartupCost"
                value={formData.detailsStartupCost}
                onChange={handleInputChange}
                placeholder="창업비용 3000만원"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">주차 상세</label>
              <input
                type="text"
                name="detailsParking"
                value={formData.detailsParking}
                onChange={handleInputChange}
                placeholder="주차 가능 - 매장 앞 4대"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">면적</label>
              <input
                type="text"
                name="detailsSize"
                value={formData.detailsSize}
                onChange={handleInputChange}
                placeholder="전용 52.99m²"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>
        </div>

        {/* 설명 정보 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">설명 정보</h4>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                반경 내 가구 수
              </label>
              <input
                type="text"
                name="householdCountInRadius"
                value={formData.householdCountInRadius}
                onChange={handleInputChange}
                placeholder="반경 500m 내 약 1,200가구"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">연령대별 인구</label>
              <input
                type="text"
                name="populationByAgeGroup"
                value={formData.populationByAgeGroup}
                onChange={handleInputChange}
                placeholder="20-30대 40%, 30-40대 35%, 40-50대 25%"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">경쟁업체 현황</label>
              <input
                type="text"
                name="competitorStores"
                value={formData.competitorStores}
                onChange={handleInputChange}
                placeholder="반경 1km 내 세탁소 2개소, 무인세탁방 1개소"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">입지 분석</label>
              <textarea
                name="locationAnalysis"
                value={formData.locationAnalysis}
                onChange={handleInputChange}
                rows={4}
                placeholder="인근 주거 밀집 지역과 생활 편의시설이 결합된 안정적인 상권에 위치한 무인세탁방 매물로, 바로 영업이 가능하며 꾸준한 수익 창출이 기대되는 입지입니다."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>
        </div>

        {/* 이미지 업로드 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">이미지 업로드</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                메인 이미지 *
                <span className="text-xs text-gray-500 ml-2">권장 크기: 1200x800px, 최대 5MB</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                갤러리 이미지
                <span className="text-xs text-gray-500 ml-2">
                  최대 10장, 권장 크기: 800x600px, 파일당 최대 5MB
                </span>
              </label>
            </div>
            <ImageUpload images={images} setImages={setImages} />
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            취소
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-brand-blue hover:bg-brand-dark text-white rounded-md font-medium transition-colors"
          >
            {store ? '수정하기' : '등록하기'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StoreForm;
