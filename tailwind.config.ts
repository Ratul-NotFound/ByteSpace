import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#003be2',
          dark: '#0029a3',
        },
        accent: '#d4fb20',
        surface: {
          DEFAULT: '#f5f5f6',
          raised: '#ffffff',
        },
        subtle: '#e5e6e8',
        muted: '#82868e',
        ink: '#242528',
      },
      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Clash Display"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1200px',
      },
      borderRadius: {
        pill: '24px',
        card: '16px',
      },
    },
  },
  plugins: [],
} satisfies Config;
