import React from 'react';

const Section4 = () => {
  return (
    <section 
      className="py-16 relative"
      style={{
        backgroundImage: 'url(/images/CompanyInfo/Company-gradient.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[1400px] mx-auto text-center">
          {/* 로고 */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/images/logo.svg" 
              alt="Hotel Laundry Logo"
              style={{
                width: '145px',
                height: '90px',
                flexShrink: 0,
                aspectRatio: '29/18'
              }}
            />
          </div>
          
          {/* 텍스트 내용 */}
          <div className="text-white">
            <p 
              style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'KoPubWorldDotum',
                fontSize: '28px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
                letterSpacing: '-0.56px',
              }}
            >
              호텔런드리는 세탁을 단순한 가사노동이 아닌 고객에게는 편안한 라이프스타일,
              <br />
              창업자에게는 안정적인 비즈니스 모델로 제안합니다.
            </p>
            
            <p 
              style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'KoPubWorldDotum',
                fontSize: '28px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
                letterSpacing: '-0.56px',
              }}
            >
              머물고 싶은 공간, 믿고 맡길 수 있는 서비스, 누구나 쉽게 운영할 수 있는 시스템까지.
            </p>
            
            <p 
              style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'KoPubWorldDotum',
                fontSize: '28px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
                letterSpacing: '-0.56px'
              }}
            >
              호텔런드리는 세탁의 모든 과정을 스마트하게{' '}
              <span 
                style={{
                  color: '#102254',
                  fontFamily: 'KoPubWorldDotum',
                  fontSize: '28px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  letterSpacing: '-0.56px'
                }}
              >
                설계
              </span>
              하고 브랜드 가치를{' '}
              <span 
                style={{
                  color: '#102254',
                  fontFamily: 'KoPubWorldDotum',
                  fontSize: '28px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  letterSpacing: '-0.56px'
                }}
              >
                공간
              </span>
              과{' '}
              <span 
                style={{
                  color: '#102254',
                  fontFamily: 'KoPubWorldDotum',
                  fontSize: '28px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  letterSpacing: '-0.56px'
                }}
              >
                기술
              </span>
              로 완성합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
