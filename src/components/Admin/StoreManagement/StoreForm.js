import React, { useState } from 'react';
import ImageUpload from './ImageUpload';

const StoreForm = ({ store, onBack, onSave }) => {
  const [formData, setFormData] = useState({
    name: store?.name || '',
    city: store?.city || '',
    district: store?.district || '',
    address: store?.address || '',
    status: store?.status || 'recruiting',
    area: store?.area || '',
    washingMachines: store?.washingMachines || '',
    dryers: store?.dryers || '',
    operatingHours: store?.operatingHours || '',
    parkingAvailable: store?.parkingAvailable || false,
    targetRecruits: store?.targetRecruits || '',
    targetMonth: store?.targetMonth || '',
    floor: store?.floor || '',
    monthlyRent: store?.monthlyRent || '',
    keyMoney: store?.keyMoney || '',
    startupCost: store?.startupCost || '',
    interiorStatus: store?.interiorStatus || '',
    title: store?.title || '',
    description: store?.description || '',
    summary: store?.summary || '',
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
    console.log('Form submitted:', { ...formData, images });
    onSave();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            {store ? '매장 수정' : '새 매장 등록'}
          </h3>
          <button onClick={onBack} className="text-gray-600 hover:text-gray-800">
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
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
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
                <option value="recruiting">모집 중</option>
                <option value="preparing">준비 중</option>
                <option value="closed">모집 마감</option>
                <option value="completed">운영 완료</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">시/도 *</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                <option value="서울">서울</option>
                <option value="부산">부산</option>
                <option value="대구">대구</option>
                <option value="인천">인천</option>
                <option value="광주">광주</option>
                <option value="대전">대전</option>
                <option value="울산">울산</option>
                <option value="세종">세종</option>
                <option value="경기">경기</option>
                <option value="강원">강원</option>
                <option value="충북">충북</option>
                <option value="충남">충남</option>
                <option value="전북">전북</option>
                <option value="전남">전남</option>
                <option value="경북">경북</option>
                <option value="경남">경남</option>
                <option value="제주">제주</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">구/군 *</label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">상세주소 *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
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
              <input
                type="number"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">세탁기 대수 *</label>
              <input
                type="number"
                name="washingMachines"
                value={formData.washingMachines}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">건조기 대수 *</label>
              <input
                type="number"
                name="dryers"
                value={formData.dryers}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">운영시간</label>
              <input
                type="text"
                name="operatingHours"
                value={formData.operatingHours}
                onChange={handleInputChange}
                placeholder="예: 24시간"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div className="md:col-span-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="parkingAvailable"
                  checked={formData.parkingAvailable}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">주차 가능</span>
              </label>
            </div>
          </div>
        </div>

        {/* 모집 정보 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">모집 정보</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">목표 모집 인원</label>
              <input
                type="number"
                name="targetRecruits"
                value={formData.targetRecruits}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">목표 오픈 월</label>
              <input
                type="month"
                name="targetMonth"
                value={formData.targetMonth}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>
        </div>

        {/* 상세 정보 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">상세 정보</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">층수</label>
              <input
                type="number"
                name="floor"
                value={formData.floor}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">월세 (만원)</label>
              <input
                type="number"
                name="monthlyRent"
                value={formData.monthlyRent}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">권리금 (만원)</label>
              <input
                type="number"
                name="keyMoney"
                value={formData.keyMoney}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                창업비용 (만원)
              </label>
              <input
                type="number"
                name="startupCost"
                value={formData.startupCost}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">인테리어 상태</label>
              <select
                name="interiorStatus"
                value={formData.interiorStatus}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                <option value="완료">완료</option>
                <option value="진행중">진행중</option>
                <option value="미완료">미완료</option>
              </select>
            </div>
          </div>
        </div>

        {/* 설명 정보 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">설명 정보</h4>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">홍보 제목</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">본문 설명</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">요약 설명</label>
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>
        </div>

        {/* 이미지 업로드 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">이미지</h4>
          <ImageUpload images={images} setImages={setImages} />
        </div>

        {/* 버튼 */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
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
