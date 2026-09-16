/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d8232a',
          dark: '#a81a1f',
          light: '#ff3b42',
        },
        concrete: {
          50: '#F7F5F0',
          100: '#EDEBE6',
          200: '#D8D2C7',
          300: '#B8B2A3',
          800: '#2B2E32',
          900: '#1A1E22',
        },
        obra: {
          yellow: '#FFD400',
          black: '#111416',
        },
        acer: '#4A525E',
      },
      fontFamily: {
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'alfa': '10px',
      },
    },
  },
  plugins: [],
}
