// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const customTheme = {
  dark: false,
  colors: {
    // primary: '#9155FD',
    // secondary: '#56ca00',
    // accent: '#ffb400',
    // background: '#f4f5fa',
    // cash: '#118C4F',
    // error: '#f74b51',
    // info: '#16b1ff'
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
    defaults: {

    },
    aliases: {
      PaddedCard: components.VCard
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
