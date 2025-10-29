// 매장 상태 옵션
export const statusOptions = [
  { value: 'WAITING', label: '준비 중' },
  { value: 'RECRUITING', label: '모집 중' },
  { value: 'CLOSED', label: '모집 마감' },
  { value: 'COMPLETE', label: '운영 완료' },
];

// 목표 모집 인원 옵션
export const targetRecruitsOptions = [
  { value: 5, label: '5명' },
  { value: 8, label: '8명' },
  { value: 10, label: '10명' },
  { value: 12, label: '12명' },
  { value: 15, label: '15명' },
  { value: 20, label: '20명' },
];

// 인테리어 상태 옵션
export const interiorOptions = [
  { value: '인테리어 없음', label: '인테리어 없음' },
  { value: '기본 인테리어', label: '기본 인테리어' },
  { value: '완전 인테리어', label: '완전 인테리어' },
  { value: '고급 인테리어', label: '고급 인테리어' },
];

// 층수 옵션
export const floorOptions = [
  { value: '지하1층', label: '지하1층' },
  { value: '지하2층', label: '지하2층' },
  { value: '1층', label: '1층' },
  { value: '2층', label: '2층' },
  { value: '3층', label: '3층' },
  { value: '4층', label: '4층' },
  { value: '5층 이상', label: '5층 이상' },
];

// 평수 옵션
export const sizeOptions = [
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
export const washingMachineOptions = [
  { value: 3, label: '3대' },
  { value: 4, label: '4대' },
  { value: 5, label: '5대' },
  { value: 6, label: '6대' },
  { value: 7, label: '7대' },
  { value: 8, label: '8대' },
  { value: 10, label: '10대' },
];

// 건조기 대수 옵션
export const dryerOptions = [
  { value: 3, label: '3대' },
  { value: 4, label: '4대' },
  { value: 5, label: '5대' },
  { value: 6, label: '6대' },
  { value: 7, label: '7대' },
  { value: 8, label: '8대' },
  { value: 10, label: '10대' },
];

// 운영시간 옵션
export const operatingHoursOptions = [
  { value: '24시간', label: '24시간' },
  { value: '06:00-22:00', label: '06:00-22:00' },
  { value: '07:00-23:00', label: '07:00-23:00' },
  { value: '08:00-24:00', label: '08:00-24:00' },
  { value: '09:00-21:00', label: '09:00-21:00' },
];

// 지역 특성 옵션
export const areaTypeOptions = [
  { value: '학생 밀집지역', label: '학생 밀집지역' },
  { value: '직장인 밀집지역', label: '직장인 밀집지역' },
  { value: '주거지역', label: '주거지역' },
  { value: '상업지역', label: '상업지역' },
  { value: '대학가 근처', label: '대학가 근처' },
  { value: '신도시 지역', label: '신도시 지역' },
  { value: '지하철역 근처', label: '지하철역 근처' },
  { value: '상가 밀집지역', label: '상가 밀집지역' },
];
