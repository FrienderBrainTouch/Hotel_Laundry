import React from 'react';

const InquiryList = ({ onViewInquiry, filters, setFilters }) => {
  const inquiries = [
    {
      id: 1,
      name: '김창업',
      phone: '010-1234-5678',
      email: 'kim@example.com',
      store: '강남구 세탁소',
      subject: '창업 문의',
      content: '강남구 세탁소 창업에 대해 문의드립니다. 초기 비용과 수익성에 대해 알고 싶습니다.',
      status: '미확인',
      createdAt: '2024-01-15 14:30',
      priority: 'high',
    },
    {
      id: 2,
      name: '이사업',
      phone: '010-2345-6789',
      email: 'lee@example.com',
      store: '부산 해운대점',
      subject: '운영 문의',
      content: '부산 해운대점 운영에 대해 문의드립니다. 일일 매출과 고객 수에 대해 궁금합니다.',
      status: '처리중',
      createdAt: '2024-01-14 09:15',
      priority: 'medium',
    },
    {
      id: 3,
      name: '박투자',
      phone: '010-3456-7890',
      email: 'park@example.com',
      store: '대구 중구점',
      subject: '투자 문의',
      content: '대구 중구점 투자에 대해 문의드립니다. 투자 금액과 수익률에 대해 알고 싶습니다.',
      status: '완료',
      createdAt: '2024-01-13 16:45',
      priority: 'low',
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      미확인: 'bg-red-100 text-red-800',
      처리중: 'bg-yellow-100 text-yellow-800',
      완료: 'bg-green-100 text-green-800',
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
            <label className="block text-sm font-medium text-gray-700 mb-2">매장</label>
            <select
              value={filters.store}
              onChange={(e) => setFilters({ ...filters, store: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <option value="">전체</option>
              <option value="강남구 세탁소">강남구 세탁소</option>
              <option value="부산 해운대점">부산 해운대점</option>
              <option value="대구 중구점">대구 중구점</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">기간</label>
            <select
              value={filters.dateRange}
              onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <option value="">전체</option>
              <option value="today">오늘</option>
              <option value="week">이번 주</option>
              <option value="month">이번 달</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">검색</label>
            <input
              type="text"
              placeholder="이름, 연락처, 제목"
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
                관련 매장
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                제목
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
                  <div className="text-sm text-gray-500">{inquiry.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{inquiry.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{inquiry.store}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-xs truncate">{inquiry.subject}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      inquiry.status
                    )}`}
                  >
                    {inquiry.status}
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
