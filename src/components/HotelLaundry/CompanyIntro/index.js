import React from 'react';
import CompanyOverview from './CompanyOverview';
import BusinessModel from './BusinessModel';
import CoreValues from './CoreValues';
import Vision from './Vision';

const CompanyIntro = ({ onPageChange }) => {
  return (
    <div className="company-intro">
      <CompanyOverview onPageChange={onPageChange} />
      <BusinessModel />
      <CoreValues />
      <Vision />
    </div>
  );
};

export default CompanyIntro;
