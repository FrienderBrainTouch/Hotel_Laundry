import React, { useEffect, useState } from 'react';
import ImageUpload from '../StoreManagement/ImageUpload';

const OperatingStoreForm = ({ store, onBack, onSave }) => {
  const [formData, setFormData] = useState({
    storeName: store?.storeName || '',
    address: store?.address?.address || '',
    detailAddress: store?.address?.detailAddress || '',
    region: store?.region || '',
    phone: store?.phone || '',
    areaSqm: store?.areaSqm || '',
    status: store?.status || 'OPERATING',
    serialNumber: store?.serialNumber || '',
  });

  const [images, setImages] = useState(() => {
    // 편집 모드로 넘어온 기존 이미지가 배열로 제공되는 경우 처리
    const incoming = Array.isArray(store?.images) ? store.images : [];
    const mainFromIncoming = incoming.length > 0 ? incoming[0] : null;
    const galleryFromIncoming = incoming.length > 1 ? incoming.slice(1) : [];
    
    return {
      main: store?.mainImage ?? mainFromIncoming,
      gallery: store?.galleryImages ?? galleryFromIncoming,
    };
  });

  console.log('🔍 OperatingStoreForm render - images state:', {
    main: images.main,
    gallery: images.gallery,
    mainType: typeof images.main,
    galleryLength: images.gallery?.length,
    storeExistingImages: store?.existingImages,
  });

  // 새로 업로드된 파일들을 별도로 관리
  const [newFiles, setNewFiles] = useState({
    main: null,
    gallery: [],
  });

  // 상세 데이터 도착 시 폼/이미지 상태 동기화
  useEffect(() => {
    if (!store) return;
    setFormData({
      storeName: store?.storeName || '',
      address: store?.address?.address || '',
      detailAddress: store?.address?.detailAddress || '',
      region: store?.region || '',
      phone: store?.phone || '',
      areaSqm: store?.areaSqm || '',
      status: store?.status || 'OPERATING',
      serialNumber: store?.serialNumber || '',
    });

    // 이미지 동기화
    const incoming = Array.isArray(store?.images) ? store.images : [];
    const mainFromIncoming = incoming.length > 0 ? incoming[0] : null;
    const galleryFromIncoming = incoming.length > 1 ? incoming.slice(1) : [];
    setImages({
      main: store?.mainImage ?? mainFromIncoming,
      gallery: store?.galleryImages ?? galleryFromIncoming,
    });

    // 새 파일 캐시 초기화
    setNewFiles({ main: null, gallery: [] });
  }, [store]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 전화번호 포맷팅 (숫자만 입력)
  const handlePhoneInput = (e) => {
    const { value } = e.target;
    // 숫자와 하이픈만 허용
    const cleaned = value.replace(/[^\d-]/g, '');
    setFormData((prev) => ({
      ...prev,
      phone: cleaned,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 필수 필드 검증
    const requiredFields = [
      { key: 'storeName', label: '매장명' },
      { key: 'address', label: '주소' },
      { key: 'detailAddress', label: '상세 주소' },
      { key: 'region', label: '지역' },
      { key: 'phone', label: '전화번호' },
      { key: 'areaSqm', label: '매장 면적' },
      { key: 'status', label: '운영 상태' },
    ];

    const missingFields = requiredFields.filter(
      (field) => !formData[field.key] || String(formData[field.key]).trim() === ''
    );

    if (missingFields.length > 0) {
      const missingLabels = missingFields.map((field) => field.label).join(', ');
      alert(`다음 필수 항목을 입력해 주세요:\n${missingLabels}`);
      return;
    }

    // 메인 이미지 검증 (갤러리는 선택)
    if (!images.main) {
      alert('메인 이미지를 등록해 주세요.');
      return;
    }

    // FormData 생성
    const formDataToSend = new FormData();

    // DTO 생성 (생성/수정 모드에 따라 구조 다름)
    let dto;
    
    if (store) {
      // 수정 모드: UpdateOperatingStoreDto
      dto = {
        operatingStoreId: store.storeId || store.operatingStoreId,
        info: {
          storeName: formData.storeName,
          address: {
            address: formData.address,
            detailAddress: formData.detailAddress,
          },
          region: formData.region,
          phone: formData.phone,
          areaSqm: formData.areaSqm,
          serialNumber: formData.serialNumber ? parseInt(formData.serialNumber, 10) : null,
          status: formData.status,
        },
        existedImages: [], // 아래에서 채울 예정
      };
    } else {
      // 생성 모드: CreateOperatingStoreDto
      dto = {
        storeName: formData.storeName,
        address: {
          address: formData.address,
          detailAddress: formData.detailAddress,
        },
        region: formData.region,
        phone: formData.phone,
        areaSqm: formData.areaSqm,
        status: formData.status,
        serialNumber: formData.serialNumber ? parseInt(formData.serialNumber, 10) : null,
      };
    }

    // 수정 모드: 기존 이미지 ID 처리 (StoreForm.js와 동일한 방식)
    const filesToAppend = [];
    const seenFiles = new Set();
    const addFileUnique = (file) => {
      if (!(file instanceof File)) return;
      const key = `${file.name}:${file.size}:${file.type}`;
      if (!seenFiles.has(key)) {
        seenFiles.add(key);
        filesToAppend.push(file);
      }
    };

    // 현재 남아있는 모든 항목 (URL string 또는 File)
    const allItems = [images.main, ...(Array.isArray(images.gallery) ? images.gallery : [])].filter(
      Boolean
    );

    // 1. 현재 남아있는 URL들의 Set 생성 (빠른 조회용)
    const remainingUrlSet = new Set(
      allItems.filter((item) => typeof item === 'string' && item.trim() !== '')
    );

    // 2. 수정 모드: 원래 순서(store.existingImages)를 유지하면서, 남아있는 것만 필터링
    const existingImageIdsInOrder = Array.isArray(store?.existingImages)
      ? store.existingImages
          .filter((img) => img?.url && remainingUrlSet.has(img.url))
          .map((img) => img.id)
          .filter((id) => id != null)
      : [];

    // 수정 모드: DTO에 existedImages 추가
    if (store && dto.existedImages !== undefined) {
      dto.existedImages = existingImageIdsInOrder;
    }

    // 3. 새 파일 수집
    // 3-1. newFiles에서 실제 File 객체 수집 (생성/수정 모드 공통)
    if (newFiles?.main instanceof File) {
      addFileUnique(newFiles.main);
    }
    if (Array.isArray(newFiles?.gallery)) {
      newFiles.gallery.forEach((file) => {
        if (file instanceof File) {
          addFileUnique(file);
        }
      });
    }

    // 3-2. images에서 File 객체 수집 (드물지만 직접 File이 있을 수 있음)
    for (const item of allItems) {
      if (item instanceof File) {
        addFileUnique(item);
      }
    }

    // 파일 용량 제한 검사 (단일 30MB, 총합 500MB)
    const MAX_SINGLE = 30 * 1024 * 1024; // 30MB
    const MAX_TOTAL = 500 * 1024 * 1024; // 500MB

    const calcTotalSize = (arr) => arr.reduce((sum, f) => sum + (f?.size || 0), 0);

    const oversizeFile = filesToAppend.find((f) => f.size > MAX_SINGLE);
    if (oversizeFile) {
      alert(`이미지 파일 크기는 최대 30MB까지 가능합니다.\n문제 파일: ${oversizeFile.name}`);
      return;
    }

    const totalSize = calcTotalSize(filesToAppend);
    if (totalSize > MAX_TOTAL) {
      alert('이미지 총 용량은 최대 500MB까지 가능합니다.');
      return;
    }

    // files 첨부
    if (filesToAppend.length > 0) {
      filesToAppend.forEach((f) => formDataToSend.append('files', f));
    } else {
      // 서버가 MultipartFile 파트를 필수로 요구하므로, 빈 파일로 파트 존재를 보장
      formDataToSend.append('files', new Blob([], { type: 'application/octet-stream' }), 'empty');
    }

    // DTO 추가
    formDataToSend.append('dto', JSON.stringify(dto));

    // 디버깅: 파일 수집 상태 확인
    console.log('🔍 OperatingStore File Collection Debug:', {
      mode: store ? '수정' : '생성',
      existedImages: store ? dto.existedImages : '(생성 모드)',
      newFilesCount: filesToAppend.length,
      newFiles: filesToAppend.map((f) => ({
        name: f.name,
        type: f.type,
        size: f.size,
      })),
      dto: dto,
    });

    // 디버깅: 실제 전송 형식 확인
    try {
      const entries = [];
      formDataToSend.forEach((value, key) => {
        if (value instanceof File) {
          entries.push({
            key,
            file: {
              name: value.name,
              type: value.type,
              size: value.size,
            },
          });
        } else {
          let preview = String(value);
          // dto는 JSON 문자열이므로 파싱 가능 여부 확인
          if (key === 'dto') {
            try {
              const parsed = JSON.parse(preview);
              preview = { parsed }; // 구조 미리보기
            } catch (_) {
              // 파싱 실패 시 원문 출력
            }
          }
          entries.push({ key, value: preview });
        }
      });
      console.group('🗃️ FormData Preview (about to send)');
      console.log('Endpoint:', store ? 'PATCH /admin/operating-store' : 'POST /admin/operating-store');
      console.table(entries);
      const filesCount = entries.filter((e) => e.key === 'files' && e.file).length;
      console.log('files appended:', filesCount, filesCount === 0 ? '(empty blob로 전송)' : '');
      if (store) {
        console.log('dto.existedImages:', dto.existedImages);
        console.log('dto.operatingStoreId:', dto.operatingStoreId);
      }
      console.groupEnd();
    } catch (e) {
      console.warn('FormData preview failed:', e);
    }

    onSave(formDataToSend);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              {store ? '운영 매장 수정' : '운영 매장 등록'}
            </h3>
            <p className="text-gray-500 text-sm">* 필수 입력 항목</p>
          </div>

          <button
            type="button"
            onClick={onBack}
            className="text-gray-500 hover:text-gray-700 text-sm font-medium"
          >
            ← 목록으로
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-8">
        {/* 기본 정보 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">기본 정보</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">매장명 *</label>
              <input
                type="text"
                name="storeName"
                value={formData.storeName || ''}
                onChange={handleInputChange}
                required
                placeholder="호텔런드리 독산점"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">지역 *</label>
              <input
                type="text"
                name="region"
                value={formData.region || ''}
                onChange={handleInputChange}
                required
                placeholder="서울"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">주소 *</label>
              <input
                type="text"
                name="address"
                value={formData.address || ''}
                onChange={handleInputChange}
                required
                placeholder="서울특별시 금천구"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">상세 주소 *</label>
              <input
                type="text"
                name="detailAddress"
                value={formData.detailAddress || ''}
                onChange={handleInputChange}
                required
                placeholder="두산로3길 16 101동 1층 101호"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">전화번호 *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone || ''}
                onChange={handlePhoneInput}
                required
                placeholder="02-1234-5678"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">매장 면적 *</label>
              <input
                type="text"
                name="areaSqm"
                value={formData.areaSqm || ''}
                onChange={handleInputChange}
                required
                placeholder="약 30평 (100㎡)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">운영 상태 *</label>
              <select
                name="status"
                value={formData.status || 'OPERATING'}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="OPERATING">운영 중</option>
                <option value="WAITING">운영 대기 중</option>
                <option value="CLOSED">운영 중단</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                일련번호
                <span className="text-xs text-gray-500 ml-2">(선택 사항, 숫자만 입력)</span>
              </label>
              <input
                type="number"
                name="serialNumber"
                value={formData.serialNumber || ''}
                onChange={handleInputChange}
                placeholder="숫자만 입력"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>
        </div>

        {/* 이미지 업로드 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">이미지 업로드</h4>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                메인 이미지 *
                <span className="text-xs text-gray-500 ml-2">권장 크기: 1200x800px, 최대 30MB</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                갤러리 이미지
                <span className="text-xs text-gray-500 ml-2">
                  최대 10장, 권장 크기: 800x600px, 파일당 최대 30MB
                </span>
              </label>
            </div>
            <ImageUpload
              images={images}
              setImages={setImages}
              newFiles={newFiles}
              setNewFiles={setNewFiles}
            />
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            취소
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-brand-blue hover:bg-brand-dark text-white rounded-md font-medium transition-colors"
          >
            {store ? '수정하기' : '등록하기'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OperatingStoreForm;

