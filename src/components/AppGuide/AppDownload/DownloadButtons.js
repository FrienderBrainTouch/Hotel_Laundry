import React from 'react';

const DownloadButtons = () => {
  return (
    <section className="py-12 bg-[#102254]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://apps.apple.com/kr/app/%ED%98%B8%ED%85%94%EB%9F%B0%EB%93%9C%EB%A6%AC-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EB%A9%80%ED%8B%B0%EB%B9%A8%EB%9E%98%EB%B0%A9/id6749300214"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-12 py-6 bg-white text-[#102254] rounded-xl font-bold text-20 hover:bg-gray-100 transition-colors min-h-[60px]"
          >
            <span className="mr-4 text-28">📱</span>
            App Store에서 다운로드
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.hotellaundry.hotellaundryapp&hl=ko"
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
