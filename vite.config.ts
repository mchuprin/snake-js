import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:`
          @use "@/app/styles/index.scss";
          @use "@/app/styles/common/variables.scss" as vars;
        `,
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src', // Указывает, что '@' ссылается на папку 'src'
    },
  },
})
