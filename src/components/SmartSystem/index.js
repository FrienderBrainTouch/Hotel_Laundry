import React from 'react';
import IoTOverview from './IoTOverview';
import SmartStoreOperation from './SmartStoreOperation';
import AutomationSolutions from './AutomationSolutions';
import SmartRevenue from './SmartRevenue';

const SmartSystem = () => {
  return (
    <div>
      <IoTOverview />
      <SmartStoreOperation />
      <AutomationSolutions />
      <SmartRevenue />
    </div>
  );
};

export default SmartSystem; 