import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../common/Pagination';
import { useStoresList } from '../../../hooks/queries/useStores';

const StoreProgress = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // 페이지당 아이템 수 (API size)

  const statusParam = useMemo(() => {
    if (activeFilter === 'recruiting') return 'RECRUITING';
    if (activeFilter === 'closed') return 'CLOSED';
    return null; // 모두 보기 → null (쿼리 전송 생략)
  }, [activeFilter]);

  const { data, isLoading, error } = useStoresList({
    status: statusParam,
    page: currentPage - 1, // API는 0-based
    size: itemsPerPage,
    // sort: 'modifiedAt,desc',
  });

  const getStatusPill = (status) => {
    const map = {
      WAITING: { text: '대기', cls: 'bg-gray-100 text-gray-800' },
      RECRUITING: { text: '모집중', cls: 'bg-blue-100 text-blue-800' },
      CLOSED: { text: '모집마감', cls: 'bg-gray-200 text-gray-800' },
      COMPLETE: { text: '완료', cls: 'bg-green-100 text-green-800' },
    };
    const { text, cls } = map[status] || { text: status || '-', cls: 'bg-gray-100 text-gray-800' };
    return { text, cls };
  };

  const totalPages = data?.totalPages || 0;
  const currentStores = useMemo(() => {
    const list = data?.content || [];
    const toImageUrl = (v) => {
      if (!v) return '';
      if (typeof v === 'string' && /^https?:\/\//i.test(v)) return v;
      const base = process.env.REACT_APP_IMAGE_BASE_URL;
      return `${base}${v}`;
    };
    return list.map((s) => {
      const locationText = [s.location, s.detailLocation].filter(Boolean).join(' ');
      const detailsLines = [
        `${s.targetOpeningDate || ''} 오픈 목표`.trim(),
        `${s.areaSqm || 0}평 / 세탁기 ${s.washingMachines || 0}대, 건조기 ${s.dryers || 0}대`,
      ].filter(Boolean);
      return {
        id: s.storeId,
        location: locationText,
        status: s.status || null,
        details: detailsLines.join('\n'),
        thumbnail: toImageUrl(s.imageKey),
      };
    });
  }, [data]);

  // 필터 변경 시 첫 페이지로 이동
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  // 페이지 변경 핸들러
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="flex justify-center">
          <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-4">
            {/* Main Title */}
            <div className="text-center mb-12">
              <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] font-bold leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum mb-3">
                소자본으로 시작하는 안정적 창업
              </h1>
              <p className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] font-medium leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum">
                리스크는 분산하고 운영은 효율적으로, 수익은 안정적으로
              </p>
            </div>

            {/* 4 Benefits Cards */}
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-8 mb-12 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20 max-w-[1400px] mx-auto">
              {/* 초기 투자금 절감 */}
              <div className="bg-[#F6F8FD] rounded-[10px] p-3 xs:p-4 sm:p-4 md:p-5 lg:p-6 xl:p-6 2xl:p-8 flex flex-col items-center text-center w-full h-[200px] xs:h-[220px] sm:h-[240px] md:h-[250px] lg:h-[260px] xl:h-[270px] 2xl:h-[280px] justify-center gap-3 xs:gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-5 2xl:gap-6">
                <div className="w-20 h-20 bg-[#FAFAFA] rounded-full flex items-center justify-center shadow-[0px_3px_7px_0px_rgba(0,0,0,0.15)]">
                  <img
                    src="/images/store-progress/investment-icon.svg"
                    alt="초기 투자금 절감"
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <h3 className="text-[24px] font-bold leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum">
                    초기 투자금 절감
                  </h3>
                  <p className="text-[18px] font-medium leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum text-center">
                    설비·인테리어 비용
                    <br />
                    공동 분담으로 부담 최소화
                  </p>
                </div>
              </div>

              {/* 리스크 최소화 */}
              <div className="bg-[#F6F8FD] rounded-[10px] p-3 xs:p-4 sm:p-4 md:p-5 lg:p-6 xl:p-6 2xl:p-8 flex flex-col items-center text-center w-full h-[200px] xs:h-[220px] sm:h-[240px] md:h-[250px] lg:h-[260px] xl:h-[270px] 2xl:h-[280px] justify-center gap-3 xs:gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-5 2xl:gap-6">
                <div className="w-20 h-20 bg-[#FAFAFA] rounded-full flex items-center justify-center shadow-[0px_3px_7px_0px_rgba(0,0,0,0.15)]">
                  <img
                    src="/images/store-progress/risk-icon.svg"
                    alt="리스크 최소화"
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <h3 className="text-[24px] font-bold leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum">
                    리스크 최소화
                  </h3>
                  <p className="text-[18px] font-medium leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum text-center">
                    매출 변동·장비 고장 위험을
                    <br />
                    함께 나눠 안정적
                  </p>
                </div>
              </div>

              {/* 안정적 운영 */}
              <div className="bg-[#F6F8FD] rounded-[10px] p-3 xs:p-4 sm:p-4 md:p-5 lg:p-6 xl:p-6 2xl:p-8 flex flex-col items-center text-center w-full h-[200px] xs:h-[220px] sm:h-[240px] md:h-[250px] lg:h-[260px] xl:h-[270px] 2xl:h-[280px] justify-center gap-3 xs:gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-5 2xl:gap-6">
                <div className="w-20 h-20 bg-[#FAFAFA] rounded-full flex items-center justify-center shadow-[0px_3px_7px_0px_rgba(0,0,0,0.15)]">
                  <img
                    src="/images/store-progress/operation-icon.svg"
                    alt="안정적 운영"
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h3 className="text-[24px] font-bold leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum">
                    안정적 운영
                  </h3>
                  <p className="text-[18px] font-medium leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum text-center">
                    관리·홍보 업무 분담,
                    <br />
                    개인 부담 줄이고 효율 극대화
                  </p>
                </div>
              </div>

              {/* 확장성 */}
              <div className="bg-[#F6F8FD] rounded-[10px] p-3 xs:p-4 sm:p-4 md:p-5 lg:p-6 xl:p-6 2xl:p-8 flex flex-col items-center text-center w-full h-[200px] xs:h-[220px] sm:h-[240px] md:h-[250px] lg:h-[260px] xl:h-[270px] 2xl:h-[280px] justify-center gap-3 xs:gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-5 2xl:gap-6">
                <div className="w-20 h-20 bg-[#FAFAFA] rounded-full flex items-center justify-center shadow-[0px_3px_7px_0px_rgba(0,0,0,0.15)]">
                  <img
                    src="/images/store-progress/expansion-icon.svg"
                    alt="확장성"
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <h3 className="text-[24px] font-bold leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum">
                    확장성
                  </h3>
                  <p className="text-[18px] font-medium leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum text-center">
                    다점포·체인 확장 가능
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Status Section */}
      <section className="py-6 bg-white">
        <div className="flex justify-center">
          <div className="w-full xs:max-w-[355px] sm:max-w-[535px] md:max-w-[728px] lg:max-w-[924px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-4">
            {/* Section Title */}
            <div className="text-center mb-8">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] font-bold leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum mb-3">
                모집 현황 안내
              </h2>
              <p className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] font-medium leading-[1.54] tracking-[-0.02em] text-black font-KoPubWorldDotum">
                지역별로 진행되는 창업 모집 현황을 투명하게 공개합니다.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center mb-8">
              <div className="flex gap-3 xs:gap-4 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-8">
                <button
                  onClick={() => handleFilterChange('all')}
                  className={`px-4 py-1.5 xs:px-5 xs:py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-2 lg:px-10 lg:py-2 xl:px-12 xl:py-3 2xl:px-14 2xl:py-3 rounded-lg text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[22px] font-medium leading-[1.54] tracking-[-0.02em] font-KoPubWorldDotum ${
                    activeFilter === 'all'
                      ? 'bg-[rgba(164,198,224,0.2)] text-[#1C262B]'
                      : 'bg-[#F2F2F2] text-[#1C262B]'
                  }`}
                >
                  모두 보기
                </button>
                <button
                  onClick={() => handleFilterChange('recruiting')}
                  className={`px-4 py-1.5 xs:px-5 xs:py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-2 lg:px-10 lg:py-2 xl:px-12 xl:py-3 2xl:px-14 2xl:py-3 rounded-lg text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[22px] font-medium leading-[1.54] tracking-[-0.02em] font-KoPubWorldDotum ${
                    activeFilter === 'recruiting'
                      ? 'bg-[rgba(164,198,224,0.2)] text-[#1C262B]'
                      : 'bg-[#F2F2F2] text-[#1C262B]'
                  }`}
                >
                  모집 중
                </button>
                <button
                  onClick={() => handleFilterChange('closed')}
                  className={`px-4 py-1.5 xs:px-5 xs:py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-2 lg:px-10 lg:py-2 xl:px-12 xl:py-3 2xl:px-14 2xl:py-3 rounded-lg text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[22px] font-medium leading-[1.54] tracking-[-0.02em] font-KoPubWorldDotum ${
                    activeFilter === 'closed'
                      ? 'bg-[rgba(164,198,224,0.2)] text-[#1C262B]'
                      : 'bg-[#F2F2F2] text-[#1C262B]'
                  }`}
                >
                  모집 마감
                </button>
              </div>
            </div>

            {/* Store Cards Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-8 mb-8 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-12 2xl:mb-16 max-w-[1400px] mx-auto">
              {isLoading && (
                <div className="col-span-full text-center text-gray-600">불러오는 중…</div>
              )}
              {error && (
                <div className="col-span-full text-center text-red-600">
                  목록을 불러오지 못했습니다.
                </div>
              )}
              {!isLoading && !error && currentStores.length === 0 && (
                <div className="col-span-full text-center text-gray-600">
                  아직 진행 중인 매장이 없습니다. <br />곧 새로운 매장이 추가될 예정이에요 😊
                </div>
              )}
              {!isLoading &&
                !error &&
                currentStores.map((store) => (
                  <Link
                    key={store.id}
                    to={`/startup-guide/low-capital-startup/store-progress/${store.id}`}
                    className={`w-full max-w-[335px] mx-auto block transition-opacity duration-200 ${
                      store.status === 'CLOSED' ? 'opacity-60 hover:opacity-70' : 'hover:opacity-90'
                    }`}
                  >
                    {/* Store Image */}
                    <div className="w-full h-[250px] rounded-t-2xl mb-0 overflow-hidden relative">
                      <img
                        src={store.thumbnail || '/images/store-progress/store-image.png'}
                        alt={`${store.location} 매장`}
                        className={`w-full h-full object-cover ${
                          store.status === 'CLOSED' ? 'grayscale brightness-75' : ''
                        }`}
                      />
                      {store.status
                        ? (() => {
                            const { text, cls } = getStatusPill(store.status);
                            return (
                              <span
                                className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold ${cls}`}
                              >
                                {text}
                              </span>
                            );
                          })()
                        : null}
                    </div>

                    {/* Store Info */}
                    <div
                      className={`px-3 py-2 rounded-b-2xl h-[179px] flex flex-col ${
                        store.status === 'RECRUITING'
                          ? 'bg-[rgba(164,198,224,0.2)]'
                          : 'bg-[#F2F2F2]'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-4 px-3 flex-shrink-0">
                        <h3 className="text-[22px] font-bold leading-[1.54] tracking-[-0.02em] text-[#1C262B] font-KoPubWorldDotum truncate pt-1.5">
                          {store.location}
                        </h3>
                        {/* <span className="text-[22px] font-medium leading-[1.54] tracking-[-0.02em] text-[#1C262B] font-KoPubWorldDotum flex-shrink-0 ml-2">
                        {store.recruited}
                      </span> */}
                      </div>
                      <div className="flex-1 flex items-start px-3">
                        <div className="flex flex-col gap-2">
                          {store.details.split('\n').map((line, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-[#1C262B] rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-[18px] font-medium leading-[1.3] tracking-[-0.02em] text-[#1C262B] font-KoPubWorldDotum text-left">
                                {line}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                showFirstLast={true}
                maxVisiblePages={10}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoreProgress;
