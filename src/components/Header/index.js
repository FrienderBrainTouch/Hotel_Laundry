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
      setHoveredMenu(null);
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
      ? `fixed top-[101px] w-full h-[calc(100vh-101px)] bg-[#102254] transition-all duration-300 ease-in-out z-50 border-t border-white ${isMenuOpen ? 'right-0' : '-right-full'}`
      : '';

    const navListClasses = isMobile
      ? 'flex-col p-10 items-start gap-4 w-full'
      : 'gap-[clamp(20px,2vw,40px)]';
  
    return (
      <header 
        className="bg-[#102254] w-screen h-[100px] relative z-50"
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <div className="w-full px-4 h-full flex items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center py-4">
            <button 
              onClick={() => handleNavClick('home')}
              className="block"
            >
                             <picture>
                 <source media="(min-width: 1024px)" srcSet="/images/Header/lg-xl-2xl-logo.png" />
                 <source media="(min-width: 768px)" srcSet="/images/Header/md-logo.png" />
                 <img 
                   src="/images/Header/xs-sm-logo.png" 
                   alt="로고" 
                   className="w-auto h-auto object-contain" 
                 />
               </picture>
            </button>
          </div>

          {/* 중앙 네비게이션 - 데스크톱에서만 표시 */}
          {!isMobile && (
            <nav className="flex items-center absolute left-1/2 transform -translate-x-1/2">
              <ul className="flex list-none gap-[60px] lg:gap-[60px] xl:gap-[100px] 2xl:gap-[80px]">
                {menuItems.map((item) => (
                  <li key={item.id} className="py-2 relative">
                    <div
                      onMouseEnter={() => setHoveredMenu(item.id)}
                      className="relative"
                    >
                      <button 
                        onClick={() => item.id === 'hotel-laundry' ? handleNavClick('company-intro') : handleNavClick(item.id)}
                        className={`text-white font-pretendard text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium leading-normal transition-all duration-200 ${hoveredMenu === item.id ? 'font-bold opacity-100' : 'opacity-80'}`}
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
                            className="absolute top-[calc(100%+32px)] -left-6 bg-[#102254] shadow-lg z-[9999] min-w-[150px] border border-white border-t-1 rounded-b-lg"
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

          <div className="flex items-center gap-[14px] sm:gap-[10px] md:gap-[20px] mr-[16px] sm:mr-[20px] md:mr-[24px] lg:mr-[30px] xl:mr-[36px]">
            {/* 모바일 네비게이션 */}
            {isMobile && (
              <nav className={`flex items-start ${mobileNavClasses}`}>
                <ul className={`flex list-none ${navListClasses}`}>
                  {menuItems.map((item) => (
                    <li key={item.id} className="py-2 relative w-full">
                      <div className="w-full">
                        <button 
                          onClick={() => {
                            if (item.hasSubmenu) {
                              handleSubmenuClick(item.id);
                            } else if (item.id === 'hotel-laundry') {
                              handleNavClick('company-intro');
                            } else {
                              handleNavClick(item.id);
                            }
                          }}
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
                w-[86px] h-[35px] sm:w-[100px] sm:h-[40px] md:w-[120px] md:h-[40px] lg:w-[130px] lg:h-[45px] xl:w-[140px] xl:h-[50px] 2xl:w-[170px] 2xl:h-[60px]
                bg-white rounded-[5px] sm:rounded-[7px] md:rounded-[7px] lg:rounded-[7px] xl:rounded-[7px] 2xl:rounded-[7px]
                text-[#102254] font-pretendard 
                text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[28px]
                font-bold leading-normal
                whitespace-nowrap 
                transition-all duration-200 
                hover:scale-[1.02] active:scale-[0.98]
                flex-shrink-0
              "
            >
              문의하기
            </button>

            {/* 햄버거 메뉴/X 버튼 - 모바일에서만 표시 */}
            {isMobile && (
              <button 
                className="bg-transparent border-none p-0 cursor-pointer flex items-center justify-center w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[40px] md:h-[40px]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <picture>
                    <source media="(min-width: 768px)" srcSet="/images/Header/md-X.svg" />
                    <source media="(min-width: 640px)" srcSet="/images/Header/sm-X.svg" />
                    <img 
                      src="/images/Header/xs-X.svg" 
                      alt="닫기" 
                      className="w-auto h-auto object-contain" 
                    />
                  </picture>
                ) : (
                  <picture>
                    <source media="(min-width: 768px)" srcSet="/images/Header/md-hamburger.svg" />
                    <source media="(min-width: 640px)" srcSet="/images/Header/sm-hamburger.svg" />
                    <img 
                      src="/images/Header/xs-hamburger.svg" 
                      alt="메뉴" 
                      className="w-auto h-auto object-contain" 
                    />
                  </picture>
                )}
              </button>
            )}
          </div>
        </div>
      </header>
    );
};

export default Header;