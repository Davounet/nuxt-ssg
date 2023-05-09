export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [['@storyblok/nuxt', { accessToken: 'IRoS8BaEUKjNwQEqlupPHQtt' }], '@nuxtjs/tailwindcss'],

  routeRules: {
    '/': { swr: 60 },
    '/about': { static: true },
    '/cart': { ssr: false }
  }
})
