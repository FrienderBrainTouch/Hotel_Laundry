import React, { useState } from 'react';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic');

  const plans = [
    {
      id: 'basic',
      name: '기본 서비스',
      price: '3,000',
      period: '1kg당',
      description: '일반 세탁 서비스',
      features: [
        '일반 의류 세탁',
        '기본 다림질',
        '당일 픽업/배달',
        '앱 알림 서비스'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: '프리미엄 서비스',
      price: '5,000',
      period: '1kg당',
      description: '고급 세탁 서비스',
      features: [
        '고급 의류 세탁',
        '전문 다림질',
        '당일 픽업/배달',
        '앱 알림 서비스',
        '특수 소재 처리',
        '손세탁 서비스'
      ],
      popular: true
    },
    {
      id: 'vip',
      name: 'VIP 서비스',
      price: '8,000',
      period: '1kg당',
      description: '최고급 세탁 서비스',
      features: [
        '명품 의류 세탁',
        '전문 다림질',
        '당일 픽업/배달',
        '앱 알림 서비스',
        '특수 소재 처리',
        '손세탁 서비스',
        '개인 담당자 배정',
        '우선 처리'
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      name: '드라이클리닝',
      price: '5,000원',
      description: '정장, 코트 등 드라이클리닝 필요 의류'
    },
    {
      name: '이불 세탁',
      price: '15,000원',
      description: '이불, 베개, 매트리스 커버 등'
    },
    {
      name: '신발 세탁',
      price: '8,000원',
      description: '운동화, 구두 등 신발 세탁'
    },
    {
      name: '가방 세탁',
      price: '10,000원',
      description: '가죽 가방, 백팩 등 가방 세탁'
    }
  ];

  const selectedPlanData = plans.find(plan => plan.id === selectedPlan);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="section-title font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4">
            서비스 요금
          </h2>
          <p className="text-24 font-['KoPubWorldDotum'] text-[#1C262B] max-w-3xl mx-auto">
            투명하고 합리적인 요금으로 고품질 세탁 서비스를 제공합니다
          </p>
        </div>

        {/* 요금제 선택 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                selectedPlan === plan.id
                  ? 'bg-[#102254] text-white shadow-2xl scale-105'
                  : 'bg-white text-[#102254] shadow-lg hover:shadow-xl'
              } ${plan.popular ? 'ring-4 ring-[#102254] ring-opacity-50' : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#102254] text-white px-6 py-2 rounded-full text-18 font-bold">
                    인기
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-24 font-['KoPubWorldBatang'] font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-18 font-['KoPubWorldDotum'] opacity-80 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-40 font-['KoPubWorldBatang'] font-bold">
                    {plan.price}
                  </span>
                  <span className="text-20 font-['KoPubWorldDotum'] ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      selectedPlan === plan.id ? 'bg-white' : 'bg-[#102254]'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        selectedPlan === plan.id ? 'bg-[#102254]' : 'bg-white'
                      }`}></div>
                    </div>
                    <span className="text-18 font-['KoPubWorldDotum']">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full mt-8 py-4 rounded-xl font-bold text-20 transition-colors ${
                  selectedPlan === plan.id
                    ? 'bg-white text-[#102254] hover:bg-gray-100'
                    : 'bg-[#102254] text-white hover:bg-[#1C262B]'
                }`}
              >
                선택하기
              </button>
            </div>
          ))}
        </div>

        {/* 선택된 요금제 상세 정보 */}
        <div className="bg-gradient-to-br from-[#102254] to-[#1C262B] rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-28 lg:text-32 font-['KoPubWorldBatang'] font-bold mb-4">
              {selectedPlanData?.name} 상세 정보
            </h3>
            <p className="text-22 font-['KoPubWorldDotum'] opacity-90">
              {selectedPlanData?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 요금 정보 */}
            <div>
              <h4 className="text-24 font-['KoPubWorldBatang'] font-bold mb-6">
                요금 정보
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white border-opacity-20">
                  <span className="text-20 font-['KoPubWorldDotum']">기본 요금</span>
                  <span className="text-24 font-['KoPubWorldBatang'] font-bold">
                    {selectedPlanData?.price}원 / 1kg
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white border-opacity-20">
                  <span className="text-20 font-['KoPubWorldDotum']">픽업/배달비</span>
                  <span className="text-24 font-['KoPubWorldBatang'] font-bold">
                    무료
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white border-opacity-20">
                  <span className="text-20 font-['KoPubWorldDotum']">최소 요금</span>
                  <span className="text-24 font-['KoPubWorldBatang'] font-bold">
                    5,000원
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-20 font-['KoPubWorldDotum']">할인 혜택</span>
                  <span className="text-24 font-['KoPubWorldBatang'] font-bold text-green-400">
                    첫 이용 20% 할인
                  </span>
                </div>
              </div>
            </div>

            {/* 서비스 특징 */}
            <div>
              <h4 className="text-24 font-['KoPubWorldBatang'] font-bold mb-6">
                서비스 특징
              </h4>
              <div className="space-y-4">
                {selectedPlanData?.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-20 font-['KoPubWorldDotum']">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 추가 서비스 */}
        <div className="mb-16">
          <h3 className="text-28 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-8 text-center">
            추가 서비스
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-[#E3F2FD] rounded-xl p-6 text-center hover:bg-[#BBDEFB] transition-colors"
              >
                <h4 className="text-20 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
                  {service.name}
                </h4>
                <div className="text-24 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-3">
                  {service.price}
                </div>
                <p className="text-16 font-['KoPubWorldDotum'] text-[#1C262B] opacity-80">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="text-center">
          <div className="bg-[#E3F2FD] rounded-2xl p-8 lg:p-12">
            <h3 className="text-28 lg:text-32 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4">
              지금 바로 시작하세요
            </h3>
            <p className="text-22 font-['KoPubWorldDotum'] text-[#1C262B] mb-8 max-w-3xl mx-auto">
              첫 이용 시 20% 할인 혜택과 함께 편리한 당일수거 배달서비스를 경험해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#102254] text-white px-8 py-4 rounded-xl font-bold text-20 hover:bg-[#1C262B] transition-colors">
                📱 앱에서 신청하기
              </button>
              <button className="bg-white text-[#102254] px-8 py-4 rounded-xl font-bold text-20 hover:bg-gray-100 transition-colors border-2 border-[#102254]">
                📞 상담 문의하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
