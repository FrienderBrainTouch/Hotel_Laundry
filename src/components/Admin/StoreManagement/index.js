import React, { useState } from 'react';
import StoreList from './StoreList';
import StoreForm from './StoreForm';

const StoreManagement = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [selectedStore, setSelectedStore] = useState(null);

  const handleEditStore = (store) => {
    setSelectedStore(store);
    setActiveTab('form');
  };

  const handleAddStore = () => {
    setSelectedStore(null);
    setActiveTab('form');
  };

  const handleBackToList = () => {
    setActiveTab('list');
    setSelectedStore(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">매장 관리</h2>
          <p className="text-gray-600">매장 정보를 등록, 수정, 삭제할 수 있습니다.</p>
        </div>
        {activeTab === 'list' && (
          <button
            onClick={handleAddStore}
            className="bg-brand-blue hover:bg-brand-dark text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            + 새 매장 등록
          </button>
        )}
      </div>

      {activeTab === 'list' ? (
        <StoreList onEditStore={handleEditStore} />
      ) : (
        <StoreForm store={selectedStore} onBack={handleBackToList} onSave={handleBackToList} />
      )}
    </div>
  );
};

export default StoreManagement;
