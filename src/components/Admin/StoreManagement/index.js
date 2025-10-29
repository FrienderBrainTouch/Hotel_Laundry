import React, { useState } from 'react';
import StoreList from './StoreList';
import StoreForm from './StoreForm';
import { useCreateStore, useUpdateStore } from '../../../hooks/queries/useStores';

const StoreManagement = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [selectedStore, setSelectedStore] = useState(null);

  // API 훅들
  const createStoreMutation = useCreateStore();
  const updateStoreMutation = useUpdateStore(selectedStore?.id);

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

  const handleSaveStore = async (formData) => {
    try {
      console.log('🚀 Starting store save process...', {
        isEdit: !!selectedStore,
        storeId: selectedStore?.id,
        formData: formData,
      });

      if (selectedStore) {
        // 수정
        console.log('📝 Updating store...');
        await updateStoreMutation.mutateAsync(formData);
        console.log('✅ Store updated successfully');
      } else {
        // 등록
        console.log('➕ Creating new store...');
        await createStoreMutation.mutateAsync(formData);
        console.log('✅ Store created successfully');
      }

      // 성공 시 목록으로 돌아가기
      handleBackToList();
    } catch (error) {
      console.error('❌ Store save failed:', error);
      // 에러 처리 (토스트 메시지 등)
      alert('저장 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
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
        <div className="relative">
          {(createStoreMutation.isPending || updateStoreMutation.isPending) && (
            <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue mx-auto mb-2"></div>
                <p className="text-gray-600">{selectedStore ? '수정 중...' : '등록 중...'}</p>
              </div>
            </div>
          )}
          <StoreForm store={selectedStore} onBack={handleBackToList} onSave={handleSaveStore} />
        </div>
      )}
    </div>
  );
};

export default StoreManagement;
