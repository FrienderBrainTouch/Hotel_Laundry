import React from 'react';

const ServiceBenefits = () => {
  const benefits = [
    {
      icon: '⏰',
      title: '시간 절약',
      description: '세탁소를 찾아다닐 필요 없이 집에서 편안하게',
      details: '출퇴근 시간을 절약하고 더 중요한 일에 집중하세요',
    },
    {
      icon: '🏠',
      title: '편리함',
      description: '문 앞에서 픽업과 배달, 정말 간편합니다',
      details: '무거운 세탁물을 들고 다닐 필요가 없어요',
    },
    {
      icon: '✨',
      title: '고품질',
      description: '전문 세탁 시설에서 제공하는 프리미엄 서비스',
      details: '집에서 할 수 없는 전문적인 세탁과 다림질',
    },
    {
      icon: '📱',
      title: '투명성',
      description: '앱에서 실시간으로 세탁 진행 상황을 확인',
      details: '언제 픽업되고, 언제 완료되는지 실시간 알림',
    },
    {
      icon: '💰',
      title: '합리적 가격',
      description: '세탁소 직접 방문보다 저렴한 가격',
      details: '시간과 비용을 모두 절약할 수 있어요',
    },
    {
      icon: '🛡️',
      title: '안전 보장',
      description: '세탁물 손실 및 손상에 대한 보상 제도',
      details: '안전하게 세탁물을 보관하고 관리합니다',
    },
  ];

  const testimonials = [
    {
      name: '김민수',
      role: '직장인',
      content:
        '출근 전에 세탁물을 문 앞에 두고, 퇴근 후 깨끗한 옷을 받아보니 정말 편해요. 시간도 절약되고 옷도 더 깨끗해져서 만족합니다.',
      rating: 5,
    },
    {
      name: '이지은',
      role: '대학생',
      content:
        '기숙사에서 세탁기 사용하려면 줄 서서 기다려야 하는데, 이 서비스 덕분에 그런 번거로움 없이 편하게 이용할 수 있어요.',
      rating: 5,
    },
    {
      name: '박영희',
      role: '주부',
      content:
        '아이들 옷이 자주 더러워져서 세탁이 많았는데, 이제 집에서 편안하게 신청하고 받아볼 수 있어서 정말 좋아요.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#E3F2FD] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="section-title font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4">
            서비스의 특별한 장점
          </h2>
          <p className="text-24 font-['KoPubWorldDotum'] text-[#1C262B] max-w-3xl mx-auto">
            당일수거 배달서비스만의 특별한 장점들을 확인해보세요
          </p>
        </div>

        {/* 혜택 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102"
            >
              <div className="text-6xl mb-6 text-center">{benefit.icon}</div>
              <h3 className="text-24 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-20 font-['KoPubWorldDotum'] text-[#1C262B] mb-4 text-center leading-relaxed">
                {benefit.description}
              </p>
              <p className="text-18 font-['KoPubWorldDotum'] text-gray-600 text-center leading-relaxed">
                {benefit.details}
              </p>
            </div>
          ))}
        </div>

        {/* 고객 후기 */}
        <div className="bg-[#102254] rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-28 lg:text-32 font-['KoPubWorldBatang'] font-bold mb-4">
              고객들의 생생한 후기
            </h3>
            <p className="text-22 font-['KoPubWorldDotum'] opacity-90">
              실제 이용 고객들의 솔직한 후기를 들어보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-18 font-['KoPubWorldDotum'] leading-relaxed mb-4 opacity-90">
                  "{testimonial.content}"
                </p>
                <div className="text-20 font-['KoPubWorldBatang'] font-bold">
                  {testimonial.name}
                </div>
                <div className="text-16 font-['KoPubWorldDotum'] opacity-80">
                  {testimonial.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 통계 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <div className="text-40 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
              98%
            </div>
            <div className="text-18 font-['KoPubWorldDotum'] text-[#1C262B]">고객 만족도</div>
          </div>
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <div className="text-40 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
              50만+
            </div>
            <div className="text-18 font-['KoPubWorldDotum'] text-[#1C262B]">누적 이용 고객</div>
          </div>
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <div className="text-40 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
              2시간
            </div>
            <div className="text-18 font-['KoPubWorldDotum'] text-[#1C262B]">평균 세탁 시간</div>
          </div>
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <div className="text-40 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
              24시간
            </div>
            <div className="text-18 font-['KoPubWorldDotum'] text-[#1C262B]">서비스 운영</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
