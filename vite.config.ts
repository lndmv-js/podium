/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  },
  server: {
    proxy: {
      '/get-client-data': {
        target: 'https://luxuryshopping.uz:222',  // сервер
        changeOrigin: true,  // Для правильной обработки заголовков
        secure: false,       // Если самоподписанный сертификат
      },
      '/post-message': {
        target: 'https://luxuryshopping.uz:222',  // сервер
        changeOrigin: true,  // Для правильной обработки заголовков
        secure: false,       // Если самоподписанный сертификат
      },
      '/get-client-oper': {
        target: 'https://luxuryshopping.uz:222',  // сервер
        changeOrigin: true,  // Для правильной обработки заголовков
        secure: false,       // Если самоподписанный сертификат
      }
    }
  }
})
