export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],

  modules: [['@storyblok/nuxt', { accessToken: 'IRoS8BaEUKjNwQEqlupPHQtt' }], '@nuxtjs/tailwindcss'],

  nitro: {
    preset: 'netlify'
  },

  routeRules: {
    '/': { static: true },
    '/about': { swr: 1800 },
    '/cart': { ssr: false }
  },

  hooks: {
    'build:before': async () => {
      console.log('hello')
      console.log('I can fetch everything !')
    }
  }
})
