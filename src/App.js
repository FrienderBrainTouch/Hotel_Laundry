import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// layout
import { Header, Footer, FloatingMenu } from './components/layout';

// pages
import MainPage from './pages/Main';
import HotelLaundryPage from './pages/HotelLaundry';
import SmartSystemPage from './pages/SmartSystem';
import StartupGuidePage from './pages/StartupGuide';
import EquipmentPage from './pages/Equipment';
import AppGuidePage from './pages/AppGuide';
import StoreInfoPage from './pages/StoreInfo';
import ManagementSupportPage from './pages/ManagementSupport';
import ContactPage from './pages/Contact';
import AdminPage from './pages/Admin';
import AdminLoginPage from './pages/AdminLogin';

// 스크롤 초기화 컴포넌트
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

// 레이아웃 컴포넌트
function Layout() {
  const location = useLocation();
  const currentPage = location.pathname;

  // Admin 페이지는 별도 레이아웃 사용
  if (currentPage.startsWith('/admin')) {
    return (
      <Routes>
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    );
  }

  return (
    <div className="w-full min-h-screen m-0 p-0">
      <Header currentPage={currentPage} />
      <main className="bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hotel-laundry/*" element={<HotelLaundryPage />} />
          <Route path="/smart-system/*" element={<SmartSystemPage />} />
          <Route path="/startup-guide/*" element={<StartupGuidePage />} />
          <Route path="/store-info/*" element={<StoreInfoPage />} />
          <Route path="/equipment/*" element={<EquipmentPage />} />
          <Route path="/app-guide/*" element={<AppGuidePage />} />
          <Route path="/management-support/*" element={<ManagementSupportPage />} />
          <Route path="/contact/*" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingMenu currentPage={currentPage} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;
