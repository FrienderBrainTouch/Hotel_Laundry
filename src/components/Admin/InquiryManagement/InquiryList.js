import React from 'react';

const InquiryList = ({ onViewInquiry, filters, setFilters }) => {
  // 지역별 문의 데이터 (실제로는 API에서 가져올 데이터)
  const inquiries = [
    {
      id: 1,
      name: '김창업',
      age: '30대',
      gender: 'male',
      phone2: '1234',
      phone3: '5678',
      emailId: 'kim',
      emailDomain: 'example.com',
      investmentAmount: '5천~3천만원',
      laundryExperience: 'yes',
      buildingOwnership: 'rent',
      discoveryPath: '인터넷 검색',
      firstChoice: '서울시 강남구',
      secondChoice: '서울시 서초구',
      thirdChoice: '서울시 송파구',
      inquiryContent:
        '강남구 세탁소 창업에 대해 문의드립니다. 초기 비용과 수익성에 대해 알고 싶습니다.',
      status: '미확인',
      createdAt: '2024-01-15 14:30',
      priority: 'high',
      storeId: 1,
      storeName: '강남구 세탁소',
      storeStatus: 'active',
    },
    {
      id: 2,
      name: '이사업',
      age: '40대',
      gender: 'female',
      phone2: '2345',
      phone3: '6789',
      emailId: 'lee',
      emailDomain: 'gmail.com',
      investmentAmount: '7천~1억',
      laundryExperience: 'no',
      buildingOwnership: 'own',
      discoveryPath: '지인 소개',
      firstChoice: '부산광역시 해운대구',
      secondChoice: '부산광역시 부산진구',
      thirdChoice: '',
      inquiryContent:
        '부산 해운대점 운영에 대해 문의드립니다. 일일 매출과 고객 수에 대해 궁금합니다.',
      status: '처리중',
      createdAt: '2024-01-14 09:15',
      priority: 'medium',
      storeId: 2,
      storeName: '부산 해운대점',
      storeStatus: 'deleted',
    },
    {
      id: 3,
      name: '박투자',
      age: '50대',
      gender: 'male',
      phone2: '3456',
      phone3: '7890',
      emailId: 'park',
      emailDomain: 'naver.com',
      investmentAmount: '1억~1억5천',
      laundryExperience: 'yes',
      buildingOwnership: 'rent',
      discoveryPath: '온라인 광고',
      firstChoice: '대구광역시 중구',
      secondChoice: '대구광역시 동구',
      thirdChoice: '대구광역시 서구',
      inquiryContent:
        '대구 중구점 투자에 대해 문의드립니다. 투자 금액과 수익률에 대해 알고 싶습니다.',
      status: '완료',
      createdAt: '2024-01-13 16:45',
      priority: 'low',
      storeId: 3,
      storeName: '대구 중구점',
      storeStatus: 'active',
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      미확인: 'bg-red-100 text-red-800',
      처리중: 'bg-yellow-100 text-yellow-800',
      완료: 'bg-green-100 text-green-800',
      삭제됨: 'bg-gray-100 text-gray-600',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800',
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* 필터 */}
      <div className="p-6 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">지역 (1지망)</label>
            <select
              value={filters.region}
              onChange={(e) => setFilters({ ...filters, region: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <option value="">전체 지역</option>
              <option value="서울시">서울시</option>
              <option value="부산광역시">부산광역시</option>
              <option value="대구광역시">대구광역시</option>
              <option value="인천광역시">인천광역시</option>
              <option value="광주광역시">광주광역시</option>
              <option value="대전광역시">대전광역시</option>
              <option value="울산광역시">울산광역시</option>
              <option value="세종특별자치시">세종특별자치시</option>
              <option value="경기도">경기도</option>
              <option value="강원도">강원도</option>
              <option value="충청북도">충청북도</option>
              <option value="충청남도">충청남도</option>
              <option value="전라북도">전라북도</option>
              <option value="전라남도">전라남도</option>
              <option value="경상북도">경상북도</option>
              <option value="경상남도">경상남도</option>
              <option value="제주특별자치도">제주특별자치도</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">상태</label>
            <select
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <option value="">전체</option>
              <option value="미확인">미확인</option>
              <option value="처리중">처리중</option>
              <option value="완료">완료</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">매장 상태</label>
            <select
              value={filters.storeStatus}
              onChange={(e) => setFilters({ ...filters, storeStatus: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <option value="">전체</option>
              <option value="active">활성 매장</option>
              <option value="deleted">삭제된 매장</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">검색</label>
            <input
              type="text"
              placeholder="이름, 연락처, 문의내용"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
          <div className="flex items-end">
            <button className="w-full bg-brand-blue hover:bg-brand-dark text-white px-4 py-2 rounded-md font-medium transition-colors">
              필터 적용
            </button>
          </div>
        </div>
      </div>

      {/* 문의 목록 */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                문의자
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                연락처
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                1지망 지역
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                투자 가능 비용
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                상태
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                우선순위
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                등록일
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                작업
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inquiries.map((inquiry) => (
              <tr key={inquiry.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{inquiry.name}</div>
                  <div className="text-sm text-gray-500">
                    {inquiry.age} {inquiry.gender === 'male' ? '남' : '여'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    010-{inquiry.phone2}-{inquiry.phone3}
                  </div>
                  <div className="text-sm text-gray-500">
                    {inquiry.emailId}@{inquiry.emailDomain}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{inquiry.firstChoice}</div>
                  {inquiry.secondChoice && (
                    <div className="text-sm text-gray-500">2지망: {inquiry.secondChoice}</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{inquiry.investmentAmount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      inquiry.storeStatus === 'deleted' ? '삭제됨' : inquiry.status
                    )}`}
                  >
                    {inquiry.storeStatus === 'deleted' ? '삭제됨' : inquiry.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                      inquiry.priority
                    )}`}
                  >
                    {inquiry.priority === 'high'
                      ? '높음'
                      : inquiry.priority === 'medium'
                      ? '보통'
                      : '낮음'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{inquiry.createdAt}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => onViewInquiry(inquiry)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    상세보기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 페이지네이션 */}
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            총 <span className="font-medium">3</span>개 문의
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
              이전
            </button>
            <button className="px-3 py-1 text-sm bg-brand-blue text-white rounded-md">1</button>
            <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryList;
