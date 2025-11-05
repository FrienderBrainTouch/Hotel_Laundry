import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/admin', label: '대시보드', icon: '📊' },
    { path: '/admin/stores', label: '창업 매장 관리', icon: '🏪' },
    { path: '/admin/operating-stores', label: '운영 매장 현황', icon: '🏬' },
    { path: '/admin/inquiries', label: '문의 관리', icon: '📝' },
  ];

  return (
    <>
      {/* 사이드바 */}
      <aside
        className={`
        fixed left-0 top-16 h-screen w-64 bg-white shadow-lg border-r border-gray-200 z-10
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}
      >
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-brand-light-blue text-brand-blue border-r-2 border-brand-blue'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;
