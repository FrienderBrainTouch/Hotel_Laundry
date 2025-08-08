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
      <div className=" mx-auto px-4">
        {/* 제목 */}
        <div className="text-center mb-12">
          <h1 
            className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold mb-3"
            style={{
              color: '#000',
              fontFamily: 'KoPubWorldDotum, sans-serif',
              fontWeight: 700,
              lineHeight: 'normal'
            }}
          >
            스마트 수익 모델
          </h1>
          
          {/* 부제목 */}
          <p 
            className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]"
            style={{
              color: '#000',
              fontFamily: 'KoPubWorldDotum, sans-serif',
              fontWeight: 500,
              lineHeight: 'normal'
            }}
          >
            기술이 만든 실질적인 매출 증대 효과
          </p>
        </div>

        {/* 카드 컨테이너 */}
        <div className="flex justify-center">
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            style={{ 
              maxWidth: '1400px',
              gap: '20px'
            }}
          >
            {/* 카드 1: 장비 원격제어 */}
            <div 
              className="flex flex-col"
              style={{
                width: '335px',
                height: '260px',
                flexShrink: 0,
                borderRadius: '10px',
                background: '#FFF',
                boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.25)',
                padding: '41px 35px 30px 35px'
              }}
            >
                             <div className="flex flex-col items-start">
                 <div 
                   style={{
                     width: '80px',
                     height: '80px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center'
                   }}
                 >
                   <img 
                     src="/images/SmartSystem/smartmodel-1.svg" 
                     alt="장비 원격제어" 
                     style={{
                       width: '80px',
                       height: '80px',
                       flexShrink: 0,
                       aspectRatio: '1/1',
                       filter: 'brightness(0) saturate(100%) invert(8%) sepia(10%) saturate(7482%) hue-rotate(214deg) brightness(95%) contrast(101%)',
                       opacity: '0.5'
                     }}
                   />
                 </div>
                <h3 
                  className="mt-8 mb-1"
                  style={{
                    color: '#000',
                    fontFamily: 'KoPubWorldDotum, sans-serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    lineHeight: 'normal'
                  }}
                >
                  장비 원격제어
                </h3>
                <p 
                  style={{
                    color: '#000',
                    fontFamily: 'KoPubWorldDotum, sans-serif',
                    fontSize: '20px',
                    fontWeight: 500,
                    lineHeight: 'normal'
                  }}
                >
                  스마트폰으로 제어 및 진단
                </p>
              </div>
            </div>

            {/* 카드 2: 세탁조 살균 */}
            <div 
              className="flex flex-col"
              style={{
                width: '335px',
                height: '260px',
                flexShrink: 0,
                borderRadius: '10px',
                background: '#FFF',
                boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.25)',
                padding: '41px 35px 30px 35px'
              }}
            >
                             <div className="flex flex-col items-start">
                 <div 
                   style={{
                     width: '80px',
                     height: '80px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center'
                   }}
                 >
                   <img 
                     src="/images/SmartSystem/smartmodel-2.svg" 
                     alt="세탁조 살균" 
                     style={{
                       width: '67px',
                       height: '67px',
                       flexShrink: 0,
                       aspectRatio: '1/1',
                       filter: 'brightness(0) saturate(100%) invert(8%) sepia(10%) saturate(7482%) hue-rotate(214deg) brightness(95%) contrast(101%)',
                       opacity: '0.5'
                     }}
                   />
                 </div>
                <h3 
                  className="mt-8 mb-1"
                  style={{
                    color: '#000',
                    fontFamily: 'KoPubWorldDotum, sans-serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    lineHeight: 'normal'
                  }}
                >
                  세탁조 살균
                </h3>
                <p 
                  style={{
                    color: '#000',
                    fontFamily: 'KoPubWorldDotum, sans-serif',
                    fontSize: '20px',
                    fontWeight: 500,
                    lineHeight: 'normal'
                  }}
                >
                  HOCL 살균수, 매회 자동 세척
                </p>
              </div>
            </div>

            {/* 카드 3: 장비 예약 */}
            <div 
              className="flex flex-col"
              style={{
                width: '335px',
                height: '260px',
                flexShrink: 0,
                borderRadius: '10px',
                background: '#FFF',
                boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.25)',
                padding: '41px 35px 30px 35px'
              }}
            >
                             <div className="flex flex-col items-start">
                 <div 
                   style={{
                     width: '80px',
                     height: '80px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center'
                   }}
                 >
                   <img 
                     src="/images/SmartSystem/smartmodel-3.svg" 
                     alt="장비 예약" 
                     style={{
                       width: '73px',
                       height: '73px',
                       flexShrink: 0,
                       aspectRatio: '1/1',
                       filter: 'brightness(0) saturate(100%) invert(8%) sepia(10%) saturate(7482%) hue-rotate(214deg) brightness(95%) contrast(101%)',
                       opacity: '0.5'
                     }}
                   />
                 </div>
                <h3 
                  className="mt-8 mb-1"
                  style={{
                    color: '#000',
                    fontFamily: 'KoPubWorldDotum, sans-serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    lineHeight: 'normal'
                  }}
                >
                  장비 예약
                </h3>
                <p 
                  style={{
                    color: '#000',
                    fontFamily: 'KoPubWorldDotum, sans-serif',
                    fontSize: '20px',
                    fontWeight: 500,
                    lineHeight: 'normal'
                  }}
                >
                  앱 통해 시간 예약 가능
                </p>
              </div>
            </div>

            {/* 카드 4: 정산 리포트 제공 */}
            <div 
              className="flex flex-col"
              style={{
                width: '335px',
                height: '260px',
                flexShrink: 0,
                borderRadius: '10px',
                background: '#FFF',
                boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.25)',
                padding: '41px 35px 30px 35px'
              }}
            >
                             <div className="flex flex-col items-start">
                 <div 
                   style={{
                     width: '80px',
                     height: '80px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center'
                   }}
                 >
                   <img 
                     src="/images/SmartSystem/smartmodel-4.svg" 
                     alt="정산 리포트 제공" 
                     style={{
                       width: '78px',
                       height: '78px',
                       flexShrink: 0,
                       aspectRatio: '1/1',
                       filter: 'brightness(0) saturate(100%) invert(8%) sepia(10%) saturate(7482%) hue-rotate(214deg) brightness(95%) contrast(101%)',
                       opacity: '0.5'
                     }}
                   />
                 </div>
                <h3 
                  className="mt-8 mb-1"
                  style={{
                    color: '#000',
                    fontFamily: 'KoPubWorldDotum, sans-serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    lineHeight: 'normal'
                  }}
                >
                  정산 리포트 제공
                </h3>
                <p 
                  style={{
                    color: '#000',
                    fontFamily: 'KoPubWorldDotum, sans-serif',
                    fontSize: '20px',
                    fontWeight: 500,
                    lineHeight: 'normal'
                  }}
                >
                  가맹점 전용 정산 리포트 제공
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartRevenue;
