import { defineConfig } from 'unocss/vite'
import {
  presetAttributify,
  presetUno,
  transformerVariantGroup,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  rules: [
    [
      /clip-path-\[(.+)\]/,
      (match) => ({ 'clip-path': match[1].replace(/_/g, ' ') }),
    ],
  ],
  shortcuts: {},
  presets: [
    presetAttributify({
      prefix: 'un-',
      prefixedOnly: true,
    }),
    presetUno(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
