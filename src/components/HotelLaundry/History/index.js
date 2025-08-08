import React from 'react';
import Foundation from './Foundation';
import Milestones from './Milestones';

const History = ({ onPageChange }) => {
  return (
    <div className="history">
      <Foundation onPageChange={onPageChange} />
      <Milestones />
    </div>
  );
};

export default History;
