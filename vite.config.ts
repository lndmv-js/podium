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
    host: '0.0.0.0', // Разрешает доступ извне контейнера
    port: 8100, // Оставляем порт 8100
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
      },
      '/get-shoplist': {
        target: 'https://luxuryshopping.uz:222',  // сервер
        changeOrigin: true,  // Для правильной обработки заголовков
        secure: false,       // Если самоподписанный сертификат
      },
      '/get-client-bonus-cards': {
        target: 'https://luxuryshopping.uz:222',  // сервер
        changeOrigin: true,  // Для правильной обработки заголовков
        secure: false,       // Если самоподписанный сертификат
      },
      '/get_terms': {
        target: 'https://luxuryshopping.uz:222',  // сервер
        changeOrigin: true,  // Для правильной обработки заголовков
        secure: false,       // Если самоподписанный сертификат
      }
    }
  }
})
