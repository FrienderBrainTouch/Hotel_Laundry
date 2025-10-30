import React, { useEffect, useState } from 'react';
import ImageUpload from './ImageUpload';
import {
  statusOptions,
  targetRecruitsOptions,
  interiorOptions,
  floorOptions,
  sizeOptions,
  washingMachineOptions,
  dryerOptions,
  operatingHoursOptions,
  areaTypeOptions,
} from './constants';

const StoreForm = ({ store, onBack, onSave }) => {
  const [formData, setFormData] = useState({
    // address
    address: store?.address?.address || '',
    detailAddress: store?.address?.detailAddress || '',

    // storeBasicInfo
    storeName: store?.storeBasicInfo?.storeName || '',
    status: store?.storeBasicInfo?.status || 'WAITING',
    targetRecruits: store?.storeBasicInfo?.targetRecruits || '',
    targetOpeningDate: store?.storeBasicInfo?.targetOpeningDate || '',
    areaSqm: store?.storeBasicInfo?.areaSqm || '',
    washingMachines: store?.storeBasicInfo?.washingMachines || '',
    dryers: store?.storeBasicInfo?.dryers || '',
    operatingHours: store?.storeBasicInfo?.operatingHours || '',
    areaType: store?.storeBasicInfo?.areaType || '',

    // storeDetails
    detailsLocation: store?.storeDetails?.detailsLocation || '',
    detailsInterior: store?.storeDetails?.detailsInterior || '',
    detailsFloor: store?.storeDetails?.detailsFloor || '',
    detailsRent: store?.storeDetails?.detailsRent || '',
    detailsDeposit: store?.storeDetails?.detailsDeposit || '',
    detailsStartupCost: store?.storeDetails?.detailsStartupCost || '',
    detailsParking: store?.storeDetails?.detailsParking || '',
    detailsSize: store?.storeDetails?.detailsSize || '',

    // storeDescription
    householdCountInRadius: store?.storeDescription?.householdCountInRadius || '',
    populationByAgeGroup: store?.storeDescription?.populationByAgeGroup || '',
    competitorStores: store?.storeDescription?.competitorStores || '',
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

  // 새로 업로드된 파일들을 별도로 관리
  const [newFiles, setNewFiles] = useState({
    main: null,
    gallery: [],
  });

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
      targetOpeningDate: store?.storeBasicInfo?.targetOpeningDate || '',
      areaSqm: store?.storeBasicInfo?.areaSqm || '',
      washingMachines: store?.storeBasicInfo?.washingMachines || '',
      dryers: store?.storeBasicInfo?.dryers || '',
      operatingHours: store?.storeBasicInfo?.operatingHours || '',
      areaType: store?.storeBasicInfo?.areaType || '',

      // storeDetails
      detailsLocation: store?.storeDetails?.detailsLocation || '',
      detailsInterior: store?.storeDetails?.detailsInterior || '',
      detailsFloor: store?.storeDetails?.detailsFloor || '',
      detailsRent: store?.storeDetails?.detailsRent || '',
      detailsDeposit: store?.storeDetails?.detailsDeposit || '',
      detailsStartupCost: store?.storeDetails?.detailsStartupCost || '',
      detailsParking: store?.storeDetails?.detailsParking || '',
      detailsSize: store?.storeDetails?.detailsSize || '',

      // storeDescription
      householdCountInRadius: store?.storeDescription?.householdCountInRadius || '',
      populationByAgeGroup: store?.storeDescription?.populationByAgeGroup || '',
      competitorStores: store?.storeDescription?.competitorStores || '',
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

    // 새 파일 캐시 초기화
    setNewFiles({ main: null, gallery: [] });
  }, [store]);

  // 수정 진입 시 기존 이미지(URL)를 Blob->File로 미리 캐싱해두기
  const [existingMainFile, setExistingMainFile] = useState(null);
  const [existingGalleryFiles, setExistingGalleryFiles] = useState({}); // url -> File

  console.log('🔍 StoreForm render - images state:', {
    main: images.main,
    gallery: images.gallery,
    mainType: typeof images.main,
    galleryLength: images.gallery?.length,
  });

  useEffect(() => {
    console.log('🎯 useEffect triggered!', {
      store: !!store,
      imagesMain: images.main,
      imagesGallery: images.gallery,
    });

    // store가 없으면 기존 파일 캐시 초기화
    if (!store) {
      setExistingMainFile(null);
      setExistingGalleryFiles({});
      return;
    }

    let isCancelled = false;

    const urlToFile = async (url) => {
      try {
        console.log('🔄 Converting URL to File:', url);
        const res = await fetch(url, {
          mode: 'cors',
          credentials: 'omit', // CORS 문제 해결을 위해 credentials 제거
        });
        if (!res.ok) {
          console.warn('❌ Failed to fetch image:', res.status, res.statusText);
          return null;
        }
        const blob = await res.blob();
        const nameFromUrl = (url.split('/')?.pop() || 'image').split('?')[0];
        const fileName = nameFromUrl || 'image.jpg';
        const file = new File([blob], fileName, { type: blob.type || 'application/octet-stream' });
        console.log('✅ Successfully converted to File:', file.name, file.size, 'bytes');
        return file;
      } catch (error) {
        console.error('❌ Error converting URL to File:', error);
        return null;
      }
    };

    const run = async () => {
      console.log('🚀 Starting image conversion process...', {
        imagesMain: images.main,
        imagesGallery: images.gallery,
        isCancelled,
      });

      const updates = {};

      // 메인 이미지 캐싱
      if (typeof images.main === 'string' && images.main && !images.main.startsWith('blob:')) {
        console.log('📸 Converting main image:', images.main);
        const f = await urlToFile(images.main);
        console.log('📸 Main image conversion result:', f);
        if (!isCancelled) setExistingMainFile(f);
      } else {
        console.log('📸 Skipping main image conversion:', {
          type: typeof images.main,
          value: images.main,
          isBlob: images.main?.startsWith('blob:'),
        });
        if (!isCancelled) setExistingMainFile(null);
      }

      // 갤러리 이미지 캐싱 (URL만)
      const gallery = Array.isArray(images.gallery) ? images.gallery : [];
      console.log('🖼️ Processing gallery images:', gallery);
      for (const item of gallery) {
        if (typeof item === 'string' && item && !item.startsWith('blob:')) {
          console.log('🖼️ Converting gallery image:', item);
          const f = await urlToFile(item);
          if (f) {
            updates[item] = f;
            console.log('🖼️ Gallery image converted:', f.name);
          }
        }
      }
      console.log('🖼️ Final gallery updates:', updates);
      if (!isCancelled) setExistingGalleryFiles(updates);
    };

    run();
    return () => {
      isCancelled = true;
    };
  }, [store?.storeId, images.main, images.gallery]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // FormData 생성 - 스웨거 방식
    const formDataToSend = new FormData();

    const dto = {
      address: {
        address: formData.address,
        detailAddress: formData.detailAddress,
      },
      storeBasicInfo: {
        areaSqm: parseInt(formData.areaSqm) || 0,
        targetRecruits: parseInt(formData.targetRecruits) || 0,
        areaType: formData.areaType,
        storeName: formData.storeName,
        operatingHours: formData.operatingHours,
        washingMachines: parseInt(formData.washingMachines) || 0,
        status: formData.status,
        targetOpeningDate: formData.targetOpeningDate,
        dryers: parseInt(formData.dryers) || 0,
      },
      storeDetails: {
        detailsLocation: formData.detailsLocation,
        detailsInterior: formData.detailsInterior,
        detailsFloor: formData.detailsFloor,
        detailsRent: formData.detailsRent,
        detailsDeposit: formData.detailsDeposit,
        detailsStartupCost: formData.detailsStartupCost,
        detailsParking: formData.detailsParking,
        detailsSize: formData.detailsSize,
      },
      storeDescription: {
        householdCountInRadius: formData.householdCountInRadius,
        populationByAgeGroup: formData.populationByAgeGroup,
        competitorStores: formData.competitorStores,
        locationAnalysis: formData.locationAnalysis,
      },
    };

    formDataToSend.append('dto', JSON.stringify(dto));

    // URL을 File로 변환하는 헬퍼 함수
    const urlToFile = async (url) => {
      try {
        console.log('🔄 Converting URL to File:', url);
        const res = await fetch(url, {
          mode: 'cors',
          credentials: 'omit',
        });
        if (!res.ok) {
          console.warn('❌ Failed to fetch image:', res.status, res.statusText);
          return null;
        }
        const blob = await res.blob();
        const nameFromUrl = (url.split('/')?.pop() || 'image').split('?')[0];
        const fileName = nameFromUrl || 'image.jpg';
        const file = new File([blob], fileName, { type: blob.type || 'application/octet-stream' });
        console.log('✅ Successfully converted to File:', file.name, file.size, 'bytes');
        return file;
      } catch (error) {
        console.error('❌ Error converting URL to File:', error);
        return null;
      }
    };

    // 수정 모드: 기존 이미지 + 새로 업로드한 파일을 합쳐 전송
    const filesToAppend = [];

    // 메인 이미지 처리
    if (newFiles?.main instanceof File) {
      // 새로 업로드한 파일이 있으면 그것을 사용
      filesToAppend.push(newFiles.main);
    } else if (images.main instanceof File) {
      // 이미 File 객체면 그대로 사용
      filesToAppend.push(images.main);
    } else if (typeof images.main === 'string' && !images.main.startsWith('blob:')) {
      // URL이면 File로 변환
      const f = await urlToFile(images.main);
      if (f) filesToAppend.push(f);
    }

    // 갤러리 이미지 처리
    const galleryList = Array.isArray(images.gallery) ? images.gallery : [];
    for (const item of galleryList) {
      if (item instanceof File) {
        filesToAppend.push(item);
      } else if (typeof item === 'string' && !item.startsWith('blob:')) {
        const f = await urlToFile(item);
        if (f) filesToAppend.push(f);
      }
    }

    // 새로 업로드된 갤러리 파일 추가
    if (newFiles?.gallery && newFiles.gallery.length > 0) {
      for (const file of newFiles.gallery) {
        if (file instanceof File) filesToAppend.push(file);
      }
    }

    filesToAppend.forEach((f) => formDataToSend.append('files', f));

    // 디버깅: 파일 수집 상태 확인
    console.log('🔍 File Collection Debug:', {
      newFilesMain: newFiles?.main,
      newFilesGallery: newFiles?.gallery,
      imagesMain: images.main,
      imagesGallery: images.gallery,
      existingMainFile: existingMainFile,
      existingGalleryFiles: existingGalleryFiles,
      filesToAppend: filesToAppend.map((f) => ({
        name: f.name,
        type: f.type,
        size: f.size,
      })),
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
      console.group('\uD83D\uDDC3\uFE0F FormData Preview (about to send)');
      console.log('Endpoint:', '/admin/stores');
      console.table(entries);
      const filesCount = entries.filter((e) => e.key === 'files').length;
      console.log('files appended:', filesCount);
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
          <h3 className="text-lg font-medium text-gray-900">
            {store ? '매장 수정' : '새 매장 등록'}
          </h3>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">상세 주소</label>
              <input
                type="text"
                name="detailAddress"
                value={formData.detailAddress || ''}
                onChange={handleInputChange}
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
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                목표 모집 인원 *
              </label>
              <select
                name="targetRecruits"
                value={formData.targetRecruits || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                {targetRecruitsOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">목표 오픈 시기</label>
              <input
                type="text"
                name="targetOpeningDate"
                value={formData.targetOpeningDate || ''}
                onChange={handleInputChange}
                placeholder="2025년 9월 오픈 목표"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>
        </div>

        {/* 매장 정보 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">매장 정보</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">평수 *</label>
              <select
                name="areaSqm"
                value={formData.areaSqm || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                {sizeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">세탁기 대수 *</label>
              <select
                name="washingMachines"
                value={formData.washingMachines || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                {washingMachineOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">건조기 대수 *</label>
              <select
                name="dryers"
                value={formData.dryers || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                {dryerOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">운영시간</label>
              <select
                name="operatingHours"
                value={formData.operatingHours || ''}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                {operatingHoursOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">지역 특성</label>
              <select
                name="areaType"
                value={formData.areaType || ''}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                {areaTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 상세 정보 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">상세 정보</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">상세 위치 정보</label>
              <input
                type="text"
                name="detailsLocation"
                value={formData.detailsLocation}
                onChange={handleInputChange}
                placeholder="서울시 동작구 상도동"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">인테리어 상태</label>
              <select
                name="detailsInterior"
                value={formData.detailsInterior}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                {interiorOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">층수</label>
              <select
                name="detailsFloor"
                value={formData.detailsFloor}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="">선택하세요</option>
                {floorOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">월세 정보</label>
              <input
                type="text"
                name="detailsRent"
                value={formData.detailsRent}
                onChange={handleInputChange}
                placeholder="월세 4,000/350 (관리비 포함)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">권리금</label>
              <input
                type="text"
                name="detailsDeposit"
                value={formData.detailsDeposit}
                onChange={handleInputChange}
                placeholder="권리금 3,500"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">창업비용</label>
              <input
                type="text"
                name="detailsStartupCost"
                value={formData.detailsStartupCost}
                onChange={handleInputChange}
                placeholder="창업비용 3000만원"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">주차 상세</label>
              <input
                type="text"
                name="detailsParking"
                value={formData.detailsParking}
                onChange={handleInputChange}
                placeholder="주차 가능 - 매장 앞 4대"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">면적</label>
              <input
                type="text"
                name="detailsSize"
                value={formData.detailsSize}
                onChange={handleInputChange}
                placeholder="전용 52.99m²"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>
        </div>

        {/* 설명 정보 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">설명 정보</h4>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                반경 내 가구 수
              </label>
              <input
                type="text"
                name="householdCountInRadius"
                value={formData.householdCountInRadius}
                onChange={handleInputChange}
                placeholder="반경 500m 내 약 1,200가구"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">연령대별 인구</label>
              <input
                type="text"
                name="populationByAgeGroup"
                value={formData.populationByAgeGroup}
                onChange={handleInputChange}
                placeholder="20-30대 40%, 30-40대 35%, 40-50대 25%"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">경쟁업체 현황</label>
              <input
                type="text"
                name="competitorStores"
                value={formData.competitorStores}
                onChange={handleInputChange}
                placeholder="반경 1km 내 세탁소 2개소, 무인세탁방 1개소"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">입지 분석</label>
              <textarea
                name="locationAnalysis"
                value={formData.locationAnalysis}
                onChange={handleInputChange}
                rows={4}
                placeholder="인근 주거 밀집 지역과 생활 편의시설이 결합된 안정적인 상권에 위치한 무인세탁방 매물로, 바로 영업이 가능하며 꾸준한 수익 창출이 기대되는 입지입니다."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>
        </div>

        {/* 이미지 업로드 */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">이미지 업로드</h4>
          <div className="space-y-4">
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
