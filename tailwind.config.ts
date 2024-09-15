import type { Config } from 'tailwindcss';
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
  plugins: [],
};
export default config;
