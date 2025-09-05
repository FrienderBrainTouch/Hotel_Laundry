import React from 'react';
import CompanyOverview from './CompanyOverview';
import BusinessModel from './BusinessModel';
import CoreValues from './CoreValues';
import Vision from './Vision';

const CompanyIntro = () => {
  return (
    <div className="company-intro">
      <CompanyOverview />
      <BusinessModel />
      <CoreValues />
      <Vision />
    </div>
  );
};

export default CompanyIntro;
