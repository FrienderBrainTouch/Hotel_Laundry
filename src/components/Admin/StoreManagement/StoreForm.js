import React, { useEffect, useState } from 'react';
import ImageUpload from './ImageUpload';
// 중복 import 제거
import {
  statusOptions,
  // targetRecruitsOptions,
  // interiorOptions,
  // floorOptions,
  // sizeOptions,
  // washingMachineOptions,
  // dryerOptions,
  // operatingHoursOptions,
  // areaTypeOptions,
} from './constants';

// ----- helpers (module scope: stable across renders) -----
// '미정' 처리 통일: 0 | '0' | 'undecided' (대소문자 구분 없음) -> 'undecided'
const isUndecidedValue = (value) => {
  if (value === 0 || value === '0') return true;
  if (typeof value === 'string' && value.trim().toLowerCase() === 'undecided') return true;
  return false;
};

// const normalizeSelect = (value) => {
//   if (isUndecidedValue(value)) return 'undecided';
//   return value ?? '';
// };

const toNumberOrZero = (value) => {
  if (isUndecidedValue(value)) return 0;
  const n = parseInt(value, 10);
  return Number.isNaN(n) ? 0 : n;
};

const StoreForm = ({ store, onBack, onSave }) => {
  const [formData, setFormData] = useState({
    // address
    address: store?.address?.address || '',
    detailAddress: store?.address?.detailAddress || '',

    // storeBasicInfo
    storeName: store?.storeBasicInfo?.storeName || '',
    status: store?.storeBasicInfo?.status || 'WAITING',
    targetRecruits: store?.storeBasicInfo?.targetRecruits || '',
    currentRecruits: store?.storeBasicInfo?.currentRecruits || '',
    targetOpeningDate: store?.storeBasicInfo?.targetOpeningDate || '',
    areaSqm: store?.storeBasicInfo?.areaSqm || '',

    // storeDetails - 월세, 권리금만 유지
    detailsRent: store?.storeDetails?.detailsRent || '',
    detailsDeposit: store?.storeDetails?.detailsDeposit || '',

    // 상권 정보 - 하나의 textarea로 통합
    locationAnalysis: store?.storeDescription?.locationAnalysis || '',
  });

  const [images, setImages] = useState(() => {
    // 편집 모드로 넘어온 기존 이미지가 배열로 제공되는 경우 처리
    const incoming = Array.isArray(store?.images) ? store.images : [];
    const mainFromIncoming = incoming.length > 0 ? incoming[0] : null; // 첫 이미지를 메인으로 가정
    const galleryFromIncoming = incoming.length > 1 ? incoming.slice(1) : [];
    return {
      main: store?.mainImage ?? mainFromIncoming,
      gallery: store?.galleryImages ?? galleryFromIncoming,
    };
  });

  // 상권 분석 이미지 (여러 개)
  const [locationAnalysisImages, setLocationAnalysisImages] = useState(
    store?.locationAnalysisImages || []
  );

  // 새로 업로드된 파일들을 별도로 관리
  const [newFiles, setNewFiles] = useState({
    main: null,
    gallery: [],
  });

  // 상권 분석 이미지 새 파일들
  const [newLocationAnalysisFiles, setNewLocationAnalysisFiles] = useState([]);

  // 상세 데이터 도착 시 폼/이미지 상태 동기화
  useEffect(() => {
    if (!store) return;
    setFormData({
      // address
      address: store?.address?.address || '',
      detailAddress: store?.address?.detailAddress || '',

      // storeBasicInfo
      storeName: store?.storeBasicInfo?.storeName || '',
      status: store?.storeBasicInfo?.status || 'WAITING',
      targetRecruits: store?.storeBasicInfo?.targetRecruits || '',
      currentRecruits: store?.storeBasicInfo?.currentRecruits || '',
      targetOpeningDate: store?.storeBasicInfo?.targetOpeningDate || '',
      areaSqm: store?.storeBasicInfo?.areaSqm || '',

      // storeDetails - 월세, 권리금만 유지
      detailsRent: store?.storeDetails?.detailsRent || '',
      detailsDeposit: store?.storeDetails?.detailsDeposit || '',

      // 상권 정보 - 하나의 textarea로 통합
      locationAnalysis: store?.storeDescription?.locationAnalysis || '',
    });

    // 이미지 동기화 (URL 또는 File)
    const incoming = Array.isArray(store?.images) ? store.images : [];
    const mainFromIncoming = incoming.length > 0 ? incoming[0] : null;
    const galleryFromIncoming = incoming.length > 1 ? incoming.slice(1) : [];
    setImages({
      main: store?.mainImage ?? mainFromIncoming,
      gallery: store?.galleryImages ?? galleryFromIncoming,
    });

    // 상권 분석 이미지 동기화
    console.log('🔄 상권 분석 이미지 동기화:', store?.locationAnalysisImages);
    setLocationAnalysisImages(store?.locationAnalysisImages || []);

    // 새 파일 캐시 초기화
    setNewFiles({ main: null, gallery: [] });
    setNewLocationAnalysisFiles([]);
  }, [store]);

  console.log('🔍 StoreForm render - images state:', {
    main: images.main,
    gallery: images.gallery,
    mainType: typeof images.main,
    galleryLength: images.gallery?.length,
    locationAnalysisImages: locationAnalysisImages,
    locationAnalysisImagesLength: locationAnalysisImages?.length,
    storeLocationAnalysisImages: store?.locationAnalysisImages,
  });

  // 기존 URL->File 선변환 로직 제거 (서버가 existingImageIdsInOrder를 받음)
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // 상권 분석 이미지 업로드 핸들러 (여러 개)
  const handleLocationAnalysisImagesChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    // 최대 10개 제한
    const currentCount = locationAnalysisImages.length;
    const remainingSlots = 10 - currentCount;
    
    if (files.length > remainingSlots) {
      alert(`상권 분석 이미지는 최대 10개까지 업로드 가능합니다.\n현재 ${currentCount}개, ${remainingSlots}개 더 추가 가능합니다.`);
      return;
    }

    // 이미지 파일 타입 체크
    const invalidFiles = files.filter(file => !file.type.startsWith('image/'));
    if (invalidFiles.length > 0) {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }

    // 파일 크기 제한 (30MB)
    const MAX_SIZE = 30 * 1024 * 1024;
    const oversizeFiles = files.filter(file => file.size > MAX_SIZE);
    if (oversizeFiles.length > 0) {
      alert(`이미지 파일 크기는 최대 30MB까지 가능합니다.\n문제 파일: ${oversizeFiles[0].name}`);
      return;
    }

    // 미리보기 URL 생성 및 상태 업데이트
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setLocationAnalysisImages(prev => [...prev, ...newPreviews]);
    setNewLocationAnalysisFiles(prev => [...prev, ...files]);
  };

  // 상권 분석 이미지 개별 삭제 핸들러
  const handleLocationAnalysisImageRemove = (index) => {
    const imageToRemove = locationAnalysisImages[index];
    
    // blob URL이면 메모리 해제
    if (typeof imageToRemove === 'string' && imageToRemove.startsWith('blob:')) {
      URL.revokeObjectURL(imageToRemove);
      // blob URL인 경우 새 파일 배열에서도 제거
      const blobIndex = locationAnalysisImages.slice(0, index).filter(img => 
        typeof img === 'string' && img.startsWith('blob:')
      ).length;
      setNewLocationAnalysisFiles(prev => prev.filter((_, i) => i !== blobIndex));
    }

    // 이미지 배열에서 제거
    setLocationAnalysisImages(prev => prev.filter((_, i) => i !== index));
  };

  // 숫자만 입력 가능하도록 처리
  const handleNumberInput = (e) => {
    const { name, value } = e.target;
    // 숫자만 허용 (빈 문자열도 허용)
    if (value === '' || /^\d+$/.test(value)) {
      setFormData((prev) => {
        const newData = { ...prev, [name]: value };

        // 현재 모집 인원이 목표 모집 인원보다 클 수 없음
        if (name === 'currentRecruits' && value !== '') {
          const targetValue = parseInt(prev.targetRecruits || '0', 10);
          const currentValue = parseInt(value, 10);
          if (targetValue > 0 && currentValue > targetValue) {
            // 목표보다 크면 목표 값으로 제한
            newData.currentRecruits = targetValue.toString();
          }
        }

        // 목표 모집 인원이 변경되면 현재 모집 인원도 조정
        if (name === 'targetRecruits' && value !== '') {
          const targetValue = parseInt(value, 10);
          const currentValue = parseInt(prev.currentRecruits || '0', 10);
          if (currentValue > targetValue) {
            // 현재가 목표보다 크면 목표 값으로 조정
            newData.currentRecruits = targetValue.toString();
          }
        }

        return newData;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 필수 필드 검증
    const requiredFields = [
      { key: 'address', label: '매장 위치' },
      { key: 'detailAddress', label: '상세 주소' },
      { key: 'storeName', label: '매장명' },
      { key: 'status', label: '상태' },
      { key: 'targetRecruits', label: '목표 모집 인원' },
      { key: 'currentRecruits', label: '현재 모집 인원' },
      { key: 'targetOpeningDate', label: '목표 오픈 시기' },
      { key: 'areaSqm', label: '매장 면적' },
      { key: 'detailsRent', label: '월세 정보' },
      { key: 'detailsDeposit', label: '권리금' },
      { key: 'locationAnalysis', label: '상권 정보' },
    ];

    const missingFields = requiredFields.filter(
      (field) => !formData[field.key] || String(formData[field.key]).trim() === ''
    );

    // 메인 이미지 검증 (갤러리는 선택)
    if (!images.main) {
      alert('메인 이미지를 등록해 주세요.');
      return;
    }

    // 상권 분석 이미지 검증 (필수 - 최소 1개)
    if (!locationAnalysisImages || locationAnalysisImages.length === 0) {
      alert('상권 분석 이미지를 최소 1개 이상 등록해 주세요.');
      return;
    }

    if (missingFields.length > 0) {
      const missingLabels = missingFields.map((field) => field.label).join(', ');
      alert(`다음 필수 항목을 입력해 주세요:\n${missingLabels}`);
      return;
    }

    // FormData 생성 - 스웨거 방식
    const formDataToSend = new FormData();

    // 기본 정보 DTO
    const infoDto = {
      address: {
        address: formData.address,
        detailAddress: formData.detailAddress,
      },
      storeBasicInfo: {
        storeName: formData.storeName,
        status: formData.status,
        currentRecruits: toNumberOrZero(formData.currentRecruits),
        targetRecruits: toNumberOrZero(formData.targetRecruits),
        targetOpeningDate: formData.targetOpeningDate,
        areaSqm: formData.areaSqm,
      },
      storeDetails: {
        detailsRent: formData.detailsRent,
        detailsDeposit: formData.detailsDeposit,
      },
      storeDescription: {
        locationAnalysis: formData.locationAnalysis,
      },
    };

    // 이미지 메타데이터 DTO들
    const imagesDto = {
      existingImageIdsInOrder: [],
    };
    const businessImagesDto = {
      existingBusinessImageIdsInOrder: [],
    };

    // 수정 모드: 남아있는 기존 이미지의 id 추출 + 새 파일 수집
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

    // 2. 원래 순서(store.existingImages)를 유지하면서, 남아있는 것만 필터링
    const existingImageIdsInOrder = Array.isArray(store?.existingImages)
      ? store.existingImages
          .filter((img) => img?.url && remainingUrlSet.has(img.url))
          .map((img) => img.id)
          .filter((id) => id != null)
      : [];

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
    // 상권 분석 이미지는 별도 파트로 전송하므로 filesToAppend에 포함하지 않음
    const MAX_SINGLE = 30 * 1024 * 1024; // 30MB
    const MAX_TOTAL = 500 * 1024 * 1024; // 500MB

    const calcTotalSize = (arr) => arr.reduce((sum, f) => sum + (f?.size || 0), 0);

    const oversizeFile = filesToAppend.find((f) => f.size > MAX_SINGLE);
    if (oversizeFile) {
      alert(`이미지 파일 크기는 최대 30MB까지 가능합니다.\n문제 파일: ${oversizeFile.name}`);
      return;
    }

    // 상권 분석 이미지 용량 체크
    const oversizeLocationFile = newLocationAnalysisFiles.find((f) => f.size > MAX_SINGLE);
    if (oversizeLocationFile) {
      alert(`상권 분석 이미지 파일 크기는 최대 30MB까지 가능합니다.\n파일: ${oversizeLocationFile.name}`);
      return;
    }

    const totalSize = calcTotalSize(filesToAppend) + calcTotalSize(newLocationAnalysisFiles);
    if (totalSize > MAX_TOTAL) {
      alert('이미지 총 용량은 최대 500MB까지 가능합니다.');
      return;
    }

    // DTO에 existing ids 포함 (수정 모드에서만 의미 있음)
    if (store) {
      imagesDto.existingImageIdsInOrder = existingImageIdsInOrder;
    }

    // files 첨부 (메인 + 갤러리 이미지) → storeImages
    if (filesToAppend.length > 0) {
      filesToAppend.forEach((f) => formDataToSend.append('files', f));
    } else {
      // 서버가 MultipartFile 파트를 필수로 요구하므로, 빈 파일로 파트 존재를 보장
      formDataToSend.append('files', new Blob([], { type: 'application/octet-stream' }), 'empty');
    }

    // 상권 분석 이미지 별도 첨부 → images (businessImages)
    if (newLocationAnalysisFiles.length > 0) {
      newLocationAnalysisFiles.forEach((file) => {
        if (file instanceof File) {
          formDataToSend.append('images', file);
        }
      });
    }

    // 수정 모드: 남아있는 기존 businessImages의 id 추출
    if (store && store.existingBusinessImages) {
      const remainingBusinessUrlSet = new Set(
        locationAnalysisImages.filter((item) => typeof item === 'string' && !item.startsWith('blob:'))
      );
      
      const existingBusinessImageIds = store.existingBusinessImages
        .filter((img) => img?.url && remainingBusinessUrlSet.has(img.url))
        .map((img) => img.id)
        .filter((id) => id != null);
      
      if (existingBusinessImageIds.length > 0) {
        businessImagesDto.existingBusinessImageIdsInOrder = existingBusinessImageIds;
      }
    }

    // dto 추가 - 생성과 수정 모드에 따라 다른 구조 사용
    let finalDto;
    if (store) {
      // 수정 모드: dto 안에 infoDto, imagesDto, businessImagesDto로 감싸기
      finalDto = {
        infoDto: infoDto,
        imagesDto: imagesDto,
        businessImagesDto: businessImagesDto,
      };
    } else {
      // 생성 모드: infoDto를 그대로 사용
      finalDto = infoDto;
    }
    
    formDataToSend.append('dto', JSON.stringify(finalDto));

    // 디버깅: 파일 수집 상태 확인
    console.log('🔍 File Collection Debug:', {
      mode: store ? '수정' : '생성',
      dtoStructure: store ? 'Wrapped (infoDto, imagesDto, businessImagesDto)' : 'Flat (직접)',
      existingImageIdsInOrder: store ? existingImageIdsInOrder : '(생성 모드)',
      newFilesCount: filesToAppend.length,
      newFiles: filesToAppend.map((f) => ({
        name: f.name,
        type: f.type,
        size: f.size,
      })),
      locationAnalysisImages: newLocationAnalysisFiles.map(f => ({
        name: f.name,
        type: f.type,
        size: f.size,
      })),
      locationAnalysisImagesCount: newLocationAnalysisFiles.length,
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
      console.log('Endpoint:', store ? `PATCH /admin/stores/${store.id}` : 'POST /admin/stores');
      console.table(entries);
      const filesCount = entries.filter((e) => e.key === 'files' && e.file).length;
      const imagesCount = entries.filter((e) => e.key === 'images' && e.file).length;
      console.log('files (storeImages) appended:', filesCount, filesCount === 0 ? '(null로 전송)' : '');
      console.log('images (businessImages) appended:', imagesCount);
      if (store) {
        console.log('imagesDto.existingImageIdsInOrder:', imagesDto.existingImageIdsInOrder);
        console.log('businessImagesDto.existingBusinessImageIdsInOrder:', businessImagesDto.existingBusinessImageIdsInOrder);
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
              {store ? '매장 수정' : '새 매장 등록'}
            </h3>
            <p className="text-gray-500 text-sm">* 필수 입력 항목 / 미정 선택 시 미정으로 저장</p>
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
                placeholder="호텔런드리 강남점"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">매장 위치 *</label>
              <input
                type="text"
                name="address"
                value={formData.address || ''}
                onChange={handleInputChange}
                required
                placeholder="인천시 남동구"
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
                placeholder="구월동 123-45"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">상태 *</label>
              <select
                name="status"
                value={formData.status || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                {/* <option value="UNDECIDED">미정</option> */}
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                현재 모집 인원 *
              </label>
              <input
                type="text"
                name="currentRecruits"
                value={formData.currentRecruits || ''}
                onChange={handleNumberInput}
                onKeyPress={(e) => {
                  // 숫자만 입력 허용
                  if (
                    !/^\d$/.test(e.key) &&
                    e.key !== 'Backspace' &&
                    e.key !== 'Delete' &&
                    e.key !== 'Tab'
                  ) {
                    e.preventDefault();
                  }
                }}
                required
                placeholder="숫자만 입력 가능합니다."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                목표 모집 인원 *
              </label>
              <input
                type="text"
                name="targetRecruits"
                value={formData.targetRecruits || ''}
                onChange={handleNumberInput}
                onKeyPress={(e) => {
                  // 숫자만 입력 허용
                  if (
                    !/^\d$/.test(e.key) &&
                    e.key !== 'Backspace' &&
                    e.key !== 'Delete' &&
                    e.key !== 'Tab'
                  ) {
                    e.preventDefault();
                  }
                }}
                required
                placeholder="숫자만 입력 가능합니다."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                목표 오픈 시기 *
              </label>
              <input
                type="text"
                name="targetOpeningDate"
                value={formData.targetOpeningDate || ''}
                onChange={handleInputChange}
                required
                placeholder="2025년 9월 오픈 목표"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                매장 면적 *
              </label>
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
          </div>
        </div>

        {/* 상세 정보 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">상세 정보</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">월세 정보 *</label>
              <input
                type="text"
                name="detailsRent"
                value={formData.detailsRent}
                onChange={handleInputChange}
                required
                placeholder="월세 4,000/350 (관리비 포함)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">권리금 *</label>
              <input
                type="text"
                name="detailsDeposit"
                value={formData.detailsDeposit}
                onChange={handleInputChange}
                required
                placeholder="권리금 3,500"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>
        </div>

        {/* 상권 정보 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">상권 정보</h4>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">상권 분석 내용 *</label>
            <textarea
              name="locationAnalysis"
              value={formData.locationAnalysis}
              onChange={handleInputChange}
              rows={8}
              required
              placeholder="반경내 세대수: 약 5,000세대
연령대: 20-40대 직장인 비중 65%
경쟁매장: 주변 세탁소 2개, 세탁물 수거함 3곳
입지분석: 지하철역 도보 5분, 버스정류장 인접
주변 상권: 상가밀집지역, 오피스빌딩 다수"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <p className="text-xs text-gray-500 mt-1">엔터 키로 줄바꿈하여 여러 줄로 입력하세요.</p>
          </div>
        </div>

        {/* 이미지 업로드 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">이미지 업로드</h4>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                메인 이미지 *
                <span className="text-xs text-gray-500 ml-2">권장 크기: 1200x800px, 최대 5MB</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                갤러리 이미지
                <span className="text-xs text-gray-500 ml-2">
                  최대 10장, 권장 크기: 800x600px, 파일당 최대 5MB
                </span>
              </label>
            </div>
            <ImageUpload
              images={images}
              setImages={setImages}
              newFiles={newFiles}
              setNewFiles={setNewFiles}
            />

            {/* 상권 분석 이미지 */}
            <div className="border-t border-gray-200 pt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                상권 분석 이미지 * (최대 10개)
                <span className="text-xs text-gray-500 ml-2">권장 크기: 1200x800px, 파일당 최대 30MB</span>
              </label>
              
              {/* 이미지 미리보기 그리드 */}
              {locationAnalysisImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                  {locationAnalysisImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image}
                        alt={`상권 분석 ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border border-gray-300"
                        onError={(e) => {
                          console.error('❌ 상권 분석 이미지 로드 실패:', image);
                          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E로드 실패%3C/text%3E%3C/svg%3E';
                          e.target.onerror = null; // 무한 루프 방지
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => handleLocationAnalysisImageRemove(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        ×
                      </button>
                      <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                        {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 업로드 버튼 */}
              {locationAnalysisImages.length < 10 && (
                <div className="mt-2">
                  <label className="inline-block cursor-pointer">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-brand-blue transition-colors">
                      <div className="text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="mt-2 text-sm text-gray-600">
                          클릭하여 상권 분석 이미지 업로드
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          PNG, JPG, GIF 최대 30MB ({locationAnalysisImages.length}/10)
                        </p>
                      </div>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleLocationAnalysisImagesChange}
                      className="hidden"
                    />
                  </label>
                </div>
              )}
            </div>
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

export default StoreForm;
