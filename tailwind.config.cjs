/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: 'Nunito, sans-serif',
    },

    colors: {
      blue: '#3294F8',
      baseTitle: '#E7EDF4',
      baseSubtitle: '#C4D4E3',
      baseText: '#AFC2D4',
      baseSpan: '#7B96B2',
      baseLabel: '#3A536B',
      baseBorder: '#1C2F41',
      basePost: '#112131',
      baseProfile: '#0B1B2B',
      baseBackground: '#071422',
      baseInput: '#040F1A',
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        2: 'repeat(auto-fit, minmax(22rem, 1fr))',

        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px',
      },
    },
  },
  plugins: [],
}
