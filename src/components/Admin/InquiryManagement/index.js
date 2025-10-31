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
    search: '',
  });

  // URL에서 문의 ID가 있으면 해당 문의를 로드
  useEffect(() => {
    if (id) {
      // contactId를 포함한 최소한의 객체만 설정
      setSelectedInquiry({ contactId: parseInt(id) });
    } else {
      setSelectedInquiry(null);
    }
  }, [id]);

  const handleViewInquiry = (inquiry) => {
    navigate(`/admin/inquiries/${inquiry.contactId}`);
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
