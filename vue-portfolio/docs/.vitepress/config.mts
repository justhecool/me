import { defineConfig } from 'vitepress'
import vuetify from 'vite-plugin-vuetify' // Import Vuetify plugin

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Justin Schwertmann",
  description: "My portfolio",
  appearance: 'force-dark',
  vite: { // Add this Vite configuration block
    plugins: [
      vuetify({ autoImport: true,
        
       }), // Enabled auto-import for Vuetify components
    ],
    ssr: {
      noExternal: ['vuetify'], // Ensure Vuetify is bundled for SSR
    },
  },
  themeConfig: {
    // logo: '/me.jpeg', // Add this line - use the correct path to your image in /public
    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Portfolio', link: '/portfolio' }, // Added Portfolio link
      { text: 'Resume', link: '/resume' },     // Added Resume link
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'My Work', // New sidebar section
        items: [
          { text: 'Portfolio', link: '/portfolio' },
          { text: 'Resume', link: '/resume' }
        ]
      },
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/justin-schwertmann/' },
      { icon: 'github', link: 'https://github.com/justhecool' },
    ]
  }
})
