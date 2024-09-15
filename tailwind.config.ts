import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import customTheme from './src/lib/theme';

const config: Config = {
  mode: 'jit',
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: customTheme,
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = Array.from({ length: 5 }, (_, i) => ({
        [`.no-of-lines-${i + 1}`]: {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': `${i + 1}`,
        },
      }));
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
