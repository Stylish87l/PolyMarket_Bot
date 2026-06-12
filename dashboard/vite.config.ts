import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    allowedHosts: [
      'polymarketbot-production-1df6.up.railway.app'
    ],
    proxy: {
      '/api': {
        // Fallback to localhost if running locally, otherwise use internal routing
        target: process.env.NODE_ENV === 'production' ? 'http://127.0.0.1:3001' : 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});