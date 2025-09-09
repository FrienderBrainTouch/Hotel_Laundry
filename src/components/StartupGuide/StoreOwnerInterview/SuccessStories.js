import React from 'react';

const SuccessStories = () => {

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title font-bold text-brand-dark mb-4">
            성공 지표
          </h2>
          <p className="text-24 text-gray-600 max-w-3xl mx-auto">
            호텔세탁소 창업의 성공률과 주요 지표를 확인해보세요
          </p>
        </div>

        {/* 성공 지표 */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
          <h3 className="section-title font-bold mb-8 text-center">성공 지표</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm text-green-100">고객 만족도</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm text-green-100">계약 갱신률</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24개월</div>
              <div className="text-sm text-green-100">평균 투자 회수</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-sm text-green-100">성공 창업률</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
