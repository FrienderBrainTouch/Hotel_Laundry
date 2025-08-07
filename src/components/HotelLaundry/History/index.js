import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';

const History = ({ onPageChange }) => {
  return (
    <div className="history">
      <Section1 onPageChange={onPageChange} />
      <Section2 />
    </div>
  );
};

export default History;
