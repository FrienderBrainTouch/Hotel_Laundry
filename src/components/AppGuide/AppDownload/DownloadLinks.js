import React from 'react';

const DownloadLinks = () => {
  const downloadOptions = [
    {
      platform: "iOS",
      icon: "🍎",
      storeName: "App Store",
      description: "iPhone, iPad에서 사용 가능",
      features: [
        "iOS 13.0 이상 지원",
        "iPhone, iPad 최적화",
        "Face ID / Touch ID 지원",
        "Apple Pay 결제 지원"
      ],
      link: "#",
      qrCode: "/images/ios-qr.png"
    },
    {
      platform: "Android",
      icon: "🤖",
      storeName: "Google Play",
      description: "안드로이드 기기에서 사용 가능",
      features: [
        "Android 7.0 이상 지원",
        "다양한 화면 크기 지원",
        "지문 인식 지원",
        "Google Pay 결제 지원"
      ],
      link: "#",
      qrCode: "/images/android-qr.png"
    }
  ];

  const systemRequirements = [
    {
      platform: "iOS",
      requirements: [
        "iOS 13.0 이상",
        "iPhone 6s 이상",
        "iPad (5세대) 이상",
        "최소 100MB 저장공간"
      ]
    },
    {
      platform: "Android",
      requirements: [
        "Android 7.0 (API 24) 이상",
        "RAM 2GB 이상",
        "최소 100MB 저장공간",
        "GPS 및 인터넷 연결"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#E3F2FD] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="section-title font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4">
            앱 다운로드
          </h2>
          <p className="text-24 font-['KoPubWorldDotum'] text-[#1C262B] max-w-3xl mx-auto">
            iOS와 Android 모두에서 호텔런드리 앱을 다운로드하세요
          </p>
        </div>

        {/* 다운로드 옵션 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {downloadOptions.map((option, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">{option.icon}</div>
                <h3 className="text-28 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
                  {option.platform}
                </h3>
                <p className="text-20 font-['KoPubWorldDotum'] text-[#1C262B] mb-4">
                  {option.storeName}에서 다운로드
                </p>
                <p className="text-18 font-['KoPubWorldDotum'] text-gray-600">
                  {option.description}
                </p>
              </div>

              {/* 주요 기능 */}
              <div className="mb-8">
                <h4 className="text-22 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4">
                  주요 기능
                </h4>
                <div className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-[#102254] rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-18 font-['KoPubWorldDotum'] text-[#1C262B]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 다운로드 버튼 및 QR 코드 */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <a 
                  href={option.link}
                  className="w-full lg:w-auto bg-[#102254] text-white px-8 py-4 rounded-xl font-bold text-20 hover:bg-[#1C262B] transition-colors text-center"
                >
                  {option.storeName}에서 다운로드
                </a>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-12 text-gray-500">QR 코드</span>
                  </div>
                  <p className="text-14 font-['KoPubWorldDotum'] text-gray-600">
                    QR 코드로 다운로드
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 시스템 요구사항 */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <h3 className="text-28 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-8 text-center">
            시스템 요구사항
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {systemRequirements.map((system, index) => (
              <div key={index}>
                <h4 className="text-24 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-6 text-center">
                  {system.platform}
                </h4>
                <div className="space-y-4">
                  {system.requirements.map((requirement, reqIndex) => (
                    <div key={reqIndex} className="flex items-center space-x-4">
                      <div className="w-6 h-6 bg-[#E3F2FD] rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-[#102254] rounded-full"></div>
                      </div>
                      <span className="text-18 font-['KoPubWorldDotum'] text-[#1C262B]">
                        {requirement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 추가 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#102254] rounded-xl p-6 text-white text-center">
            <div className="text-4xl mb-4">📱</div>
            <h4 className="text-20 font-['KoPubWorldBatang'] font-bold mb-2">
              무료 다운로드
            </h4>
            <p className="text-16 font-['KoPubWorldDotum'] opacity-90">
              앱 다운로드는 완전 무료입니다
            </p>
          </div>
          <div className="bg-[#102254] rounded-xl p-6 text-white text-center">
            <div className="text-4xl mb-4">🔄</div>
            <h4 className="text-20 font-['KoPubWorldBatang'] font-bold mb-2">
              자동 업데이트
            </h4>
            <p className="text-16 font-['KoPubWorldDotum'] opacity-90">
              새로운 기능이 자동으로 업데이트됩니다
            </p>
          </div>
          <div className="bg-[#102254] rounded-xl p-6 text-white text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h4 className="text-20 font-['KoPubWorldBatang'] font-bold mb-2">
              안전한 앱
            </h4>
            <p className="text-16 font-['KoPubWorldDotum'] opacity-90">
              개인정보 보호 및 보안이 보장됩니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadLinks;
