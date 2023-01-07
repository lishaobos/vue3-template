import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import unoConfig from './uno.config'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      dts: 'src/components.d.ts',
    }),
    AutoImport({
      dts: true,
      imports: ['pinia', 'vue', 'vue-router'],
    }),
    vue(),
    vueJsx(),
    Unocss(unoConfig),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
