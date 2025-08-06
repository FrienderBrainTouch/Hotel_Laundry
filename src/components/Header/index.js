import { useState, useEffect } from 'react';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);  // 모바일 여부 상태 추가
  
    // 화면 크기 변경 감지
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <a href="/" className="logo-link">
              <img src="/images/logo.svg" alt="로고" className="logo-image" />
            </a>
          </div>
  
          {/* 햄버거 버튼 - 모바일에서만 표시 */}
          {isMobile && (
            <button 
              className="hamburger-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <img src="/images/hamburger.svg" alt="메뉴" />
            </button>
          )}
  
          <nav className={`header-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item"><a href="/hotel" className="nav-link">호텔런드리</a></li>
              <li className="nav-item"><a href="/smart" className="nav-link">스마트 시스템</a></li>
              <li className="nav-item"><a href="/startup" className="nav-link">창업 안내</a></li>
              <li className="nav-item"><a href="/store" className="nav-link">매장 안내</a></li>
            </ul>
          </nav>
  
          <button className="inquiry-btn">문의하기</button>
        </div>
      </header>
    );
  };
  
  export default Header;