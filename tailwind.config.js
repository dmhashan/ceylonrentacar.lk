/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C4922A',
          light:   '#D4A84B',
          dark:    '#A67820',
          muted:   '#C4922A26',
        },
        ink: {
          DEFAULT: '#0D0D0D',
          800:     '#1A1A1A',
          700:     '#2A2A2A',
          600:     '#3D3D3D',
          500:     '#555555',
        },
        stone: {
          DEFAULT: '#F5F3EF',
          200:     '#EBEBEB',
          300:     '#D4D0CA',
          500:     '#8C8882',
          600:     '#6B6763',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}
