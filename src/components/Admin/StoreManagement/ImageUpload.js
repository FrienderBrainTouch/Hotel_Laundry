import React, { useEffect, useState } from 'react';

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

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
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
    // 제거할 항목 가져오기 (URL string 또는 File 객체)
    const itemToRemove = images.gallery[index];
    
    // images에서 제거
    setImages((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index),
    }));
    
    // 제거할 항목이 File 객체인 경우에만 newFiles에서도 제거
    if (itemToRemove instanceof File) {
      safeSetNewFiles((prev) => ({
        ...prev,
        gallery: (prev.gallery || []).filter((file) => file !== itemToRemove),
      }));
    }
  };

  // 미리보기 URL은 이미 images에 저장됨
  const mainPreviewUrl = images.main;
  const galleryPreviewUrls = Array.isArray(images.gallery)
    ? images.gallery.filter((v) =>
        typeof v === 'string' ? v && v.trim() !== '' : v instanceof File
      )
    : [];

  // URL 정리 (새로 생성된 object URL만 정리)
  useEffect(() => {
    return () => {
      // images.main이 File 객체였다면 URL.revokeObjectURL 호출
      if (images.main && typeof images.main === 'string' && images.main.startsWith('blob:')) {
        URL.revokeObjectURL(images.main);
      }
      // gallery에서 File 객체였던 것들 정리
      (images.gallery || []).forEach((item) => {
        if (typeof item === 'string' && item.startsWith('blob:')) {
          URL.revokeObjectURL(item);
        }
      });
    };
  }, [images.main, images.gallery]);

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
                src={url}
                alt={`갤러리 ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg"
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
