import React, { useState } from 'react';

const Catalog = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const pdfFiles = [
    {
      name: "호텔런드리 메인 PDF",
      path: "/documents/hotel-laundry-catalog.pdf",
      description: "호텔런드리 기본 카탈로그"
    },
    {
      name: "2024 호텔런드리 소개",
      path: "/documents/2024 호텔런드리 소개.pdf",
      description: "2024년 최신 호텔런드리 소개서"
    }
  ];

  const promotionalImages = [
    {
      name: "홍보이미지 1",
      path: "/documents/호텔런드리_홍보이미지(1).jpg",
      description: "호텔런드리 홍보이미지"
    },
    {
      name: "홍보이미지 2",
      path: "/documents/호텔런드리_홍보이미지(2).jpg",
      description: "호텔런드리 홍보이미지"
    },
    {
      name: "홍보이미지 3",
      path: "/documents/호텔런드리_홍보이미지(3).jpg",
      description: "호텔런드리 홍보이미지"
    }
  ];

  const brochureImages = [
    {
      name: "3단 안내책자 (앞면)",
      path: "/documents/호텔런드리_3단 안내책자(앞).jpg",
      description: "호텔런드리 3단 안내책자 앞면"
    },
    {
      name: "3단 안내책자 (뒤면)",
      path: "/documents/호텔런드리_3단 안내책자(뒤).jpg",
      description: "호텔런드리 3단 안내책자 뒤면"
    },
    {
      name: "홍보포스터",
      path: "/documents/호텔런드리_홍보포스터.jpg",
      description: "호텔런드리 홍보포스터"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 메인 콘텐츠 */}
          <div className="text-center">
            {/* PDF 다운로드 섹션 */}
            <div className="mb-16">
              <h2 className="section-title font-bold text-brand-dark mb-8">카탈로그</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pdfFiles.map((file, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="text-center">
                      <div className="mb-4">
                        <svg className="w-16 h-16 mx-auto text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-24 font-semibold text-brand-dark mb-2">{file.name}</h3>
                      <p className="text-gray-600 text-20 mb-4">{file.description}</p>
                      <a
                        href={file.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-brand-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-20"
                      >
                        다운로드
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 홍보 이미지 섹션 */}
            <div className="mb-16">
              <h2 className="section-title font-bold text-brand-dark mb-8">홍보 이미지</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {promotionalImages.map((image, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-w-16 aspect-h-12">
                      <img
                        src={image.path}
                        alt={image.name}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-22 font-semibold text-brand-dark mb-1">{image.name}</h3>
                      <p className="text-20 text-gray-600 mb-3">{image.description}</p>
                      <button
                        onClick={() => setSelectedImage(image)}
                        className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded text-20 hover:bg-gray-200 transition-colors"
                      >
                        크게 보기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 안내책자 및 포스터 섹션 */}
            <div>
              <h2 className="section-title font-bold text-brand-dark mb-8">안내책자 & 포스터</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {brochureImages.map((image, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-w-16 aspect-h-12">
                      <img
                        src={image.path}
                        alt={image.name}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-22 font-semibold text-brand-dark mb-1">{image.name}</h3>
                      <p className="text-20 text-gray-600 mb-3">{image.description}</p>
                      <button
                        onClick={() => setSelectedImage(image)}
                        className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded text-20 hover:bg-gray-200 transition-colors"
                      >
                        크게 보기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 이미지 모달 */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-[90vw] h-[80vh] max-w-6xl flex items-center justify-center">
            <img
              src={selectedImage.path}
              alt={selectedImage.name}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-0 right-0 bg-black bg-opacity-50 text-white text-2xl font-bold hover:bg-opacity-70 transition-colors w-10 h-10 rounded-full flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Catalog;
