import { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const mobileNavClasses = isMobile
      ? `fixed top-[100px] w-full h-[calc(100vh-100px)] bg-[#1a237e] transition-all duration-300 ease-in-out ${isMenuOpen ? 'right-0' : '-right-full'}`
      : '';

    const navListClasses = isMobile
      ? 'flex-col p-10 items-start gap-4'
      : 'gap-[clamp(20px,2vw,40px)]';
  
    return (
      <header className="bg-[#1a237e] w-screen h-[100px] relative">
        <div className="w-full h-full flex items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center py-4">
            <a href="/" className="block ml-[16px] sm:ml-[20px] md:ml-[24px] lg:ml-[30px] xl:ml-[36px]">
              <img 
                src="/images/logo.svg" 
                alt="로고" 
                className="h-[30px] sm:h-[35px] md:h-[40px] lg:h-[50px] xl:h-[60px] w-auto object-contain" 
              />
            </a>
          </div>

          <div className="flex items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 mr-[16px] sm:mr-[20px] md:mr-[24px] lg:mr-[30px] xl:mr-[36px]">
            {/* 햄버거 버튼 - 모바일에서만 표시 */}
            {isMobile && (
              <button 
                className="bg-transparent border-none p-0 cursor-pointer flex items-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <img 
                  src="/images/hamburger.svg" 
                  alt="메뉴" 
                  className="w-[24px] h-[16px] sm:w-[28px] sm:h-[18px] md:w-[34px] md:h-[22px]" 
                />
              </button>
            )}

            {/* 네비게이션 */}
            <nav className={`flex items-center ${mobileNavClasses}`}>
              <ul className={`flex list-none ${navListClasses}`}>
                <li className="py-2">
                  <a href="/hotel" className="text-white font-pretendard text-[18px] sm:text-[20px] md:text-[22px] lg:text-header hover:opacity-80 transition-all duration-200">
                    호텔런드리
                  </a>
                </li>
                <li className="py-2">
                  <a href="/smart" className="text-white font-pretendard text-[18px] sm:text-[20px] md:text-[22px] lg:text-header hover:opacity-80 transition-all duration-200">
                    스마트 시스템
                  </a>
                </li>
                <li className="py-2">
                  <a href="/startup" className="text-white font-pretendard text-[18px] sm:text-[20px] md:text-[22px] lg:text-header hover:opacity-80 transition-all duration-200">
                    창업 안내
                  </a>
                </li>
                <li className="py-2">
                  <a href="/store" className="text-white font-pretendard text-[18px] sm:text-[20px] md:text-[22px] lg:text-header hover:opacity-80 transition-all duration-200">
                    매장 안내
                  </a>
                </li>
              </ul>
            </nav>

            {/* 문의하기 버튼 */}
            <button className="
              flex items-center justify-center 
              px-[12px] py-[6px] sm:px-[14px] sm:py-[7px] md:px-[16px] md:py-[8px] lg:px-[18px] lg:py-[9px]
              bg-white rounded-[15px] 
              text-[#1a237e] font-pretendard 
              text-[16px] sm:text-[17px] md:text-[18px] lg:text-header
              font-semibold leading-[150%] 
              whitespace-nowrap 
              transition-all duration-200 
              hover:scale-[1.02] active:scale-[0.98]
            ">
              문의하기
            </button>
          </div>
        </div>
      </header>
    );
};

export default Header;