import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import HotelLaundry from './components/HotelLaundry';
import SmartSystem from './components/SmartSystem';
import StartupGuide from './components/StartupGuide';
import StoreInfo from './components/StoreInfo';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'hotel-laundry':
        return <HotelLaundry />;
      case 'company-intro':
        return (
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">회사 소개</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">회사 소개 내용이 들어갈 자리입니다.</p>
            </div>
          </div>
        );
      case 'history':
        return (
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">연혁</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">연혁 내용이 들어갈 자리입니다.</p>
            </div>
          </div>
        );
      case 'smart-system':
        return <SmartSystem />;
      case 'startup-guide':
        return <StartupGuide />;
      case 'store-info':
      case 'store-status':
        return <StoreInfo mode="list" onPageChange={setCurrentPage} />;
      case 'find-store':
        return <StoreInfo mode="finder" onPageChange={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">호텔런드리에 오신 것을 환영합니다</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">메인 페이지 내용이 들어갈 자리입니다.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full min-h-screen m-0 p-0 overflow-x-hidden">
      <Header onPageChange={setCurrentPage} currentPage={currentPage} />
      <main className="bg-gray-50 min-h-screen">
        {renderPage()}
      </main>
    </div>  
  );
}

export default App;