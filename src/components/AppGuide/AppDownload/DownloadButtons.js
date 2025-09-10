import React from 'react';

const DownloadButtons = () => {
  return (
    <section className="py-12 bg-[#102254]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://apps.apple.com/app/hotel-laundry"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-12 py-6 bg-white text-[#102254] rounded-xl font-bold text-20 hover:bg-gray-100 transition-colors min-h-[60px]"
          >
            <span className="mr-4 text-28">📱</span>
            App Store에서 다운로드
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.hotellaundry.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-12 py-6 bg-white text-[#102254] rounded-xl font-bold text-20 hover:bg-gray-100 transition-colors min-h-[60px]"
          >
            <span className="mr-4 text-28">🤖</span>
            Google Play에서 다운로드
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadButtons;
