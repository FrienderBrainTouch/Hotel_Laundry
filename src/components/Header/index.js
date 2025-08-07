import { useState, useEffect } from 'react';

const Header = ({ onPageChange, currentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [expandedSubmenu, setExpandedSubmenu] = useState(null);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNavClick = (page) => {
      onPageChange(page);
      setIsMenuOpen(false);
      setExpandedSubmenu(null);
    };

    const handleSubmenuClick = (submenu) => {
      setExpandedSubmenu(expandedSubmenu === submenu ? null : submenu);
    };

    const menuItems = [
      {
        id: 'hotel-laundry',
        label: '호텔런드리',
        hasSubmenu: true,
        submenu: [
          { id: 'company-intro', label: '회사 소개' },
          { id: 'history', label: '연혁' }
        ]
      },
      {
        id: 'smart-system',
        label: '스마트 시스템',
        hasSubmenu: false
      },
      {
        id: 'startup-guide',
        label: '창업 안내',
        hasSubmenu: false
      },
      {
        id: 'store-info',
        label: '매장 안내',
        hasSubmenu: true,
        submenu: [
          { id: 'store-status', label: '전국 매장 현황' },
          { id: 'find-store', label: '매장 찾기' }
        ]
      }
    ];

    const mobileNavClasses = isMobile
      ? `fixed top-[101px] w-full h-[calc(100vh-101px)] bg-[#1a237e] transition-all duration-300 ease-in-out z-50 border-t border-white ${isMenuOpen ? 'right-0' : '-right-full'}`
      : '';

    const navListClasses = isMobile
      ? 'flex-col p-10 items-start gap-4 w-full'
      : 'gap-[clamp(20px,2vw,40px)]';
  
    return (
      <header 
        className="bg-[#1a237e] w-screen h-[100px] relative"
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <div className="w-full px-4 h-full flex items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center py-4">
            <button 
              onClick={() => handleNavClick('home')}
              className="block"
            >
              <img 
                src="/images/logo.svg" 
                alt="로고" 
                className="h-[30px] sm:h-[35px] md:h-[40px] lg:h-[50px] xl:h-[60px] w-auto object-contain" 
              />
            </button>
          </div>

          {/* 중앙 네비게이션 - 데스크톱에서만 표시 */}
          {!isMobile && (
            <nav className="flex items-center absolute left-1/2 transform -translate-x-1/2">
              <ul className="flex list-none gap-[clamp(20px,2vw,40px)]">
                {menuItems.map((item) => (
                  <li key={item.id} className="py-2 relative">
                    <div
                      onMouseEnter={() => setHoveredMenu(item.id)}
                      className="relative"
                    >
                      <button 
                        onClick={() => handleNavClick(item.id)}
                        className={`text-white font-pretendard text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] transition-all duration-200 ${hoveredMenu === item.id ? 'font-bold opacity-100' : 'opacity-80'}`}
                      >
                        {item.label}
                      </button>
                      {item.hasSubmenu && hoveredMenu === item.id && (
                        <>
                          {/* 투명한 연결 영역 */}
                          <div 
                            className="absolute top-full left-0 w-full h-2 bg-transparent"
                          />
                          {/* 서브메뉴 */}
                          <div 
                            className="absolute top-[calc(100%+32px)] -left-6 bg-[#1a237e] shadow-lg z-50 min-w-[150px] border border-white border-t-1 rounded-b-lg"
                          >
                            {item.submenu.map((subItem) => (
                              <button
                                key={subItem.id}
                                onClick={() => handleNavClick(subItem.id)}
                                className={`block w-full text-start px-4 py-3 text-white transition-all duration-200 ${currentPage === subItem.id ? 'underline decoration-underline underline-offset-[5px] font-bold' : 'hover:underline decoration-underline underline-offset-[5px] hover:font-bold'}`}
                              >
                                {subItem.label}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="flex items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 mr-[16px] sm:mr-[20px] md:mr-[24px] lg:mr-[30px] xl:mr-[36px]">
            {/* 모바일 네비게이션 */}
            {isMobile && (
              <nav className={`flex items-start ${mobileNavClasses}`}>
                <ul className={`flex list-none ${navListClasses}`}>
                  {menuItems.map((item) => (
                    <li key={item.id} className="py-2 relative w-full">
                      <div className="w-full">
                        <button 
                          onClick={() => item.hasSubmenu ? handleSubmenuClick(item.id) : handleNavClick(item.id)}
                          className={`text-white font-pretendard text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] transition-all duration-200 flex items-center justify-between w-full ${currentPage === item.id ? 'opacity-100' : 'opacity-80'}`}
                        >
                          <span>{item.label}</span>
                          {item.hasSubmenu && (
                            <img 
                              src={expandedSubmenu === item.id ? "/images/chevron-up.svg" : "/images/chevron-down.svg"}
                              alt="화살표"
                              className="w-3 h-2"
                            />
                          )}
                        </button>
                        {item.hasSubmenu && expandedSubmenu === item.id && (
                          <div className="bg-white mt-6 p-4 rounded-lg w-full">
                            {item.submenu.map((subItem) => (
                              <div key={subItem.id} className="mb-2 last:mb-0">
                                <button
                                  onClick={() => handleNavClick(subItem.id)}
                                  className={`text-left w-full py-2 px-2 ${currentPage === subItem.id ? 'text-[#102254] underline decoration-underline underline-offset-[5px] font-bold' : 'text-black hover:underline decoration-underline underline-offset-[5px] hover:font-bold'}`}
                                >
                                  {subItem.label}
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* 문의하기 버튼 */}
            <button 
              onClick={() => handleNavClick('contact')}
              className="
                flex items-center justify-center 
                px-[12px] py-[6px] sm:px-[14px] sm:py-[7px] md:px-[16px] md:py-[8px] lg:px-[18px] lg:py-[9px]
                bg-white rounded-[7px] 
                text-[#1a237e] font-pretendard 
                text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[28px]
                font-semibold leading-[150%] 
                whitespace-nowrap 
                transition-all duration-200 
                hover:scale-[1.02] active:scale-[0.98]
              "
            >
              문의하기
            </button>

            {/* 햄버거 메뉴/X 버튼 - 모바일에서만 표시 */}
            {isMobile && (
              <button 
                className="bg-transparent border-none p-0 cursor-pointer flex items-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <div 
                    className="
                      flex items-center justify-center 
                      w-8 h-8
                      bg-transparent
                      text-white font-pretendard 
                      font-semibold
                      transition-all duration-200 
                      hover:opacity-80
                    "
                    style={{ fontSize: '24px' }}
                  >
                    ✕
                  </div>
                ) : (
                  <img 
                    src="/images/hamburger.svg" 
                    alt="메뉴" 
                    className="w-[19px] h-[13px] sm:w-[19px] sm:h-[13px] md:w-[34px] md:h-[22px]" 
                  />
                )}
              </button>
            )}
          </div>
        </div>
      </header>
    );
};

export default Header;