import React from 'react';

const BusinessSeminar = () => {
  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 메인 콘텐츠 */}
          <div className="text-center">
            {/* 사업 설명회 콘텐츠 영역 */}
            <div className="space-y-8">
              {/* 사업 설명회 섹션 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 text-center">
                  정기 사업 설명회
                </h2>
                <div className="space-y-4 text-center">
                  <p className="text-24 text-gray-700 leading-relaxed">
                  호텔런드리 사업에 대한 상세한 설명과 Q&A를 통해
                    <br className="hidden sm:block" />
                    창업에 필요한 모든 정보를 제공합니다.
                  </p>
                  <div className="bg-brand-light-blue rounded-lg p-4 md:p-6">
                    <p className="text-22 text-brand-blue font-medium">
                      📅 <span className="font-semibold">주기적으로 개최</span>되는 사업 설명회에
                      참여하세요
                    </p>
                  </div>
                </div>
              </div>

              {/* 점주 교육 섹션 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 text-center">
                  점주 교육 프로그램
                </h2>
                <div className="space-y-4 text-center">
                  <p className="text-24 text-gray-700 leading-relaxed">
                    성공적인 사업 운영을 위한
                    <br className="hidden sm:block" />
                    체계적인 교육 프로그램을 제공합니다.
                  </p>
                  <div className="bg-brand-light-blue rounded-lg p-4 md:p-6">
                    <p className="text-22 text-brand-blue font-medium">
                      🎓 <span className="font-semibold">주기적으로 실시</span>되는 점주 교육에
                      참여하세요
                    </p>
                  </div>
                </div>
              </div>

              {/* 연락처 정보 */}
              <div className="bg-gray-50 rounded-lg p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">문의 및 신청</h3>
                <p className="text-24 text-gray-600 mb-4">
                  사업 설명회 및 점주 교육에 대한 자세한 일정과 신청 방법은
                  <br className="hidden sm:block" />
                  아래 연락처로 문의해 주세요.
                </p>
                <div className="space-y-2">
                  <p className="text-22 text-brand-blue font-medium">📞 전화: 02-1577-2657</p>
                  <p className="text-22 text-brand-blue font-medium">
                    📧 이메일: hotellaundry@naver.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSeminar;
