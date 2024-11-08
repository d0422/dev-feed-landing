import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeInLeft: {
          '0%': { transform: 'translate(-100%)', opacity: 0 },
          '100%': { transform: 'translate(0%)', opacity: 1 },
        },
        fadeOutLeft: {
          '0%': { transform: 'translate(0%)', opacity: 1 },
          '100%': { transform: 'translate(-100%)', opacity: 0 },
        },
        fadeInRight: {
          '0%': { transform: 'translate(100%)', opacity: 0 },
          '100%': { transform: 'translate(0%)', opacity: 1 },
        },
        fadeOutRight: {
          '0%': { transform: 'translate(0%)', opacity: 1 },
          '100%': { transform: 'translate(100%)', opacity: 0 },
        },
        fadeInBottom: {
          '0%': { transform: 'translateY(30%)', opacity: 0 },
          '100%': { transform: 'translate(0%)', opacity: 1 },
        },
        fadeOutBottom: {
          '0%': { transform: 'translate(0%)', opacity: 1 },
          '100%': { transform: 'translate(30%)', opacity: 0 },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 500ms linear ',
        fadeOutLeft: 'fadeOutLeft 500ms linear forwards',
        fadeInRight: 'fadeInRight 500ms linear ',
        fadeOutRight: 'fadeOutRight 500ms linear forwards',
        fadeInBottom: 'fadeInBottom 1s linear ',
        fadeOutBottom: 'fadeOutBottom 500ms linear forwards',
      },
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
