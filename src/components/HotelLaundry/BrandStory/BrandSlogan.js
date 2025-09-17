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
                  "A GOOD DAY TO DO LAUNDRY"
                </h2>
                <p className="text-brand-dark text-20 md:text-xl leading-relaxed">
                  호텔런드리는 기존 코인 빨래방의 차갑고 기계적인 이미지를 탈피하여
                  <br className="hidden md:block" />
                  부티크 호텔급 세탁 공간으로 재해석한 브랜드입니다.
                </p>
              </div>
            </div>

            {/* 디자인 키워드 */}
            <div className="mb-16">
              <h3 className="text-brand-blue font-KoPubWorldBatang section-subtitle md:text-2xl mb-12 text-center">
                디자인 키워드
              </h3>

              {/* DESIGN KEYWORD 1 - SUPER CARE */}
              <div className="bg-gray-800 rounded-2xl p-8 md:p-12 mb-8 text-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold mb-4">DESIGN KEYWORD_1</h4>
                    <p className="text-xl md:text-2xl font-medium mb-6 text-blue-300">
                      "고객은 오감을 만족 할 자격이 있다."
                    </p>
                    <p className="text-lg leading-relaxed">
                      특급 호텔 케어 서비스를 받는 것 같은 고객의 오감을 만족시킬 경험을 제공하여
                      호텔 런드리만의 고급스러우며 스페셜한 가치를 누릴 수 있도록 전달합니다.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-6xl font-bold text-blue-300 mb-4">
                      SUPER CARE
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 h-24 flex items-center justify-center">
                        <span className="text-gray-600 text-sm">고급 세탁기</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 h-24 flex items-center justify-center">
                        <span className="text-gray-600 text-sm">프리미엄 향수</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 h-24 flex items-center justify-center">
                        <span className="text-gray-600 text-sm">정리된 공간</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 h-24 flex items-center justify-center">
                        <span className="text-gray-600 text-sm">호텔급 서비스</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DESIGN KEYWORD 2 - FASHIONABLE */}
              <div className="bg-gray-800 rounded-2xl p-8 md:p-12 mb-8 text-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold mb-4">DESIGN KEYWORD_2</h4>
                    <p className="text-xl md:text-2xl font-medium mb-6 text-purple-300">
                      "패셔니스타는 트렌드에 끌린다."
                    </p>
                    <p className="text-lg leading-relaxed">
                      트렌드에 매우 민감한 20-30대 주 고객층에게 기존 코인 빨래방과의 가장 큰
                      차별점인 시스템적인 서비스와 감각적인 디자인으로 접근해 신선함과 패셔너블함을
                      전달합니다.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-6xl font-bold text-purple-300 mb-4">
                      FASHIONABLE
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 h-24 flex items-center justify-center">
                        <span className="text-gray-600 text-sm">트렌디한 키</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 h-24 flex items-center justify-center">
                        <span className="text-gray-600 text-sm">패션 아이템</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 h-24 flex items-center justify-center">
                        <span className="text-gray-600 text-sm">체크아웃</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 h-24 flex items-center justify-center">
                        <span className="text-gray-600 text-sm">스타일링</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DESIGN KEYWORD 3 - BOUTIQUE HOTEL */}
              <div className="bg-gray-800 rounded-2xl p-8 md:p-12 mb-8 text-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold mb-4">DESIGN KEYWORD_3</h4>
                    <p className="text-xl md:text-2xl font-medium mb-6 text-amber-300">
                      "코인 빨래방의 고정관념을 탈피하다."
                    </p>
                    <p className="text-lg leading-relaxed">
                      기존 코인 빨래방의 차갑고 기계적인 느낌을 탈피하여 부티크 호텔 만의 안락하고
                      여유로운 무드를 녹여 단지 세탁을 하러가는 것 뿐만 아니라 머물고 싶은 힐링
                      공간으로서의 그 가치를 전달합니다.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-6xl font-bold text-amber-300 mb-4">
                      BOUTIQUE HOTEL
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 h-24 flex items-center justify-center">
                        <span className="text-gray-600 text-sm">작업 공간</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 h-24 flex items-center justify-center">
                        <span className="text-gray-600 text-sm">화장대</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 h-24 flex items-center justify-center">
                        <span className="text-gray-600 text-sm">휴식 공간</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 h-24 flex items-center justify-center">
                        <span className="text-gray-600 text-sm">고급 소재</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 브랜드 키워드 */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-brand-light-blue">
              <h3 className="text-brand-blue font-KoPubWorldBatang section-subtitle md:text-2xl mb-8 text-center">
                브랜드 기획 키워드
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className="text-brand-blue font-KoPubWorldBatang text-xl mb-4">
                    STYLISH 20's
                  </h4>
                  <p className="text-brand-dark text-20 leading-relaxed">
                    전통성과 트렌드를 결합한
                    <br />
                    뉴클래식 스타일
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="text-brand-blue font-KoPubWorldBatang text-xl mb-4">
                    SPECIAL CARE
                  </h4>
                  <p className="text-brand-dark text-20 leading-relaxed">
                    단순 세탁을 넘어 체계적 예약·옷 케어
                    <br />
                    서비스 제공
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="text-brand-blue font-KoPubWorldBatang text-xl mb-4">
                    CLEAN WASH & SPACE
                  </h4>
                  <p className="text-brand-dark text-20 leading-relaxed">
                    기존 빨래방의 불편함 해소,
                    <br />
                    여유로운 공간 지향
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

export default BrandSlogan;
