import React from 'react';

const RevenueComparison = () => {
  const comparisonData = [
    {
      category: "월 평균 매출",
      hotelLaundry: "695만원",
      generalLaundry: "350만원",
      difference: "+98%",
      highlight: true
    },
    {
      category: "월 평균 수익",
      hotelLaundry: "450~500만원",
      generalLaundry: "200만원",
      difference: "+125%",
      highlight: true
    },
    {
      category: "년 평균 수익",
      hotelLaundry: "5,000~6,000만원",
      generalLaundry: "2,400만원",
      difference: "+108%",
      highlight: true
    },
    {
      category: "원금 회수 기간",
      hotelLaundry: "2~3년",
      generalLaundry: "5년(평균)",
      difference: "2년 단축",
      highlight: true
    },
    {
      category: "고객 1인 월 이용횟수",
      hotelLaundry: "2.9회",
      generalLaundry: "1.5회",
      difference: "+93%",
      highlight: true
    }
  ];

  const advantages = [
    {
      icon: "📢",
      title: "오픈닝 홍보",
      description: "세탁기 무료 쿠폰 배포 (본사 지원)",
      details: ["무료 쿠폰 제공", "본사 마케팅 지원", "고객 유입 증대"]
    },
    {
      icon: "📺",
      title: "평상시 홍보",
      description: "지역 IPTV 광고 및 아파트 게시판 광고",
      details: ["IPTV 광고 (제휴 지원)", "아파트 게시판 광고", "상가 쿠폰 제휴"]
    },
    {
      icon: "📞",
      title: "고객 대응",
      description: "통합 콜센터를 통한 전문적인 고객 서비스",
      details: ["24시간 콜센터", "전문 상담사", "빠른 문제 해결"]
    },
    {
      icon: "🔧",
      title: "운영 관리",
      description: "본사 원격 관리 및 체계적인 운영 지원",
      details: ["원격 관리 시스템", "주 5회 청소 관리", "소모품 관리 지원"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title font-bold text-brand-dark mb-4">
            호텔런드리 vs 일반세탁소
          </h2>
          <p className="text-24 text-gray-600 max-w-3xl mx-auto">
            수익 구조의 차별성을 데이터로 확인해보세요
          </p>
        </div>

        {/* 수익 비교 테이블 */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
            <h3 className="section-title font-bold text-center">수익 구조 비교 분석</h3>
            <p className="text-center text-blue-100 mt-2">세탁기 3대, 건조기 3대 1년 이상 매장 기준</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">구분</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">호텔런드리</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">일반세탁소</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">차이</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonData.map((item, index) => (
                  <tr key={index} className={item.highlight ? "bg-blue-50" : ""}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-bold text-blue-600">
                      {item.hotelLaundry}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      {item.generalLaundry}
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-bold text-green-600">
                      {item.difference}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 호텔세탁소의 핵심 장점 */}
        <div className="mb-16">
          <h3 className="section-title font-bold text-brand-dark mb-8 text-center">
          호텔런드리의 핵심 경쟁력
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{advantage.icon}</div>
                <h4 className="text-lg font-bold text-brand-dark mb-3 text-center">
                  {advantage.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  {advantage.description}
                </p>
                <ul className="space-y-2">
                  {advantage.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-xs text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 수익성 분석 차트 */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="section-title font-bold text-brand-dark mb-8 text-center">
            수익성 분석
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 월 수익 비교 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-brand-dark mb-4">월 평균 매출 비교</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-blue-600">호텔런드리</span>
                    <span className="text-sm font-bold text-blue-600">695만원</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">일반세탁소</span>
                    <span className="text-sm font-bold text-gray-600">350만원</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gray-400 h-3 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 순이익률 비교 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-brand-dark mb-4">월 평균 수익 비교</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-green-600">호텔런드리</span>
                    <span className="text-sm font-bold text-green-600">450~500만원</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">일반세탁소</span>
                    <span className="text-sm font-bold text-gray-600">200만원</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gray-400 h-3 rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueComparison;
