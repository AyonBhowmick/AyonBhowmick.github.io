import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Works for both https://ayon-bhowmick-portfolio.vercel.app and https://ayonbhowmick.github.io (both serve from "/").
export default defineConfig({
  base: '/',
  plugins: [react()],
  define: { __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()) },
  build: {
    // Hashed JS/CSS/fonts go in /_app/ so they can be cached forever without
    // touching /assets/ (where the CV lives and must stay fresh).
    assetsDir: '_app',
  },
});
