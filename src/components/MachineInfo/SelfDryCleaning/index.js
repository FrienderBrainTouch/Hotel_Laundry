import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../StoreInfo/common/home.svg';

const SelfDryCleaning = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          {/* 브레드크럼 */}
          <div className="mb-8 md:mb-12 w-full xs:w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
            <div className="flex items-center gap-2 sm:gap-4 font-pretendard">
              <Link to="/">
                <img src={homeIcon} alt="홈" />
              </Link>
              <span className="text-brand-dark text-20">/</span>
              <span className="text-brand-dark text-20">호텔런드리</span>
              <span className="text-brand-dark text-20">/</span>
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-1 text-brand-dark text-20 hover:text-[#102254] transition-colors"
                >
                  셀프 드라이클리닝
                  <span className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </button>
                {isMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[9998] min-w-[120px]">
                    <Link
                      to="/washing-machine"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      세탁기
                    </Link>
                    <Link
                      to="/dryer"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      건조기
                    </Link>
                    <Link
                      to="/self-dry-cleaning"
                      onClick={handleMenuClose}
                      className="block w-full text-left px-4 py-2 text-[#102254] font-medium hover:bg-gray-50 transition-colors"
                    >
                      셀프 드라이클리닝
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 제목 */}
          <div className="text-center mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px] w-full xs:w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
            <h1
              className="hero-title sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.48px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px]"
            >
              <span className="block 2xl:hidden">물로하는 깨끗한 Self Dry Cleaning</span>
              <span className="hidden 2xl:block">물로하는 깨끗한 Self Dry Cleaning - 드라이클리닝도 셀프시대</span>
            </h1>

            {/* 부제목 */}
            <div
              className="text-center mx-auto text-24 sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-light leading-normal text-[#1C262B] font-KoPubWorldDotum tracking-[-0.32px] sm:tracking-[-0.32px] md:tracking-[-0.36px] lg:tracking-[-0.4px] xl:tracking-[-0.44px] 2xl:tracking-[-0.48px]"
            >
              <div className="block sm:hidden">
                <p className="mb-8">미국과 유럽에서는 이미 물로 하는 드라이클리닝이 시장에서 대안이 되고 있습니다.</p>
                <p>세계 최초로 호텔런드리의 무인 셀프 드라이클리닝은 시간과 비용이라는 두가지 혁신을 담아 국내 독보적인 차별화 모델을 만들었습니다.</p>
              </div>
              <div className="hidden sm:block lg:hidden">
                <p>미국과 유럽에서는 이미 물로 하는 드라이클리닝이 시장에서 대안이 되고 있습니다.</p>
                <p>세계 최초로 호텔런드리의 무인 셀프 드라이클리닝은 시간과 비용이라는 <br />두가지 혁신을 담아 국내 독보적인 차별화 모델을 만들었습니다.</p>
              </div>
              <div className="hidden lg:block xl:hidden">
                <p>미국과 유럽에서는 이미 물로 하는 드라이클리닝이 시장에서 대안이 되고 있습니다.</p>
                <p>세계 최초로 호텔런드리의 무인 셀프 드라이클리닝은 시간과 비용이라는 두가지 혁신을 담아 국내 독보적인 차별화 모델을 만들었습니다.</p>
              </div>
              <div className="hidden xl:block">
                <p>미국과 유럽에서는 이미 물로 하는 드라이클리닝이 시장에서 대안이 되고 있습니다.</p>
                <p>세계 최초로 호텔런드리의 무인 셀프 드라이클리닝은 시간과 비용이라는 두가지 혁신을 담아 국내 독보적인 차별화 모델을 만들었습니다.</p>
              </div>
            </div>
          </div>

          {/* 비용 비교 섹션 */}
          <div className="bg-gradient-to-r from-[#102254] to-[#1a3a5c] text-white p-8 rounded-lg mb-12">
            <div className="text-center">
              <h2 className="section-title sm:text-2xl md:text-3xl font-bold mb-6">1시간 20분 만에 완성!</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-red-300">기존 드라이클리닝</h3>
                  <div className="text-4xl font-bold mb-2">100,000원</div>
                  <p className="text-lg">옷 몇 벌에 10만원?</p>
                  <ul className="mt-4 text-sm space-y-1">
                    <li>• 3-5일 소요</li>
                    <li>• 높은 비용</li>
                    <li>• 불편한 방문</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-6 rounded-lg border-2 border-yellow-400">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-300">호텔런드리 셀프</h3>
                  <div className="text-4xl font-bold mb-2">15,000원</div>
                  <p className="text-lg">셀프로 만5천원</p>
                  <ul className="mt-4 text-sm space-y-1">
                    <li>• 1시간 20분 완성</li>
                    <li>• 저렴한 비용</li>
                    <li>• 편리한 셀프 서비스</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 국내 세탁시장 규모 섹션 */}
          <div className="mb-12">
            <h2 className="section-title sm:text-2xl md:text-3xl font-bold text-[#102254] mb-8 text-center">국내 세탁시장 규모 및 전망</h2>
            <div className="bg-white border-2 border-[#102254] p-8 rounded-lg">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-600 mb-2">자료: 통계청·세탁업계</p>
                <p className="text-sm text-gray-500">※2023년 이후는 전망치</p>
              </div>
              
              {/* 시장 규모 차트 - 독립형 막대 그래프 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {/* 2018년 */}
                <div className="text-center">
                  <div className="text-sm font-semibold mb-6">2018년</div>
                  <div className="flex justify-center gap-3 h-48 items-end">
                    {/* 물빨래 막대 */}
                    <div className="flex flex-col items-center">
                      <div 
                        className="bg-[#102254] w-10 rounded-t-lg"
                        style={{ height: '180px' }}
                      ></div>
                      <div className="text-xs mt-2 font-medium">4.3조</div>
                    </div>
                    {/* 드라이클리닝 막대 */}
                    <div className="flex flex-col items-center">
                      <div 
                        className="bg-[#E3F2FD] w-10 rounded-t-lg border border-[#102254]"
                        style={{ height: '10px' }}
                      ></div>
                      <div className="text-xs mt-2 font-medium">0.25조</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-[#102254] mt-3">총 4.55조원</div>
                </div>

                {/* 2020년 */}
                <div className="text-center">
                  <div className="text-sm font-semibold mb-6">2020년</div>
                  <div className="flex justify-center gap-3 h-48 items-end">
                    {/* 물빨래 막대 */}
                    <div className="flex flex-col items-center">
                      <div 
                        className="bg-[#102254] w-10 rounded-t-lg"
                        style={{ height: '180px' }}
                      ></div>
                      <div className="text-xs mt-2 font-medium">4.3조</div>
                    </div>
                    {/* 드라이클리닝 막대 */}
                    <div className="flex flex-col items-center">
                      <div 
                        className="bg-[#E3F2FD] w-10 rounded-t-lg border border-[#102254]"
                        style={{ height: '30px' }}
                      ></div>
                      <div className="text-xs mt-2 font-medium">0.7조</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-[#102254] mt-3">총 5.0조원</div>
                </div>

                {/* 2023년 */}
                <div className="text-center">
                  <div className="text-sm font-semibold mb-6">2023년</div>
                  <div className="flex justify-center gap-3 h-48 items-end">
                    {/* 물빨래 막대 */}
                    <div className="flex flex-col items-center">
                      <div 
                        className="bg-[#102254] w-10 rounded-t-lg"
                        style={{ height: '170px' }}
                      ></div>
                      <div className="text-xs mt-2 font-medium">4.2조</div>
                    </div>
                    {/* 드라이클리닝 막대 */}
                    <div className="flex flex-col items-center">
                      <div 
                        className="bg-[#E3F2FD] w-10 rounded-t-lg border border-[#102254]"
                        style={{ height: '60px' }}
                      ></div>
                      <div className="text-xs mt-2 font-medium">1.5조</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-[#102254] mt-3">총 5.7조원</div>
                </div>

                {/* 2028년 */}
                <div className="text-center">
                  <div className="text-sm font-semibold mb-6">2028년</div>
                  <div className="flex justify-center gap-3 h-48 items-end">
                    {/* 물빨래 막대 */}
                    <div className="flex flex-col items-center">
                      <div 
                        className="bg-[#102254] w-10 rounded-t-lg"
                        style={{ height: '170px' }}
                      ></div>
                      <div className="text-xs mt-2 font-medium">4.2조</div>
                    </div>
                    {/* 드라이클리닝 막대 */}
                    <div className="flex flex-col items-center">
                      <div 
                        className="bg-[#E3F2FD] w-10 rounded-t-lg border border-[#102254]"
                        style={{ height: '120px' }}
                      ></div>
                      <div className="text-xs mt-2 font-medium">3.0조</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-[#102254] mt-3">총 7.2조원</div>
                </div>
              </div>

              {/* 범례 */}
              <div className="flex justify-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#102254] rounded"></div>
                  <span className="text-sm text-gray-700">물빨래</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#E3F2FD] rounded"></div>
                  <span className="text-sm text-gray-700">드라이클리닝</span>
                </div>
              </div>

              {/* 2028년 강조 */}
              <div className="text-center bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
                <div className="text-4xl font-bold text-[#102254] mb-2">2028년 세탁 시장 전체 규모</div>
                <div className="text-5xl font-bold text-red-600">7조 2천억원</div>
                <p className="text-lg text-gray-700 mt-2">드라이클리닝 시장이 급성장하여 전체 시장의 42%를 차지할 전망</p>
              </div>
            </div>
          </div>

          {/* 물 기반 드라이클리닝 특징 섹션 */}
          <div className="mb-12">
            <h2 className="section-title sm:text-2xl md:text-3xl font-bold text-[#102254] mb-8 text-center">물 기반 드라이클리닝의 혁신</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border-2 border-[#102254] p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-xl">💧</div>
                </div>
                <h3 className="text-lg font-bold text-[#102254] mb-3">물 기반 세정</h3>
                <p className="text-gray-600 text-sm">유해한 화학약품 대신 물을 이용한 안전한 세정</p>
              </div>
              <div className="bg-white border-2 border-[#102254] p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-xl">⚡</div>
                </div>
                <h3 className="text-lg font-bold text-[#102254] mb-3">빠른 처리</h3>
                <p className="text-gray-600 text-sm">1시간 20분 만에 완성되는 고속 처리</p>
              </div>
              <div className="bg-white border-2 border-[#102254] p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-xl">💰</div>
                </div>
                <h3 className="text-lg font-bold text-[#102254] mb-3">비용 절약</h3>
                <p className="text-gray-600 text-sm">기존 대비 85% 비용 절약 (10만원 → 1만5천원)</p>
              </div>
              <div className="bg-white border-2 border-[#102254] p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-[#102254] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-xl">🌍</div>
                </div>
                <h3 className="text-lg font-bold text-[#102254] mb-3">환경 친화적</h3>
                <p className="text-gray-600 text-sm">유해 화학물질 배출 없는 친환경 세정</p>
              </div>
            </div>
          </div>

          {/* 처리 가능 소재 섹션 */}
          <div className="mb-12">
            <h2 className="section-title sm:text-2xl md:text-3xl font-bold text-[#102254] mb-8 text-center">처리 가능 소재</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#102254] mb-4">일반 소재</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• 면 (Cotton)</li>
                  <li>• 폴리에스터 (Polyester)</li>
                  <li>• 나일론 (Nylon)</li>
                  <li>• 아크릴 (Acrylic)</li>
                  <li>• 혼방 소재</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
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
          <div className="mb-12">
            <h2 className="section-title sm:text-2xl md:text-3xl font-bold text-[#102254] mb-8 text-center">드라이클리닝 과정</h2>
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
                <p className="text-sm text-gray-600">최종 점검 및 완성</p>
              </div>
            </div>
          </div>

          {/* CTA 섹션 */}
          <div className="bg-[#102254] text-white p-8 rounded-lg text-center">
            <h2 className="section-title sm:text-xl md:text-2xl font-bold mb-4">스마트 건조기와 시간과 비용을 절약하세요.</h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <button className="bg-yellow-400 text-[#102254] px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
                창업 문의하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfDryCleaning;