import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* 상단 섹션 - 반응형 높이, #082567 배경 */}
      <div className="bg-[#082567] h-[264px] xs:h-[264px] sm:h-[215px] md:h-[171px] lg:h-[215px] xl:h-[250px] 2xl:h-[250px] w-full flex items-center justify-center">
        {/* 텍스트 영역 - 2XL 기준 1400px 제한 */}
        <div className="w-full max-w-[1400px] flex flex-end justify-between px-4 2xl:px-8">
          {/* 왼쪽 영역 - 로고와 연락처 정보 */}
          <div className="flex flex-col">
            {/* 로고 */}
            <div className="flex items-center mb-4">
              <img src="/images/logo.svg" alt="Hotel Laundry Logo" className="w-[71px] h-[44px] sm:w-[71px] sm:h-[44px] md:w-[71px] md:h-[44px] lg:w-[109px] lg:h-[68px] xl:w-[122px] xl:h-[76px] 2xl:w-[122px] 2xl:h-[76px]" />
            </div>
            
            {/* 개인정보처리방침 및 이메일무단수집거부 */}
            <div className="text-white font-KoPubWorldDotum text-[15px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-medium leading-normal mb-4">
              {/* xs: 개인정보와 이메일무단만 같은 줄 */}
              <div className="flex gap-4 xs:flex sm:hidden">
                <p className="cursor-pointer hover:opacity-80 transition-opacity">개인정보처리방침</p>
                <p className="cursor-pointer hover:opacity-80 transition-opacity">이메일무단수집거부</p>
              </div>
              {/* sm: 개인정보, 이메일무단, 다운로드 같은 줄 */}
              <div className="flex gap-4 xs:hidden sm:flex md:hidden lg:hidden xl:hidden">
                <p className="cursor-pointer hover:opacity-80 transition-opacity">개인정보처리방침</p>
                <p className="cursor-pointer hover:opacity-80 transition-opacity">이메일무단수집거부</p>
                <button 
                  className="text-white font-KoPubWorldDotum text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[24px] 2xl:text-[24px] font-bold leading-normal underline decoration-solid underline-offset-8 underline-position-from-font cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
                  onClick={() => {
                    // TODO: 실제 카탈로그 다운로드 기능 구현
                    console.log('Download Catalog clicked');
                  }}
                >
                  ⬇
                  Download Catalog
                </button>
              </div>
              {/* md, lg: 개인정보, 이메일무단, 다운로드 같은 줄 */}
              <div className="flex gap-4 xs:hidden sm:hidden md:flex lg:flex xl:hidden">
                <p className="cursor-pointer hover:opacity-80 transition-opacity">개인정보처리방침</p>
                <p className="cursor-pointer hover:opacity-80 transition-opacity">이메일무단수집거부</p>
                <button 
                  className="text-white font-KoPubWorldDotum text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[24px] 2xl:text-[24px] font-bold leading-normal underline decoration-solid underline-offset-8 underline-position-from-font cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
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
            
            {/* Download Catalog (xs에서만 별도 줄로 표시) */}
            <div className="xs:block sm:hidden md:hidden lg:hidden xl:hidden mb-4">
              <button 
                className="text-white font-KoPubWorldDotum text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[24px] 2xl:text-[24px] font-bold leading-normal underline decoration-solid underline-offset-8 underline-position-from-font cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
                onClick={() => {
                  // TODO: 실제 카탈로그 다운로드 기능 구현
                  console.log('Download Catalog clicked');
                }}
              >
                ⬇
                Download Catalog
              </button>
            </div>
            

            
            {/* 연락처 정보 */}
            <div className="text-white font-KoPubWorldDotum text-[15px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-medium leading-normal">
              {/* xs: 각각 별도 줄로 표시 */}
              <div className="xs:block sm:hidden">
                <p><span className="font-bold">제휴문의</span> hotellaundry@naver.com</p>
                <p><span className="font-bold">대표번호</span> 02-1577-2657</p>
                <p><span className="font-bold">팩스번호</span> 02-6455-6425</p>
              </div>
              {/* sm: 각각 별도 줄로 표시 */}
              <div className="xs:hidden sm:block md:hidden">
                <p><span className="font-bold">제휴문의</span> hotellaundry@naver.com</p>
                <p><span className="font-bold">대표번호</span> 02-1577-2657</p>
                <p><span className="font-bold">팩스번호</span> 02-6455-6425</p>
              </div>
              {/* md 이상: 가로 배치 */}
              <div className="xs:hidden sm:hidden md:block">
                <p><span className="font-bold">제휴문의</span> hotellaundry@naver.com&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold">대표번호</span> 02-1577-2657&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold">팩스번호</span> 02-6455-6425</p>
              </div>
            </div>
            

          </div>
          
          {/* 오른쪽 영역 - Download Catalog (xl, 2xl에서만 표시) */}
          <div className="hidden xl:flex 2xl:flex items-end">
            <button 
              className="text-white font-KoPubWorldDotum text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[24px] 2xl:text-[24px] font-bold leading-normal underline decoration-solid underline-offset-8 underline-position-from-font cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
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
      
      {/* 구분선 */}
      <div className="bg-[#4A90E2] h-[1px] w-full"></div>
      
      {/* 하단 섹션 - 145px 높이, 흰색 배경 */}
      <div className="bg-white h-[145px] w-full flex items-center justify-center">
        {/* 텍스트 영역 - 2XL 기준 1400px 제한 */}
        <div className="w-full max-w-[1400px] flex items-center justify-end px-6 2xl:px-12">
          <div className="text-right">
            {/* 회사 정보 */}
            <p className="text-[#1C262B] font-KoPubWorldDotum text-[15px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-medium leading-normal mb-2">
              <span className="font-bold">주식회사</span> <span className="font-bold">워시업코리아</span>
            </p>
            <p className="text-[#1C262B] font-KoPubWorldDotum text-[15px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-medium leading-normal mb-2">
              <span className="font-bold">사업자등록번호</span> 529-86-01519&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-bold">대표자</span> 안용찬
            </p>
            <p className="text-[#1C262B] font-KoPubWorldDotum text-[15px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-medium leading-normal mb-4">
              <span className="font-bold">주소</span> 서울특별시 금천구 가산디지털2로 43-14 한화비즈메트로2차 619호
            </p>
            
            {/* 카피라이트 */}
            <p className="text-[#1A1A1A] font-KoPubWorldDotum text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-light leading-normal">
              © HOTEL.LAUNDRY. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 