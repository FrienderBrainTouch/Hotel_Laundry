import React from 'react';

const BrandSlogan = () => {
  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
          {/* 메인 콘텐츠 */}
          <div className="text-center">
            <h1 className="text-brand-blue font-KoPubWorldBatang hero-title md:text-4xl lg:text-5xl mb-6 md:mb-8">
              브랜드 슬로건
            </h1>

            {/* 슬로건 섹션 */}
            <div className="bg-brand-light-blue rounded-2xl p-8 md:p-12 mb-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-brand-blue font-KoPubWorldBatang section-title md:text-3xl lg:text-4xl mb-6">
                  "Clean Innovation, Trusted Service"
                </h2>
                <p className="text-brand-dark text-20 md:text-xl leading-relaxed">
                  호텔런드리는 혁신적인 세탁 기술과 신뢰할 수 있는 서비스로
                  <br className="hidden md:block" />
                  고객의 만족을 최우선으로 하는 브랜드입니다.
                </p>
              </div>
            </div>

            {/* 더미 이미지와 설명 */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-gray-100 rounded-xl p-8 text-center">
                <div className="w-full h-48 md:h-64 bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white text-20 md:text-2xl font-medium">
                    브랜드 이미지 1
                  </span>
                </div>
                <h3 className="text-brand-blue font-KoPubWorldBatang section-subtitle md:text-2xl mb-4">
                  혁신적인 기술
                </h3>
                <p className="text-brand-dark text-20 leading-relaxed">
                  최신 세탁 기술과 친환경 솔루션을 통해
                  <br />
                  고품질의 서비스를 제공합니다.
                </p>
              </div>

              <div className="bg-gray-100 rounded-xl p-8 text-center">
                <div className="w-full h-48 md:h-64 bg-gradient-to-br from-brand-light-blue to-brand-blue rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white text-20 md:text-2xl font-medium">
                    브랜드 이미지 2
                  </span>
                </div>
                <h3 className="text-brand-blue font-KoPubWorldBatang section-subtitle md:text-2xl mb-4">
                  신뢰할 수 있는 서비스
                </h3>
                <p className="text-brand-dark text-20 leading-relaxed">
                  오랜 경험과 전문성을 바탕으로
                  <br />
                  고객에게 안정적인 서비스를 약속합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSlogan;
