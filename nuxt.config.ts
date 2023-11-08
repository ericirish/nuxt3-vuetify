export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  app: {},

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/main.scss'
  ],
  modules: [
    '@pinia/nuxt'
  ],
  pinia: {
    storesDirs: ['./services/**']
  },
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false
      },
      {
        path: '~/services',
        pathPrefix: false
      }
    ]
  },
  imports: {
    dirs: ['composables/**', 'stores/**']
  },
  build: {
    transpile: ['vuetify']
  }
})
