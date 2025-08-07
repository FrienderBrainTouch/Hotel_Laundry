/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '1920px',
    },
    fontSize: {
      'header': ['24px', {
        lineHeight: '150%',
        fontWeight: '500',
      }],
      // 기본 텍스트 사이즈 (모바일 기본값)
      '28': ['1.25rem', { lineHeight: '1.4' }], // 20px (모바일)
      '24': ['1rem', { lineHeight: '1.4' }],     // 16px (모바일)
      '22': ['0.9375rem', { lineHeight: '1.4' }], // 15px (모바일)
      '20': ['0.875rem', { lineHeight: '1.4' }],  // 14px (모바일)
      // 섹션 타이틀 사이즈 (모바일 기본값)
      'section-title': ['1.25rem', { lineHeight: '1.2' }], // 20px (모바일)
      'section-subtitle': ['1rem', { lineHeight: '1.3' }], // 16px (모바일)
      // 히어로 타이틀 사이즈 (모바일 기본값)
      'hero-title': ['1.5rem', { lineHeight: '1.1' }], // 24px (모바일)
      'hero-subtitle': ['1.125rem', { lineHeight: '1.2' }], // 18px (모바일)
    },
    extend: {
      fontFamily: {
        'pretendard': ['Pretendard', 'sans-serif'],
        'KoPubWorldBatang': ['KoPubWorldBatang', 'serif'],
        'KoPubWorldDotum': ['KoPubWorldDotum', 'sans-serif'],
      },
      colors: {
        // 프로젝트 컬러 팔레트
        'primary': {
          DEFAULT: '#102254', // 메인 컬러
          dark: '#1C262B',    // 다크 컬러
        },
        'secondary': {
          DEFAULT: '#E3F2FD', // 세컨더리 컬러
          white: '#FFFFFF',    // 화이트 컬러
        },
        // 개별 컬러
        'brand-blue': '#102254',
        'brand-dark': '#1C262B',
        'brand-white': '#FFFFFF',
        'brand-light-blue': '#E3F2FD',
      },
      scale: {
        '102': '1.02',
        '98': '0.98',
      },
    },
  },
  plugins: [
    // 반응형 폰트 사이즈 플러그인
    function({ addUtilities, theme }) {
      const newUtilities = {
        // 히어로 타이틀 반응형
        '.hero-title': {
          fontSize: '1.5rem', // 24px (모바일 기본)
          lineHeight: '1.1',
        },
        '.hero-subtitle': {
          fontSize: '1.125rem', // 18px (모바일 기본)
          lineHeight: '1.2',
        },
        // 섹션 타이틀 반응형
        '.section-title': {
          fontSize: '1.25rem', // 20px (모바일 기본)
          lineHeight: '1.2',
        },
        '.section-subtitle': {
          fontSize: '1rem', // 16px (모바일 기본)
          lineHeight: '1.3',
        },
        // 기본 텍스트 반응형
        '.text-28': {
          fontSize: '1.25rem', // 20px (모바일 기본)
          lineHeight: '1.4',
        },
        '.text-24': {
          fontSize: '1rem', // 16px (모바일 기본)
          lineHeight: '1.4',
        },
        '.text-22': {
          fontSize: '0.9375rem', // 15px (모바일 기본)
          lineHeight: '1.4',
        },
        '.text-20': {
          fontSize: '0.875rem', // 14px (모바일 기본)
          lineHeight: '1.4',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}