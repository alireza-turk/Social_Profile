/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./**/index.html','./src/**/*.css'],
  theme: {
    extend: {
      colors:{
        'primary': '#00d801',
        'primary-dark': 'hsl(75, 94%, 57%)',
        'g-700':'hsl(0, 0%, 20%)',
        'g-800':'hsl(0, 0%, 12%)',
        'g-900':'hsl(0, 0%, 8%)',
      },
      fontFamily:{
        'inter_regular':'inter-400',
        'inter_bold':'inter-700',
        'inter_semibold':'inter-600'
      }
    },
  },
  plugins: [],
}

