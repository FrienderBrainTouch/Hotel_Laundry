import React from 'react';
import logoKr from '../../../image/logo-kr.png';

const AdminHeader = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-20">
      <div className="px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 lg:space-x-3">
            {/* 모바일 메뉴 버튼 */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <img src={logoKr} alt="호텔런드리" className="h-6 lg:h-8 w-auto" />
            <h1 className="text-lg lg:text-2xl font-bold text-brand-blue">호텔런드리 관리자</h1>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="text-xs lg:text-sm text-gray-500 hidden sm:block">
              관리자님, 안녕하세요
            </div>
            <button className="bg-brand-blue hover:bg-brand-dark text-white px-3 lg:px-4 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors">
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
