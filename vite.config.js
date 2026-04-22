import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      cssModules: {
        animation: false,
      },
    },
  },
  build: {
    target: ['es2020', 'chrome87', 'edge88', 'firefox78', 'safari14'],
  },
});
