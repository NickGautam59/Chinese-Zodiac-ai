import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          zodiacData: ['./src/data/zodiacData'],
        },
      },
    },
  },
  server: {
    hmr: {
      overlay: false
    }
  },
  preview: {
    port: 4173,
    strictPort: true
  }
});