import React, { useState } from 'react';

const UserGuide = () => {
  const [activeTab, setActiveTab] = useState('installation');

  const tabs = [
    { id: 'installation', label: '설치 가이드' },
    { id: 'first-use', label: '첫 사용법' },
    { id: 'features', label: '주요 기능' },
    { id: 'troubleshooting', label: '문제 해결' },
  ];

  const installationSteps = [
    {
      step: 1,
      title: '앱스토어/플레이스토어 접속',
      description: 'iOS는 App Store, Android는 Google Play Store에 접속하세요',
      details: "검색창에 '호텔런드리'를 입력하여 앱을 찾으세요",
    },
    {
      step: 2,
      title: '앱 다운로드',
      description: "앱 페이지에서 '다운로드' 또는 '설치' 버튼을 클릭하세요",
      details: '앱 크기는 약 50MB이며, 다운로드 시간은 인터넷 속도에 따라 달라집니다',
    },
    {
      step: 3,
      title: '앱 설치 완료',
      description: '다운로드가 완료되면 자동으로 설치됩니다',
      details: '설치 완료 후 홈 화면에서 호텔런드리 앱 아이콘을 확인하세요',
    },
    {
      step: 4,
      title: '앱 실행',
      description: '앱 아이콘을 터치하여 호텔런드리를 실행하세요',
      details: '처음 실행 시 약간의 로딩 시간이 필요할 수 있습니다',
    },
  ];

  const firstUseSteps = [
    {
      step: 1,
      title: '회원가입',
      description: '휴대폰 번호로 간편 회원가입을 진행하세요',
      details: 'SMS 인증을 통해 본인 확인이 완료됩니다',
    },
    {
      step: 2,
      title: '위치 권한 허용',
      description: "앱에서 위치 권한을 요청하면 '허용'을 선택하세요",
      details: '내 주변 매장을 찾기 위해 위치 정보가 필요합니다',
    },
    {
      step: 3,
      title: '알림 권한 허용',
      description: '푸시 알림 권한을 허용하여 세탁 진행 상황을 받아보세요',
      details: '세탁 완료, 픽업 알림 등을 실시간으로 받을 수 있습니다',
    },
    {
      step: 4,
      title: '첫 예약하기',
      description: '가장 가까운 매장을 찾아 첫 세탁을 예약해보세요',
      details: '첫 이용 시 특별 할인 혜택을 받을 수 있습니다',
    },
  ];

  const featureGuides = [
    {
      title: '매장 찾기',
      description: 'GPS를 활용하여 내 주변 호텔런드리 매장을 찾을 수 있습니다',
      steps: [
        "앱 메인 화면에서 '매장 찾기' 버튼 클릭",
        '현재 위치 기반으로 주변 매장 표시',
        '매장별 운영시간 및 대기 상황 확인',
        '원하는 매장 선택 후 길찾기 연동',
      ],
    },
    {
      title: '세탁 예약',
      description: '실시간으로 매장 상황을 확인하고 예약할 수 있습니다',
      steps: [
        "매장 선택 후 '예약하기' 버튼 클릭",
        '원하는 날짜와 시간 선택',
        '세탁물 종류 및 수량 입력',
        '예약 확인 후 결제 진행',
      ],
    },
    {
      title: '결제하기',
      description: '다양한 결제 수단으로 편리하게 결제하세요',
      steps: [
        '결제 방법 선택 (카드, 계좌이체, 간편결제)',
        '결제 정보 입력 및 확인',
        '결제 완료 후 예약 확정',
        '포인트 적립 및 할인 혜택 적용',
      ],
    },
  ];

  const troubleshootingItems = [
    {
      problem: '앱이 설치되지 않아요',
      solution:
        '기기 저장공간을 확인하고, 최소 100MB 이상의 여유 공간을 확보하세요. 또한 기기의 OS 버전이 요구사항을 만족하는지 확인하세요.',
    },
    {
      problem: '앱이 실행되지 않아요',
      solution:
        '앱을 완전히 종료한 후 다시 실행해보세요. 문제가 지속되면 기기를 재시작하거나 앱을 재설치해보세요.',
    },
    {
      problem: '위치가 정확하지 않아요',
      solution:
        'GPS 설정을 확인하고, 실외에서 사용해보세요. 또한 앱의 위치 권한이 허용되어 있는지 확인하세요.',
    },
    {
      problem: '결제가 되지 않아요',
      solution:
        '인터넷 연결 상태를 확인하고, 결제 정보가 올바른지 확인하세요. 문제가 지속되면 고객센터로 문의하세요.',
    },
    {
      problem: '알림이 오지 않아요',
      solution:
        '앱의 알림 권한이 허용되어 있는지 확인하고, 기기의 알림 설정을 확인하세요. 방해금지 모드가 켜져 있지 않은지 확인하세요.',
    },
  ];

  const getCurrentContent = () => {
    switch (activeTab) {
      case 'installation':
        return (
          <div className="space-y-8">
            {installationSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#102254] text-white rounded-full flex items-center justify-center font-bold text-20 flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-24 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-20 font-['KoPubWorldDotum'] text-[#1C262B] mb-2">
                    {step.description}
                  </p>
                  <p className="text-18 font-['KoPubWorldDotum'] text-gray-600">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'first-use':
        return (
          <div className="space-y-8">
            {firstUseSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#102254] text-white rounded-full flex items-center justify-center font-bold text-20 flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-24 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-20 font-['KoPubWorldDotum'] text-[#1C262B] mb-2">
                    {step.description}
                  </p>
                  <p className="text-18 font-['KoPubWorldDotum'] text-gray-600">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'features':
        return (
          <div className="space-y-8">
            {featureGuides.map((guide, index) => (
              <div key={index} className="bg-[#E3F2FD] rounded-xl p-6">
                <h3 className="text-24 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-3">
                  {guide.title}
                </h3>
                <p className="text-20 font-['KoPubWorldDotum'] text-[#1C262B] mb-4">
                  {guide.description}
                </p>
                <div className="space-y-2">
                  {guide.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-[#102254] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className="text-18 font-['KoPubWorldDotum'] text-[#1C262B]">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 'troubleshooting':
        return (
          <div className="space-y-6">
            {troubleshootingItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-22 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-3">
                  Q. {item.problem}
                </h3>
                <p className="text-18 font-['KoPubWorldDotum'] text-[#1C262B] leading-relaxed">
                  A. {item.solution}
                </p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="section-title font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4">
            사용 가이드
          </h2>
          <p className="text-24 font-['KoPubWorldDotum'] text-[#1C262B] max-w-3xl mx-auto">
            호텔런드리 앱을 처음 사용하시는 분들을 위한 상세한 가이드입니다
          </p>
        </div>

        {/* 탭 네비게이션 */}
        <div className="flex flex-wrap justify-center mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 mx-2 mb-2 rounded-xl font-bold text-18 transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#102254] text-white'
                  : 'bg-[#E3F2FD] text-[#102254] hover:bg-[#BBDEFB]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 탭 콘텐츠 */}
        <div className="bg-gradient-to-br from-[#E3F2FD] to-white rounded-2xl p-8 lg:p-12">
          {getCurrentContent()}
        </div>

        {/* 추가 도움말 */}
        <div className="mt-16 text-center">
          <div className="bg-[#102254] rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-28 lg:text-32 font-['KoPubWorldBatang'] font-bold mb-4">
              더 도움이 필요하신가요?
            </h3>
            <p className="text-22 font-['KoPubWorldDotum'] opacity-90 mb-8 max-w-3xl mx-auto">
              추가적인 도움이 필요하시면 언제든지 고객센터로 문의해주세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#102254] px-8 py-4 rounded-xl font-bold text-20 hover:bg-gray-100 transition-colors">
                📞 고객센터 문의
              </button>
              <button className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-xl font-bold text-20 hover:bg-opacity-30 transition-colors">
                💬 실시간 채팅
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserGuide;
