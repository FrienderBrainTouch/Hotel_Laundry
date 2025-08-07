import './App.css';
import React, { useState } from 'react';
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

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'hotel-laundry':
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
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="w-full min-h-screen m-0 p-0 overflow-hidden">
      <Header onPageChange={setCurrentPage} currentPage={currentPage} />
      <main className="bg-white min-h-screen">
        {renderPage()}
      </main>
      <Footer />
    </div>  
  );
}

export default App;