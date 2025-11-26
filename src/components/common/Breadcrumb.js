import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ASSET_URL } from '../../utils/constants';

const Breadcrumb = ({
  items = [],
  showHome = true,
  className = 'w-full xs:w-[355px] sm:w-[535px] md:w-[728px] lg:w-[924px] xl:w-[1200px] 2xl:w-[1400px] mx-auto',
  storeSelector = null, // 매장 셀렉터 관련 props
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStoreSelectorOpen, setIsStoreSelectorOpen] = useState(false);
  const menuRef = useRef(null);
  const storeSelectorRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (storeSelectorRef.current && !storeSelectorRef.current.contains(event.target)) {
        setIsStoreSelectorOpen(false);
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

  const handleStoreSelect = (serialNumber) => {
    navigate(`/store-info/store-status/${serialNumber}`);
    setIsStoreSelectorOpen(false);
  };

  return (
    <div className={className}>
      <div className="flex items-center gap-2 sm:gap-4 font-pretendard">
        {showHome && (
          <>
            <Link to="/">
              <img src={`${ASSET_URL}/icons/home.svg`} alt="홈" />
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
            ) : storeSelector && item.isStoreSelector ? (
              <div className="relative" ref={storeSelectorRef}>
                <button
                  onClick={() => setIsStoreSelectorOpen(!isStoreSelectorOpen)}
                  className="flex items-center gap-1 text-brand-dark text-20 hover:text-[#102254] transition-colors font-medium"
                >
                  {item.label}
                  <span
                    className={`transition-transform duration-200 ${
                      isStoreSelectorOpen ? 'rotate-180' : ''
                    }`}
                  >
                    ▾
                  </span>
                </button>
                {isStoreSelectorOpen && storeSelector.stores && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[9999] min-w-[200px] max-h-[300px] overflow-y-auto">
                    {storeSelector.stores.map((store) => (
                      <button
                        key={store.serialNumber}
                        onClick={() => handleStoreSelect(store.serialNumber)}
                        className={`block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                          store.serialNumber === storeSelector.currentSerialNumber
                            ? 'text-[#102254] font-medium bg-blue-50'
                            : 'text-gray-600'
                        }`}
                      >
                        <div className="font-medium">{store.name}</div>
                        <div className="text-xs text-gray-500">{store.region}</div>
                      </button>
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
