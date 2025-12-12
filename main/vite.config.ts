import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: tag => /^micro-app/.test(tag)
      }
    }
  })],

  // server: {
  //   // 关键：禁用 HMR
  //   hmr: false,
  // },
})
