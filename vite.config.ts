import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@google/generative-ai'],
  },
  server: {
    host: true,
    port: 5173
  }
});