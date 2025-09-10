import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const currentPage = location.pathname;
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

  const handleMenuClose = () => {
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
        { id: 'brand-story', label: '브랜드 스토리' },
        { id: 'history', label: '연혁' },
        { id: 'certifications', label: '인증/특허' },
      ],
    },
    {
      id: 'smart-system',
      label: '스마트 시스템',
      hasSubmenu: true,
      submenu: [
        { id: 'smart-system', label: '스마트 시스템' },
        { id: 'advanced-technology', label: '첨단 기술' },
        { id: 'status-management', label: '위생 관리' },
      ],
    },
    {
      id: 'startup-guide',
      label: '창업 안내',
      hasSubmenu: true,
      submenu: [
        { id: 'startup-guide-main', label: '창업안내' },
        { id: 'store-owner-interview', label: '점주 인터뷰' },
        { id: 'solo-startup', label: '단독 창업' },
        { id: 'business-seminar', label: '사업 설명회' },
        { id: 'catalog', label: '카탈로그' },
      ],
    },
    {
      id: 'equipment-intro',
      label: '장비소개',
      hasSubmenu: true,
      submenu: [
        { id: 'washing-machine', label: '세탁기' },
        { id: 'dryer', label: '건조기' },
        { id: 'self-dry-cleaning', label: '셀프 드라이클리닝' },
      ],
    },
    {
      id: 'hotel-laundry-app',
      label: '앱 가이드',
      hasSubmenu: true,
      submenu: [
        { id: 'local-platform', label: '지역 플랫폼' },
        { id: 'same-day-pickup', label: '당일수거 배달서비스' },
        { id: 'app-download', label: '앱 다운로드' },
      ],
    },
    {
      id: 'store-info',
      label: '매장 안내',
      hasSubmenu: true,
      submenu: [
        { id: 'store-status', label: '전국 매장 현황' },
        { id: 'find-store', label: '매장 찾기' },
      ],
    },
    {
      id: 'management-support',
      label: '관리지원',
      hasSubmenu: true,
      submenu: [
        { id: 'management-support', label: '24시간 콜센터' },
        { id: 'central-control', label: '중앙 관제' },
        { id: 'store-management', label: '매장관리 대행' },
      ],
    },
  ];

  const mobileNavClasses = isMobile
    ? `fixed top-[101px] w-full h-[calc(100vh-101px)] bg-[#102254] transition-all duration-300 ease-in-out z-50 border-t border-white ${
        isMenuOpen ? 'right-0' : '-right-full'
      }`
    : '';

  const navListClasses = isMobile
    ? 'flex-col p-10 items-start gap-4 w-full'
    : 'gap-[clamp(20px,2vw,40px)]';

  return (
    <header
      className="bg-[#102254] w-full h-[100px] md:h-[110px] lg:h-[120px] xl:h-[100px] 2xl:h-[100px] relative z-50"
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <div className="w-full px-4 h-full flex items-center justify-between">
        {/* 로고 */}
        <div className="flex items-center py-4">
          <Link to="/" className="block">
            <picture>
              <source media="(min-width: 1024px)" srcSet="/images/Header/lg-xl-2xl-logo.png" />
              <source media="(min-width: 768px)" srcSet="/images/Header/md-logo.png" />
              <img
                src="/images/Header/xs-sm-logo.png"
                alt="로고"
                className="w-auto h-auto object-contain"
              />
            </picture>
          </Link>
        </div>

        {/* 중앙 네비게이션 - 데스크톱에서만 표시 */}
        {!isMobile && (
          <nav className="flex items-center flex-1 justify-center max-w-[70%] md:max-w-[65%] lg:max-w-[60%] xl:max-w-none 2xl:max-w-none">
            <ul className="flex flex-nowrap list-none gap-[clamp(8px,1.5vw,25px)] md:gap-[clamp(10px,1.8vw,30px)] lg:gap-[clamp(15px,2vw,35px)] xl:gap-[clamp(20px,2.5vw,45px)] 2xl:gap-[clamp(25px,3vw,55px)]">
              {menuItems.map((item) => (
                <li key={item.id} className="py-2 relative shrink-0">
                  <div onMouseEnter={() => setHoveredMenu(item.id)} className="relative">
                    <Link
                      to={
                        item.id === 'hotel-laundry'
                          ? '/company-intro'
                          : item.id === 'hotel-laundry-app'
                          ? '/app-download'
                          : item.id === 'smart-system'
                          ? '/smart-system'
                          : item.id === 'management-support'
                          ? '/management-support'
                          : `/${item.id}`
                      }
                      className={`whitespace-nowrap text-white font-pretendard text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium leading-normal transition-all duration-200 ${
                        hoveredMenu === item.id ? 'font-bold opacity-100' : 'opacity-80'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.hasSubmenu && hoveredMenu === item.id && (
                      <>
                        {/* 투명한 연결 영역 */}
                        <div className="absolute top-full left-0 w-full h-2 bg-transparent" />
                        {/* 서브메뉴 */}
                        <div className="absolute top-[calc(100%+32px)] -left-6 bg-[#102254] shadow-lg z-[9999] min-w-[150px] border border-white border-t-1 rounded-b-lg">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.id}
                              to={`/${subItem.id}`}
                              className={`block w-full text-start px-4 py-3 text-white transition-all duration-200 ${
                                currentPage === `/${subItem.id}`
                                  ? 'underline decoration-underline underline-offset-[5px] font-bold'
                                  : 'hover:underline decoration-underline underline-offset-[5px] hover:font-bold'
                              }`}
                            >
                              {subItem.label}
                            </Link>
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
                      {item.hasSubmenu ? (
                        <button
                          onClick={() => handleSubmenuClick(item.id)}
                          className={`text-white font-pretendard text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] transition-all duration-200 flex items-center justify-between w-full ${
                            currentPage === `/${item.id}` ? 'opacity-100' : 'opacity-80'
                          }`}
                        >
                          <span>{item.label}</span>
                          <img
                            src={
                              expandedSubmenu === item.id
                                ? '/images/chevron-up.svg'
                                : '/images/chevron-down.svg'
                            }
                            alt="화살표"
                            className="w-3 h-2"
                          />
                        </button>
                      ) : (
                        <Link
                          to={
                            item.id === 'hotel-laundry'
                              ? '/company-intro'
                              : item.id === 'hotel-laundry-app'
                              ? '/app-download'
                              : item.id === 'management-support'
                              ? '/management-support'
                              : `/${item.id}`
                          }
                          onClick={handleMenuClose}
                          className={`text-white font-pretendard text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] transition-all duration-200 flex items-center justify-between w-full ${
                            currentPage === `/${item.id}` ? 'opacity-100' : 'opacity-80'
                          }`}
                        >
                          <span>{item.label}</span>
                        </Link>
                      )}
                      {item.hasSubmenu && expandedSubmenu === item.id && (
                        <div className="bg-white mt-6 p-4 rounded-lg w-full">
                          {item.submenu.map((subItem) => (
                            <div key={subItem.id} className="mb-2 last:mb-0">
                              <Link
                                to={`/${subItem.id}`}
                                onClick={handleMenuClose}
                                className={`text-left w-full py-2 px-2 ${
                                  currentPage === `/${subItem.id}`
                                    ? 'text-[#102254] underline decoration-underline underline-offset-[5px] font-bold'
                                    : 'text-black hover:underline decoration-underline underline-offset-[5px] hover:font-bold'
                                }`}
                              >
                                {subItem.label}
                              </Link>
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
          <Link
            to="/contact"
            className="
                flex items-center justify-center 
                w-[86px] h-[35px] sm:w-[90px] sm:h-[38px] md:w-[95px] md:h-[38px] lg:w-[100px] lg:h-[40px] xl:w-[120px] xl:h-[42px] 2xl:w-[140px] 2xl:h-[50px]
                bg-white rounded-[5px] sm:rounded-[7px] md:rounded-[7px] lg:rounded-[7px] xl:rounded-[7px] 2xl:rounded-[7px]
                text-[#102254] font-pretendard 
                text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px]
                font-bold leading-normal
                whitespace-nowrap 
                transition-all duration-200 
                hover:scale-[1.02] active:scale-[0.98]
                flex-shrink-0
              "
          >
            문의하기
          </Link>

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
