import React, { useState, useEffect } from 'react';
import Next from './StoreListImage/next.svg';
import ToNext from './StoreListImage/tonext.svg';
import StoreCard from './StoreCard';
import useApi from '../../../hooks/useApi';

const Section3 = () => {
  const [activeFilter, setActiveFilter] = useState('전국');
  const [currentPage, setCurrentPage] = useState(1);
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = useApi();

  // 운영 매장 목록 조회
  useEffect(() => {
    const fetchStores = async () => {
      try {
        setLoading(true);
        
        // 지역 필터링 처리
        let region = null;
        if (activeFilter !== '전국' && activeFilter !== '그 외') {
          region = activeFilter;
        }

        const params = new URLSearchParams({
          page: '0',
          size: '1000', // 모든 데이터 가져오기 (프론트에서 페이지네이션)
          sort: 'storeName,asc',
        });

        if (region) {
          params.append('region', region);
        }

        // 운영 중인 매장만 조회
        params.append('status', 'OPERATING');

        const response = await api.get(`/operating-stores?${params.toString()}`);
        
        // API 응답 데이터를 변환
        const transformedStores = response.content.map(store => ({
          storeId: store.storeId,
          name: store.storeName,
          address: `${store.address.address} ${store.address.detailAddress}`,
          region: store.region,
          serialNumber: store.serialNumber,
          thumbnailKey: store.thumbnailKey, // 이미지 키 추가
        }));

        setStores(transformedStores);
      } catch (error) {
        console.error('❌ 운영 매장 목록 조회 실패:', error);
        setStores([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, [activeFilter]);

  // 필터링 로직 (그 외 지역만 프론트에서 처리)
  const filteredStores = stores.filter(store => {
    if (activeFilter === '그 외') {
      const mainRegions = ['서울', '경기', '인천'];
      return !mainRegions.includes(store.region); 
    }
    return true; // 나머지는 이미 API에서 필터링됨
  });

  // 페이지네이션 로직
  const storesPerPage = 9;
  const indexOfLastStore = currentPage * storesPerPage;
  const indexOfFirstStore = indexOfLastStore - storesPerPage;
  const currentStores = filteredStores.slice(indexOfFirstStore, indexOfLastStore);
  const totalPages = Math.ceil(filteredStores.length / storesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
          <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] font-bold text-[#1C262B] font-KoPubWorldDotum leading-normal tracking-[-0.44px] sm:tracking-[-0.48px] md:tracking-[-0.56px] lg:tracking-[-0.64px] xl:tracking-[-0.72px] 2xl:tracking-normal mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px] text-center">전국 매장 현황</h2>

          {/* 필터 버튼 */}
          <div className="flex justify-center flex-wrap gap-4 mb-[20px] sm:mb-[30px] md:mb-[20px] lg:mb-[30px] xl:mb-[30px] 2xl:mb-[30px]">
            <button onClick={() => handleFilterChange('전국')} className={`px-6 py-2 rounded-full font-semibold text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] ${activeFilter === '전국' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border'}`}>전국</button>
            <button onClick={() => handleFilterChange('서울')} className={`px-6 py-2 rounded-full font-semibold text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] ${activeFilter === '서울' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border'}`}>서울</button>
            <button onClick={() => handleFilterChange('경기')} className={`px-6 py-2 rounded-full font-semibold text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] ${activeFilter === '경기' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border'}`}>경기</button>
            <button onClick={() => handleFilterChange('인천')} className={`px-6 py-2 rounded-full font-semibold text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] ${activeFilter === '인천' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border'}`}>인천</button>              
            <button onClick={() => handleFilterChange('그 외')} className={`px-6 py-2 rounded-full font-semibold text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] ${activeFilter === '그 외' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border'}`}>그 외</button>              
          </div>

          {/* 로딩 상태 */}
          {loading && (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"></div>
            </div>
          )}

          {/* 매장이 없을 때 */}
          {!loading && filteredStores.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">해당 지역에 운영 중인 매장이 없습니다.</p>
            </div>
          )}

          {/* 매장 카드 그리드 - 모바일에서만 슬라이드, 태블릿/데스크톱에서는 그리드 */}
          {!loading && filteredStores.length > 0 && (
            <>
              {/* 모바일 슬라이드 컨테이너 */}
              <div className="md:hidden overflow-x-auto pb-4">
                <div className="flex space-x-4" style={{ width: `${filteredStores.length * 280}px` }}>
                  {filteredStores.map(store => (
                    <div key={store.storeId} className="flex-shrink-0 w-70">
                      <StoreCard store={store} />
                    </div>
                  ))}
                </div>
              </div>

              {/* 태블릿/데스크톱 그리드 */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                {currentStores.map(store => (
                  <StoreCard key={store.storeId} store={store} />
                ))}
              </div>
            </>
          )}

          {/* 페이지네이션 - 태블릿/데스크톱에서만 표시 */}
          {!loading && filteredStores.length > 0 && totalPages > 1 && (
          <nav className="hidden md:flex justify-center items-center mt-16 space-x-2">
            <button onClick={() => handlePageChange(1)} disabled={currentPage === 1} className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-50">
              <img src={ToNext} alt="마지막 이전 페이지" className="h-5 w-5 rotate-180" />
            </button>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-50">
              <img src={Next} alt="이전 페이지" className="h-5 w-5 rotate-180" />
            </button>
            
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`w-8 h-8 rounded text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] ${currentPage === index + 1 ? 'text-white bg-gray-800' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                {index + 1}
              </button>
            ))}

            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-50">
              <img src={Next} alt="다음 페이지" className="h-5 w-5" />
            </button>
            <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} className="p-2 text-gray-500 hover:text-gray-800 disabled:opacity-50">
              <img src={ToNext} alt="마지막 페이지" className="h-5 w-5" />
            </button>
          </nav>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section3;
