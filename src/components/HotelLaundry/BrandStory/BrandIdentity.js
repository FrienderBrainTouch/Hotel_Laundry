import React from 'react';

const BrandIdentity = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="flex justify-center">
        <div className="w-full xs:w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
          <div className="text-center">
            <h2 className="text-brand-blue font-KoPubWorldBatang section-title md:text-3xl lg:text-4xl mb-12">
              브랜드 아이덴티티
            </h2>

            {/* 브랜드 컬러 */}
            <div className="mb-16">
              <h3 className="text-brand-blue font-KoPubWorldBatang section-subtitle md:text-2xl mb-8">
                브랜드 컬러
              </h3>
              <div className="mb-8">
                <p className="text-brand-dark text-20 mb-4">
                  컬러는 우리의 브랜드 이미지를 효과적으로 표현할 수 있는 디자인 요소입니다.
                </p>
                <p className="text-brand-dark text-20">
                  투명한 에메랄드 컬러와 선샤인 엘로우 컬러를 직관적으로 보여줌으로써 빨래하기 좋은 날의 기분과 상황을 생동감있게 전달합니다.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-full h-24 md:h-32 rounded-full mb-4" style={{backgroundColor: '#4ECDC4'}}></div>
                  <p className="text-brand-dark text-20 font-medium">TRANSPARENT EMERALD</p>
                  <p className="text-gray-600 text-20">#4ECDC4</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-24 md:h-32 rounded-full mb-4" style={{backgroundColor: '#FFD93D'}}></div>
                  <p className="text-brand-dark text-20 font-medium">SUNSHINE YELLOW</p>
                  <p className="text-gray-600 text-20">#FFD93D</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-24 md:h-32 rounded-full mb-4 bg-white border-2 border-gray-200"></div>
                  <p className="text-brand-dark text-20 font-medium">FLUFFY WHITE</p>
                  <p className="text-gray-600 text-20">#FFFFFF</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-24 md:h-32 rounded-full mb-4" style={{backgroundColor: '#1C262B'}}></div>
                  <p className="text-brand-dark text-20 font-medium">TIDY NAVY</p>
                  <p className="text-gray-600 text-20">#1C262B</p>
                </div>
              </div>
              {/* 주요 컬러 강조 */}
              <div className="flex justify-center gap-12">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full mb-4" style={{backgroundColor: '#4ECDC4'}}></div>
                  <p className="text-brand-dark text-20 font-medium">TRANSPARENT EMERALD</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full mb-4" style={{backgroundColor: '#FFD93D'}}></div>
                  <p className="text-brand-dark text-20 font-medium">SUNSHINE YELLOW</p>
                </div>
              </div>
            </div>

            {/* 브랜드 로고 */}
            <div className="mb-16">
              <h3 className="text-brand-blue font-KoPubWorldBatang section-subtitle md:text-2xl mb-8">
                브랜드 로고
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="w-full h-32 md:h-40 bg-gradient-to-r from-brand-blue to-brand-light-blue rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-white text-20 md:text-2xl font-bold">호텔런드리</span>
                  </div>
                  <p className="text-brand-dark text-20">메인 로고</p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="w-full h-32 md:h-40 bg-brand-blue rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-white text-20 md:text-2xl font-bold">HL</span>
                  </div>
                  <p className="text-brand-dark text-20">심볼 로고</p>
                </div>
              </div>
            </div>

            {/* 브랜드 가치 */}
            <div>
              <h3 className="text-brand-blue font-KoPubWorldBatang section-subtitle md:text-2xl mb-8">
                브랜드 가치
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="w-16 h-16 bg-brand-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-20 font-bold">신뢰</span>
                  </div>
                  <h4 className="text-brand-blue font-KoPubWorldBatang section-subtitle mb-2">Trust</h4>
                  <p className="text-brand-dark text-20">
                    고객과의 신뢰 관계를<br />
                    최우선으로 생각합니다.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="w-16 h-16 bg-brand-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-20 font-bold">혁신</span>
                  </div>
                  <h4 className="text-brand-blue font-KoPubWorldBatang section-subtitle mb-2">Innovation</h4>
                  <p className="text-brand-dark text-20">
                    지속적인 기술 혁신으로<br />
                    더 나은 서비스를 제공합니다.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="w-16 h-16 bg-brand-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-20 font-bold">품질</span>
                  </div>
                  <h4 className="text-brand-blue font-KoPubWorldBatang section-subtitle mb-2">Quality</h4>
                  <p className="text-brand-dark text-20">
                    최고의 품질로<br />
                    고객 만족을 실현합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentity;
