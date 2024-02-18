import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        cleanupOutdatedCaches: false,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}']
      },
      devOptions: {
        enabled: true
        /* other options */
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'maskable-icon-512x512.png'],
      manifest: {
        name: 'Expense PWA',
        short_name: 'expense',
        description: 'expense app to manage money',
        theme_color: "#52a8f2",
        display:"standalone",
        icons: [
          {
            src: "favicon.ico",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon"
          },
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png"
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
