import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173,      // Explicitly set the port (optional)
    strictPort: true // Exit if port is in use (optional)
  }
});