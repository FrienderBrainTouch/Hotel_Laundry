import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../common/home.svg';

const Breadcrumb = ({
  items = [],
  showHome = true,
  className = 'w-full xs:w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-[1400px] mx-auto',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={className}>
      <div className="flex items-center gap-2 sm:gap-4 font-pretendard">
        {showHome && (
          <>
            <Link to="/">
              <img src={homeIcon} alt="홈" />
            </Link>
            <span className="text-brand-dark text-20">/</span>
          </>
        )}

        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2 sm:gap-4">
            {index > 0 && <span className="text-brand-dark text-20">/</span>}

            {item.hasDropdown ? (
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-1 text-brand-dark text-20 hover:text-[#102254] transition-colors"
                >
                  {item.label}
                  <span
                    className={`transition-transform duration-200 ${
                      isMenuOpen ? 'rotate-180' : ''
                    }`}
                  >
                    ▾
                  </span>
                </button>
                {isMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[9998] min-w-[140px]">
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        to={dropdownItem.link}
                        onClick={handleMenuClose}
                        className={`block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                          dropdownItem.isActive ? 'text-[#102254] font-medium' : 'text-gray-600'
                        }`}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.link}
                className={`text-brand-dark text-20 hover:text-[#102254] transition-colors ${
                  item.isActive ? 'font-medium' : ''
                }`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
