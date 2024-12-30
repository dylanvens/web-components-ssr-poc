// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    ["nuxt-ssr-lit", { litElementPrefix: ["dbk-"] }]
  ],
  css: [
    '~/assets/globalStyles.css',
  ],
  vite: {
    esbuild: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true
        }
      }
    }
  }
})