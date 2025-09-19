import React from 'react';
import noperSonOperationImg from '../image/NoperSonOperation.png';
import reservationImg from '../image/reservation.png';


const AutomationSolutions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 제목 */}
          <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-16 2xl:mb-20">
            <h1
              className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] mb-3 font-bold leading-normal text-[#1C262B] font-['KoPubWorldDotum']"
            >
              운영 자동화 솔루션
            </h1>

            {/* 부제목 */}
            <p
              className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-medium leading-normal text-[#1C262B] font-['KoPubWorldDotum']"
            >
              점주의 수고를 줄이고 수익은 더하는 운영
            </p>
          </div>

          {/* 컨텐츠 영역 */}
          <div className="w-full flex justify-center">
            {/* 1024px 이상 (lg, xl, 2xl) - 이미지-텍스트 배치 */}
            <div className="hidden xl:block">
              <div className="grid grid-rows-3 gap-8 lg:gap-10 xl:gap-12 2xl:gap-16" style={{ gridTemplateColumns: '600px 1fr' }}>
                {/* 첫 번째 칸 (1행 1열) - 이미지 */}
                <div className="flex justify-start items-center">
                  <div className="flex-shrink-0 w-[600px] h-[400px] rounded-[50px] bg-[#D9D9D9]">
                  <img
                      src="/images/SmartSystem/smart-3-1.png"
                      alt="무인 운영 최적화"
                      className="w-full h-full object-cover rounded-[50px]"
                    />
                  </div>
                </div>

                {/* 두 번째 칸 (1행 2열) - 텍스트 */}
                <div className="flex flex-col justify-center">
                  <h3 className="mb-5 text-[28px] font-bold leading-normal text-[#1C262B] font-['KoPubWorldDotum'] text-left">
                    24시간 중앙관제 시스템
                  </h3>
                  <ul className="text-[20px] font-medium leading-normal text-[#1C262B] font-['KoPubWorldDotum'] text-left list-disc list-outside pl-4 space-y-1">
                    <li>본사에서 매장 내 세탁기, 건조기, 키오스크 등 모든 장비의 상태를 원격으로 실시간 모니터링</li>
                    <li>기기 오류 발생 시 원격으로 초기화 및 재부팅 가능, 현장 방문 없이 문제 해결</li>
                    <li>야간 또는 점주 부재 시에도 본사 관제팀이 즉시 대응하여 운영 안정성 확보</li>
                  </ul>
                </div>

                {/* 세 번째 칸 (2행 1열) - 텍스트 */}
                <div className="flex flex-col justify-center">
                  <h3 className="mb-5 text-[28px] font-bold leading-normal text-[#1C262B] font-['KoPubWorldDotum'] text-left">
                    무인 운영 최적화
                  </h3>
                  <ul className="text-[20px] font-medium leading-normal text-[#1C262B] font-['KoPubWorldDotum'] text-left list-disc list-outside pl-4 space-y-1">
                    <li>통합 키오스크 시스템을 통한 무인 결제 및 세탁기 제어 기능 제공</li>
                    <li>카드, 모바일, 카카오페이 등 다양한 결제 수단 지원으로 고객 편의성 확보</li>
                    <li>직원 없이도 운영 가능해 소자본 또는 투잡 창업자에게 적합한 구조</li>
                    <li>24시간 운영 매장도 가능하여 시간 제약 없는 수익 창출 가능</li>
                  </ul>
                </div>

                {/* 네 번째 칸 (2행 2열) - 이미지 */}
                <div className="flex justify-end items-center">
                  <div className="flex-shrink-0 w-[600px] h-[400px] rounded-[50px] bg-[#D9D9D9]">
                  <img
                      src={noperSonOperationImg}
                      alt="예약 시스템"
                      className="w-full h-full object-cover rounded-[50px]"
                    />
                  </div>
                </div>

                {/* 다섯 번째 칸 (3행 1열) - 이미지 */}
                <div className="flex justify-start items-center">
                  <div className="flex-shrink-0 w-[600px] h-[400px] rounded-[50px] bg-[#D9D9D9]">
                      <img
                        src={reservationImg}
                        alt="예약 시스템"
                        className="w-full h-full object-cover rounded-[50px]"
                      />
                  </div>
                </div>

                {/* 여섯 번째 칸 (3행 2열) - 텍스트 */}
                <div className="flex flex-col justify-center">
                  <h3 className="mb-5 text-[28px] font-bold leading-normal text-[#1C262B] font-['KoPubWorldDotum'] text-left">
                    예약 시스템 기반 장비 가동률 향상
                  </h3>
                  <ul className="text-[20px] font-medium leading-normal text-[#1C262B] font-['KoPubWorldDotum'] text-left list-disc list-outside pl-4 space-y-1">
                    <li>전용 앱을 통한 세탁기 예약 기능으로 혼잡 시간대 대기 문제 해소</li>
                    <li>낮 시간대, 심야 시간대 등 비혼잡 시간에 자동 할인 적용 → 고객 분산 유도</li>
                    <li>기존 대비 장비 가동률 2배, 매출 1.5배 증가 실현 (호텔런드리 자체 통계 기반)</li>
                    <li>반복 방문 유도 및 고객 이탈 방지로 충성도 높은 고객층 확보</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 1024px 이하 (xs, sm, md, lg) - 세로 배치 */}
            <div className="xl:hidden space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14">
              {/* 첫 번째 섹션 */}
              <div>
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <div className="w-full xs:w-[355px] sm:w-[535px] md:w-[728px] mx-auto h-[200px] sm:h-[250px] md:h-[300px] rounded-[30px] sm:rounded-[40px] md:rounded-[40px] bg-[#D9D9D9]">
                    <img
                      src="/images/SmartSystem/smart-3-1.png"
                      alt="운영 자동화 솔루션"
                      className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[40px]"
                    />
                  </div>
                </div>
                <h3 className="mb-3 sm:mb-4 md:mb-5 text-[20px] sm:text-[22px] md:text-[24px] font-bold leading-normal text-[#1C262B] font-['KoPubWorldDotum'] text-left">
                  24시간 중앙관제 시스템
                </h3>
                <div className="text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-normal text-[#1C262B] font-['KoPubWorldDotum'] text-left">
                  {/* xs (375px 이하) - 가장 간단한 문구 */}
                  <ul className="xs:hidden list-disc list-outside pl-4 space-y-1">
                    <li>본사에서 매장 내 모든 장비를 실시간 모니터링</li>
                    <li>기기 오류 발생 시 현장 방문 없이 원격 해결</li>
                    <li>야간 또는 점주 부재 시에도 본사 즉시 대응</li>
                  </ul>
                  
                  {/* xs (375px~575px) - 간단한 문구 */}
                  <ul className="hidden xs:block sm:hidden list-disc list-outside pl-4 space-y-1">
                    <li>본사에서 매장 내 모든 장비의 상태를 원격으로 실시간 모니터링</li>
                    <li>기기 오류 발생 시 현장 방문 없이 문제 해결</li>
                    <li>야간 또는 점주 부재 시에도 본사 관제팀이 즉시 대응</li>
                  </ul>
                  
                  {/* sm (576px~767px) - 중간 문구 */}
                  <ul className="hidden sm:block md:hidden list-disc list-outside pl-4 space-y-1">
                    <li>본사에서 매장 내 세탁기, 건조기, 키오스크 등 모든 장비의 상태를 원격으로 실시간 모니터링</li>
                    <li>기기 오류 발생 시 원격으로 초기화 및 재부팅 가능, 현장 방문 없이 문제 해결</li>
                    <li>야간 또는 점주 부재 시에도 본사 관제팀이 즉시 대응하여 운영 안정성 확보</li>
                  </ul>
                  
                  {/* md 이상 (768px~1023px) - 상세한 문구 */}
                  <ul className="hidden md:block list-disc list-outside pl-4 space-y-1">
                    <li>본사에서 매장 내 세탁기, 건조기, 키오스크 등 모든 장비의 상태를 원격으로 실시간 모니터링</li>
                    <li>기기 오류 발생 시 원격으로 초기화 및 재부팅 가능, 현장 방문 없이 문제 해결</li>
                    <li>야간 또는 점주 부재 시에도 본사 관제팀이 즉시 대응하여 운영 안정성 확보</li>
                  </ul>
                </div>
              </div>

              {/* 두 번째 섹션 */}
              <div>
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <div className="w-full xs:w-[355px] sm:w-[535px] md:w-[728px] mx-auto h-[200px] sm:h-[250px] md:h-[300px] rounded-[30px] sm:rounded-[40px] md:rounded-[40px] bg-[#D9D9D9]">
                    <img
                      src="/images/SmartSystem/smart-3-1.png"
                      alt="무인 운영 최적화"
                      className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[40px]"
                    />
                  </div>
                </div>
                <h3 className="mb-3 sm:mb-4 md:mb-5 text-[20px] sm:text-[22px] md:text-[24px] font-bold leading-normal text-[#1C262B] font-['KoPubWorldDotum'] text-left">
                  무인 운영 최적화
                </h3>
                <div className="text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-normal text-[#1C262B] font-['KoPubWorldDotum'] text-left">
                  {/* xs (375px 이하) - 가장 간단한 문구 */}
                  <ul className="xs:hidden list-disc list-outside pl-4 space-y-1">
                    <li>키오스크 무인 결제 및 세탁기 제어 기능 제공</li>
                    <li>다양한 결제 수단 지원으로 고객 편의성 확보</li>
                    <li>소자본 또는 투잡 창업자에게 적합한 구조</li>
                    <li>24시간 운영 매장도 가능하여 수익 창출 가능</li>
                  </ul>
                  
                  {/* xs (375px~575px) - 간단한 문구 */}
                  <ul className="hidden xs:block sm:hidden list-disc list-outside pl-4 space-y-1">
                    <li>통합 키오스크 시스템을 통한 무인 결제 및 세탁기 제어 기능 제공</li>
                    <li>다양한 결제 수단 지원으로 고객 편의성 확보</li>
                    <li>직원 없이도 운영 가능해 소자본 또는 투잡 창업자에게 적합한 구조</li>
                    <li>24시간 운영 매장도 가능하여 시간 제약 없는 수익 창출 가능</li>
                  </ul>
                  
                  {/* sm (576px~767px) - 중간 문구 */}
                  <ul className="hidden sm:block md:hidden list-disc list-outside pl-4 space-y-1">
                    <li>통합 키오스크 시스템을 통한 무인 결제 및 세탁기 제어 기능 제공</li>
                    <li>다양한 결제 수단 지원으로 고객 편의성 확보</li>
                    <li>직원 없이도 운영 가능해 소자본 또는 투잡 창업자에게 적합한 구조</li>
                    <li>24시간 운영 매장도 가능하여 시간 제약 없는 수익 창출 가능</li>
                  </ul>
                  
                  {/* md 이상 (768px~1023px) - 상세한 문구 */}
                  <ul className="hidden md:block list-disc list-outside pl-4 space-y-1">
                    <li>통합 키오스크 시스템을 통한 무인 결제 및 세탁기 제어 기능 제공</li>
                    <li>카드, 모바일, 카카오페이 등 다양한 결제 수단 지원으로 고객 편의성 확보</li>
                    <li>직원 없이도 운영 가능해 소자본 또는 투잡 창업자에게 적합한 구조</li>
                    <li>24시간 운영 매장도 가능하여 시간 제약 없는 수익 창출 가능</li>
                  </ul>
                </div>
              </div>

              {/* 세 번째 섹션 */}
              <div>
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <div className="w-full xs:w-[355px] sm:w-[535px] md:w-[728px] mx-auto h-[200px] sm:h-[250px] md:h-[300px] rounded-[30px] sm:rounded-[40px] md:rounded-[40px] bg-[#D9D9D9]">
                    <img
                      src="/images/SmartSystem/smart-3-1.png"
                      alt="예약 시스템"
                      className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[40px]"
                    />
                  </div>
                </div>
                <h3 className="mb-3 sm:mb-4 md:mb-5 text-[20px] sm:text-[22px] md:text-[24px] font-bold leading-normal text-[#1C262B] font-['KoPubWorldDotum'] text-left">
                  예약 시스템 기반 장비 가동률 향상
                </h3>
                <div className="text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-normal text-[#1C262B] font-['KoPubWorldDotum'] text-left">
                  {/* xs (375px 이하) - 가장 간단한 문구 */}
                  <ul className="xs:hidden list-disc list-outside pl-4 space-y-1">
                    <li>전용 앱을 통한 혼잡 시간대 대기 문제 해소</li>
                    <li>비혼잡 시간에 자동 할인 적용 → 고객 분산 유도</li>
                    <li>기존 대비 장비 가동률 2배, 매출 1.5배 증가 실현 (호텔런드리 자체 통계 기반)</li>
                    <li>충성도 높은 고객층 확보</li>
                  </ul>
                  
                  {/* xs (375px~575px) - 간단한 문구 */}
                  <ul className="hidden xs:block sm:hidden list-disc list-outside pl-4 space-y-1">
                    <li>전용 앱을 통한 세탁기 예약 기능으로 혼잡 시간대 대기 문제 해소</li>
                    <li>비혼잡 시간에 자동 할인 적용 → 고객 분산 유도</li>
                    <li>기존 대비 장비 가동률 2배, 매출 1.5배 증가 실현 (호텔런드리 자체 통계 기반)</li>
                    <li>반복 방문 유도 및 고객 이탈 방지로 충성도 높은 고객층 확보</li>
                  </ul>
                  
                  {/* sm (576px~767px) - 중간 문구 */}
                  <ul className="hidden sm:block md:hidden list-disc list-outside pl-4 space-y-1">
                    <li>전용 앱을 통한 세탁기 예약 기능으로 혼잡 시간대 대기 문제 해소</li>
                    <li>비혼잡 시간에 자동 할인 적용 → 고객 분산 유도</li>
                    <li>기존 대비 장비 가동률 2배, 매출 1.5배 증가 실현 (호텔런드리 자체 통계 기반)</li>
                    <li>반복 방문 유도 및 고객 이탈 방지로 충성도 높은 고객층 확보</li>
                  </ul>
                  
                  {/* md 이상 (768px~1023px) - 상세한 문구 */}
                  <ul className="hidden md:block list-disc list-outside pl-4 space-y-1">
                    <li>전용 앱을 통한 세탁기 예약 기능으로 혼잡 시간대 대기 문제 해소</li>
                    <li>낮 시간대, 심야 시간대 등 비혼잡 시간에 자동 할인 적용 → 고객 분산 유도</li>
                    <li>기존 대비 장비 가동률 2배, 매출 1.5배 증가 실현 (호텔런드리 자체 통계 기반)</li>
                    <li>반복 방문 유도 및 고객 이탈 방지로 충성도 높은 고객층 확보</li>
                  </ul>
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
