// components/StoreInfo/common/Breadcrumb.js
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import homeIcon from './home.svg';
import downIcon from './down.svg';

const Breadcrumb = () => {
    const location = useLocation();
    const currentPage = location.pathname === '/store-status' ? '전국 매장 현황' : '매장 찾기';
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        { id: 1, title: '전국 매장 현황', pageKey: 'store-status' },
        { id: 2, title: '매장 찾기', pageKey: 'find-store' }
    ];
  
    return (
        <div className="flex items-center gap-2 sm:gap-4 font-pretendard">
            <Link to="/">
                <img src={homeIcon} alt="홈" />
            </Link>
            <span className="text-brand-dark text-20">/</span>
            <span className="text-brand-dark text-20">매장 안내</span>
            <span className="text-brand-dark text-20">/</span>
            
            {/* 드롭다운 메뉴의 기준점이 되는 relative 컨테이너 */}
            <div className="relative">
                {/* 현재 페이지를 보여주는 버튼 */}
                <button 
                    className="flex items-center" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="text-brand-dark text-20">{currentPage}</span>
                    <img 
                        src={downIcon} 
                        alt="더보기" 
                        className={`ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    />
                </button>
                        
                {/* isOpen이 true일 때만 보이는 드롭다운 메뉴 */}
                {isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-fit bg-white rounded-lg shadow-lg overflow-hidden z-10">
                        {menuItems.map((item) => (
                            <Link
                                key={item.id}
                                to={`/${item.pageKey}`}
                                onClick={() => setIsOpen(false)}
                                className="w-full px-4 py-3 text-left text-brand-dark text-20 hover:bg-gray-50 transition-colors whitespace-nowrap block"
                            >
                                <span>{item.title}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
      );
  };

export default Breadcrumb;