import React from 'react';
import logoKr from '../../../image/logo-kr.png';

const AdminHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-20">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logoKr} alt="호텔런드리" className="h-8 w-auto" />
            <h1 className="text-2xl font-bold text-brand-blue">호텔런드리 관리자</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-500">관리자님, 안녕하세요</div>
            <button className="bg-brand-blue hover:bg-brand-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
