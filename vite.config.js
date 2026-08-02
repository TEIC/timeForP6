import { resolve } from 'path'
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/timeForP6/', // must exactly match the GitHub repo name — case-sensitive, leading + trailing slash
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dh2026: resolve(__dirname, 'dh2026.html'),
        // add each new conference deck here as you create it
      },
    },
  },
});