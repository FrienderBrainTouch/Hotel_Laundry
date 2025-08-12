import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Main/Hero';
import WhyHotelLaundry from './components/Main/WhyHotelLaundry';
import SmartTech from './components/Main/SmartTech';
import AboutUs from './components/Main/AboutUs';
import BeyondLaundry from './components/Main/BeyondLaundry';
import StepByStep from './components/Main/StepByStep';
import OurStores from './components/Main/OurStores';
import Contact from './components/Main/Contact';
import HotelLaundry from './components/HotelLaundry';
import SmartSystem from './components/SmartSystem';
import StartupGuide from './components/StartupGuide/StartupGuide';
import StoreInfo from './components/StoreInfo';
import ContactPage from './components/Contact';
import Footer from './components/Footer';
import FloatingMenu from './components/FloatingMenu';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // 페이지 변경 시 스크롤을 맨 위로 초기화
  useEffect(() => {
    // 페이지 렌더링 후 스크롤 초기화
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      // 추가로 body와 html 스크롤도 초기화
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100);

    return () => clearTimeout(timer);
  }, [currentPage]);

  // 새로고침 시에도 스크롤 위치 초기화
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'company-intro':
      case 'history':
        return <HotelLaundry onPageChange={setCurrentPage} currentPage={currentPage} />;
      case 'smart-system':
        return <SmartSystem />;
      case 'startup-guide':
        return <StartupGuide onPageChange={setCurrentPage} />;
      case 'store-info':
      case 'store-status':
        return <StoreInfo mode="list" onPageChange={setCurrentPage} />;
      case 'find-store':
        return <StoreInfo mode="finder" onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <>
            <Hero />
            <WhyHotelLaundry />
            <SmartTech />
            <AboutUs />
            <BeyondLaundry />
            <StepByStep />
            <OurStores />
            <Contact onPageChange={setCurrentPage} />
          </>
        );
    }
  };

  return (
    <div className="w-full min-h-screen m-0 p-0">
      <Header onPageChange={setCurrentPage} currentPage={currentPage} />
      <main className="bg-white min-h-screen">
        {renderPage()}
      </main>
      <Footer />
      <FloatingMenu onPageChange={setCurrentPage} currentPage={currentPage} />
    </div>  
  );
}

export default App;