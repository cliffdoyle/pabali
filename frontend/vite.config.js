// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: false, // Disable auto-open to see errors clearly
    host: true,
    port: 5173,
    strictPort: true,
    historyApiFallback: true // Simplify this line
  },
  esbuild: {
    loader: 'jsx',
  },
  root: './', // Explicit root directory
});