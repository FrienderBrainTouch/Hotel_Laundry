import React, { useState } from 'react';

const InquiryDetail = ({ inquiry, onBack }) => {
  const [status, setStatus] = useState(inquiry.status);
  const [notes, setNotes] = useState('');

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handleSave = () => {
    console.log('Status updated:', status);
    console.log('Notes:', notes);
    onBack();
  };

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
              <div className="text-sm text-gray-900">{inquiry.name}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">연령</label>
              <div className="text-sm text-gray-900">{inquiry.age}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">성별</label>
              <div className="text-sm text-gray-900">{inquiry.gender === 'male' ? '남' : '여'}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">연락처</label>
              <div className="text-sm text-gray-900">
                010-{inquiry.phone2}-{inquiry.phone3}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
              <div className="text-sm text-gray-900">
                {inquiry.emailId}@{inquiry.emailDomain}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">투자 가능 비용</label>
              <div className="text-sm text-gray-900">{inquiry.investmentRange}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                빨래방 이용 경험
              </label>
              <div className="text-sm text-gray-900">
                {inquiry.laundryExperience ? '예' : '아니오'}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">건물 소유/임대</label>
              <div className="text-sm text-gray-900">{inquiry.buildingOwnership}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">알게된 경로</label>
              <div className="text-sm text-gray-900">{inquiry.foundThrough}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">등록일</label>
              <div className="text-sm text-gray-900">{inquiry.createdAt}</div>
            </div>
          </div>
        </div>

        {/* 지역 선호도 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">지역 선호도</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">1지망</label>
              <div className="text-sm text-gray-900 bg-gray-100 p-3 rounded-md">
                {inquiry.firstChoice}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">2지망</label>
              <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
                {inquiry.secondChoice || '미선택'}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">3지망</label>
              <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
                {inquiry.thirdChoice || '미선택'}
              </div>
            </div>
          </div>
        </div>

        {/* 기타 문의사항 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">기타 문의사항</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">문의 내용</label>
              <div className="text-sm text-gray-900 bg-gray-50 p-4 rounded-lg min-h-[100px]">
                {inquiry.message || '문의 내용이 없습니다.'}
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
                  onClick={() => handleStatusChange('미확인')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    status === '미확인'
                      ? 'bg-red-100 text-red-800 border-2 border-red-300'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  미확인
                </button>
                <button
                  onClick={() => handleStatusChange('처리중')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    status === '처리중'
                      ? 'bg-yellow-100 text-yellow-800 border-2 border-yellow-300'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  처리중
                </button>
                <button
                  onClick={() => handleStatusChange('완료')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    status === '완료'
                      ? 'bg-green-100 text-green-800 border-2 border-green-300'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  완료
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">처리 메모</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="처리 내용이나 답변을 기록하세요"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
            onClick={onBack}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            취소
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-brand-blue hover:bg-brand-dark text-white rounded-md font-medium transition-colors"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default InquiryDetail;
