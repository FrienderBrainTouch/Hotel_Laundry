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
        if (prev >= 3) { // 4개씩 보이므로 4개 슬라이드 (0-3)
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
            className="text-white mb-2 xs:text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]"
            style={{ 
              fontFamily: 'KoPubWorldDotum, serif',
              fontWeight: '700'
            }}
          >
            호텔런드리 신길점
          </h3>
          <p 
            className="text-white xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
            style={{ 
              fontFamily: 'KoPubWorldDotum, serif',
              fontWeight: '500'
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
          className="xs:text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-[500] text-[#1C262B] mb-4 text-center"
          style={{ fontFamily: 'KoPubWorldBatang, serif' }}
        >
          Our Stores
        </h2>
        
        {/* Subtitle */}
        <p 
          className="xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-[500] text-[#1C262B] mb-12 text-center"
          style={{ fontFamily: 'KoPubWorldDotum, serif' }}
        >
          전국 곳곳의 호텔런드리 매장을 직접 확인해보세요.
        </p>

        {/* lg 이상: 기존 8개 그리드 */}
        <div className="hidden lg:flex justify-center mb-12">
          <div className="grid grid-cols-4 gap-4" style={{
            width: 'fit-content',
            maxWidth: '100%'
          }}>
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
                        fontFamily: 'KoPubWorldDotum, serif',
                        fontWeight: '700'
                      }}
                    >
                      호텔런드리 신길점
                    </h3>
                    <p 
                      className="text-white lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
                      style={{ 
                        fontFamily: 'KoPubWorldDotum, serif',
                        fontWeight: '500'
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
                  transform: `translateX(-${currentSlide * 100}%)`
                }}
              >
                {[...Array(8)].map((_, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 h-full"
                  >
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
                  transform: `translateX(-${currentSlide * 100}%)`
                }}
              >
                {[...Array(8)].map((_, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 h-full"
                    style={{ 
                      width: 'calc(50% - 8px)',
                      minWidth: 'calc(50% - 8px)'
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
                    minWidth: 'calc(50% - 8px)'
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
            <div className="block sm:hidden flex">
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
            <div className="hidden sm:block flex">
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
            className="text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-[120px] h-[40px] sm:w-[140px] sm:h-[45px] md:w-[160px] md:h-[50px] lg:w-[180px] lg:h-[55px] xl:w-[220px] xl:h-[65px] 2xl:w-[280px] 2xl:h-[75px] flex items-center justify-center"
            style={{
              fontFamily: 'KoPubWorldBatang, serif',
              fontWeight: '700',
              borderRadius: '8px',
              background: 'linear-gradient(90deg, #345D9D -2.08%, #102254 100%)'
            }}
          >
            <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] 2xl:text-[30px]">
              More Store &nbsp;&nbsp;&nbsp;-
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStores; 