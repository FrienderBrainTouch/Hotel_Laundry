import React, { useState } from 'react';
import InquiryList from './InquiryList';
import InquiryDetail from './InquiryDetail';

const InquiryManagement = () => {
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    store: '',
    dateRange: '',
    search: '',
  });

  const handleViewInquiry = (inquiry) => {
    setSelectedInquiry(inquiry);
  };

  const handleBackToList = () => {
    setSelectedInquiry(null);
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
