export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,

  runtimeConfig: {
    public: {
      baseUrl: 'http://localhost:3000',
      apiUrl: 'http://localhost:3030'
    }
  },

  app: {
    head: {
      title: '',
      meta: [
        { hid: 'og:image', property: 'og:image', content: '' },
        { hid: 'og:title', property: 'og:title', content: '' },
        { hid: 'og:description', property: 'og:description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
        { rel: 'apple-touch-icon-precomposed', href: '/favicons/apple-touch-icon-57x57.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/favicons/apple-touch-icon-114x114.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/favicons/apple-touch-icon-72x72.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/favicons/apple-touch-icon-144x144.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/favicons/apple-touch-icon-60x60.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/favicons/apple-touch-icon-120x120.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/favicons/apple-touch-icon-76x76.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/favicons/apple-touch-icon-152x152.png' },
        { rel: 'icon', type: 'image/png', href: '/favicons/favicon-196x196.png' },
        { rel: 'icon', type: 'image/png', href: '/favicons/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', href: '/favicons/favicon-128.png' }
      ]
    }
  },

  experimental: {
    reactivityTransform: true
  },

  typescript: {
    shim: false
  },

  css: [
    '~/styles/main.scss'
  ],

  modules: [
    '@pinia/nuxt',
    'nuxt-gtag',
    'vuetify-nuxt-module',
    '@nuxt/fonts'
  ],

  vuetify: {
    moduleOptions: {
      styles: { configFile: '/styles/settings.scss' }
    },
    vuetifyOptions: {
      defaults: {},
      icons: {
        defaultSet: 'mdi'
      },
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            dark: false,
            colors: {

            }
          }
          // You can also define a dark theme
          // dark: {
          //   dark: true,
          //   colors: {
          //     primary: '#2196F3'
          //     // ... other colors
          //   }
          // }
        }
      }
    }
  },

  // gtag: {
  //   id: 'G-'
  // },

  components: {
    global: true,
    dirs: [
      {
        path: '~/components',
        pathPrefix: false
      }
    ]
  },

  imports: {
    dirs: ['composables/**', 'stores/**']
  },

  compatibilityDate: '2024-11-12'
})
