import React, { useMemo, useState, useEffect } from 'react';
import {
  useAdminGeneralContacts,
  useAdminLowCapitalContacts,
} from '../../../hooks/queries/useContacts';
import { useAdminFirstRegions } from '../../../hooks/queries/useStores';

const InquiryList = ({ onViewInquiry, filters, setFilters }) => {
  const [contactType, setContactType] = useState('GENERAL');
  const [page, setPage] = useState(0);
  const [size] = useState(10);

  // 실제 API로 전송될 쿼리 파라미터 상태
  const [queryParams, setQueryParams] = useState({
    page: 0,
    size: 10,
  });

  // 문의 유형이 변경되면 자동으로 API 호출 (페이지도 0으로 리셋)
  useEffect(() => {
    setPage(0);
    const newParams = {
      page: 0,
      size,
      ...(filters.status && { contactStatus: filters.status }),
      ...(filters.search && { keyword: filters.search }),
    };
    // 소규모 창업 문의인 경우에만 region 파라미터 추가
    if (contactType === 'LOW_CAPITAL' && filters.region) {
      newParams.region = filters.region;
    }
    setQueryParams(newParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactType]);

  // 페이지가 바뀌면 현재 쿼리 파라미터에 페이지만 반영하여 재조회
  useEffect(() => {
    setQueryParams((prev) => ({ ...prev, page }));
  }, [page]);

  // contactType에 따라 다른 API 훅 사용
  const isLowCapital = contactType === 'LOW_CAPITAL';
  const generalQuery = useAdminGeneralContacts(isLowCapital ? { page: 0, size: 0 } : queryParams);
  const lowCapitalQuery = useAdminLowCapitalContacts(
    !isLowCapital ? { page: 0, size: 0 } : queryParams
  );

  // 현재 contactType에 맞는 쿼리 결과 사용
  const { data, isLoading, error } = isLowCapital ? lowCapitalQuery : generalQuery;

  // 1지망 지역 목록 조회 (소규모 문의용)
  const { data: regionsData } = useAdminFirstRegions();
  const regions = useMemo(() => regionsData || [], [regionsData]);

  // 필터 적용 버튼 클릭 핸들러
  const handleApplyFilters = () => {
    setPage(0);
    const newParams = {
      page: 0,
      size,
      ...(filters.status && { contactStatus: filters.status }),
      ...(filters.search && { keyword: filters.search }),
    };
    // 소규모 창업 문의인 경우에만 region 파라미터 추가
    if (isLowCapital && filters.region) {
      newParams.region = filters.region;
    }
    setQueryParams(newParams);
  };

  const inquiries = useMemo(() => data?.content || [], [data]);

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

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* 필터 */}
      <div className="p-6 border-b border-gray-200">
        <div
          className={`grid grid-cols-1 gap-4 ${isLowCapital ? 'md:grid-cols-5' : 'md:grid-cols-4'}`}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">문의 유형</label>
            <select
              value={contactType}
              onChange={(e) => {
                setContactType(e.target.value);
                // 일반 문의로 변경 시 지역 필터 초기화
                if (e.target.value === 'GENERAL') {
                  setFilters({ ...filters, region: '' });
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              {/* 문의 유형 변경 시 자동으로 API 호출됨 */}
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
                {regions.map((item, index) => (
                  <option key={index} value={item.region}>
                    {item.region}
                  </option>
                ))}
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
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleApplyFilters();
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={handleApplyFilters}
              className="w-full px-4 py-2 bg-brand-blue hover:bg-brand-dark text-white rounded-md font-medium transition-colors"
            >
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
                          <div className="text-xs text-gray-500">{inquiry.detailRegion}</div>
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
