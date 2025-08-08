// src/components/StoreInfo/pages/StoreList.js
import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const StoreList = ({ onPageChange }) => {

    return (
      <div className="font-pretendard">
        <Section1 onPageChange={onPageChange} />
        <Section2 />
        <Section3 />
      </div>
    );
  };
  export default StoreList;