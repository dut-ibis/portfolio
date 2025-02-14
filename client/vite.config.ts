import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: '**/*.{ts,js,tsx}',
    }),
    tailwindcss(),
  ],
  base: '/client',
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,''),
      },
    },
  }, 
  logLevel: 'warn', 
})
