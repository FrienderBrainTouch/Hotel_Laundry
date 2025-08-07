import React, { useState } from 'react';

// 시/도별 시/군/구 데이터
const regionData = {
  seoul: [
    '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구',
    '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구',
    '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'
  ],
  busan: [
    '강서구', '금정구', '남구', '동구', '동래구', '부산진구', '북구', '사상구',
    '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구', '기장군'
  ],
  daegu: [
    '남구', '달서구', '달성군', '동구', '북구', '서구', '수성구', '중구'
  ],
  incheon: [
    '계양구', '남구', '남동구', '동구', '부평구', '서구', '연수구', '중구', '강화군', '옹진군'
  ],
  gwangju: [
    '광산구', '남구', '동구', '북구', '서구'
  ],
  daejeon: [
    '대덕구', '동구', '서구', '유성구', '중구'
  ],
  ulsan: [
    '남구', '동구', '북구', '울주군', '중구'
  ],
  sejong: [
    '세종특별자치시'
  ],
  gyeonggi: [
    '수원시', '성남시', '의정부시', '안양시', '부천시', '광명시', '평택시', '동두천시',
    '안산시', '고양시', '과천시', '구리시', '남양주시', '오산시', '시흥시', '군포시',
    '의왕시', '하남시', '용인시', '파주시', '이천시', '안성시', '김포시', '화성시',
    '광주시', '여주시', '양평군', '고양군', '연천군', '포천군', '가평군'
  ],
  gangwon: [
    '춘천시', '원주시', '강릉시', '동해시', '태백시', '속초시', '삼척시',
    '홍천군', '횡성군', '영월군', '평창군', '정선군', '철원군', '화천군', '양구군', '인제군', '고성군', '양양군'
  ],
  chungbuk: [
    '청주시', '충주시', '제천시', '보은군', '옥천군', '영동군', '증평군', '진천군', '괴산군', '음성군', '단양군'
  ],
  chungnam: [
    '천안시', '공주시', '보령시', '아산시', '서산시', '논산시', '계룡시', '당진시',
    '금산군', '부여군', '서천군', '청양군', '홍성군', '예산군', '태안군'
  ],
  jeonbuk: [
    '전주시', '군산시', '익산시', '정읍시', '남원시', '김제시',
    '완주군', '진안군', '무주군', '장수군', '임실군', '순창군', '고창군', '부안군'
  ],
  jeonnam: [
    '목포시', '여수시', '순천시', '나주시', '광양시', '담양군', '곡성군', '구례군',
    '고흥군', '보성군', '화순군', '장흥군', '강진군', '해남군', '영암군', '무안군', '함평군', '영광군', '장성군', '완도군', '진도군', '신안군'
  ],
  gyeongbuk: [
    '포항시', '경주시', '김천시', '안동시', '구미시', '영주시', '영천시', '상주시',
    '문경시', '경산시', '군위군', '의성군', '청송군', '영양군', '영덕군', '청도군',
    '고령군', '성주군', '칠곡군', '예천군', '봉화군', '울진군', '울릉군'
  ],
  gyeongnam: [
    '창원시', '진주시', '통영시', '사천시', '김해시', '밀양시', '거제시', '양산시',
    '의령군', '함안군', '창녕군', '고성군', '남해군', '하동군', '산청군', '함양군',
    '거창군', '합천군'
  ],
  jeju: [
    '제주시', '서귀포시'
  ]
};

// 각 입력 필드를 위한 재사용 가능한 컴포넌트
const FormRow = ({ label, required, children }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 py-4 border-b border-gray-200 items-center">
    <div className="font-semibold text-24 text-gray-800 col-span-1 mb-2 md:mb-0">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </div>
    <div className="col-span-1 md:col-span-3">
      {children}
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone1: '',
    phone2: '',
    phone3: '',
    emailId: '',
    emailDomain: '',
    region: '',
    detailRegion: '',
    openingTime: '',
    investment: '',
    hasExperience: '',
    buildingType: '',
    knowPath: '',
    etc: ''
  });

  const [agree, setAgree] = useState(false);

  // 입력 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // 시/도가 변경되면 상세지역 초기화
    if (name === 'region') {
      setFormData(prev => ({ ...prev, detailRegion: '' }));
    }
  };

  // 현재 선택된 시/도의 시/군/구 목록
  const currentDetailRegions = formData.region ? regionData[formData.region] || [] : [];

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 my-10 font-pretendard">
      
      {/* 페이지 제목 */}
      <h1 className="text-hero-title font-bold text-center text-gray-800 pb-4 border-b-2 border-blue-800">
  창업문의
