import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app')
    },

    // Поддержка index файлов
    mainFields: ['module', 'jsnext:main', 'jsnext'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss', '.css'],
  }
})
