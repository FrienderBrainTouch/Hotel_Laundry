import React, { useState } from 'react';
import ImageUpload from './ImageUpload';

// 매장 상태 옵션
const statusOptions = [
  { value: 'recruiting', label: '모집 중' },
  { value: 'closed', label: '모집 마감' },
  { value: 'completed', label: '운영 완료' },
  { value: 'preparing', label: '준비 중' },
];

// 목표 모집 인원 옵션
const targetRecruitsOptions = [
  { value: 5, label: '5명' },
  { value: 8, label: '8명' },
  { value: 10, label: '10명' },
  { value: 12, label: '12명' },
  { value: 15, label: '15명' },
  { value: 20, label: '20명' },
];

// 인테리어 상태 옵션
const interiorOptions = [
  { value: '인테리어 없음', label: '인테리어 없음' },
  { value: '기본 인테리어', label: '기본 인테리어' },
  { value: '완전 인테리어', label: '완전 인테리어' },
  { value: '고급 인테리어', label: '고급 인테리어' },
];

// 층수 옵션
const floorOptions = [
  { value: '지하1층', label: '지하1층' },
  { value: '지하2층', label: '지하2층' },
  { value: '1층', label: '1층' },
  { value: '2층', label: '2층' },
  { value: '3층', label: '3층' },
  { value: '4층', label: '4층' },
  { value: '5층 이상', label: '5층 이상' },
];

// 평수 옵션
const sizeOptions = [
  { value: 15, label: '15평' },
  { value: 18, label: '18평' },
  { value: 20, label: '20평' },
  { value: 22, label: '22평' },
  { value: 25, label: '25평' },
  { value: 30, label: '30평' },
  { value: 35, label: '35평' },
  { value: 40, label: '40평' },
];

// 세탁기 대수 옵션
const washingMachineOptions = [
  { value: 3, label: '3대' },
  { value: 4, label: '4대' },
  { value: 5, label: '5대' },
  { value: 6, label: '6대' },
  { value: 7, label: '7대' },
  { value: 8, label: '8대' },
  { value: 10, label: '10대' },
];

// 건조기 대수 옵션
const dryerOptions = [
  { value: 3, label: '3대' },
  { value: 4, label: '4대' },
  { value: 5, label: '5대' },
  { value: 6, label: '6대' },
  { value: 7, label: '7대' },
  { value: 8, label: '8대' },
  { value: 10, label: '10대' },
];

// 운영시간 옵션
const operatingHoursOptions = [
  { value: '24시간', label: '24시간' },
  { value: '06:00-22:00', label: '06:00-22:00' },
  { value: '07:00-23:00', label: '07:00-23:00' },
  { value: '08:00-24:00', label: '08:00-24:00' },
  { value: '09:00-21:00', label: '09:00-21:00' },
];

// 지역 특성 옵션
const areaTypeOptions = [
  { value: '학생 밀집지역', label: '학생 밀집지역' },
  { value: '직장인 밀집지역', label: '직장인 밀집지역' },
  { value: '주거지역', label: '주거지역' },
  { value: '상업지역', label: '상업지역' },
  { value: '대학가 근처', label: '대학가 근처' },
  { value: '신도시 지역', label: '신도시 지역' },
  { value: '지하철역 근처', label: '지하철역 근처' },
  { value: '상가 밀집지역', label: '상가 밀집지역' },
];

