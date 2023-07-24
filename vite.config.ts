import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/LouPierre_14_Frontend_27052023/",
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-redux',
      'react-data-table-component',
      'react-datepicker'
    ],
    exclude: ['@loumorganrene/react-mini-modal']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('react') ||
              id.includes('react-dom') ||
              id.includes('react-router-dom') ||
              id.includes('react-redux') ||
              id.includes('react-data-table-component') ||
              id.includes('react-datepicker')
            ) {
              return 'vendor';
            }
            if (id.includes('@loumorganrene/react-mini-modal')) {
              return 'react-mini-modal';
            }
          }
        }
      }
    }
  }
})
