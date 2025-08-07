import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* 상단 섹션 - 250px 높이, #082567 배경 */}
      <div className="bg-[#082567] h-[250px] w-full flex items-center justify-center">
        {/* 텍스트 영역 - 2XL 기준 1400px 제한 */}
        <div className="w-full max-w-[1400px] flex flex-end justify-between px-8 2xl:px-16">
          {/* 왼쪽 영역 - 로고와 연락처 정보 */}
          <div className="flex flex-col">
            {/* 로고 */}
            <div className="flex items-center mb-4">
              <img src="/images/logo.svg" alt="Hotel Laundry Logo" className="w-[122px] h-[76px]" />
            </div>
            
            {/* 연락처 정보 */}
            <div className="text-white font-KoPubWorldDotum text-[18px] font-medium leading-normal">
              <p>제휴문의: hotellaundry@naver.com</p>
              <p>대표번호: 02-1577-2657 | 팩스번호: 02-6455-6425</p>
            </div>
          </div>
          
          {/* 오른쪽 영역 - Download Catalog */}
          <div className="flex items-end">
            <button 
              className="text-white font-KoPubWorldDotum text-[24px] font-bold leading-normal underline decoration-solid underline-offset-8 underline-position-from-font cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
              onClick={() => {
                // TODO: 실제 카탈로그 다운로드 기능 구현
                console.log('Download Catalog clicked');
              }}
            >
              ⬇
              Download Catalog
            </button>
          </div>
        </div>
      </div>
      
      {/* 하단 섹션 - 145px 높이, 흰색 배경 */}
      <div className="bg-white h-[250px] w-full flex items-center justify-center">
        {/* 텍스트 영역 - 2XL 기준 1400px 제한 */}
        <div className="w-full max-w-[1400px] flex items-center justify-end px-8 2xl:px-16 mt-10">
          <div className="text-right">
            {/* 회사 정보 */}
            <p className="text-[#1C262B] font-KoPubWorldDotum text-[18px] font-medium leading-normal mb-2">
              주식회사 워시업코리아
            </p>
            <p className="text-[#1C262B] font-KoPubWorldDotum text-[18px] font-medium leading-normal mb-2">
              사업자등록번호 : 529-86-01519 | 대표자: 안용찬
            </p>
            <p className="text-[#1C262B] font-KoPubWorldDotum text-[18px] font-medium leading-normal mb-4">
              주소: 서울특별시 금천구 가산디지털2로 43-14 한화비즈메트로2차 619호
            </p>
            
            {/* 카피라이트 */}
            <p className="text-[#1A1A1A] font-KoPubWorldDotum text-[16px] font-light leading-normal">
              © HOTEL.LAUNDRY. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 