/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#463ADD',
        secondary: '#EEF1FF',
        magenta: '#FF00FB',
        'gray-500': '#F0F0F3',
      },

    },
  },
  plugins: [],
}
