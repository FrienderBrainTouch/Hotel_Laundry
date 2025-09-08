import React, { useState } from 'react';

const CustomerInterview = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const interviews = [
    {
      id: 1,
      title: '직장인 김민수님',
      subtitle: 'IT 회사 직장인',
      quote:
        '출근 전에 세탁물을 맡기고, 퇴근 후에 깨끗하게 세탁된 옷을 받아가는 게 정말 편해요. 특히 주말에 시간을 절약할 수 있어서 좋습니다.',
      videoThumbnail: '/images/app-interview-1.jpg',
      duration: '2:30',
    },
    {
      id: 2,
      title: '대학생 이지은님',
      subtitle: '서울대학교 학생',
      quote:
        '기숙사에서 세탁기 사용하려면 줄 서서 기다려야 하는데, 호텔런드리 앱으로 예약하고 가면 바로 사용할 수 있어서 너무 좋아요!',
      videoThumbnail: '/images/app-interview-2.jpg',
      duration: '1:45',
    },
    {
      id: 3,
      title: '주부 박영희님',
      subtitle: '2남매 엄마',
      quote:
        '아이들 옷이 자주 더러워져서 세탁이 많았는데, 이제 앱으로 간편하게 예약하고 픽업 서비스까지 받아서 정말 편리해요.',
      videoThumbnail: '/images/app-interview-3.jpg',
      duration: '2:15',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="section-title font-['KoPubWorldBatang'] font-bold text-[#102254] mb-4">
            실제 고객들의 생생한 후기
          </h2>
          <p className="text-24 font-['KoPubWorldDotum'] text-[#1C262B] max-w-3xl mx-auto">
            호텔런드리 앱을 사용하는 고객들의 솔직한 인터뷰 영상
          </p>
        </div>

        {/* 비디오 썸네일 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {interviews.map((interview, index) => (
            <div
              key={interview.id}
              className={`relative cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                activeVideo === index ? 'ring-4 ring-[#102254] scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveVideo(index)}
            >
              {/* 비디오 썸네일 */}
              <div className="relative aspect-video bg-gradient-to-br from-[#102254] to-[#1C262B]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-2"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg text-20 font-bold">
                  {interview.duration}
                </div>
              </div>

              {/* 인터뷰 정보 */}
              <div className="p-6 bg-white">
                <h3 className="text-24 font-['KoPubWorldBatang'] font-bold text-[#102254] mb-2">
                  {interview.title}
                </h3>
                <p className="text-20 font-['KoPubWorldDotum'] text-[#1C262B] mb-4">
                  {interview.subtitle}
                </p>
                <p className="text-18 font-['KoPubWorldDotum'] text-gray-600 leading-relaxed">
                  "{interview.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 메인 비디오 플레이어 영역 */}
        <div className="bg-[#102254] rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-28 lg:text-32 font-['KoPubWorldBatang'] font-bold text-white mb-4">
            {interviews[activeVideo].title} 인터뷰 영상
          </h3>
          <p className="text-20 lg:text-24 font-['KoPubWorldDotum'] text-white mb-8 opacity-90">
            {interviews[activeVideo].subtitle}
          </p>

          {/* 비디오 플레이어 (실제로는 YouTube 임베드나 비디오 파일) */}
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all">
                <div className="w-0 h-0 border-l-[30px] border-l-white border-y-[18px] border-y-transparent ml-3"></div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-20 font-bold">재생 시간: {interviews[activeVideo].duration}</p>
            </div>
          </div>

          <p className="text-20 font-['KoPubWorldDotum'] text-white mt-6 opacity-90 max-w-3xl mx-auto leading-relaxed">
            "{interviews[activeVideo].quote}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerInterview;
