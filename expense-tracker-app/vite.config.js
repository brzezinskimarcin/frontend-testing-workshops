import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';

export default defineConfig({
  base: './',
  plugins: [vue2()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  server: {
    host: true,
    watch: {
      usePolling: true,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'tests/vitest.setup.js',
    coverage: {
      all: true,
      include: ['src/**/*.{js,vue}'],
      exclude: ['src/**/*lang.js'],
    },
  },
});
