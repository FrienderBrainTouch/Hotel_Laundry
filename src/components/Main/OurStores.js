import React from 'react';

const OurStores = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="w-full">
        {/* Title */}
        <h2 
          className="text-[40px] font-[500] text-[#1C262B] mb-4 text-center"
          style={{ fontFamily: 'KoPubWorldBatang, serif' }}
        >
          Our Stores
        </h2>
        
        {/* Subtitle */}
        <p 
          className="text-[32px] font-[500] text-[#1C262B] mb-12 text-center"
          style={{ fontFamily: 'KoPubWorldDotum, serif' }}
        >
          전국 곳곳의 호텔런드리 매장을 직접 확인해보세요.
        </p>

        {/* 8개 이미지 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="w-full">
              <img 
                src="/images/main-Images/main-ourstores.png" 
                alt={`Store ${index + 1}`}
                className="w-full h-auto max-w-[465px] max-h-[465px] object-cover mx-auto"
              />
            </div>
          ))}
        </div>

        {/* View More 버튼 */}
        <div className="flex justify-center mt-16">
          <button 
            className="text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 2xl:w-[300px] 2xl:h-[80px] xl:w-[280px] xl:h-[75px] lg:w-[260px] lg:h-[70px] md:w-[240px] md:h-[65px] sm:w-[220px] sm:h-[60px] xs:w-[200px] xs:h-[55px]"
            style={{
              fontFamily: 'KoPubWorldBatang, serif',
              fontSize: '30px',
              fontWeight: '700',
              borderRadius: '8px',
              background: 'linear-gradient(90deg, #345D9D -2.08%, #102254 100%)'
            }}
          >
            More Store &nbsp;&nbsp;&nbsp;-
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStores; 