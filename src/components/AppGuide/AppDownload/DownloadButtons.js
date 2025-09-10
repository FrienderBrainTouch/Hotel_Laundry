import React from 'react';

const DownloadButtons = () => {
  return (
    <section className="py-12 bg-[#102254]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            className="flex-1 inline-flex items-center justify-center px-12 py-6 bg-white text-[#102254] rounded-xl font-bold text-20 hover:bg-gray-100 transition-colors min-h-[60px]"
            onClick={() => window.open('https://apps.apple.com', '_blank')}
          >
            <span className="mr-4 text-28">📱</span>
            App Store에서 다운로드
          </button>
          <button
            className="flex-1 inline-flex items-center justify-center px-12 py-6 bg-white text-[#102254] rounded-xl font-bold text-20 hover:bg-gray-100 transition-colors min-h-[60px]"
            onClick={() => window.open('https://play.google.com', '_blank')}
          >
            <span className="mr-4 text-28">🤖</span>
            Google Play에서 다운로드
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadButtons;
