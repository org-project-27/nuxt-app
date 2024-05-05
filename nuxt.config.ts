export default defineNuxtConfig({
  // @ts-ignore
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      ],
    },
  },
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
  plugins: [
      './plugins/i18n.ts',
      './plugins/local-storage.client.ts',
  ],
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**', './stores/**/*'],
  },
  devtools: {
    enable: false,

    timeline: {
      enabled: false
    }
  }
});