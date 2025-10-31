import React, { useEffect, useState, useMemo } from 'react';

const ImageUpload = ({ images, setImages, newFiles, setNewFiles }) => {
  // newFiles가 없으면 기본값으로 초기화
  // const safeNewFiles = newFiles || { main: null, gallery: [] };
  const safeSetNewFiles = setNewFiles || (() => {});
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const MAX_SINGLE = 30 * 1024 * 1024; // 30MB
  const MAX_TOTAL = 500 * 1024 * 1024; // 500MB

  const currentNewFilesTotal = () => {
    const mainSize = newFiles?.main instanceof File ? newFiles.main.size : 0;
    const gallerySize = Array.isArray(newFiles?.gallery)
      ? newFiles.gallery.reduce((s, f) => s + (f?.size || 0), 0)
      : 0;
    return mainSize + gallerySize;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        if (file.size > MAX_SINGLE) {
          alert('이미지 파일 크기는 최대 30MB까지 가능합니다.');
          return;
        }
        if (currentNewFilesTotal() + file.size > MAX_TOTAL) {
          alert('이미지 총 용량은 최대 500MB까지 가능합니다.');
          return;
        }
        const objectUrl = URL.createObjectURL(file);
        setImages((prev) => ({
          ...prev,
          main: objectUrl, // 미리보기용 URL
        }));
        safeSetNewFiles((prev) => ({
          ...prev,
          main: file, // 실제 전송할 파일
        }));
      }
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        if (file.size > MAX_SINGLE) {
          alert('이미지 파일 크기는 최대 30MB까지 가능합니다.');
          return;
        }
        if (currentNewFilesTotal() + file.size > MAX_TOTAL) {
          alert('이미지 총 용량은 최대 500MB까지 가능합니다.');
          return;
        }
        const objectUrl = URL.createObjectURL(file);
        setImages((prev) => ({
          ...prev,
          main: objectUrl, // 미리보기용 URL
        }));
        safeSetNewFiles((prev) => ({
          ...prev,
          main: file, // 실제 전송할 파일
        }));
      }
    }
  };

  const handleGalleryUpload = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const imageFiles = files.filter((file) => file.type.startsWith('image/'));

      // 단일 파일 검증
      const oversize = imageFiles.find((f) => f.size > MAX_SINGLE);
      if (oversize) {
        alert('이미지 파일 크기는 최대 30MB까지 가능합니다.');
        return;
      }

      // 총합 검증
      const incomingTotal = imageFiles.reduce((s, f) => s + (f?.size || 0), 0);
      if (currentNewFilesTotal() + incomingTotal > MAX_TOTAL) {
        alert('이미지 총 용량은 최대 500MB까지 가능합니다.');
        return;
      }

      if (imageFiles.length > 0) {
        const objectUrls = imageFiles.map((file) => URL.createObjectURL(file));
        setImages((prev) => ({
          ...prev,
          gallery: [...prev.gallery, ...objectUrls].slice(0, 10), // 미리보기용 URL
        }));
        safeSetNewFiles((prev) => ({
          ...prev,
          gallery: [...(prev.gallery || []), ...imageFiles].slice(0, 10), // 실제 전송할 파일
        }));
      }
    }
  };

  const removeGalleryImage = (index) => {
    // images에서 제거 (인덱스 기반)
    setImages((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index),
    }));

    // newFiles.gallery에서도 동일한 인덱스로 제거
    // images.gallery와 newFiles.gallery는 같은 순서로 유지되어야 함
    safeSetNewFiles((prev) => ({
      ...prev,
      gallery: (prev.gallery || []).filter((_, i) => i !== index),
    }));
  };

  // 미리보기 URL 처리 - File 객체는 object URL로 변환
  const mainPreviewUrl = useMemo(() => {
    if (!images.main) return null;
    if (images.main instanceof File) {
      return URL.createObjectURL(images.main);
    }
    return typeof images.main === 'string' && images.main.trim() ? images.main : null;
  }, [images.main]);

  const galleryPreviewUrls = useMemo(() => {
    if (!Array.isArray(images.gallery)) return [];
    return images.gallery
      .filter((v) => v != null)
      .map((item) => {
        if (item instanceof File) {
          return URL.createObjectURL(item);
        }
        return typeof item === 'string' && item.trim() ? item : null;
      })
      .filter((v) => v != null);
  }, [images.gallery]);

  // URL 정리 (새로 생성된 object URL만 정리)
  useEffect(() => {
    return () => {
      // mainPreviewUrl이 blob URL이면 정리
      if (
        mainPreviewUrl &&
        typeof mainPreviewUrl === 'string' &&
        mainPreviewUrl.startsWith('blob:')
      ) {
        URL.revokeObjectURL(mainPreviewUrl);
      }
      // galleryPreviewUrls에서 blob URL 정리
      galleryPreviewUrls.forEach((url) => {
        if (typeof url === 'string' && url.startsWith('blob:')) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [mainPreviewUrl, galleryPreviewUrls]);

  return (
    <div className="space-y-6">
      {/* 메인 이미지 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          메인 이미지 <span className="text-red-500">*</span>
        </label>
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
            dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {images.main ? (
            <div className="space-y-4">
              <img
                src={mainPreviewUrl || ''}
                alt="메인 이미지"
                className="mx-auto max-h-48 rounded-lg"
                onError={(e) => {
                  console.warn('메인 이미지 로드 실패:', images.main);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  setImages((prev) => ({ ...prev, main: null }));
                  safeSetNewFiles((prev) => ({ ...prev, main: null }));
                }}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                이미지 제거
              </button>
            </div>
          ) : (
            <div>
              <div className="text-gray-500 mb-2">
                <svg
                  className="mx-auto h-12 w-12"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600">이미지를 드래그하거나 클릭하여 업로드</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
                id="main-image-upload"
              />
              <label
                htmlFor="main-image-upload"
                className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
              >
                이미지 선택
              </label>
            </div>
          )}
        </div>
      </div>

      {/* 갤러리 이미지 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          갤러리 이미지 (최대 10장)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryPreviewUrls.map((url, index) => (
            <div key={index} className="relative">
              <img
                src={url || ''}
                alt={`갤러리 ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg"
                onError={(e) => {
                  console.warn('갤러리 이미지 로드 실패:', url);
                  e.target.style.display = 'none';
                }}
              />
              <button
                type="button"
                onClick={() => removeGalleryImage(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
              >
                ×
              </button>
            </div>
          ))}
          {images.gallery.length < 10 && (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleGalleryUpload}
                className="hidden"
                id="gallery-upload"
              />
              <label htmlFor="gallery-upload" className="text-gray-500 cursor-pointer text-center">
                <svg
                  className="mx-auto h-8 w-8 mb-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="text-xs">추가</span>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
