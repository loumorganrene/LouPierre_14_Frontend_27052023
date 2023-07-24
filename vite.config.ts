import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
