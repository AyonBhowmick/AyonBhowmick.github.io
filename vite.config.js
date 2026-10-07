import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site lives at https://ayonbhowmick.github.io/ (a user site), so base is "/".
export default defineConfig({
  base: '/',
  plugins: [react()],
});
