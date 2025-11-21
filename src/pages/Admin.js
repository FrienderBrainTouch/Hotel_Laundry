import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AdminLayout from '../components/Admin/Layout/AdminLayout';
import Dashboard from '../components/Admin/Dashboard';
import StoreManagement from '../components/Admin/StoreManagement';
import OperatingStores from '../components/Admin/OperatingStores';
import InquiryManagement from '../components/Admin/InquiryManagement';
import { useAdminSessionCheck } from '../hooks/queries/useAdminAuth';

const Admin = () => {
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();

  // 토큰이 없으면 즉시 로그인 페이지로
  const hasToken = !!localStorage.getItem('accessToken');
  
  useEffect(() => {
    if (!hasToken) {
      navigate('/admin/login');
      return;
    }
  }, [hasToken, navigate]);

  const { isLoading, isError } = useAdminSessionCheck(hasToken);

  useEffect(() => {
    if (!hasToken) return;
    if (isLoading) return;
    if (isError) {
      // JWT가 유효하지 않으면 토큰 제거하고 로그인 페이지로
      localStorage.removeItem('accessToken');
      navigate('/admin/login');
      return;
    }
    setIsChecking(false);
  }, [hasToken, isLoading, isError, navigate]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue mx-auto mb-4"></div>
          <p className="text-gray-600">확인 중...</p>
        </div>
      </div>
    );
  }

  return (
    <AdminLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stores" element={<StoreManagement />} />
        <Route path="/operating-stores" element={<OperatingStores />} />
        <Route path="/inquiries" element={<InquiryManagement />} />
        <Route path="/inquiries/:id" element={<InquiryManagement />} />
      </Routes>
    </AdminLayout>
  );
};

export default Admin;
