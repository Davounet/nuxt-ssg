export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [['@storyblok/nuxt', { accessToken: 'IRoS8BaEUKjNwQEqlupPHQtt' }], '@nuxtjs/tailwindcss'],

  nitro: {
    prerender: { crawlLinks: true }
  }
})
