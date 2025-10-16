import React from 'react';

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  showFirstLast = true,
  maxVisiblePages = 4,
}) => {
  // 현재 페이지 주변의 페이지 번호들을 계산 (10개씩 그룹)
  const getVisiblePages = () => {
    const pages = [];

    // 현재 페이지가 속한 10개 그룹의 시작 페이지 계산
    const currentGroup = Math.floor((currentPage - 1) / maxVisiblePages);
    const startPage = currentGroup * maxVisiblePages + 1;
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const visiblePages = getVisiblePages();

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  const handleFirstClick = () => {
    handlePageClick(1);
  };

  const handleLastClick = () => {
    handlePageClick(totalPages);
  };

  // 페이지가 0개 이하면 페이지네이션을 표시하지 않음
  if (totalPages <= 0) {
    return null;
  }

  return (
    <div className="flex justify-center items-center gap-8">
      {/* 첫 페이지로 이동 */}
      {showFirstLast && (
        <button
          onClick={handleFirstClick}
          disabled={currentPage === 1}
          className={`w-10 h-10 border border-[#DDDDDD] rounded flex items-center justify-center ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 cursor-pointer'
          }`}
        >
          <span className="text-[#666666] text-lg">‹‹</span>
        </button>
      )}

      {/* 이전 페이지로 이동 */}
      <button
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className={`w-10 h-10 border border-[#DDDDDD] rounded flex items-center justify-center ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 cursor-pointer'
        }`}
      >
        <span className="text-[#666666] text-lg">‹</span>
      </button>

      {/* 페이지 번호들 */}
      <div className="flex gap-2">
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`w-8 h-8 flex items-center justify-center ${
              page === currentPage ? 'text-black' : 'text-black hover:bg-gray-50 cursor-pointer'
            }`}
          >
            <span
              className={`text-[20px] font-KoPubWorldDotum ${
                page === currentPage ? 'font-bold' : 'font-light'
              }`}
            >
              {page}
            </span>
          </button>
        ))}
      </div>

      {/* 다음 페이지로 이동 */}
      <button
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 border border-[#DDDDDD] rounded flex items-center justify-center ${
          currentPage === totalPages
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-gray-50 cursor-pointer'
        }`}
      >
        <span className="text-[#666666] text-lg">›</span>
      </button>

      {/* 마지막 페이지로 이동 */}
      {showFirstLast && (
        <button
          onClick={handleLastClick}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 border border-[#DDDDDD] rounded flex items-center justify-center ${
            currentPage === totalPages
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-50 cursor-pointer'
          }`}
        >
          <span className="text-[#666666] text-lg">››</span>
        </button>
      )}
    </div>
  );
};

export default Pagination;
