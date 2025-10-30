import React, { useMemo, useState } from 'react';
import StoreList from './StoreList';
import StoreForm from './StoreForm';
import { useCreateStore, useUpdateStore, useStoreDetail } from '../../../hooks/queries/useStores';

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
      alert('저장 중 오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  // 편집 모드일 때 상세 데이터를 불러와 폼 초기값으로 변환
  const detailQuery = useStoreDetail(selectedStore?.id || null);
  const formInitial = useMemo(() => {
    if (!selectedStore || !detailQuery?.data) return selectedStore; // 신규 등록 또는 로딩 중
    const d = detailQuery.data;

    // 이미지 키를 절대 URL로 변환(미리보기 용)
    const imageBase = process.env.REACT_APP_IMAGE_BASE_URL || '';
    const imageUrls = Array.isArray(d.images)
      ? d.images.map((key) => (key ? `${imageBase}${key}` : key)).filter(Boolean)
      : [];

    return {
      address: { address: d.address || '', detailAddress: d.detailAddress || '' },
      storeBasicInfo: {
        areaSqm: d.areaSqm ?? '',
        targetRecruits: d.targetRecruits ?? '',
        areaType: d.areaType || '',
        storeName: d.storeName || '',
        operatingHours: d.operatingHours || '',
        washingMachines: d.washingMachines ?? '',
        status: d.status || 'WAITING',
        targetOpeningDate: d.targetOpeningDate || '',
        dryers: d.dryers ?? '',
      },
      storeDetails: {
        detailsLocation: d.detailsLocation || '',
        detailsInterior: d.detailsInterior || '',
        detailsFloor: d.detailsFloor || '',
        detailsRent: d.detailsRent || '',
        detailsDeposit: d.detailsDeposit || '',
        detailsStartupCost: d.detailsStartupCost || '',
        detailsParking: d.detailsParking || '',
        detailsSize: d.detailsSize || '',
      },
      storeDescription: {
        householdCountInRadius: d.householdCountInRadius || '',
        populationByAgeGroup: d.populationByAgeGroup || '',
        competitorStores: d.competitorStores || '',
        locationAnalysis: d.locationAnalysis || '',
      },
      images: imageUrls,
    };
  }, [selectedStore, detailQuery?.data]);

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
          <StoreForm store={formInitial} onBack={handleBackToList} onSave={handleSaveStore} />
        </div>
      )}
    </div>
  );
};

export default StoreManagement;
