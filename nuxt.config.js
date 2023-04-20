export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],

  modules: [['@storyblok/nuxt', { accessToken: 'IRoS8BaEUKjNwQEqlupPHQtt' }], '@nuxtjs/tailwindcss'],

  routeRules: {
    '/': { static: true },
    '/about': { static: true },
    '/cart': { ssr: false }
  }
})
