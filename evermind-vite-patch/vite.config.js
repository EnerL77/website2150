import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Minimal Vite config for React so Render can detect/compile correctly.
export default defineConfig({
  plugins: [react()],
})
