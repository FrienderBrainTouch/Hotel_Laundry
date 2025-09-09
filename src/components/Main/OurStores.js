import React, { useState, useEffect } from 'react';

const OurStores = () => {
  const [selectedStore, setSelectedStore] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleStoreClick = (index) => {
    setSelectedStore(selectedStore === index ? null : index);
  };

  const handleOutsideClick = () => {
    setSelectedStore(null);
  };

  // 슬라이드 자동 전환
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= 3) {
          // 4개씩 보이므로 4개 슬라이드 (0-3)
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderStoreItem = (index) => (
    <div key={index} className="relative cursor-pointer group w-full h-full">
      <img
        src="/images/main-Images/main-ourstores.png"
        alt={`Store ${index + 1}`}
        className="w-full h-full object-cover"
        onClick={(e) => {
          e.stopPropagation();
          handleStoreClick(index);
        }}
      />
      {/* 호버/클릭 오버레이 */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-end items-start pb-8 pl-4 transition-opacity duration-300 ${
          selectedStore === index || 'group-hover:opacity-100 opacity-0'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          handleStoreClick(index);
        }}
      >
        <div className="text-left">
          <h3
            className="text-white mb-2 text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]"
            style={{
              fontFamily: 'KoPubWorldDotum',
              fontWeight: '700',
              letterSpacing: 'clamp(-0.4px, -0.4px + 0.02vw, -0.56px)',
            }}
          >
            호텔런드리 신길점
          </h3>
          <p
            className="text-white text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
            style={{
              fontFamily: 'KoPubWorldDotum',
              fontWeight: '500',
              letterSpacing: 'clamp(-0.3px, -0.3px + 0.02vw, -0.48px)',
            }}
          >
            서울 영등포구 신길동 115-8
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full py-16 bg-white" onClick={handleOutsideClick}>
      <div className="w-full">
        {/* Title */}
        <h2
          className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-[500] text-[#1C262B] mb-4 text-center"
          style={{
            fontFamily: 'KoPubWorldBatang',
            letterSpacing: 'clamp(-0.44px, -0.44px + 0.04vw, -0.8px)',
          }}
        >
          Our Stores
        </h2>

        {/* Subtitle */}
        <p
          className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-[500] text-[#1C262B] mb-12 text-center"
          style={{
            fontFamily: 'KoPubWorldDotum',
            letterSpacing: 'clamp(-0.36px, -0.36px + 0.04vw, -0.64px)',
          }}
        >
          전국 곳곳의 호텔런드리 매장을 직접 확인해보세요.
        </p>

        {/* lg 이상: 기존 8개 그리드 */}
        <div className="hidden lg:flex justify-center mb-12">
          <div
            className="grid grid-cols-4 gap-4"
            style={{
              width: 'fit-content',
              maxWidth: '100%',
            }}
          >
            {[...Array(8)].map((_, index) => (
              <div key={index} className="relative cursor-pointer group w-full h-full">
                <img
                  src="/images/main-Images/main-ourstores.png"
                  alt={`Store ${index + 1}`}
                  className="w-full h-auto lg:w-[241px] lg:h-[241px] xl:w-[345px] xl:h-[345px] 2xl:w-[465px] 2xl:h-[465px] object-cover"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStoreClick(index);
                  }}
                />
                {/* 호버/클릭 오버레이 */}
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-end items-start pb-8 pl-4 transition-opacity duration-300 ${
                    selectedStore === index || 'group-hover:opacity-100 opacity-0'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStoreClick(index);
                  }}
                >
                  <div className="text-left">
                    <h3
                      className="text-white mb-2 lg:text-[24px] xl:text-[26px] 2xl:text-[28px]"
                      style={{
                        fontFamily: 'KoPubWorldDotum',
                        fontWeight: '700',
                        letterSpacing: 'clamp(-0.48px, -0.48px + 0.02vw, -0.56px)',
                      }}
                    >
                      호텔런드리 신길점
                    </h3>
                    <p
                      className="text-white lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
                      style={{
                        fontFamily: 'KoPubWorldDotum',
                        fontWeight: '500',
                        letterSpacing: 'clamp(-0.4px, -0.4px + 0.02vw, -0.48px)',
                      }}
                    >
                      서울 영등포구 신길동 115-8
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* md 이하: 슬라이드 */}
        <div className="lg:hidden">
          {/* xs: 1개씩 보이기 */}
          <div className="block sm:hidden">
            <div className="relative overflow-hidden" style={{ height: '250px' }}>
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="w-full flex-shrink-0 h-full">
                    {renderStoreItem(index)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* sm, md: 2개씩 보이기 */}
          <div className="hidden sm:block">
            <div className="relative overflow-hidden" style={{ height: '277px' }}>
              <div
                className="flex transition-transform duration-500 ease-in-out h-full gap-4"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 h-full"
                    style={{
                      width: 'calc(50% - 8px)',
                      minWidth: 'calc(50% - 8px)',
                    }}
                  >
                    {renderStoreItem(index)}
                  </div>
                ))}
                {/* 마지막 슬라이드에서 첫 번째 아이템을 보여주기 위해 첫 번째 아이템 추가 */}
                <div
                  className="flex-shrink-0 h-full"
                  style={{
                    width: 'calc(50% - 8px)',
                    minWidth: 'calc(50% - 8px)',
                  }}
                >
                  {renderStoreItem(0)}
                </div>
              </div>
            </div>
          </div>

          {/* 네비게이션 닷 */}
          <div className="flex justify-center mt-4">
            {/* xs: 1개씩 보이므로 8개 닷 */}
            <div className="flex sm:hidden">
              {[...Array(8)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 mx-1 ${
                    index === currentSlide ? 'bg-[#102254]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* sm, md: 2개씩 보이므로 4개 닷 */}
            <div className="hidden sm:flex">
              {Array.from({ length: 4 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 mx-1 ${
                    index === currentSlide ? 'bg-[#102254]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <button
            className="text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-[142px] h-[39px] sm:w-[150px] sm:h-[40px] md:w-[169px] md:h-[49px] lg:w-[201px] lg:h-[54px] xl:w-[225px] xl:h-[60px] 2xl:w-[300px] 2xl:h-[80px] flex items-center justify-center"
            style={{
              fontFamily: 'KoPubWorldBatang',
              fontWeight: '700',
              borderRadius: '8px',
              background: 'linear-gradient(90deg, #345D9D -2.08%, #102254 100%)',
              padding: 'clamp(7px 20px, 7px 20px + 0.5vw, 10px 30px)',
              gap: '10px',
            }}
          >
            <span
              className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] 2xl:text-[30px]"
              style={{
                letterSpacing: 'clamp(-0.32px, -0.32px + 0.04vw, -0.6px)',
              }}
            >
              More Store &nbsp;&nbsp;&nbsp;-
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStores;
