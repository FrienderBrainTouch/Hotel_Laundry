import React, { useState } from 'react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "앱으로 신청",
      time: "오전 9시까지",
      description: "호텔런드리 앱에서 당일수거 서비스를 신청하고 픽업 시간을 선택하세요.",
      details: [
        "세탁물 종류 및 수량 입력",
        "픽업 희망 시간 선택",
        "배달 희망 시간 선택",
        "특별 요청사항 입력"
      ],
      icon: "📱"
    },
    {
      id: 1,
      title: "픽업",
      time: "신청 후 1-2시간 내",
      description: "전문 픽업 직원이 지정된 시간에 방문하여 세탁물을 안전하게 수거합니다.",
      details: [
        "문 앞에서 세탁물 수거",
        "세탁물 상태 확인",
        "수거 영수증 발급",
        "앱으로 픽업 완료 알림"
      ],
      icon: "🚚"
    },
    {
      id: 2,
      title: "세탁",
      time: "픽업 후 2-4시간",
      description: "전문 세탁 시설에서 고품질 세탁 서비스를 제공합니다.",
      details: [
        "세탁물 분류 및 검사",
        "적절한 세탁 방법 선택",
        "고품질 세제 사용",
        "건조 및 다림질"
      ],
      icon: "🧺"
    },
    {
      id: 3,
      title: "배달",
      time: "세탁 완료 후",
      description: "세탁이 완료되면 지정된 시간에 문 앞까지 안전하게 배달합니다.",
      details: [
        "세탁 완료 알림 발송",
        "지정 시간에 배달",
        "문 앞에 안전하게 배치",
        "배달 완료 알림"
      ],
      icon: "🏠"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="section-title font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4">
            서비스 이용 방법
          </h2>
          <p className="text-24 font-['KoPubWorldDotum'] text-[#1C262B] max-w-3xl mx-auto">
            간단한 4단계로 편리한 당일수거 배달서비스를 이용하세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 단계 선택 탭 */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-200 ${
                    activeStep === step.id
                      ? 'bg-[#102254] text-white shadow-lg'
                      : 'bg-[#E3F2FD] text-[#102254] hover:bg-[#BBDEFB]'
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                      activeStep === step.id ? 'bg-white bg-opacity-20' : 'bg-[#102254] text-white'
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-20 font-['KoPubWorldBatang'] font-bold">
                        {step.title}
                      </h3>
                      <p className={`text-16 font-['KoPubWorldDotum'] ${
                        activeStep === step.id ? 'opacity-80' : 'opacity-70'
                      }`}>
                        {step.time}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 선택된 단계 상세 정보 */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-[#102254] to-[#1C262B] rounded-2xl p-8 lg:p-12 text-white">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-4xl">
                  {steps[activeStep].icon}
                </div>
                <div>
                  <h3 className="text-28 lg:text-32 font-['KoPubWorldBatang'] font-bold mb-2">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-20 font-['KoPubWorldDotum'] opacity-90">
                    {steps[activeStep].time}
                  </p>
                </div>
              </div>

              <p className="text-22 font-['KoPubWorldDotum'] leading-relaxed mb-8 opacity-90">
                {steps[activeStep].description}
              </p>

              {/* 상세 과정 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {steps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-20 font-['KoPubWorldDotum']">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 추가 정보 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-[#E3F2FD] rounded-xl p-6 text-center">
                <div className="text-32 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
                  9시
                </div>
                <div className="text-18 font-['KoPubWorldDotum'] text-[#1C262B]">
                  신청 마감 시간
                </div>
              </div>
              <div className="bg-[#E3F2FD] rounded-xl p-6 text-center">
                <div className="text-32 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
                  2-4시간
                </div>
                <div className="text-18 font-['KoPubWorldDotum'] text-[#1C262B]">
                  세탁 소요 시간
                </div>
              </div>
              <div className="bg-[#E3F2FD] rounded-xl p-6 text-center">
                <div className="text-32 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
                  24시간
                </div>
                <div className="text-18 font-['KoPubWorldDotum'] text-[#1C262B]">
                  서비스 운영
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
