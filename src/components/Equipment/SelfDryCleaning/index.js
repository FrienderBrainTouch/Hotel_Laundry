import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ASSET_URL } from '../../../utils/constants';

const VIDEO_SLIDES = [
  {
    title: '3~4일 걸리는 드라이클리닝이 당장 급할 때!!!',
    embedUrl: 'https://www.youtube.com/embed/dCfJ1sxTo54',
  },
  {
    title: '여러 벌의 옷을 한꺼번에 1만 5천 원이 된다고?',
    embedUrl: 'https://www.youtube.com/embed/HZN-EHvrJDw',
  },
  {
    title: '양복도 즉석에서 구김 없이 바로 입는다고',
    embedUrl: 'https://www.youtube.com/embed/doku7b0O_Yw',
  },
];

/** 제목을 공백 기준 단어로 나누어 반응형 줄바꿈(단어 단위) 처리 */
const TitleByWords = ({ title }) => {
  const words = title.split(/\s+/).filter(Boolean);
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline">
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  );
};

const SelfDryCleaning = () => {
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full max-w-6xl mx-auto px-4">
          {/* 제목 */}
          <div className="text-center mb-12">
            <h1 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.48px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px]">
              <span className="block 2xl:hidden">세계 최초 셀프 드라이클리닝</span>
              <span className="hidden 2xl:block">세계 최초 셀프 드라이클리닝</span>
            </h1>

            {/* 부제목 */}
            <div className="text-center mb-8">
              <div
                className="text-2xl md:text-3xl text-[#102254] mb-8"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 2rem)' }}
              >
                <span className="block 2xl:hidden">
                  빨래방과 드라이클리닝을 하나로 경제성을 극대화 하였습니다!
                </span>
                <span className="hidden 2xl:block">
                  빨래방과 드라이클리닝을 하나로 경제성을 극대화 하였습니다!
                </span>
              </div>

              {/* 유튜브 영상 슬라이드 */}
              <div className="mb-10 w-full max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-[20px] sm:rounded-[25px] md:rounded-[30px]">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentVideoSlide * 100}%)` }}
                  >
                    {VIDEO_SLIDES.map((slide, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-1">
                        <h3
                          className="text-center text-base sm:text-lg md:text-xl font-bold text-[#102254] mb-3 md:mb-4 max-w-full"
                          style={{ wordBreak: 'keep-all' }}
                        >
                          <TitleByWords title={slide.title} />
                        </h3>
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          {index === currentVideoSlide ? (
                            <iframe
                              className="absolute top-0 left-0 w-full h-full rounded-[16px] sm:rounded-[20px]"
                              src={slide.embedUrl}
                              title={slide.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            />
                          ) : (
                            <div className="absolute top-0 left-0 w-full h-full rounded-[16px] sm:rounded-[20px] bg-gray-100" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* 슬라이드 버튼 & 인디케이터 */}
                <div className="flex items-center justify-center gap-4 mt-4">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentVideoSlide((prev) => (prev === 0 ? VIDEO_SLIDES.length - 1 : prev - 1))
                    }
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="이전 영상"
                  >
                    <svg
                      className="w-6 h-6 text-[#102254]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div className="flex gap-2">
                    {VIDEO_SLIDES.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentVideoSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentVideoSlide ? 'bg-[#102254]' : 'bg-gray-300'
                        }`}
                        aria-label={`${index + 1}편으로 이동`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentVideoSlide((prev) => (prev === VIDEO_SLIDES.length - 1 ? 0 : prev + 1))
                    }
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="다음 영상"
                  >
                    <svg
                      className="w-6 h-6 text-[#102254]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* 설명 텍스트 */}
              <div className="text-center mx-auto text-sm sm:text-sm md:text-base lg:text-base xl:text-lg font-light leading-relaxed text-gray-700 max-w-4xl">
                <div className="block sm:hidden">
                  <p className="mb-6">
                    드라이클리닝 시장은 전체 세탁 시장의 70-80%를 차지하는 매우 큰 시장입니다. 연간
                    4조 3천억원 규모이지만, 기존 드라이클리닝 업체들은 어려움과 고령화로 인해
                    어려움을 겪고 있습니다.
                  </p>
                  <p>
                    호텔런드리는 이러한 시장 트렌드를 파악하고 연구개발을 통해 마침내 세계 최초의
                    무인 셀프 드라이클리닝을 출시했습니다. 전체 세탁 시장의 20-30%에 불과한 빨래방
                    시장을 넘어 전체 세탁 시장을 아우르는 독보적인 차별화를 제공합니다.
                  </p>
                </div>
                <div className="hidden sm:block lg:hidden">
                  <p className="mb-6">
                    드라이클리닝 시장은 전체 세탁 시장의 70-80%를 차지하는 매우 큰 시장입니다. 연간
                    4조 3천억원 규모이지만, 기존 드라이클리닝 업체들은 어려움과 고령화로 인해
                    어려움을 겪고 있습니다.
                  </p>
                  <p>
                    호텔런드리는 이러한 시장 트렌드를 파악하고 연구개발을 통해 마침내 세계 최초의
                    무인 셀프 드라이클리닝을 출시했습니다. <br />
                    전체 세탁 시장의 20-30%에 불과한 빨래방 시장을 넘어 전체 세탁 시장을 아우르는
                    독보적인 차별화를 제공합니다.
                  </p>
                </div>
                <div className="hidden lg:block xl:hidden">
                  <p className="mb-6">
                    드라이클리닝 시장은 전체 세탁 시장의 70-80%를 차지하는 매우 큰 시장입니다. 연간
                    4조 3천억원 규모이지만, 기존 드라이클리닝 업체들은 어려움과 고령화로 인해
                    어려움을 겪고 있습니다.
                  </p>
                  <p>
                    호텔런드리는 이러한 시장 트렌드를 파악하고 연구개발을 통해 마침내 세계 최초의
                    무인 셀프 드라이클리닝을 출시했습니다. 전체 세탁 시장의 20-30%에 불과한 빨래방
                    시장을 넘어 전체 세탁 시장을 아우르는 독보적인 차별화를 제공합니다.
                  </p>
                </div>
                <div className="hidden xl:block">
                  <p className="mb-6">
                    드라이클리닝 시장은 전체 세탁 시장의 70-80%를 차지하는 매우 큰 시장입니다. 연간
                    4조 3천억원 규모이지만, <br />
                    기존 드라이클리닝 업체들은 어려움과 고령화로 인해 어려움을 겪고 있습니다.
                  </p>
                  <p>
                    호텔런드리는 이러한 시장 트렌드를 파악하고 연구개발을 통해 마침내 세계 최초의
                    무인 셀프 드라이클리닝을 출시했습니다. <br />
                    전체 세탁 시장의 20-30%에 불과한 빨래방 시장을 넘어 전체 세탁 시장을 아우르는
                    독보적인 차별화를 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 국내 세탁시장 규모 섹션 */}
          <div className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 2rem)' }}
            >
              <span className="block 2xl:hidden">국내 세탁시장 규모 및 전망</span>
              <span className="hidden 2xl:block">국내 세탁시장 규모 및 전망</span>
            </h2>

            <div className="bg-white border-2 border-gray-300 rounded-lg p-8">
              {/* 상단 정보 */}
              <div className="text-center mb-8">
                <p className="text-sm text-gray-600 mb-1">자료: 통계청·세탁업계</p>
                <p className="text-sm text-gray-600 mb-1">※2023년 이후는 전망치</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* 좌측: 원형 차트 */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    {/* 원형 차트 */}
                    <div className="w-64 h-64 rounded-full bg-[#102254] flex items-center justify-center text-white relative">
                      {/* 내부 원 (물빨래 시장) */}
                      <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center text-gray-800 relative">
                        <div className="text-center">
                          <div className="text-xs mb-1">물빨래 시장</div>
                          <div className="text-lg font-bold">3조</div>
                        </div>
                      </div>

                      {/* 외부 원 텍스트 */}
                      <div className="absolute bottom-5 text-center text-white">
                        <div className="text-xs mb-1">2028년 세탁 시장 전체규모</div>
                        <div className="text-lg font-bold">7조2천억원</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 우측: 막대 차트 + 범례 */}
                <div className="lg:col-span-2">
                  {/* 막대 차트 */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {/* 2018년 */}
                    <div className="text-center">
                      <div className="text-sm font-medium mb-2">2018년</div>
                      <div className="flex justify-center gap-1 h-16 items-end mb-2">
                        <div
                          className="bg-[#102254] w-10 rounded-t"
                          style={{ height: '50px' }}
                        ></div>
                        <div className="bg-blue-200 w-10 rounded-t" style={{ height: '6px' }}></div>
                      </div>
                      <div className="flex justify-center gap-1 text-xs mb-2">
                        <div className="w-12 text-center">4.3 조</div>
                        <div className="w-14 text-center">0.25 조</div>
                      </div>
                      <div className="text-sm font-bold">총 4.55조원</div>
                    </div>

                    {/* 2020년 */}
                    <div className="text-center">
                      <div className="text-sm font-medium mb-2">2020년</div>
                      <div className="flex justify-center gap-1 h-16 items-end mb-2">
                        <div
                          className="bg-[#102254] w-10 rounded-t"
                          style={{ height: '50px' }}
                        ></div>
                        <div className="bg-blue-200 w-10 rounded-t" style={{ height: '8px' }}></div>
                      </div>
                      <div className="flex justify-center gap-1 text-xs mb-2">
                        <div className="w-12 text-center">4.3 조</div>
                        <div className="w-12 text-center">0.7 조</div>
                      </div>
                      <div className="text-sm font-bold">총 5.0조원</div>
                    </div>

                    {/* 2023년 */}
                    <div className="text-center">
                      <div className="text-sm font-medium mb-2">2023년</div>
                      <div className="flex justify-center gap-1 h-16 items-end mb-2">
                        <div
                          className="bg-[#102254] w-10 rounded-t"
                          style={{ height: '48px' }}
                        ></div>
                        <div
                          className="bg-blue-200 w-10 rounded-t"
                          style={{ height: '18px' }}
                        ></div>
                      </div>
                      <div className="flex justify-center gap-1 text-xs mb-2">
                        <div className="w-12 text-center">4.2 조</div>
                        <div className="w-12 text-center">1.5 조</div>
                      </div>
                      <div className="text-sm font-bold">총 5.7조원</div>
                    </div>

                    {/* 2028년 */}
                    <div className="text-center">
                      <div className="text-sm font-medium mb-2">2028년</div>
                      <div className="flex justify-center gap-1 h-16 items-end mb-2">
                        <div
                          className="bg-[#102254] w-10 rounded-t"
                          style={{ height: '48px' }}
                        ></div>
                        <div
                          className="bg-blue-200 w-10 rounded-t"
                          style={{ height: '32px' }}
                        ></div>
                      </div>
                      <div className="flex justify-center gap-1 text-xs mb-2">
                        <div className="w-12 text-center">4.2 조</div>
                        <div className="w-12 text-center">3.0 조</div>
                      </div>
                      <div className="text-sm font-bold">총 7.2조원</div>
                    </div>
                  </div>

                  {/* 범례 */}
                  <div className="flex justify-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-200 rounded"></div>
                      <span className="text-sm text-gray-700">물빨래</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#102254] rounded"></div>
                      <span className="text-sm text-gray-700">드라이클리닝</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 하단 강조 박스 */}
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mt-6 text-center">
                <div className="text-sm text-gray-700 mb-2">2028년 세탁 시장 전망 규모</div>
                <div className="text-xl font-bold text-[#102254]">7조 2천억원</div>
                <p className="text-xs text-gray-600 mt-1">
                  드라이클리닝 시장이 급성장하여 전체 시장의 42%를 차지할 전망
                </p>
              </div>
            </div>
          </div>

          {/* 물로하는 깨끗한 Self Dry Cleaning 섹션 */}

          <div className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 2rem)' }}
            >
              <span className="block 2xl:hidden">물로하는 깨끗한 Self Dry Cleaning</span>
              <span className="hidden 2xl:block">물로하는 깨끗한 Self Dry Cleaning</span>
            </h2>

            <div className="text-center mb-8">
              <p className="text-gray-700 leading-relaxed">
                석유계열 용제 기반 드라이클리닝은 환경과 인체에 문제가 있으며, 미국과 유럽에서는
                이미 물 기반 드라이클리닝이 대안이 되고 있습니다. <br />
                호텔런드리의 무인 셀프 드라이클리닝은 세계 최초로 시간과 비용이라는 두 가지 혁신을
                담아 국내 독보적인 차별화 모델을 만들었습니다.
              </p>
            </div>

            {/* 4가지 특징 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white border-2 border-[#102254] p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-xl">💧</div>
                </div>
                <h3 className="text-lg font-bold text-[#102254] mb-3">물 기반 세탁</h3>
                <p className="text-gray-600 text-sm">
                  발암물질 석유계열 용제(PER) 대신 깨끗하고 안전한 물을 이용한 드라이클리닝
                </p>
              </div>

              <div className="bg-white border-2 border-[#102254] p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-xl">⚡</div>
                </div>
                <h3 className="text-lg font-bold text-[#102254] mb-3">빠른 처리</h3>
                <p className="text-gray-600 text-sm">
                  1시간 20분 만에 완성되는 고속 처리 (기존 3-5일 → 1시간 20분)
                </p>
              </div>

              <div className="bg-white border-2 border-[#102254] p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-xl">💰</div>
                </div>
                <h3 className="text-lg font-bold text-[#102254] mb-3">비용 절약</h3>
                <p className="text-gray-600 text-sm">기존 대비 85% 비용 절약 (10만원 → 1만5천원)</p>
              </div>

              <div className="bg-white border-2 border-[#102254] p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-xl">🌍</div>
                </div>
                <h3 className="text-lg font-bold text-[#102254] mb-3">환경 친화적</h3>
                <p className="text-gray-600 text-sm">유해 화학물질 배출 없는 친환경 세정</p>
              </div>
            </div>
          </div>

          {/* 옷 이미지 섹션 */}
          <div className="mb-16">
            <div className="rounded-lg overflow-hidden h-62">
              <img
                src={`${ASSET_URL}/image/cloth.png`}
                alt="드라이클리닝 서비스 이미지"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 처리 가능 소재 섹션 */}
          <div className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 2rem)' }}
            >
              <span className="block 2xl:hidden">처리 가능 소재</span>
              <span className="hidden 2xl:block">처리 가능 소재</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-300 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#102254] mb-4">일반 소재</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• 면 (Cotton)</li>
                  <li>• 폴리에스터 (Polyester)</li>
                  <li>• 나일론 (Nylon)</li>
                  <li>• 아크릴 (Acrylic)</li>
                  <li>• 혼방 소재</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-300 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#102254] mb-4">고급 소재</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• 울 (Wool)</li>
                  <li>• 실크 (Silk)</li>
                  <li>• 캐시미어 (Cashmere)</li>
                  <li>• 모헤어 (Mohair)</li>
                  <li>• 앙고라 (Angora)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 드라이클리닝 과정 섹션 */}
          <div className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 2rem)' }}
            >
              <span className="block 2xl:hidden">드라이클리닝 과정</span>
              <span className="hidden 2xl:block">드라이클리닝 과정</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-[#102254] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-[#102254] mb-2">전처리</h3>
                <p className="text-sm text-gray-600">오염 부위 확인 및 전처리</p>
              </div>
              <div className="text-center">
                <div className="bg-[#102254] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-[#102254] mb-2">드라이클리닝</h3>
                <p className="text-sm text-gray-600">전문 화학약품으로 세정</p>
              </div>
              <div className="text-center">
                <div className="bg-[#102254] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-[#102254] mb-2">건조</h3>
                <p className="text-sm text-gray-600">적절한 온도로 건조</p>
              </div>
              <div className="text-center">
                <div className="bg-[#102254] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-[#102254] mb-2">완성</h3>
                <p className="text-sm text-gray-600">최종 정검 및 완성</p>
              </div>
            </div>
          </div>

          {/* CTA 섹션 */}
          <div className="bg-[#102254] text-white p-8 rounded-lg text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              스마트 건조기와 시간과 비용을 절약하세요.
            </h2>
            <div className="flex justify-center mt-6">
              <Link
                to="/contact"
                className="bg-yellow-400 text-[#102254] px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors inline-block"
              >
                창업 문의하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfDryCleaning;
