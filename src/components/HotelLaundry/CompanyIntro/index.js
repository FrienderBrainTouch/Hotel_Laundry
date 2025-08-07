import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

const CompanyIntro = ({ onPageChange }) => {
  return (
    <div className="company-intro">
      <Section1 onPageChange={onPageChange} />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default CompanyIntro;
