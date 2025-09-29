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
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/bp11ZgRBWoo?si=sxSjw6zZGNCOs8mi" 
              title="YouTube video player" 
              style={{ border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
              gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
            </div>
            <div className="p-8">
              <h3 className="section-title font-bold text-brand-dark mb-4">
                호텔 런드리 점주 인터뷰
              </h3>
              <p className="text-24 text-gray-600 mb-6">
                다양한 점주의 인터뷰를 확인해보세요.
              </p>
              <div className="flex items-center text-20 text-gray-500">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewVideo;
