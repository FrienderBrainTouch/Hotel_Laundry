import React from 'react';
import { ASSET_URL } from '../../../utils/constants';

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
                  컬러를 통해 호텔급 프리미엄과 세탁의 청량감을 동시에 전달합니다.
                </p>
                <p className="text-brand-dark text-20">
                  오감 브랜딩을 통해 시각, 촉각, 후각, 미각, 청각을 만족시키는 컬러/무드를
                  연출합니다.
                </p>
              </div>

              {/* 브랜드 컬러 팔레트 */}
              <div className="mb-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                  <div className="text-center">
                    <div
                      className="w-full h-24 md:h-32 rounded-full mb-4"
                      style={{ backgroundColor: '#8B4513' }}
                    ></div>
                    <p className="text-brand-dark text-20 font-medium">HUGGABLE RED</p>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-full h-24 md:h-32 rounded-full mb-4"
                      style={{ backgroundColor: '#87CEEB' }}
                    ></div>
                    <p className="text-brand-dark text-20 font-medium">SOAPY BLUE</p>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-full h-24 md:h-32 rounded-full mb-4"
                      style={{ backgroundColor: '#696969' }}
                    ></div>
                    <p className="text-brand-dark text-20 font-medium">MOOD GRAY</p>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-full h-24 md:h-32 rounded-full mb-4"
                      style={{ backgroundColor: '#FFB6C1' }}
                    ></div>
                    <p className="text-brand-dark text-20 font-medium">SPARKLING PINK</p>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-full h-24 md:h-32 rounded-full mb-4"
                      style={{ backgroundColor: '#F5DEB3' }}
                    ></div>
                    <p className="text-brand-dark text-20 font-medium">LAZY BEIGE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 브랜드 로고 시스템 */}
            <div className="mb-16">
              <h3 className="text-brand-blue font-KoPubWorldBatang section-subtitle md:text-2xl mb-8">
                LOGO SYSTEM
              </h3>
              <div className="mb-8">
                <p className="text-brand-dark text-20 mb-4">
                  호텔런드리의 심볼은 호텔의 클래식한 무드에 패셔너블한 감성을 결합하여 트렌디하고
                  직관적인 방식으로 브랜드 이미지를 전달합니다.
                </p>
              </div>

              {/* Primary Logo */}
              <div>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* 로고 1 - 영문 */}
                  <div className="bg-white rounded-xl p-8 shadow-sm text-center">
                    <div className="mb-6">
                      <img
                        src={`${ASSET_URL}/image/logo.png`}
                        alt="HOTEL LAUNDRY Logo"
                        className="w-full h-auto max-h-48 mx-auto"
                      />
                    </div>
                    <p className="text-brand-dark text-20">영문 로고</p>
                  </div>

                  {/* 로고 2 - 한국어 */}
                  <div className="bg-white rounded-xl p-8 shadow-sm text-center">
                    <div className="mb-6">
                      <img
                        src={`${ASSET_URL}/image/logo-kr.png`}
                        alt="호텔 런드리 로고"
                        className="w-full h-auto max-h-48 mx-auto"
                      />
                    </div>
                    <p className="text-brand-dark text-20">한국어 로고</p>
                  </div>
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
