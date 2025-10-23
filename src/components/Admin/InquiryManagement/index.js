import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InquiryList from './InquiryList';
import InquiryDetail from './InquiryDetail';

const InquiryManagement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [filters, setFilters] = useState({
    region: '',
    status: '',
    storeStatus: '',
    search: '',
  });

  // URL에서 문의 ID가 있으면 해당 문의를 로드
  useEffect(() => {
    if (id) {
      // 실제로는 API에서 문의 데이터를 가져와야 함
      // 임시로 하드코딩된 데이터 사용
      const inquiryData = {
        id: parseInt(id),
        name: '김창업',
        age: '30대',
        gender: 'male',
        phone2: '1234',
        phone3: '5678',
        emailId: 'kim',
        emailDomain: 'example.com',
        investmentRange: '5천~3천만원',
        laundryExperience: true,
        buildingOwnership: '건물임대',
        foundThrough: '인터넷 검색',
        firstChoice: '서울시 강남구',
        secondChoice: '서울시 서초구',
        thirdChoice: '서울시 송파구',
        message: '강남구 세탁소 창업에 대해 문의드립니다. 초기 비용과 수익성에 대해 알고 싶습니다.',
        status: '미확인',
        createdAt: '2024-01-15 14:30',
        priority: 'high',
        storeId: 1,
        storeName: '강남구 세탁소',
        storeStatus: 'active',
      };
      setSelectedInquiry(inquiryData);
    } else {
      setSelectedInquiry(null);
    }
  }, [id]);

  const handleViewInquiry = (inquiry) => {
    navigate(`/admin/inquiries/${inquiry.id}`);
  };

  const handleBackToList = () => {
    navigate('/admin/inquiries');
  };

  return (
    <div className="space-y-6">
      {selectedInquiry ? (
        <InquiryDetail inquiry={selectedInquiry} onBack={handleBackToList} />
      ) : (
        <>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">문의 관리</h2>
            <p className="text-gray-600">고객 문의를 확인하고 관리할 수 있습니다.</p>
          </div>
          <InquiryList
            onViewInquiry={handleViewInquiry}
            filters={filters}
            setFilters={setFilters}
          />
        </>
      )}
    </div>
  );
};

export default InquiryManagement;
