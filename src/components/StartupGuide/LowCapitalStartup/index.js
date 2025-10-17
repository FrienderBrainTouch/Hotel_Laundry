import React from 'react';
import { Link } from 'react-router-dom';

const LowCapitalStartup = () => {
  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          <div className="mb-12">
            <div className="w-full h-[800px] xs:h-[900px] sm:h-[1000px] md:h-[1200px] lg:h-[1400px] xl:h-[1600px] 2xl:h-[1800px] rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src="/landing/hotellun1/index.html"
                title="업계최초 공유창업 셀프빨래방 랜딩"
                className="w-full h-full"
                frameBorder="0"
              />
            </div>
          </div>

          {/* 확대 버전 임베드 */}
          <div className="mb-12">
            <div
              className="relative w-full rounded-xl overflow-hidden border border-gray-200 bg-white"
              style={{ minHeight: '1200px', height: 'auto' }}
            >
              <div
                className="w-full flex justify-center items-start"
                style={{
                  transform: 'scale(1.7)',
                  transformOrigin: 'top center',
                }}
              >
                <iframe
                  src="/landing/hotellun1/index.html"
                  title="업계최초 공유창업 셀프빨래방 랜딩(확대)"
                  className="w-full h-full"
                  style={{ height: '100vh' }}
                />
              </div>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="text-center mt-8 xs:mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16">
            <Link
              to="/startup-guide/low-capital-startup/store-progress"
              className="inline-block bg-[#102254] text-white px-4 py-3 xs:px-6 xs:py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 xl:px-12 xl:py-5 2xl:px-16 2xl:py-6 rounded-lg text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold hover:bg-[#0a1a3a] transition-colors duration-200"
            >
              지금 바로 진행 매장 확인하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowCapitalStartup;
