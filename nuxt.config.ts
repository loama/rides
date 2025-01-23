// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_SUPABASE_URL,
      supabaseKey: process.env.NUXT_SUPABASE_KEY
    }
  },
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
      meta: [
        // Add other meta tags here
      ],
      link: [
        // Add link tags here
      ],
      title: 'Rides | Car Community'
    }
  }
})
