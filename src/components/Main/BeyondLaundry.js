import React, { useState, useEffect } from 'react';

const BeyondLaundry = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
      subtitle: "카드, 모바일, 포인트 결제까지 다양한\n방식으로 자유롭게 결제 가능한 무인 시스템",
      subtitle2xl: "카드, 모바일, 포인트 결제까지 다양한 방식으로\n자유롭게 결제 가능한 무인 시스템"
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
      subtitle: "이용 시간에 따라 자동 적용되는\n할인 혜택과 마일리지 적립 시스템",
      subtitle2xl: "이용 시간에 따라 자동 적용되는 할인 혜택과\n마일리지 적립 시스템"
    },
    {
      title: "전 매장 24시간 통합 콜센터 운영",
      subtitle: "고객 문의, 장비 점검 요청 등\n모든 문제를 통합 창구에서 신속 대응",
      subtitle2xl: "고객 문의, 장비 점검 요청 등 모든 문제를\n통합 창구에서 신속 대응"
    }
  ];

  // 슬라이드 자동 전환
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= 4) { // sm 이상에서는 5개 슬라이드 (0-4)
          return 0; // 마지막에서 첫 번째로
        }
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

    const renderGridItem = (item, index) => (
    <div key={index} className="relative overflow-hidden rounded-[20px] h-full">
      {/* Background Image */}
      <div 
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/main-Images/main-Beyond.png)'
        }}
      />
      
      {/* Content Box */}
      <div 
        className="absolute bottom-0 left-0 right-0 py-6 px-2"
        style={{
          borderRadius: '0 0 20px 20px',
          background: '#102254'
        }}
      >
        <h3 
          className="text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-[700] text-white mb-2 text-left"
          style={{ fontFamily: 'KoPubWorldDotum, serif' }}
        >
          {item.title}
        </h3>
        <p 
          className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-[300] text-white text-left whitespace-pre-line"
          style={{ fontFamily: 'KoPubWorldDotum, serif' }}
        >
          {item.subtitle}
        </p>
      </div>
    </div>
  );

  return (
    <section className="w-full py-16 bg-white">
      <div className="px-2 sm:px-4 w-full">
        {/* Title */}
        <h2 
          className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-[500] text-[#1C262B] text-center mb-[5px] md:mb-[12px] tracking-[-0.44px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-[-0.8px]"
          style={{ fontFamily: 'KoPubWorldBatang, serif' }}
        >
          Beyond Laundry
        </h2>
        
        {/* Subtitle (xs, sm 전용) */}
        <p 
          className="md:hidden text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-[500] text-[#1C262B] text-center mb-12 tracking-[-0.36px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.56px] 2xl:tracking-[-0.64px] 2xl:leading-[30px]"
          style={{ fontFamily: 'KoPubWorldDotum, serif' }}
        >
          호텔런드리만의 프리미엄 세탁시스템을 소개합니다.
        </p>

        {/* Subtitle (md 이상 전용) */}
        <p 
          className="hidden md:block text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-[500] text-[#1C262B] text-center mb-12 tracking-[-0.36px] sm:tracking-[-0.4px] md:tracking-[-0.44px] lg:tracking-[-0.48px] xl:tracking-[-0.56px] 2xl:tracking-[-0.64px] 2xl:leading-[30px]"
          style={{ fontFamily: 'KoPubWorldDotum, serif' }}
        >
          기술과 경헙이 결합된 호텔런드리만의 프리미엄 세탁 시스템을 소개합니다.
        </p>

        {/* xl 이상: 기존 9개 그리드 */}
        <div className="hidden xl:grid xl:grid-cols-3 2xl:grid-cols-3 gap-6 xl:max-w-[1400px] 2xl:max-w-[1880px] mx-auto">
          {gridItems.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-[20px] h-[365px] 2xl:h-[400px]">
              {/* Background Image */}
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/main-Images/main-Beyond.png)'
                }}
              />
              
                             {/* Content Box */}
               <div 
                 className="absolute bottom-0 left-0 right-0 py-6 px-2 2xl:p-10"
                 style={{
                   borderRadius: '0 0 20px 20px',
                   background: '#102254'
                 }}
               >
                <h3 
                  className="text-[26px] 2xl:text-[28px] font-[700] text-white mb-2 text-left"
                  style={{ fontFamily: 'KoPubWorldDotum, serif' }}
                >
                  {item.title}
                </h3>
                                 <p 
                   className="text-[22px] 2xl:text-[24px] font-[300] text-white text-left whitespace-pre-line"
                   style={{ fontFamily: 'KoPubWorldDotum, serif' }}
                 >
                   {item.subtitle2xl ? item.subtitle2xl : item.subtitle}
                 </p>
              </div>
            </div>
          ))}
        </div>

        {/* lg 이하: 슬라이드 */}
        <div className="xl:hidden">
          {/* xs: 1개씩 보이기 */}
          <div className="block sm:hidden">
            <div className="relative overflow-hidden rounded-[20px]" style={{ height: '280px' }}>
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`
                }}
              >
                {gridItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 h-full"
                  >
                    {renderGridItem(item, index)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* sm 이상: 여러 개씩 보이기 */}
          <div className="hidden sm:block">
            <div className="relative overflow-hidden rounded-[20px]" style={{ 
              height: window.innerWidth >= 1024 ? '345px' : window.innerWidth >= 768 ? '300px' : '285px' 
            }}>
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full gap-4"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`
                }}
              >
                {/* 첫 번째 아이템을 마지막에 복제 */}
                {gridItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 h-full"
                    style={{ 
                      width: 'calc(50% - 8px)', // sm: 2개씩, md: 2개씩, lg: 2개씩
                      minWidth: 'calc(50% - 8px)'
                    }}
                  >
                    {renderGridItem(item, index)}
                  </div>
                ))}
                {/* 마지막 슬라이드에서 첫 번째 아이템을 보여주기 위해 첫 번째 아이템 추가 */}
                <div 
                  className="flex-shrink-0 h-full"
                  style={{ 
                    width: 'calc(50% - 8px)',
                    minWidth: 'calc(50% - 8px)'
                  }}
                >
                  {renderGridItem(gridItems[0], 0)}
                </div>
              </div>
            </div>
          </div>

          {/* 네비게이션 닷 */}
          <div className="flex justify-center mt-4">
            {/* xs: 1개씩 보이므로 9개 닷 */}
            <div className="block sm:hidden flex">
              {gridItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 mx-1 ${
                    index === currentSlide ? 'bg-[#102254]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            {/* sm 이상: 2개씩 보이므로 5개 닷 (마지막 슬라이드는 1개만) */}
            <div className="hidden sm:block flex">
              {Array.from({ length: 5 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 mx-1 ${
                    index === currentSlide ? 'bg-[#102254]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondLaundry; 