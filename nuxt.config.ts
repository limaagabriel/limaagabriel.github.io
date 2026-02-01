// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  
  // Static site generation for GitHub Pages
  ssr: true,
  
  app: {
    head: {
      title: 'Gabriel Alves - Personal Site',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal site and blog of Gabriel Alves' }
      ],
      link: [
        // Iosevka font for titles (monospace)
        { 
          rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/@fontsource/iosevka@5.0.0/index.min.css'
        },
        // Lexend Deca font for text (sans-serif)
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },
  
  css: ['~/assets/css/main.css'],
  
  content: {
    highlight: {
      theme: 'github-light'
    }
  }
})
