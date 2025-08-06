/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
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
    },
    extend: {
      fontFamily: {
        'pretendard': ['Pretendard', 'sans-serif'],
      },
      scale: {
        '102': '1.02',
        '98': '0.98',
      },
    },
  },
  plugins: [],
}