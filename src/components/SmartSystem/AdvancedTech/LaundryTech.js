import React from 'react';

const LaundryTech = () => {
  return (
    <div className="mb-20">
      {/* 섹션 타이틀 */}
      <div className="text-center mb-16">
        <h2 className="section-title md:text-3xl lg:text-4xl font-bold text-brand-blue font-KoPubWorldBatang mb-6">
          혁신 기술로 빨래방의 기존 문제점 완전 해결
        </h2>
        <p className="section-subtitle md:text-24 text-brand-dark leading-relaxed max-w-4xl mx-auto">
          호텔런드리는 세탁 산업의 혁신을 위해 최첨단 기술을 도입하여
          <br />
          고객과 점주 모두에게 큰 만족을 드리고 있습니다.
        </p>
      </div>

      {/* IoT 복합플랫폼 다이어그램 */}
      <div className="p-8 md:p-12 lg:p-16">
        {/* 그래프 타이틀 */}
        <div className="text-center mb-8">
          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-brand-blue font-KoPubWorldBatang"
            style={{ fontSize: 'clamp(1rem, 2vw, 2.5rem)' }}
          >
            IoT 복합플랫폼
          </p>
        </div>

        <div className="flex justify-center items-center mb-16">
          <div className="w-72 h-72 xs:w-80 xs:h-80 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px]">
            <img
              src="/images/hotel-tech.png"
              alt="IoT 복합플랫폼 도넛 그래프"
              className="w-full h-full object-contain"
              // style={{
              //   filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
              // }}
            />
          </div>
        </div>

        {/* 기존 문제점과 해결방안 */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* 기존 문제점 */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <h3
                className="font-bold text-black mb-2"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 2.5rem)',
                  lineHeight: '1.2',
                }}
              >
                첨단기술로 <span className="text-red-600">기존 장비의</span> 큰 불편한 문제 해결!
              </h3>
              <div
                className="text-red-500 font-bold"
                style={{
                  textAlign: 'left',
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                }}
              >
                기존 문제점
              </div>
            </div>

            <div className="space-y-4 text-gray-700">
              <div className="bg-white p-4 rounded-lg border border-red-100">
                <p className="text-base md:text-lg leading-relaxed">
                  동전 걸림 현상 및 장비 오류 문제로 문제 발생 → 문제 발생시 점주가 직접 매장을 나가
                  문제를 해결
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-red-100">
                <p className="text-base md:text-lg leading-relaxed">
                  문제 해결 전까지 해당 장비는 이용불가 → 그로 인한 손실
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-red-100">
                <p className="text-base md:text-lg leading-relaxed">
                  즉시 해결이 안 되는 문제 → 추가 고객 민원 발생
                </p>
              </div>
              <div className="bg-red-100 p-4 rounded-lg">
                <p className="text-base md:text-lg font-medium text-red-800">
                  점주는 이 부분에서 큰 스트레스, 고객은 매장 호감도 감소
                </p>
              </div>
            </div>
          </div>

          {/* 문제해결 */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <h3
                className="font-bold text-black mb-2"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 2.5rem)',
                  lineHeight: '1.2',
                }}
              >
                IOT 복합플랫폼 & 장비 자동화 솔루션으로 완벽한 문제 해결!
              </h3>
              <div
                className="text-green-600 font-bold"
                style={{
                  textAlign: 'left',
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                }}
              >
                문제해결
              </div>
            </div>

            <div className="space-y-4 text-gray-700">
              <div className="bg-white p-4 rounded-lg border border-green-100">
                <p className="text-base md:text-lg leading-relaxed">
                  장비에 문제가 생길 경우 고객이 버튼 하나로 바로 처리할 수도 있고,
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-100">
                <p className="text-base md:text-lg leading-relaxed">
                  콜센터 원격 대응으로 문제 실시간 해결
                </p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-base md:text-lg font-medium text-green-800 mb-4">
                  고객과 점주 모두에게 큰 만족
                </p>
                <div className="space-y-2 text-sm md:text-base">
                  <p className="font-medium">점주 → 긴급한 매장 출동 원인 사라짐</p>
                  <p className="font-medium">고객 → 서비스 만족도 상승 → 신뢰성 향상</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 매출의 한계 돌파 - 추가 섹션 */}
        <div className="max-w-6xl mx-auto space-y-12 mt-20">
          {/* 메인 제목 */}
          <div className="text-center mb-12">
            <h2
              className="font-bold text-gray-900"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                lineHeight: '1.2',
              }}
            >
              첨단기술로 매출의 한계 돌파!
            </h2>
          </div>

          {/* 기존 문제점 */}
          <div className="bg-white border-2 border-red-300 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="mb-6">
              <div
                className="text-red-500 font-bold mb-4"
                style={{
                  textAlign: 'left',
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                }}
              >
                기존 문제점
              </div>
              <ul className="list-none space-y-3 text-gray-800">
                <li
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}
                >
                  자판기식 무인빨래방은 고객관리 개념이 없고,
                </li>
                <li
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}
                >
                  고객이 오기만 바라는 소극적 판매
                </li>
              </ul>
            </div>
          </div>

          {/* 하향 화살표 */}
          <div className="flex justify-center my-8">
            <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* 해결방안 제목 */}
          <div className="text-center mb-8">
            <h3
              className="font-bold text-gray-900"
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 2.5rem)',
                lineHeight: '1.2',
              }}
            >
              AI운영체계 + O2O스마트시스템으로 수익성 극대화!
            </h3>
          </div>

          {/* 문제해결 */}
          <div className="bg-white border-2 border-red-300 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="mb-6">
              <div
                className="text-red-500 font-bold mb-4"
                style={{
                  textAlign: 'left',
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                }}
              >
                문제해결
              </div>
              <div className="space-y-4 text-gray-800">
                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}
                >
                  호텔런드리는 첨단 AI운영체계와 O2O스마트시스템은
                  <br />
                  고객 사용 패턴을 분석하여 데이터화 → 쿠폰 시스템과 연동 → 맞춤형 쿠폰 제공
                </p>
                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}
                >
                  고객 이탈을 막기 위해 실시간 장비 가동현황 → 어플 제공
                </p>
                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}
                >
                  사전 예약 기능 → 대기시간 불필요 / 헛걸음 없는 무인 빨래방 시스템
                </p>
                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}
                >
                  이런시스템은
                  <br />
                  타 빨래방 보다 현저히 높은 장비 가동율을 보여주고,
                  <br />
                  결과로 높은 매출과 수익을 만들어 내고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaundryTech;
