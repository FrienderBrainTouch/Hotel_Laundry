import React from 'react';

const SmartRevenue = () => {
  return (
    <section
      className="py-20"
      style={{
        background: 'rgba(238, 243, 255, 0.73)',
        minHeight: '600px'
      }}
    >
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 제목 */}
          <div className="text-center mb-12">
            <h1 className="section-title font-bold mb-3 text-brand-dark font-koPubWorldDotum">
              스마트 수익 모델
            </h1>

            {/* 부제목 */}
            <p className="section-subtitle text-brand-dark font-koPubWorldDotum font-medium">
              기술이 만든 실질적인 매출 증대 효과
            </p>
          </div>

          {/* 카드 컨테이너 */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 lg:gap-3 xl:gap-5 2xl:gap-5 max-w-[1400px]">
              {/* 카드 1: 장비 원격제어 */}
              <div className="flex flex-col bg-white rounded-[10px] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] p-5 sm:p-6 md:p-7 lg:p-5 xl:p-6 2xl:p-10 w-full xs:w-[310px] sm:w-[250px] md:w-[330px] lg:w-[200px] xl:w-[280px] 2xl:w-[320px] h-[180px] sm:h-[180px] md:h-[220px] lg:h-[220px] xl:h-[250px] 2xl:h-[260px]">
                <div className="flex flex-col items-start">
                  <div className="flex items-center justify-center w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[65px] lg:h-[65px] xl:w-[75px] xl:h-[75px] 2xl:w-[80px] 2xl:h-[80px]">
                    <img
                      src="/images/SmartSystem/smartmodel-1.svg"
                      alt="장비 원격제어"
                      className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[65px] lg:h-[65px] xl:w-[75px] xl:h-[75px] 2xl:w-[80px] 2xl:h-[80px] flex-shrink-0 aspect-square opacity-50"
                      style={{
                        filter: 'brightness(0) saturate(100%) invert(8%) sepia(10%) saturate(7482%) hue-rotate(214deg) brightness(95%) contrast(101%)'
                      }}
                    />
                  </div>
                  <h3 className="text-20 sm:text-22 md:text-24 lg:text-20 xl:text-28 2xl:text-28 font-bold text-brand-dark font-koPubWorldDotum mt-3 sm:mt-3.5 md:mt-4 lg:mt-3.5 xl:mt-4.5 2xl:mt-5 mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-1.5 xl:mb-2 2xl:mb-2">
                    장비 원격제어
                  </h3>
                  <p className="text-20 sm:text-22 md:text-24 lg:text-22 xl:text-24 2xl:text-28 text-brand-dark font-koPubWorldDotum font-medium leading-[1.4]">
                    스마트폰으로 제어 및 진단
                  </p>
                </div>
              </div>

              {/* 카드 2: 세탁조 살균 */}
              <div className="flex flex-col bg-white rounded-[10px] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] p-5 sm:p-6 md:p-7 lg:p-5 xl:p-6 2xl:p-10 w-full xs:w-[310px] sm:w-[250px] md:w-[330px] lg:w-[200px] xl:w-[280px] 2xl:w-[320px] h-[180px] sm:h-[180px] md:h-[220px] lg:h-[220px] xl:h-[250px] 2xl:h-[260px]">
                <div className="flex flex-col items-start">
                  <div className="flex items-center justify-center w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[65px] lg:h-[65px] xl:w-[75px] xl:h-[75px] 2xl:w-[80px] 2xl:h-[80px]">
                    <img
                      src="/images/SmartSystem/smartmodel-2.svg"
                      alt="세탁조 살균"
                      className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[55px] lg:h-[55px] xl:w-[65px] xl:h-[65px] 2xl:w-[67px] 2xl:h-[67px] flex-shrink-0 aspect-square opacity-50"
                      style={{
                        filter: 'brightness(0) saturate(100%) invert(8%) sepia(10%) saturate(7482%) hue-rotate(214deg) brightness(95%) contrast(101%)'
                      }}
                    />
                  </div>
                  <h3 className="text-20 sm:text-22 md:text-24 lg:text-20 xl:text-28 2xl:text-28 font-bold text-brand-dark font-koPubWorldDotum mt-3 sm:mt-3.5 md:mt-4 lg:mt-3.5 xl:mt-4.5 2xl:mt-5 mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-1.5 xl:mb-2 2xl:mb-2">
                    세탁조 살균
                  </h3>
                  <p className="text-20 sm:text-22 md:text-24 lg:text-22 xl:text-24 2xl:text-28 text-brand-dark font-koPubWorldDotum font-medium leading-[1.4]">
                    HOCL 살균수, 매회 자동 세척
                  </p>
                </div>
              </div>

              {/* 카드 3: 장비 예약 */}
              <div className="flex flex-col bg-white rounded-[10px] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] p-5 sm:p-6 md:p-7 lg:p-5 xl:p-6 2xl:p-10 w-full xs:w-[310px] sm:w-[250px] md:w-[330px] lg:w-[200px] xl:w-[280px] 2xl:w-[320px] h-[180px] sm:h-[180px] md:h-[220px] lg:h-[220px] xl:h-[250px] 2xl:h-[260px]">
                <div className="flex flex-col items-start">
                  <div className="flex items-center justify-center w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[65px] lg:h-[65px] xl:w-[75px] xl:h-[75px] 2xl:w-[80px] 2xl:h-[80px]">
                    <img
                      src="/images/SmartSystem/smartmodel-3.svg"
                      alt="장비 예약"
                      className="w-[55px] h-[55px] md:w-[65px] md:h-[65px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] 2xl:w-[73px] 2xl:h-[73px] flex-shrink-0 aspect-square opacity-50"
                      style={{
                        filter: 'brightness(0) saturate(100%) invert(8%) sepia(10%) saturate(7482%) hue-rotate(214deg) brightness(95%) contrast(101%)'
                      }}
                    />
                  </div>
                  <h3 className="text-20 sm:text-22 md:text-24 lg:text-20 xl:text-28 2xl:text-28 font-bold text-brand-dark font-koPubWorldDotum mt-3 sm:mt-3.5 md:mt-4 lg:mt-3.5 xl:mt-4.5 2xl:mt-5 mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-1.5 xl:mb-2 2xl:mb-2">
                    장비 예약
                  </h3>
                  <p className="text-20 sm:text-22 md:text-24 lg:text-22 xl:text-24 2xl:text-28 text-brand-dark font-koPubWorldDotum font-medium leading-[1.4]">
                    앱 통해 시간 예약 가능
                  </p>
                </div>
              </div>

              {/* 카드 4: 정산 리포트 제공 */}
              <div className="flex flex-col bg-white rounded-[10px] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] p-5 sm:p-6 md:p-7 lg:p-5 xl:p-6 2xl:p-10 w-full xs:w-[310px] sm:w-[250px] md:w-[330px] lg:w-[200px] xl:w-[280px] 2xl:w-[320px] h-[180px] sm:h-[180px] md:h-[220px] lg:h-[220px] xl:h-[250px] 2xl:h-[260px]">
                <div className="flex flex-col items-start">
                  <div className="flex items-center justify-center w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[65px] lg:h-[65px] xl:w-[75px] xl:h-[75px] 2xl:w-[80px] 2xl:h-[80px]">
                    <img
                      src="/images/SmartSystem/smartmodel-4.svg"
                      alt="정산 리포트 제공"
                      className="w-[58px] h-[58px] md:w-[68px] md:h-[68px] lg:w-[63px] lg:h-[63px] xl:w-[73px] xl:h-[73px] 2xl:w-[78px] 2xl:h-[78px] flex-shrink-0 aspect-square opacity-50"
                      style={{
                        filter: 'brightness(0) saturate(100%) invert(8%) sepia(10%) saturate(7482%) hue-rotate(214deg) brightness(95%) contrast(101%)'
                      }}
                    />
                  </div>
                  <h3 className="text-20 sm:text-22 md:text-24 lg:text-20 xl:text-28 2xl:text-28 font-bold text-brand-dark font-koPubWorldDotum mt-3 sm:mt-3.5 md:mt-4 lg:mt-3.5 xl:mt-4.5 2xl:mt-5 mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-1.5 xl:mb-2 2xl:mb-2">
                    정산 리포트 제공
                  </h3>
                  <p className="text-20 sm:text-22 md:text-24 lg:text-22 xl:text-24 2xl:text-28 text-brand-dark font-koPubWorldDotum font-medium leading-[1.4]">
                    가맹점 전용 정산 리포트 제공
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

export default SmartRevenue;
