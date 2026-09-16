import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/alfaMateriales/',
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // bundle-barrel-imports: isolate vendor to avoid re-parsing on app changes
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
  // bundle-analyzable-paths: Vite analiza estáticamente; no dynamic broad imports
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
})
