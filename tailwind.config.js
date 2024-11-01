/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: 'Pretendard-Regular',
      },
      screens: {
        mobile: { max: '767px' },
        tablet: { max: '1024px', min: '767px' },
        pc: { min: '1024px' },
      },
    },
  },
  plugins: [],
};
