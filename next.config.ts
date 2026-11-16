import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'export',
  // Metadata routes use force-static; Cache Components must stay disabled.
  turbopack: {
    rules: {
      '*.css': { loaders: ['@tailwindcss/turbopack'], as: '*.css' },
    },
  },
};
export default config;
