import React from 'react';

const InterviewVideo = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 메인 인터뷰 영상 */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video bg-gray-900 relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="호텔세탁소 점주 인터뷰 - 성공 스토리"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-8">
              <h3 className="section-title font-bold text-brand-dark mb-4">
                호텔세탁소 창업 성공 스토리
              </h3>
              <p className="text-24 text-gray-600 mb-6">
                서울 강남구에서 운영 중인 김○○ 점주의 실제 창업 경험담과 수익 현황을 공개합니다.
              </p>
              <div className="flex items-center text-20 text-gray-500">
                <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full mr-3">
                  창업 3년차
                </span>
                <span className="text-24">월 매출 1,500만원 달성</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewVideo;
