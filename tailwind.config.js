/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        saffron:    '#E8941A',
        turmeric:   '#C17F24',
        ivory:      '#FFF8F0',
        cream:      '#FAF0E6',
        petal:      '#FDEBD0',
        bark:       '#3C1810',
        bark2:      '#5C3320',
        moss:       '#2D5A1B',
        terracotta: '#C4622D',
        warmgray:   '#8B7355',
        border:     '#E8D5B7',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Nunito', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':       { transform: 'translateY(-12px) rotate(5deg)' },
          '66%':       { transform: 'translateY(-6px) rotate(-3deg)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to:   { transform: 'rotate(0deg)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'float-slow':    'float 6s ease-in-out infinite',
        'float-medium':  'float 4s ease-in-out infinite',
        'float-fast':    'float 3s ease-in-out infinite',
        'spin-slow':     'spin-slow 20s linear infinite',
        'spin-reverse':  'spin-reverse 15s linear infinite',
        'marquee':       'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
