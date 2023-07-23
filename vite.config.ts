import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/LouPierre_14_Frontend_27052023",
  plugins: [react()],
})
