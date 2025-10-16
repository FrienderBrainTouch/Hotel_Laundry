import React from 'react';

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
        </div>
      </div>
    </section>
  );
};

export default LowCapitalStartup;
