import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const StoreInquiry = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();

  // 임시 매장 데이터 (실제로는 API에서 가져올 데이터)
  const storeData = {
    id: storeId,
    location: '서울시 동작구 상도동',
  };

  // 폼 상태 관리
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone2: '',
    phone3: '',
    emailId: '',
    emailDomain: '',
    investmentAmount: '',
    laundryExperience: '',
    buildingOwnership: '',
    discoveryPath: '',
    inquiryContent: '',
    firstChoice: storeData.location, // 1지망은 매장 지역으로 자동 설정
    secondChoice: '',
    thirdChoice: '',
    privacyAgreement: false,
  });

  // 지역 옵션 (실제로는 API에서 가져올 데이터)
  const locationOptions = [
    '서울시 강남구',
    '서울시 강동구',
    '서울시 강북구',
    '서울시 강서구',
    '서울시 관악구',
    '서울시 광진구',
    '서울시 구로구',
    '서울시 금천구',
    '서울시 노원구',
    '서울시 도봉구',
    '서울시 동대문구',
    '서울시 동작구',
    '서울시 마포구',
    '서울시 서대문구',
    '서울시 서초구',
    '서울시 성동구',
    '서울시 성북구',
    '서울시 송파구',
    '서울시 양천구',
    '서울시 영등포구',
    '서울시 용산구',
    '서울시 은평구',
    '서울시 종로구',
    '서울시 중구',
    '서울시 중랑구',
  ];

  // 연령대 옵션
  const ageOptions = ['20대', '30대', '40대', '50대', '60대 이상'];

  // 투자 가능 비용 옵션
  const investmentOptions = [
    '0~3천만원',
    '5천~3천만원',
    '7천~1억',
    '1억~1억5천',
    '1억5천~2억',
    '2억 이상',
  ];

  // 호텔런드리 알게된 경로 옵션
  const discoveryOptions = [
    '인터넷 검색',
    '지인 소개',
    '온라인 광고',
    '오프라인 광고',
    'SNS',
    '기타',
  ];

  // 입력값 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();

    // 필수 필드 검증
    const requiredFields = [
      'name',
      'age',
      'gender',
      'phone2',
      'phone3',
      'emailId',
      'emailDomain',
      'investmentAmount',
      'laundryExperience',
      'buildingOwnership',
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    if (!formData.privacyAgreement) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    // 폼 데이터 제출 (실제로는 API 호출)
    console.log('문의 폼 제출:', formData);
    alert('문의가 성공적으로 접수되었습니다.');

    // 성공 후 매장 상세 페이지로 돌아가기
    navigate(`/startup-guide/low-capital-startup/store-progress/${storeId}`);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 my-10 font-pretendard">
      {/* 페이지 제목 */}
      <h1 className="text-hero-title font-bold text-center text-gray-800 pb-4 border-b-2 border-blue-800">
        소자본 창업 문의
      </h1>

      <div className="mt-8">
        {/* 개인정보 동의 섹션 */}
        <div className="border border-gray-300 p-6">
          <p className="text-20 text-gray-500 mb-4">
            ※ 등록 거부에 대한 고지
            <br />본 개인정보 제공에 동의하지 않으시는 경우, 창업 상담을 거부할 수 있으며, 이 경우
            창업 문의에 대한 답변이 제한될 수 있습니다.
          </p>
          <h2 className="text-section-title font-bold text-gray-800">
            개인정보 제3자 제공에 대한 동의
          </h2>
          <div className="text-20 text-gray-600 mt-2 bg-gray-50 p-3">
            <p>(1) 개인정보를 제공받는 자</p>
            <p> 워시업 코리아의 해당 사업부서</p>
          </div>
          <div className="text-right mt-4">
            <label className="flex items-center justify-end text-24">
              <input
                type="checkbox"
                id="privacyAgreement"
                name="privacyAgreement"
                checked={formData.privacyAgreement}
                onChange={handleInputChange}
                className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              개인정보 수집 및 이용에 동의합니다.
            </label>
          </div>
        </div>

        {/* 전화 상담 안내 배너 */}
        <div className="bg-blue-800 text-white text-center p-4 my-8 flex items-center justify-center gap-4">
          <span className="text-hero-subtitle font-bold">📞</span>
          <p className="font-semibold text-24">
            365일 24시간 <span className="font-bold text-hero-subtitle">02-1577-2657</span>,
            콜센터에서도 지금 상담 가능합니다.
          </p>
        </div>

        {/* 입력 폼을 form 태그로 감싸기 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 이름 - 연령 한 줄 */}
          <div className="grid grid-cols-1 md:grid-cols-2 py-4 border-b border-gray-200 items-center gap-x-8 gap-y-4">
            {/* 첫 번째 칸: '이름' 그룹 */}
            <div className="grid grid-cols-4 items-center">
              <label htmlFor="name" className="font-semibold text-24 text-gray-800 col-span-1">
                이름<span className="text-red-500 ml-1">*</span>
              </label>
              <div className="col-span-3">
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full rounded-sm text-24"
                  required
                />
              </div>
            </div>

            {/* 두 번째 칸: '연령' 그룹 */}
            <div className="grid grid-cols-4 items-center">
              <label htmlFor="age" className="font-semibold text-24 text-gray-800 col-span-1">
                연령<span className="text-red-500 ml-1">*</span>
              </label>
              <div className="col-span-3">
                <select
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-sm w-full text-24"
                  required
                >
                  <option value="">선택하세요</option>
                  {ageOptions.map((age, index) => (
                    <option key={index} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* 성별 */}
          <div className="grid grid-cols-1 md:grid-cols-4 py-4 border-b border-gray-200 items-center">
            <div className="font-semibold text-24 text-gray-800 col-span-1 mb-2 md:mb-0">
              성별<span className="text-red-500 ml-1">*</span>
            </div>
            <div className="col-span-1 md:col-span-3">
              <div className="flex items-center gap-4">
                <label className="text-24">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleInputChange}
                    className="mr-1"
                  />
                  남
                </label>
                <label className="text-24">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleInputChange}
                    className="mr-1"
                  />
                  여
                </label>
              </div>
            </div>
          </div>

          {/* 연락처 */}
          <div className="grid grid-cols-1 md:grid-cols-4 py-4 border-b border-gray-200 items-center">
            <div className="font-semibold text-24 text-gray-800 col-span-1 mb-2 md:mb-0">
              연락처<span className="text-red-500 ml-1">*</span>
            </div>
            <div className="col-span-1 md:col-span-3">
              <div className="flex items-center gap-2">
                <select className="border border-gray-300 p-2 rounded-sm text-24">
                  <option>010</option>
                </select>
                <span className="text-24">-</span>
                <input
                  type="text"
                  name="phone2"
                  value={formData.phone2}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-20 rounded-sm text-24"
                  required
                />
                <span className="text-24">-</span>
                <input
                  type="text"
                  name="phone3"
                  value={formData.phone3}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-20 rounded-sm text-24"
                  required
                />
              </div>
            </div>
          </div>

          {/* 이메일 */}
          <div className="grid grid-cols-1 md:grid-cols-4 py-4 border-b border-gray-200 items-center">
            <div className="font-semibold text-24 text-gray-800 col-span-1 mb-2 md:mb-0">
              이메일<span className="text-red-500 ml-1">*</span>
            </div>
            <div className="col-span-1 md:col-span-3">
              <div className="flex items-center gap-2 flex-wrap">
                <input
                  type="text"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-32 rounded-sm text-24"
                  required
                />
                <span className="text-24">@</span>
                <input
                  type="text"
                  name="emailDomain"
                  value={formData.emailDomain}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-32 rounded-sm text-24"
                  required
                />
                <select className="border border-gray-300 p-2 rounded-sm text-24">
                  <option>직접 입력</option>
                  <option>naver.com</option>
                  <option>gmail.com</option>
                </select>
              </div>
            </div>
          </div>

          {/* 투자가능비용 */}
          <div className="grid grid-cols-1 md:grid-cols-4 py-4 border-b border-gray-200 items-center">
            <div className="font-semibold text-24 text-gray-800 col-span-1 mb-2 md:mb-0">
              투자가능비용<span className="text-red-500 ml-1">*</span>
            </div>
            <div className="col-span-1 md:col-span-3">
              <div className="flex items-center gap-4 text-24 flex-wrap">
                {investmentOptions.map((option, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name="investmentAmount"
                      value={option}
                      checked={formData.investmentAmount === option}
                      onChange={handleInputChange}
                      className="mr-1"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* 빨래방 이용경험 */}
          <div className="grid grid-cols-1 md:grid-cols-4 py-4 border-b border-gray-200 items-center">
            <div className="font-semibold text-24 text-gray-800 col-span-1 mb-2 md:mb-0">
              빨래방 이용경험<span className="text-red-500 ml-1">*</span>
            </div>
            <div className="col-span-1 md:col-span-3">
              <div className="flex items-center gap-4 text-24 flex-wrap">
                <label>
                  <input
                    type="radio"
                    name="laundryExperience"
                    value="yes"
                    checked={formData.laundryExperience === 'yes'}
                    onChange={handleInputChange}
                    className="mr-1"
                  />
                  예
                </label>
                <label>
                  <input
                    type="radio"
                    name="laundryExperience"
                    value="no"
                    checked={formData.laundryExperience === 'no'}
                    onChange={handleInputChange}
                    className="mr-1"
                  />
                  아니오
                </label>
              </div>
            </div>
          </div>

          {/* 건물소유/임대 */}
          <div className="grid grid-cols-1 md:grid-cols-4 py-4 border-b border-gray-200 items-center">
            <div className="font-semibold text-24 text-gray-800 col-span-1 mb-2 md:mb-0">
              건물소유/임대<span className="text-red-500 ml-1">*</span>
            </div>
            <div className="col-span-1 md:col-span-3">
              <div className="flex items-center gap-4 text-24 flex-wrap">
                <label>
                  <input
                    type="radio"
                    name="buildingOwnership"
                    value="own"
                    checked={formData.buildingOwnership === 'own'}
                    onChange={handleInputChange}
                    className="mr-1"
                  />
                  건물소유
                </label>
                <label>
                  <input
                    type="radio"
                    name="buildingOwnership"
                    value="rent"
                    checked={formData.buildingOwnership === 'rent'}
                    onChange={handleInputChange}
                    className="mr-1"
                  />
                  건물임대
                </label>
              </div>
            </div>
          </div>

          {/* 호텔 런드리를 알게된 경로 */}
          <div className="grid grid-cols-1 md:grid-cols-4 py-4 border-b border-gray-200 items-center">
            <div className="font-semibold text-24 text-gray-800 col-span-1 mb-2 md:mb-0">
              호텔 런드리를 알게된 경로
            </div>
            <div className="col-span-1 md:col-span-3">
              <select
                name="discoveryPath"
                value={formData.discoveryPath}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded-sm text-24"
              >
                <option value="">선택하세요</option>
                {discoveryOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 지역 선호도 */}
          <div className="grid grid-cols-1 md:grid-cols-3 py-4 border-b border-gray-200 items-start gap-x-8 gap-y-4">
            {/* 1지망 */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-24 text-gray-800">
                1지망<span className="text-red-500 ml-1">*</span>
              </label>
              <div className="bg-gray-100 rounded px-4 py-3 text-24 font-medium text-gray-800">
                {formData.firstChoice}
              </div>
            </div>

            {/* 2지망 */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-24 text-gray-800">2지망</label>
              <select
                name="secondChoice"
                value={formData.secondChoice}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded-sm w-full text-24"
              >
                <option value="">선택하세요</option>
                {locationOptions
                  .filter((loc) => loc !== formData.firstChoice)
                  .map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
              </select>
            </div>

            {/* 3지망 */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-24 text-gray-800">3지망</label>
              <select
                name="thirdChoice"
                value={formData.thirdChoice}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded-sm w-full text-24"
              >
                <option value="">선택하세요</option>
                {locationOptions
                  .filter((loc) => loc !== formData.firstChoice && loc !== formData.secondChoice)
                  .map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* 기타 문의사항 */}
          <div className="grid grid-cols-1 md:grid-cols-4 py-4 border-b border-gray-200 items-center">
            <div className="font-semibold text-24 text-gray-800 col-span-1 mb-2 md:mb-0">
              기타 문의사항
            </div>
            <div className="col-span-1 md:col-span-3">
              <textarea
                name="inquiryContent"
                value={formData.inquiryContent}
                onChange={handleInputChange}
                rows={5}
                className="border border-gray-300 p-2 w-full rounded-sm text-24"
                placeholder="추가로 궁금한 사항이 있으시면 자유롭게 작성해주세요."
              />
            </div>
          </div>
        </form>
      </div>

      {/* 하단 버튼 */}
      <div className="text-right mt-8 pt-8 border-t">
        <button
          type="submit"
          onClick={handleSubmit}
          className="font-bold py-3 px-12 rounded text-24 bg-gray-800 hover:bg-gray-700 text-white"
        >
          작성완료
        </button>
      </div>
    </div>
  );
};

export default StoreInquiry;
