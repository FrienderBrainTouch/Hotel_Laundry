import React from 'react';
import { Link } from 'react-router-dom';

const LowCapitalStartup = () => {
  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          <div className="mb-12">
            <div className="w-full h-[1200px] md:h-[1600px] lg:h-[2000px] rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src="/landing/hotellun1/index.html"
                title="업계최초 공유창업 셀프빨래방 랜딩"
                className="w-full h-full"
                frameBorder="0"
              />
            </div>
          </div>

          {/* 확대 버전 임베드 */}
          {/* <div className="mb-12">
            <div
              className="relative w-full rounded-xl overflow-hidden border border-gray-200 bg-white"
              style={{ minHeight: '1200px', height: 'auto' }}
            >
              <div
                className="w-full"
                style={{
                  transform: 'scale(1.6)',
                  transformOrigin: 'top center',
                  height: 'calc(100vh * 1.6)',
                }}
              >
                <iframe
                  src="/landing/hotellun1/index.html"
                  title="업계최초 공유창업 셀프빨래방 랜딩(확대)"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  style={{ height: '100vh' }}
                />
              </div>
            </div>
          </div> */}

          {/* CTA 버튼 */}
          <div className="text-center mt-12">
            <Link
              to="/startup-guide/low-capital-startup/store-progress"
              className="inline-block bg-[#102254] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#0a1a3a] transition-colors duration-200"
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
