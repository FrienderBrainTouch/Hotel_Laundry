import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// layout
import { Header, Footer } from './components/layout';

// components
import ManagementSupport from './components/ManagementSupport';
import StoreInfo from './components/StoreInfo';
import ContactPage from './components/Contact';
import FloatingMenu from './components/FloatingMenu';
// App Guide 컴포넌트들
import LocalPlatform from './components/AppGuide/LocalPlatform';
import SameDayPickup from './components/AppGuide/SameDayPickup';
import AppDownload from './components/AppGuide/AppDownload';
// Machine Info 컴포넌트들
import WashingMachine from './components/MachineInfo/WashingMachine';
import Dryer from './components/MachineInfo/Dryer';
import SelfDryCleaning from './components/MachineInfo/SelfDryCleaning';

// pages
import MainPage from './pages/Main';
import HotelLaundryPage from './pages/HotelLaundry';
import SmartSystemPage from './pages/SmartSystem';
import StartupGuidePage from './pages/StartupGuide';

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

  return (
    <div className="w-full min-h-screen m-0 p-0">
      <Header currentPage={currentPage} />
      <main className="bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hotel-laundry/*" element={<HotelLaundryPage />} />
          <Route path="/smart-system/*" element={<SmartSystemPage />} />
          <Route path="/startup-guide/*" element={<StartupGuidePage />} />
          <Route path="/management-support" element={<ManagementSupport />} />
          <Route path="/central-control" element={<ManagementSupport />} />
          <Route path="/store-management" element={<ManagementSupport />} />
          <Route path="/store-info" element={<StoreInfo mode="list" />} />
          <Route path="/store-status" element={<StoreInfo mode="list" />} />
          <Route path="/find-store" element={<StoreInfo mode="finder" />} />
          <Route path="/washing-machine" element={<WashingMachine />} />
          <Route path="/dryer" element={<Dryer />} />
          <Route path="/self-dry-cleaning" element={<SelfDryCleaning />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* App Guide 라우트들 */}
          <Route path="/local-platform" element={<LocalPlatform />} />
          <Route path="/same-day-pickup" element={<SameDayPickup />} />
          <Route path="/app-download" element={<AppDownload />} />
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
