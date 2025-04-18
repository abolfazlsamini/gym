const lynxPreset = require('@lynx-js/tailwind-preset');

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  presets: [lynxPreset], // Use the preset
  theme: {
    extend: {
      colors: {
        orange: '#F38181',
        blue: '#95E1D3',
        darkBlur: '#27374D',
        gray: '#424769',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.rotate-90': {
          transform: 'rotate(90deg)', // Only applies rotation
        },
        '.translate-yy': {
          transform: 'translateY(50%)',
        },
        '.-translate-yy': {
          transform: 'translateY(-50%)',
        },
        '.hidden': {
          display: 'none',
        },
      });
    }),
  ],

  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './src/pages/**/*.{html,js,ts,jsx,tsx}',
  ],
};
