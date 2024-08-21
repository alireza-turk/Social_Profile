/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./**/index.html','./src/**/*.css'],
  theme: {
    extend: {
      colors:{
        'primary': 'hsl(75, 94%, 57%)',
        'g-700':'hsl(0, 0%, 20%)',
        'g-800':'hsl(0, 0%, 12%)',
        'g-900':'hsl(0, 0%, 8%)',
      },
      fontFamily:{
        'inter-regular':'inter-400',
        'inter-bold':'inter-600',
        'inter-semibold':'inter-700'
      }
    },
  },
  plugins: [],
}

