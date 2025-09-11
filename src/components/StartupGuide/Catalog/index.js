import React from 'react';

const Catalog = () => {
  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 메인 콘텐츠 */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">카탈로그</h1>
            <p className="text-lg text-gray-600 mb-12">
              호텔세탁소 사업에 대한 상세한 정보가 담긴 카탈로그
            </p>

            {/* 카탈로그 콘텐츠 영역 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-6">
                <a
                  href="/documents/hotel-laundry-catalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-blue text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  카탈로그 다운로드 (PDF)
                </a>
              </div>
              <p className="text-gray-500">카탈로그 관련 추가 콘텐츠가 여기에 표시됩니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
