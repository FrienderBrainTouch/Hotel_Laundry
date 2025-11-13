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
    console.log('🔧 formInitial useMemo 실행:', {
      selectedStore: selectedStore?.id,
      hasDetailData: !!detailQuery?.data,
      detailQuery: detailQuery?.data
    });
    
    if (!selectedStore || !detailQuery?.data) {
      console.log('⚠️ selectedStore 또는 detailQuery.data 없음, selectedStore 반환');
      return selectedStore; // 신규 등록 또는 로딩 중
    }
    const d = detailQuery.data;

    // 이미지 키를 절대 URL로 변환(미리보기 용) - 변경된 DTO(images: [{imageId, key}]) 대응
    const imageBase = process.env.REACT_APP_IMAGE_BASE_URL || '';
    const buildImageUrl = (base, key) => {
      if (!key) {
        console.warn('⚠️ buildImageUrl: key가 없습니다');
        return '';
      }
      
      // 이미 절대 URL인 경우
      if (/^https?:\/\//i.test(key)) {
        console.log('✅ buildImageUrl: 이미 절대 URL -', key);
        return key;
      }
      
      if (!base) {
        console.error('❌ buildImageUrl: REACT_APP_IMAGE_BASE_URL이 설정되지 않았습니다');
        return '';
      }
      
      // base + key 형식으로 변환
      const url = `${base}${key}`;
      
      console.log('🔗 buildImageUrl:', { base, key, result: url });
      return url;
    };

    // storeImages 처리 (메인 + 갤러리)
    // raw 객체 안에 실제 데이터가 있을 수 있으므로 raw를 먼저 체크
    const rawImages = d?.raw?.storeImages || d?.storeImages || d?.raw?.images || d?.images || [];
    console.log('🖼️ storeImages 파싱:', { rawImages });
    const existingImages = Array.isArray(rawImages)
      ? rawImages
          .map((img) => {
            if (!img) return null;
            const key = typeof img === 'string' ? img : img.key;
            const id = typeof img === 'string' ? undefined : img.imageId;
            if (!key) return null;
            const url = buildImageUrl(imageBase, key);
            return { id, url };
          })
          .filter(Boolean)
      : [];
    const imageUrls = existingImages.map((x) => x.url);

    // businessImages 처리 (상권 분석 이미지)
    // raw 객체 안에 실제 데이터가 있을 수 있으므로 raw를 먼저 체크
    const rawBusinessImages = d?.raw?.businessImages || d?.businessImages || [];
    console.log('📊 businessImages 파싱:', { rawBusinessImages });
    const existingBusinessImages = Array.isArray(rawBusinessImages)
      ? rawBusinessImages
          .map((img) => {
            if (!img) return null;
            const key = typeof img === 'string' ? img : img.key;
            const id = typeof img === 'string' ? undefined : img.imageId;
            if (!key) return null;
            const url = buildImageUrl(imageBase, key);
            return { id, url };
          })
          .filter(Boolean)
      : [];
    const businessImageUrls = existingBusinessImages.map((x) => x.url);

    console.log('📦 formInitial 생성:', {
      storeId: selectedStore?.id,
      imageBase,
      rawStoreImages: d?.storeImages,
      existingImages,
      imageUrls,
      rawBusinessImages: d?.businessImages,
      existingBusinessImages,
      businessImageUrls,
      fullData: d,
    });

    return {
      id: selectedStore.id, // 수정 모드 식별용
      address: { 
        address: d.raw?.address?.address || d.address?.address || d.address || '', 
        detailAddress: d.raw?.address?.detailAddress || d.address?.detailAddress || d.detailAddress || '' 
      },
      storeBasicInfo: {
        targetRecruits: d.raw?.basicInfo?.targetRecruits ?? d.basicInfo?.targetRecruits ?? d.targetRecruits ?? '',
        currentRecruits: d.raw?.basicInfo?.currentRecruits ?? d.basicInfo?.currentRecruits ?? d.currentRecruits ?? '',
        storeName: d.raw?.basicInfo?.storeName ?? d.basicInfo?.storeName ?? d.storeName ?? '',
        status: d.raw?.basicInfo?.status ?? d.basicInfo?.status ?? d.status ?? 'WAITING',
        targetOpeningDate: d.raw?.basicInfo?.targetOpeningDate ?? d.basicInfo?.targetOpeningDate ?? d.targetOpeningDate ?? '',
        areaSqm: d.raw?.basicInfo?.areaSqm ?? d.basicInfo?.areaSqm ?? d.areaSqm ?? '',
      },
      storeDetails: {
        detailsRent: d.raw?.details?.detailsRent ?? d.details?.detailsRent ?? d.detailsRent ?? '',
        detailsDeposit: d.raw?.details?.detailsDeposit ?? d.details?.detailsDeposit ?? d.detailsDeposit ?? '',
      },
      storeDescription: {
        locationAnalysis: d.raw?.description?.locationAnalysis ?? d.description?.locationAnalysis ?? d.locationAnalysis ?? '',
      },
      images: imageUrls,
      existingImages, // [{ id, url }] - storeImages
      locationAnalysisImages: businessImageUrls,
      existingBusinessImages, // [{ id, url }] - businessImages
    };
  }, [selectedStore, detailQuery?.data]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">창업 매장 관리</h2>
          <p className="text-gray-600">창업 예정 매장 정보를 등록, 수정, 삭제할 수 있습니다.</p>
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
