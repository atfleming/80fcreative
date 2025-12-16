export default {
  darkMode: 'class',
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        wordmark: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'digital-black': '#0B2545',
        'electric-cyan': '#4A90E2',
        'synth-purple': '#6B7280',
        gunmetal: '#2D3748',
        magenta: '#64B5F6',
        highlight: '#FFFFFF',
        'corporate-navy': '#0B2545',
        'corporate-sky': '#4A90E2',
        'corporate-light': '#F8F9FA',
        'corporate-slate': '#1A2332',
      },
    },
  },
  plugins: [],
}