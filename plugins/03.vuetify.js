// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const customTheme = {
  dark: false,
  colors: {}
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
