import React, { useMemo, useState, useEffect } from 'react';
import { useAdminContactsList } from '../../../hooks/queries/useContacts';

const InquiryList = ({ onViewInquiry, filters, setFilters }) => {
  const [contactType, setContactType] = useState('GENERAL');
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  // 필터가 변경되면 페이지를 0으로 리셋
  useEffect(() => {
    setPage(0);
  }, [filters?.region, filters?.status, filters?.search]);

  const { data, isLoading, error } = useAdminContactsList({
    contactType,
    page,
    size,
    region: filters?.region,
    contactStatus: filters?.status,
    keyword: filters?.search,
  });

  const inquiries = useMemo(() => data?.content || [], [data]);
  const isLowCapital = contactType === 'LOW_CAPITAL';

  const formatYYMMDD = (iso) => {
    if (!iso) return '-';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '-';
    const yy = String(d.getFullYear()).slice(-2);
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yy}.${mm}.${dd}`;
  };

  const getStatusLabel = (status) => {
    const map = {
      UNCHECKED: '미확인',
      COMPLETE: '완료',
      DELETED: '삭제됨',
    };
    return map[status] || status || '-';
  };

  const getStatusColor = (status) => {
    const label = getStatusLabel(status);
    const colors = {
      미확인: 'bg-red-100 text-red-800',
      완료: 'bg-green-100 text-green-800',
      삭제됨: 'bg-gray-100 text-gray-600',
    };
    return colors[label] || 'bg-gray-100 text-gray-800';
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">문의 유형</label>
            <select
              value={contactType}
              onChange={(e) => {
                setContactType(e.target.value);
                setPage(0);
                // 일반 문의로 변경 시 지역 필터 초기화
                if (e.target.value === 'GENERAL') {
                  setFilters({ ...filters, region: '' });
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <option value="GENERAL">일반 문의</option>
              <option value="LOW_CAPITAL">소규모 문의</option>
            </select>
          </div>
          {isLowCapital && (
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
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">상태</label>
            <select
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <option value="">전체</option>
              <option value="UNCHECKED">미확인</option>
              <option value="COMPLETE">완료</option>
              <option value="DELETED">삭제됨</option>
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
                {isLowCapital ? '1지망 지역' : '지역'}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                투자 가능 비용
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                상태
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                문의 날짜
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                상세
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {!isLoading &&
              !error &&
              inquiries.map((inquiry) => (
                <tr key={inquiry.contactId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{inquiry.userName}</div>
                    <div className="text-xs text-gray-500">{inquiry.contactType}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{inquiry.phone}</div>
                    <div className="text-sm text-gray-500">{inquiry.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isLowCapital ? (
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {inquiry.firstChoiceStore}
                        </div>
                        {inquiry.secondChoiceStore && (
                          <div className="text-sm text-gray-500">
                            2지망: {inquiry.secondChoiceStore}
                          </div>
                        )}
                        {inquiry.thirdChoiceStore && (
                          <div className="text-sm text-gray-500">
                            3지망: {inquiry.thirdChoiceStore}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {inquiry.region || '-'}
                        </div>
                        {inquiry.detailRegion && (
                          <div className="text-xs text-gray-500">
                            {inquiry.detailRegion}
                          </div>
                        )}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{inquiry.investment}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        inquiry.contactStatus
                      )}`}
                    >
                      {getStatusLabel(inquiry.contactStatus)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{formatYYMMDD(inquiry.createdAt)}</div>
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
            {isLoading && (
              <tr>
                <td className="px-6 py-6 text-center text-gray-500" colSpan={8}>
                  불러오는 중…
                </td>
              </tr>
            )}
            {error && (
              <tr>
                <td className="px-6 py-6 text-center text-red-600" colSpan={8}>
                  목록을 불러오지 못했습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 페이지네이션 */}
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            총 <span className="font-medium">{data?.totalElements ?? 0}</span>개 문의
          </div>
          <div className="flex space-x-2">
            <button
              className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
              disabled={page <= 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
            >
              이전
            </button>
            <span className="px-3 py-1 text-sm">
              {(data?.number ?? page) + 1} / {data?.totalPages ?? 1}
            </span>
            <button
              className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
              disabled={data?.last}
              onClick={() => setPage((p) => p + 1)}
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryList;
