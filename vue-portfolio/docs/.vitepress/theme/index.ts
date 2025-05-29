import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css' // Import your custom CSS file

// Vuetify
import 'vuetify/styles' // Main Vuetify styles
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Material Design Icons

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // You can add slots here if needed, e.g. for a global Vuetify component wrapper
      
    })
  },
  enhanceApp({ app }) {
    const vuetify = createVuetify({
      components,
      directives,
      // You can add global Vuetify configuration here, e.g., theme:
      theme: {
        defaultTheme: 'dark',
      },
    })
    app.use(vuetify)
  }
}