import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        sourcemap: true
      },
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'HRnet React App',
        short_name: 'HRnet',
        description: 'An HR internal employees managing app.',
        theme_color: '#145495',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/LouPierre_14_Frontend_27052023/',
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'apple-touch-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
  base: "/LouPierre_14_Frontend_27052023/",
  optimizeDeps: {
    include: [
      '@reduxjs/toolkit',
      'react',
      'react-dom',
      'react-router-dom',
      'react-redux',
      'react-data-table-component',
      'react-datepicker',
      'react-hook-form',
      '@loumorganrene/react-mini-modal',
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Create separate chunks for these dependencies
          react: ['react'],
          'react-dom': ['react-dom'],
          'react-router-dom': ['react-router-dom'],
          'react-redux': ['react-redux'],
          'react-data-table-component': ['react-data-table-component'],
          'react-datepicker': ['react-datepicker'],
          'react-hook-form': ['react-hook-form'],
          '@loumorganrene/react-mini-modal': ['@loumorganrene/react-mini-modal'],
        },
      },
    },
  },
})
