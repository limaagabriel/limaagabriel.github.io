// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  
  ssr: true,
  
  app: {
    head: {
      title: 'Gabriel Lima - Personal Site',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal site and blog of Gabriel Lima' }
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/@fontsource/iosevka@5.0.0/index.min.css'
        },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },
  
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/themes.css'
  ],
  
  content: {
    highlight: {
      theme: 'github-light'
    }
  },
  
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/blog']
    }
  }
})
