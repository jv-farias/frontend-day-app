/// <reference types="vite/client" />
/// <reference types="node" />

import { resolve } from 'path';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/frontend-day-app/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'ao-vivo': resolve(__dirname, 'ao-vivo.html'),
        'config-save': resolve(__dirname, 'config-save.html'),
      },
    },
  },
})