/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#06060B',        // page background — near-black blue
        panel: '#0E0E17',      // card / panel surface
        edge: '#1D1D2C',       // hairline borders
        fog: '#8B90A3',        // muted text
        snow: '#E9EBF2',       // primary text
        // inferno colormap accents (matplotlib's DL heatmap palette)
        magma: '#932667',
        ember: '#DD513A',
        amber: '#FCA50A',
        flare: '#FCFFA4',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        wrap: '72rem',
      },
    },
  },
  plugins: [],
};