</h1>

      <div className="mt-8">
        {/* 개인정보 동의 섹션 */}
        <div className="border border-gray-300 p-6">
          <p className="text-20 text-gray-500 mb-4">
            ※ 등록 거부에 대한 고지<br />
            본 개인정보 제공에 동의하지 않으시는 경우, 창업 상담을 거부할 수 있으며, 이 경우 창업 문의에 대한 답변이 제한될 수 있습니다.
          </p>
          <h2 className="text-section-title font-bold text-gray-800">개인정보 제3자 제공에 대한 동의</h2>
          <div className="text-20 text-gray-600 mt-2 bg-gray-50 p-3">
            <p>(1) 개인정보를 제공받는 자</p>
            <p> 워시업 코리아의 해당 사업부서</p>
          </div>
          <div className="text-right mt-4">
            <label className="flex items-center justify-end text-24">
              <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
              개인정보 수집 및 이용에 동의합니다.
            </label>
          </div>
        </div>

        {/* 전화 상담 안내 배너 */}
        <div className="bg-blue-800 text-white text-center p-4 my-8 flex items-center justify-center gap-4">
          <span className="text-hero-subtitle font-bold">📞</span>
          <p className="font-semibold text-24">365일 24시간 <span className="font-bold text-hero-subtitle">1588-5942</span>, 콜센터에서도 지금 상담 가능합니다.</p>
        </div>

        {/* 입력 폼 */}
        <div className="space-y-4">
          {/* 이름 - 연령 한 줄 */}
          <div className="grid grid-cols-1 md:grid-cols-2 py-4 border-b border-gray-200 items-center gap-x-8 gap-y-4">
            
            {/* 2. 첫 번째 칸: '이름' 그룹 */}
            <div className="grid grid-cols-4 items-center">
              <label htmlFor="name" className="font-semibold text-24 text-gray-800 col-span-1">
                이름<span className="text-red-500 ml-1">*</span>
              </label>
              <div className="col-span-3">
                <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 p-2 w-full rounded-sm text-24" />
              </div>
            </div>

            {/* 3. 두 번째 칸: '연령' 그룹 */}
            <div className="grid grid-cols-4 items-center">
              <label htmlFor="age" className="font-semibold text-24 text-gray-800 col-span-1">
                연령<span className="text-red-500 ml-1">*</span>
              </label>
              <div className="col-span-3">
                <select id="age" name="age" value={formData.age} onChange={handleChange} className="border border-gray-300 p-2 rounded-sm w-full text-24">
                  <option value="">선택하세요</option>
                  <option value="20s">20대</option>
                  <option value="30s">30대</option>
                  <option value="40s">40대</option>
                  <option value="50s">50대</option>
                  <option value="60s">60대 이상</option>
                </select>
              </div>
            </div>
          </div>

          <FormRow label="성별" required>
            <div className="flex items-center gap-4">
              <label className="text-24"><input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} className="mr-1"/> 남</label>
              <label className="text-24"><input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} className="mr-1"/> 여</label>
            </div>
          </FormRow>

          <FormRow label="연락처" required>
            <div className="flex items-center gap-2">
              <select className="border border-gray-300 p-2 rounded-sm text-24"><option>010</option></select>
              <span className="text-24">-</span>
              <input type="text" name="phone2" value={formData.phone2} onChange={handleChange} className="border border-gray-300 p-2 w-20 rounded-sm text-24" />
              <span className="text-24">-</span>
              <input type="text" name="phone3" value={formData.phone3} onChange={handleChange} className="border border-gray-300 p-2 w-20 rounded-sm text-24" />
            </div>
          </FormRow>

          <FormRow label="이메일" required>
            <div className="flex items-center gap-2 flex-wrap">
              <input type="text" name="emailId" value={formData.emailId} onChange={handleChange} className="border border-gray-300 p-2 w-32 rounded-sm text-24" />
              <span className="text-24">@</span>
              <input type="text" name="emailDomain" value={formData.emailDomain} onChange={handleChange} className="border border-gray-300 p-2 w-32 rounded-sm text-24" />
              <select className="border border-gray-300 p-2 rounded-sm text-24">
                <option>직접 입력</option>
                <option>naver.com</option>
                <option>gmail.com</option>
              </select>
            </div>
          </FormRow>

          {/* === 개설희망지역 - 상세지역 - 개설희망시기 한 줄 (수정된 부분) === */}
          {/* 1. 전체를 3칸짜리 그리드로 만듭니다. (md:grid-cols-3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 py-4 border-b border-gray-200 items-start gap-x-8 gap-y-4">

            {/* 2. 첫 번째 칸: '개설희망지역' 그룹 (세로 정렬) */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-24 text-gray-800">
                개설희망지역<span className="text-red-500 ml-1">*</span>
              </label>
              <select name="region" value={formData.region} onChange={handleChange} className="border border-gray-300 p-2 rounded-sm w-full text-24">
                <option value="">시/도 선택</option>
                <option value="seoul">서울특별시</option>
                <option value="busan">부산광역시</option>
                <option value="daegu">대구광역시</option>
                <option value="incheon">인천광역시</option>
                <option value="gwangju">광주광역시</option>
                <option value="daejeon">대전광역시</option>
                <option value="ulsan">울산광역시</option>
                <option value="sejong">세종특별자치시</option>
                <option value="gyeonggi">경기도</option>
                <option value="gangwon">강원도</option>
                <option value="chungbuk">충청북도</option>
                <option value="chungnam">충청남도</option>
                <option value="jeonbuk">전라북도</option>
                <option value="jeonnam">전라남도</option>
                <option value="gyeongbuk">경상북도</option>
                <option value="gyeongnam">경상남도</option>
                <option value="jeju">제주특별자치도</option>
              </select>
            </div>

            {/* 3. 두 번째 칸: '상세지역' 그룹 (세로 정렬) */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-24 text-gray-800">
                상세지역<span className="text-red-500 ml-1">*</span>
              </label>
              <select name="detailRegion" value={formData.detailRegion} onChange={handleChange} className="border border-gray-300 p-2 rounded-sm w-full text-24">
                <option value="">시/군/구 선택</option>
                {currentDetailRegions.map((region, index) => (
                  <option key={index} value={region}>{region}</option>
                ))}
              </select>
            </div>

            {/* 4. 세 번째 칸: '개설희망시기' 그룹 (세로 정렬) */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-24 text-gray-800">
                개설희망시기<span className="text-red-500 ml-1">*</span>
              </label>
              <select name="openingTime" value={formData.openingTime} onChange={handleChange} className="border border-gray-300 p-2 rounded-sm w-full text-24">
                <option value="">선택하세요</option>
                <option value="immediate">즉시</option>
                <option value="1month">1개월 이내</option>
                <option value="3months">3개월 이내</option>
                <option value="6months">6개월 이내</option>
                <option value="1year">1년 이내</option>
                <option value="over1year">1년 이상</option>
              </select>
            </div>
          </div>

          <FormRow label="투자가능비용" required>
            <div className="flex items-center gap-4 text-24 flex-wrap">
              <label><input type="radio" name="investment" value="5k-7k" checked={formData.investment === '5k-7k'} onChange={handleChange} className="mr-1"/> 5천~7천만원</label>
              <label><input type="radio" name="investment" value="7k-1b" checked={formData.investment === '7k-1b'} onChange={handleChange} className="mr-1"/> 7천~1억</label>
              <label><input type="radio" name="investment" value="1b-1.5b" checked={formData.investment === '1b-1.5b'} onChange={handleChange} className="mr-1"/> 1억~1억5천</label>
              <label><input type="radio" name="investment" value="1.5b-2b" checked={formData.investment === '1.5b-2b'} onChange={handleChange} className="mr-1"/> 1억5천~2억</label>
              <label><input type="radio" name="investment" value="over2b" checked={formData.investment === 'over2b'} onChange={handleChange} className="mr-1"/> 2억 이상</label>
            </div>
          </FormRow>

          <FormRow label="빨래방 이용경험" required>
            <div className="flex items-center gap-4 text-24 flex-wrap">
              <label><input type="radio" name="hasExperience" value="yes" checked={formData.hasExperience === 'yes'} onChange={handleChange} className="mr-1"/> 예</label>
              <label><input type="radio" name="hasExperience" value="no" checked={formData.hasExperience === 'no'} onChange={handleChange} className="mr-1"/> 아니오</label>
            </div>
          </FormRow>

          <FormRow label="건물소유/임대" required>
            <div className="flex items-center gap-4 text-24 flex-wrap">
              <label><input type="radio" name="buildingType" value="own" checked={formData.buildingType === 'own'} onChange={handleChange} className="mr-1"/> 건물소유</label>
              <label><input type="radio" name="buildingType" value="rent" checked={formData.buildingType === 'rent'} onChange={handleChange} className="mr-1"/> 건물임대</label>
            </div>
          </FormRow>

          <FormRow label="호텔 런드리를 알게 된 경로">
            <select name="knowPath" value={formData.knowPath} onChange={handleChange} className="border border-gray-300 p-2 rounded-sm text-24">
              <option value="">선택하세요</option>
              <option value="internet">인터넷 검색</option>
              <option value="sns">SNS</option>
              <option value="advertisement">광고</option>
              <option value="recommendation">지인 추천</option>
              <option value="exhibition">전시회/박람회</option>
              <option value="other">기타</option>
            </select>
          </FormRow>
          
          <FormRow label="기타 문의사항">
            <textarea name="etc" value={formData.etc} onChange={handleChange} rows="5" className="border border-gray-300 p-2 w-full rounded-sm text-24"></textarea>
          </FormRow>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="text-right mt-8 pt-8 border-t">
        <button className="bg-gray-800 text-white font-bold py-3 px-12 rounded hover:bg-gray-700 text-24">
          작성완료
        </button>
      </div>
    </div>
  );
};

export default Contact;