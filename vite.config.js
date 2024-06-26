import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/diploma_v1/',
  plugins: [react()],
  server: {
    historyApiFallback: true
  }
})
