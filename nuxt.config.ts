export default defineNuxtConfig({
  // @ts-ignore
  devServer: {
    port: 5500,
    https: false
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
              '@import "assets/stylesheets/utilities/colors";' +
              '@import "assets/stylesheets/utilities/configs";' +
              '@import "assets/stylesheets/utilities/responsive";' +
              '@import "assets/stylesheets/utilities/animations";' +
              '@import "assets/stylesheets/utilities/fonts";'
        }
      }
    }
  },
  css: [
    '~/assets/stylesheets/style.scss',
  ],
  plugins: [],
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**', './stores/**/*'],
  },
  nitro: {
    storage: {
      data: {
        driver: 'vercelKV'
        /* Vercel KV driver options */
      }
    }
  }
  // devtools: {
  //   enable: true,
  //
  //   timeline: {
  //     enabled: true
  //   }
  // }
});