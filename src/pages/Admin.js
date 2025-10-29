import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AdminLayout from '../components/Admin/Layout/AdminLayout';
import Dashboard from '../components/Admin/Dashboard';
import StoreManagement from '../components/Admin/StoreManagement';
import InquiryManagement from '../components/Admin/InquiryManagement';
import { useAdminSessionCheck } from '../hooks/queries/useAdminAuth';

const Admin = () => {
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();

  const { isLoading, isError } = useAdminSessionCheck(true);

  useEffect(() => {
    if (isLoading) return;
    if (isError) {
      navigate('/admin/login');
      return;
    }
    setIsChecking(false);
  }, [isLoading, isError, navigate]);

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
        <Route path="/inquiries" element={<InquiryManagement />} />
        <Route path="/inquiries/:id" element={<InquiryManagement />} />
      </Routes>
    </AdminLayout>
  );
};

export default Admin;
