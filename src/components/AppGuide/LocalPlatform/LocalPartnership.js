import React from 'react';

const LocalPartnership = () => {
  const partnerships = [
    {
      category: '지역 상권',
      partners: [
        { name: '지역 상가', description: '상가 입점 및 상생 협력' },
        { name: '아파트 단지', description: '단지 내 입점 및 주민 서비스' },
        { name: '오피스텔', description: '입주민 편의 서비스 제공' },
      ],
    },
    {
      category: '교육 기관',
      partners: [
        { name: '대학교', description: '기숙사 및 캠퍼스 내 서비스' },
        { name: '학원가', description: '학생 및 학부모 편의 서비스' },
        { name: '어린이집', description: '보육원 세탁 서비스' },
      ],
    },
    {
      category: '의료 기관',
      partners: [
        { name: '병원', description: '의료진 및 환자 가족 서비스' },
        { name: '요양원', description: '노인 복지 시설 세탁 서비스' },
        { name: '산후조리원', description: '신생아 및 산모 세탁 서비스' },
      ],
    },
  ];

  const benefits = [
    {
      icon: '🤝',
      title: '상생 협력',
      description: '지역 파트너와의 상생 발전을 통한 지속가능한 성장',
    },
    {
      icon: '📈',
      title: '매출 증대',
      description: '지역 특화 서비스로 고객 만족도 및 매출 향상',
    },
    {
      icon: '🌟',
      title: '브랜드 가치',
      description: '지역 사회 기여를 통한 브랜드 신뢰도 및 가치 상승',
    },
    {
      icon: '💡',
      title: '혁신 서비스',
      description: '지역별 맞춤형 서비스 개발 및 혁신적 솔루션 제공',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#E3F2FD] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="section-title font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4">
            지역 파트너십
          </h2>
          <p className="text-20 font-['KoPubWorldDotum'] text-[#1C262B] max-w-3xl mx-auto">
            지역 사회와의 협력을 통해 더욱 특화된 서비스를 제공합니다
          </p>
        </div>

        {/* 파트너십 카테고리 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {partnerships.map((partnership, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-20 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-6 text-center">
                {partnership.category}
              </h3>
              <div className="space-y-4">
                {partnership.partners.map((partner, partnerIndex) => (
                  <div key={partnerIndex} className="border-l-4 border-[#102254] pl-4">
                    <h4 className="text-20 font-['KoPubWorldDotum'] font-bold text-[#102254] mb-1">
                      {partner.name}
                    </h4>
                    <p className="text-18 font-['KoPubWorldDotum'] text-[#1C262B] opacity-80">
                      {partner.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 협력 혜택 */}
        <div className="bg-[#102254] rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-28 lg:text-32 font-['KoPubWorldBatang'] font-bold mb-4">
              지역 파트너십의 혜택
            </h3>
            <p className="text-22 font-['KoPubWorldDotum'] opacity-90 max-w-3xl mx-auto">
              지역 파트너와의 협력을 통해 상생 발전과 혁신적인 서비스를 실현합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h4 className="text-22 font-['KoPubWorldBatang'] font-bold mb-3">
                  {benefit.title}
                </h4>
                <p className="text-18 font-['KoPubWorldDotum'] opacity-90 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 파트너십 신청 CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <h3 className="text-28 lg:text-32 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4">
              지역 파트너십에 참여하세요
            </h3>
            <p className="text-22 font-['KoPubWorldDotum'] text-[#1C262B] mb-8 max-w-3xl mx-auto">
              호텔런드리와 함께 지역 사회 발전에 기여하고, 상생의 가치를 실현해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#102254] text-white px-8 py-4 rounded-xl font-bold text-20 hover:bg-[#1C262B] transition-colors">
                🤝 파트너십 문의하기
              </button>
              <button className="bg-[#E3F2FD] text-[#102254] px-8 py-4 rounded-xl font-bold text-20 hover:bg-[#BBDEFB] transition-colors">
                📋 파트너십 가이드 다운로드
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalPartnership;