const StoreForm = ({ store, onBack, onSave }) => {
  const [formData, setFormData] = useState({
    // DB 스키마에 맞는 필드들
    location: store?.location || '',
    status: store?.status || 'recruiting',
    target_recruits: store?.target_recruits || '',
    target_opening_date: store?.target_opening_date || '',
    areaSqm: store?.areaSqm || '',
    washing_machines: store?.washing_machines || '',
    dryers: store?.dryers || '',
    operating_hours: store?.operating_hours || '',
    area_type: store?.area_type || '',
    parking_available: store?.parking_available || false,
    details_location: store?.details_location || '',
    details_interior: store?.details_interior || '',
    details_floor: store?.details_floor || '',
    details_rent: store?.details_rent || '',
    details_deposit: store?.details_deposit || '',
    details_startup_cost: store?.details_startup_cost || '',
    details_parking: store?.details_parking || '',
    details_size: store?.details_size || '',
    desc_title: store?.desc_title || '',
    desc_content: store?.desc_content || '',
    desc_summary: store?.desc_summary || '',
    // 상세 설명 분리 필드들
    content_area: store?.content_area || '',
    content_facility: store?.content_facility || '',
    content_location: store?.content_location || '',
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

    // 상세 설명 필드들을 합쳐서 desc_content로 만들기
    const combinedContent = [
      formData.content_area && `평수: ${formData.content_area}`,
      formData.content_facility && `시설: ${formData.content_facility}`,
      formData.content_location && `입지: ${formData.content_location}`,
    ]
      .filter(Boolean)
      .join('\n');

    const submitData = {
      ...formData,
      desc_content: combinedContent,
    };

    onSave(submitData, images);
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
              <label className="block text-sm font-medium text-gray-700 mb-2">매장 위치 *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                placeholder="인천시 남동구"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">상태 *</label>
              <select
                name="status"
                value={formData.status}
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
                name="target_recruits"
                value={formData.target_recruits}
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
                name="target_opening_date"
                value={formData.target_opening_date}
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
                value={formData.areaSqm}
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
                name="washing_machines"
                value={formData.washing_machines}
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
                value={formData.dryers}
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
                name="operating_hours"
                value={formData.operating_hours}
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
                name="area_type"
                value={formData.area_type}
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">주차 가능 여부</label>
              <select
                name="parking_available"
                value={formData.parking_available}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value={false}>주차 불가</option>
                <option value={true}>주차 가능</option>
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
                name="details_location"
                value={formData.details_location}
                onChange={handleInputChange}
                placeholder="서울시 동작구 상도동"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">인테리어 상태</label>
              <select
                name="details_interior"
                value={formData.details_interior}
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
                name="details_floor"
                value={formData.details_floor}
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
                name="details_rent"
                value={formData.details_rent}
                onChange={handleInputChange}
                placeholder="월세 4,000/350 (관리비 포함)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">권리금</label>
              <input
                type="text"
                name="details_deposit"
                value={formData.details_deposit}
                onChange={handleInputChange}
                placeholder="권리금 3,500"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">창업비용</label>
              <input
                type="text"
                name="details_startup_cost"
                value={formData.details_startup_cost}
                onChange={handleInputChange}
                placeholder="창업비용 3000만원"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">주차 상세</label>
              <input
                type="text"
                name="details_parking"
                value={formData.details_parking}
                onChange={handleInputChange}
                placeholder="주차 가능 - 매장 앞 4대"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">면적</label>
              <input
                type="text"
                name="details_size"
                value={formData.details_size}
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
              <label className="block text-sm font-medium text-gray-700 mb-2">설명 제목 *</label>
              <input
                type="text"
                name="desc_title"
                value={formData.desc_title}
                onChange={handleInputChange}
                required
                maxLength={100}
                placeholder="인근 주거 밀집 지역, 무인세탁방 창업 최적 입지"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <p className="text-xs text-gray-500 mt-1">최대 100자까지 입력 가능</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">평수</label>
              <input
                type="text"
                name="content_area"
                value={formData.content_area}
                onChange={handleInputChange}
                placeholder="약 16평"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">시설</label>
              <input
                type="text"
                name="content_facility"
                value={formData.content_facility}
                onChange={handleInputChange}
                placeholder="전기·급수·배수 설비 완비 (세탁장비 설치 즉시 영업 가능)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">입지</label>
              <input
                type="text"
                name="content_location"
                value={formData.content_location}
                onChange={handleInputChange}
                placeholder="대단지 아파트 단지와 학원가, 편의시설 인접 / 상시 이용 고객 확보에 유리"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">요약 설명</label>
              <textarea
                name="desc_summary"
                value={formData.desc_summary}
                onChange={handleInputChange}
                rows={3}
                maxLength={300}
                placeholder="인근 주거 밀집 지역과 생활 편의시설이 결합된 안정적인 상권에 위치한 무인세탁방 매물로, 바로 영업이 가능하며 꾸준한 수익 창출이 기대되는 입지입니다."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <p className="text-xs text-gray-500 mt-1">최대 300자까지 입력 가능</p>
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
