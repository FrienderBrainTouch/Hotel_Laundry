import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../components/Admin/Layout/AdminLayout';
import Dashboard from '../components/Admin/Dashboard';
import StoreManagement from '../components/Admin/StoreManagement';
import InquiryManagement from '../components/Admin/InquiryManagement';

const Admin = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/stores" element={<StoreManagement />} />
        <Route path="/inquiries" element={<InquiryManagement />} />
        <Route path="/inquiries/:id" element={<InquiryManagement />} />
      </Routes>
    </AdminLayout>
  );
};

export default Admin;
