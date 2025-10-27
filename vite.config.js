import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copySuccessHtml from './vite-plugin-copy-success.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copySuccessHtml()],
})
