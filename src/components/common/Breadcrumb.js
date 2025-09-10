import { useState } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../StoreInfo/common/home.svg';
import downIcon from '../StoreInfo/common/down.svg';

const Breadcrumb = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 sm:gap-4 font-pretendard">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <span className="text-[#102254] text-20">/</span>}

          {item.hasDropdown ? (
            <div className="relative">
              <button className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
                <span className="text-[#102254] text-20">{item.label}</span>
                <img
                  src={downIcon}
                  alt="더보기"
                  className={`ml-1 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-fit bg-white rounded-lg shadow-lg overflow-hidden z-10">
                  {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
                      to={dropdownItem.link}
                      onClick={() => setIsOpen(false)}
                      className="w-full px-4 py-3 text-left text-[#102254] text-20 hover:bg-gray-50 transition-colors whitespace-nowrap block"
                    >
                      <span>{dropdownItem.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link to={item.link} className="text-[#102254] text-20 hover:underline">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
