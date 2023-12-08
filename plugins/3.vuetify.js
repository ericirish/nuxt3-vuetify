// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const customTheme = {
  dark: false,
  colors: {
    text: '#333333',
    primary: '#a37ea8',
    secondary: '#b7d0d7',
    accent: '#f7bead',
    tertiary: '#7b9dc6',
    background: '#eeeee4',
    error: '#FF4081',
    info: '#FFABAB'
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    styles: { configFile: '~/assets/variables.scss' },
    theme: {
      defaultTheme: 'customTheme',
      themes: {
        customTheme
      }
    },
    defaults: {},
    aliases: {
      PaddedCard: components.VCard
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
