import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Main/Hero';
import WhyHotelLaundry from './components/Main/WhyHotelLaundry';
import SmartTech from './components/Main/SmartTech';
import AboutUs from './components/Main/AboutUs';
import BeyondLaundry from './components/Main/BeyondLaundry';
import StepByStep from './components/Main/StepByStep';
import OurStores from './components/Main/OurStores';
import Contact from './components/Main/Contact';
import CompanyIntro from './components/HotelLaundry/CompanyIntro';
import History from './components/HotelLaundry/History';
import BrandStory from './components/HotelLaundry/BrandStory';
import ManagementSupport from './components/HotelLaundry/ManagementSupport';
import SmartSystem from './components/SmartSystem';
import AdvancedTech from './components/SmartSystem/AdvancedTech';
import PhaseManagement from './components/SmartSystem/PhaseManagement';
import StartupGuide from './components/StartupGuide/StartupMain/StartupGuide';
import StoreOwnerInterview from './components/StartupGuide/StoreOwnerInterview';
import SoloStartup from './components/StartupGuide/SoloStartup';
import BusinessSeminar from './components/StartupGuide/BusinessSeminar';
import Catalog from './components/StartupGuide/Catalog';
import StoreInfo from './components/StoreInfo';
import ContactPage from './components/Contact';
import Footer from './components/Footer';
import FloatingMenu from './components/FloatingMenu';
// App Guide 컴포넌트들
import AppIntro from './components/AppGuide/AppIntro';
import LocalPlatform from './components/AppGuide/LocalPlatform';
import SameDayPickup from './components/AppGuide/SameDayPickup';
import AppDownload from './components/AppGuide/AppDownload';

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

// 메인 페이지 컴포넌트
function MainPage() {
  return (
    <>
      <Hero />
      <WhyHotelLaundry />
      <SmartTech />
      <AboutUs />
      <BeyondLaundry />
      <StepByStep />
      <OurStores />
      <Contact />
    </>
  );
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
          <Route path="/company-intro" element={<CompanyIntro />} />
          <Route path="/history" element={<History />} />
          <Route path="/brand-story" element={<BrandStory />} />
          <Route path="/management-support" element={<ManagementSupport />} />
          <Route path="/central-control" element={<ManagementSupport />} />
          <Route path="/store-management" element={<ManagementSupport />} />
          <Route path="/smart-system" element={<SmartSystem />} />
          <Route path="/advanced-technology" element={<AdvancedTech />} />
          <Route path="/status-management" element={<PhaseManagement />} />
          <Route path="/startup-guide" element={<StartupGuide />} />
          <Route path="/startup-guide-main" element={<StartupGuide />} />
          <Route path="/store-owner-interview" element={<StoreOwnerInterview />} />
          <Route path="/solo-startup" element={<SoloStartup />} />
          <Route path="/business-seminar" element={<BusinessSeminar />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/store-info" element={<StoreInfo mode="list" />} />
          <Route path="/store-status" element={<StoreInfo mode="list" />} />
          <Route path="/find-store" element={<StoreInfo mode="finder" />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* App Guide 라우트들 */}
          <Route path="/app-intro" element={<AppIntro />} />
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
