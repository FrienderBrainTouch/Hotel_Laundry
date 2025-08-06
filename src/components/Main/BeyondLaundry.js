import React from 'react';

const BeyondLaundry = () => {
  const gridItems = [
    {
      title: "세탁기 모바일 예약 서비스",
      subtitle: "스마트폰 앱을 통해 원하는 시간에 세탁기를\n미리 예약할 수 있어 대기 없이 이용 가능"
    },
    {
      title: "실시간 세탁기 사용 현황 제공",
      subtitle: "현재 사용 가능한 기기의 상태를 실시간으로\n확인하고 선택할 수 있어 편리한 매장 이용 가능"
    },
    {
      title: "키오스크·앱 자유로운 결제",
      subtitle: "카드, 모바일, 포인트 결제까지 다양한 방식으로\n자유롭게 결제 가능한 무인 시스템"
    },
    {
      title: "세계 최초 셀프형 드라이클리닝",
      subtitle: "복잡했던 드라이클리닝을 누구나 쉽게\n이용할 수 있는 셀프 방식으로 구현"
    },
    {
      title: "모든 코스 프리미엄 살균수 제공",
      subtitle: "세탁 전과 후에 프리미엄 살균수를\n자동 투입하여 의류 위생 수준 향상"
    },
    {
      title: "고품질 세탁, 빠른 회전율 제공",
      subtitle: "장비 성능과 운영 설계 최적화로\n짧은 시간에도 우수한 세탁 품질 제공"
    },
    {
      title: "IoT 기반 실시간 제어·모니터링",
      subtitle: "본사에서 전국 매장을 원격 제어하며\n운영 안정성과 긴급 대응력 확보"
    },
    {
      title: "시간대별 할인 쿠폰 제공 및 적립",
      subtitle: "이용 시간에 따라 자동 적용되는 할인 혜택과\n마일리지 적립 시스템"
    },
    {
      title: "전 매장 24시간 통합 콜센터 운영",
      subtitle: "고객 문의, 장비 점검 요청 등 모든 문제를\n통합 창구에서 신속 대응"
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="px-4 w-full">
        {/* Title */}
        <h2 
          className="text-[36px] font-[500] text-[#1C262B] mb-4 text-center"
          style={{ fontFamily: 'KoPubWorldBatang, serif' }}
        >
          Beyond Laundry
        </h2>
        
        {/* Subtitle */}
        <p 
          className="text-[28px] font-[500] text-[#1C262B] mb-12 text-center"
          style={{ fontFamily: 'KoPubWorldDotum, serif' }}
        >
          기술과 경헙이 결합된 호텔런드리만의 프리미엄 세탁 시스템을 소개합니다.
        </p>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridItems.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-[20px] h-[23rem]">
              {/* Background Image */}
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/main-Images/main-Beyond.png)'
                }}
              />
              
              {/* Content Box */}
              <div 
                className="absolute bottom-0 left-0 right-0 p-10"
                style={{
                  borderRadius: '0 0 20px 20px',
                  background: '#102254'
                }}
              >
                <h3 
                  className="text-[26px] font-[700] text-white mb-2 text-left"
                  style={{ fontFamily: 'KoPubWorldDotum, serif' }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-[22px] font-[300] text-white text-left whitespace-pre-line"
                  style={{ fontFamily: 'KoPubWorldDotum, serif' }}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondLaundry; 