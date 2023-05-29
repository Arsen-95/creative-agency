/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      secondary: '#C8166A',
      title: '#2E2E2E',
      black: '#000',
      white: '#fff',
      elements: '#FEFCFC',
      transparent: 'transparent',
      text: '#5E5E5E',
      input: '#FEF7FE',
      textElement: '#BFBFBF',
      linear: 'linear-gradient(90deg, #F093FB 0%, #F5576C 100%)',
      inputText: '#D4BCD4',
    },
    fontFamily: {
      inter: 'Inter',
      manrope: 'Manrope',
      lora: 'Lora',
    },
    backgroundImage: {
      primary: 'linear-gradient(90deg, #F093FB 0%, #F5576C 100%)',
    },
    boxShadow: {
      title: '0px 0px 18px 5px rgba(75, 83, 156, 0.27)',
      form: '0px 5px 10px rgba(145, 152, 217, 0.25)',
    },
    gridTemplateColumns: {
      steps: '1fr 17% 1fr',
    },
  },
  plugins: [],
};
