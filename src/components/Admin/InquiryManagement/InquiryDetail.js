import React, { useState, useEffect } from 'react';
import { useAdminContactDetail, useUpdateContactStatus } from '../../../hooks/queries/useContacts';

const InquiryDetail = ({ inquiry, onBack }) => {
  const { data, isLoading, error } = useAdminContactDetail(inquiry?.contactId);
  const updateStatusMutation = useUpdateContactStatus();
  const [status, setStatus] = useState('UNCHECKED');
  const [isSaving, setIsSaving] = useState(false);

  // 데이터 로딩 후 상태 초기화
  useEffect(() => {
    if (data?.contactStatus) {
      setStatus(data.contactStatus);
    }
  }, [data]);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handleSave = async () => {
    if (!inquiry?.contactId) {
      alert('문의 ID가 없습니다.');
      return;
    }

    // 상태가 변경되지 않았으면 저장하지 않음
    if (status === data?.contactStatus) {
      onBack();
      return;
    }

    setIsSaving(true);
    try {
      await updateStatusMutation.mutateAsync({
        contactId: inquiry.contactId,
        status,
      });
      alert('문의 상태가 업데이트되었습니다.');
      onBack();
    } catch (error) {
      alert('문의 상태 업데이트에 실패했습니다. 다시 시도해 주세요.');
    } finally {
      setIsSaving(false);
    }
  };

  // const getStatusLabel = (status) => {
  //   const map = {
  //     UNCHECKED: '미확인',
  //     COMPLETE: '완료',
  //     DELETED: '삭제됨',
  //   };
  //   return map[status] || status || '미확인';
  // };

  // 로딩 중
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center text-gray-500">불러오는 중…</div>
      </div>
    );
  }

  // 에러
  if (error || !data) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center text-red-600">상세 정보를 불러오지 못했습니다.</div>
        <div className="text-center mt-4">
          <button onClick={onBack} className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-md">
            목록으로
          </button>
        </div>
      </div>
    );
  }

  const isLowCapital = data.contactType === 'LOW_CAPITAL';

  // getStoreInfo를 wishCount로 정렬하여 1순위, 2순위, 3순위 생성
  const sortedStores = isLowCapital
    ? [...(data.getStoreInfo || [])].sort((a, b) => a.wishCount - b.wishCount).slice(0, 3)
    : [];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">문의 상세</h3>
          <button onClick={onBack} className="text-gray-600 hover:text-gray-800">
            ← 목록으로
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* 문의자 정보 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">문의자 정보</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
              <div className="text-sm text-gray-900">{data.userName || '-'}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">연령</label>
              <div className="text-sm text-gray-900">{data.age || '-'}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">성별</label>
              <div className="text-sm text-gray-900">
                {data.gender === 'MALE' ? '남' : data.gender === 'FEMALE' ? '여' : '-'}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">연락처</label>
              <div className="text-sm text-gray-900">{data.phone || '-'}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
              <div className="text-sm text-gray-900">{data.email || '-'}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">투자 가능 비용</label>
              <div className="text-sm text-gray-900">{data.investment || '-'}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                빨래방 이용 경험
              </label>
              <div className="text-sm text-gray-900">{data.hasExperience ? '있음' : '없음'}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">건물 소유/임대</label>
              <div className="text-sm text-gray-900">{data.buildingType ? '소유' : '임대'}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">알게된 경로</label>
              <div className="text-sm text-gray-900">{data.knowPath || '-'}</div>
            </div>
          </div>
        </div>

        {/* 지역 선호도 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">
            {isLowCapital ? '매장 선호도' : '지역 정보'}
          </h4>
          {isLowCapital ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">1지망</label>
                <div className="text-sm text-gray-900 bg-gray-100 p-3 rounded-md">
                  {sortedStores[0]?.storeName || '미선택'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">2지망</label>
                <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
                  {sortedStores[1]?.storeName || '미선택'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">3지망</label>
                <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
                  {sortedStores[2]?.storeName || '미선택'}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">지역</label>
                <div className="text-sm text-gray-900 bg-gray-100 p-3 rounded-md">
                  {data.generalContact?.region || '-'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">상세 지역</label>
                <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
                  {data.generalContact?.detailRegion || '-'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">오픈 시기</label>
                <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
                  {data.generalContact?.openingTime || '-'}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 기타 문의사항 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">기타 문의사항</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">문의 내용</label>
              <div className="text-sm text-gray-900 bg-gray-50 p-4 rounded-lg min-h-[100px] whitespace-pre-wrap">
                {data.etc || '문의 내용이 없습니다.'}
              </div>
            </div>
          </div>
        </div>

        {/* 상태 관리 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">상태 관리</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">처리 상태</label>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleStatusChange('UNCHECKED')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    status === 'UNCHECKED'
                      ? 'bg-red-100 text-red-800 border-2 border-red-300'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  미확인
                </button>
                <button
                  onClick={() => handleStatusChange('COMPLETE')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    status === 'COMPLETE'
                      ? 'bg-green-100 text-green-800 border-2 border-green-300'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  완료
                </button>
                <button
                  onClick={() => handleStatusChange('DELETED')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    status === 'DELETED'
                      ? 'bg-gray-100 text-gray-800 border-2 border-gray-300'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
            onClick={onBack}
            disabled={updateStatusMutation.isPending}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            취소
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving || updateStatusMutation.isPending}
            className="px-6 py-2 bg-brand-blue hover:bg-brand-dark text-white rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving || updateStatusMutation.isPending ? '저장 중...' : '저장'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InquiryDetail;
