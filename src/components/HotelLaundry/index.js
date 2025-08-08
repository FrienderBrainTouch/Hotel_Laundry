import React from 'react';
import CompanyIntro from './CompanyIntro';
import History from './History';

const HotelLaundry = ({ onPageChange, currentPage }) => {
  return (
    <div className="hotel-laundry">
      {currentPage === 'company-intro' && <CompanyIntro onPageChange={onPageChange} />}
      {currentPage === 'history' && <History onPageChange={onPageChange} />}
    </div>
  );
};

export default HotelLaundry; 