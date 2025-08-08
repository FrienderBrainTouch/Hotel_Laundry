import React from 'react';

const AutomationSolutions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="max-w-8xl mx-auto px-4">
          {/* 제목 */}
          <div className="text-center mb-16">
            <h1 
              className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] mb-3"
              style={{
                color: '#1C262B',
                fontFamily: 'KoPubWorldDotum, sans-serif',
                fontWeight: 700,
                lineHeight: 'normal'
              }}
            >
              운영 자동화 솔루션
            </h1>

            {/* 부제목 */}
            <p 
              className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]"
              style={{
                color: '#1C262B',
                fontFamily: 'KoPubWorldDotum, sans-serif',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              점주의 수고를 줄이고 수익은 더하는 운영
            </p>
          </div>

          {/* 컨텐츠 영역 - 3행 2열 */}
          <div className="max-w-[1400px] mx-auto">
            <div 
              className="grid grid-rows-3 gap-8"
              style={{
                gridTemplateColumns: '600px 1fr'
              }}
            >
              {/* 첫 번째 칸 (1행 1열) - 이미지 */}
              <div className="flex justify-start items-center">
                <div 
                  className="flex-shrink-0"
                  style={{
                    width: '600px',
                    height: '400px',
                    borderRadius: '50px',
                    background: '#D9D9D9'
                  }}
                >
                  <img 
                    src="/images/SmartSystem/smart-3-1.png" 
                    alt="운영 자동화 솔루션"
                    className="w-full h-full object-cover rounded-[50px]"
                  />
                </div>
              </div>

              {/* 두 번째 칸 (1행 2열) - 텍스트 */}
              <div className="flex flex-col justify-center">
                <h3 
                  className="mb-5"
                  style={{
                    color: '#1C262B',
                    fontFamily: 'KoPubWorldDotum, sans-serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    lineHeight: 'normal'
                  }}
                >
                  24시간 중앙관제 시스템
                </h3>
                <div 
                  style={{
                    color: '#1C262B',
                    fontFamily: 'KoPubWorldDotum, sans-serif',
                    fontSize: '20px',
                    fontWeight: 500,
                    lineHeight: 'normal'
                  }}
                >
                  <p className="mb-2">• 본사에서 매장 내 세탁기, 건조기, 키오스크 등 모든 장비의 상태를 원격으로 실시간 모니터링</p>
                  <p className="mb-2">• 기기 오류 발생 시 원격으로 초기화 및 재부팅 가능, 현장 방문 없이 문제 해결</p>
                  <p>• 야간 또는 점주 부재 시에도 본사 관제팀이 즉시 대응하여 운영 안정성 확보</p>
                </div>
              </div>

              {/* 세 번째 칸 (2행 1열) - 텍스트 */}
              <div className="flex flex-col justify-center">
                <h3 
                  className="mb-5"
                  style={{
                    color: '#1C262B',
                    fontFamily: 'KoPubWorldDotum, sans-serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    lineHeight: 'normal'
                  }}
                >
                  무인 운영 최적화
                </h3>
                <div 
                  style={{
                    color: '#1C262B',
                    fontFamily: 'KoPubWorldDotum, sans-serif',
                    fontSize: '20px',
                    fontWeight: 500,
                    lineHeight: 'normal'
                  }}
                >
                  <p className="mb-2">• 통합 키오스크 시스템을 통한 무인 결제 및 세탁기 제어 기능 제공</p>
                  <p className="mb-2">• 카드, 모바일, 카카오페이 등 다양한 결제 수단 지원으로 고객 편의성 확보</p>
                  <p className="mb-2">• 직원 없이도 운영 가능해 소자본 또는 투잡 창업자에게 적합한 구조</p>
                  <p>• 24시간 운영 매장도 가능하여 시간 제약 없는 수익 창출 가능</p>
                </div>
              </div>

              {/* 네 번째 칸 (2행 2열) - 이미지 */}
              <div className="flex justify-end items-center">
                <div 
                  className="flex-shrink-0"
                  style={{
                    width: '600px',
                    height: '400px',
                    borderRadius: '50px',
                    background: '#D9D9D9'
                  }}
                >
                  <img 
                    src="/images/SmartSystem/smart-3-1.png" 
                    alt="무인 운영 최적화"
                    className="w-full h-full object-cover rounded-[50px]"
                  />
                </div>
              </div>

              {/* 다섯 번째 칸 (3행 1열) - 이미지 */}
              <div className="flex justify-start items-center">
                <div 
                  className="flex-shrink-0"
                  style={{
                    width: '600px',
                    height: '400px',
                    borderRadius: '50px',
                    background: '#D9D9D9'
                  }}
                >
                  <img 
                    src="/images/SmartSystem/smart-3-1.png" 
                    alt="예약 시스템"
                    className="w-full h-full object-cover rounded-[50px]"
                  />
                </div>
              </div>

              {/* 여섯 번째 칸 (3행 2열) - 텍스트 */}
              <div className="flex flex-col justify-center">
                <h3 
                  className="mb-5"
                  style={{
                    color: '#1C262B',
                    fontFamily: 'KoPubWorldDotum, sans-serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    lineHeight: 'normal'
                  }}
                >
                  예약 시스템 기반 장비 가동률 향상
                </h3>
                <div 
                  style={{
                    color: '#1C262B',
                    fontFamily: 'KoPubWorldDotum, sans-serif',
                    fontSize: '20px',
                    fontWeight: 500,
                    lineHeight: 'normal'
                  }}
                >
                  <p className="mb-2">• 전용 앱을 통한 세탁기 예약 기능으로 혼잡 시간대 대기 문제 해소</p>
                  <p className="mb-2">• 낮 시간대, 심야 시간대 등 비혼잡 시간에 자동 할인 적용 → 고객 분산 유도</p>
                  <p className="mb-2">• 기존 대비 장비 가동률 2배, 매출 1.5배 증가 실현 (호텔런드리 자체 통계 기반)</p>
                  <p>• 반복 방문 유도 및 고객 이탈 방지로 충성도 높은 고객층 확보</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSolutions;
