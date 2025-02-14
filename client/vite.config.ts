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
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        homepage: '/public/index.html'
      },
    },
  }, 
  logLevel: 'warn', 
})
