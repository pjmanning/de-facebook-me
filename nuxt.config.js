export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | DeFacebookMe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Remove your Facebook Footprint. How to best Delete/Deactivate/Take a break and how to save your data and contacts.',
      },
      // twitter-card: https://cards-dev.twitter.com/validator
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@pj_manning' },
      { name: 'twitter:creator', content: '@pj_manning' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'DeFacebookMe | Remove Your Data from Facebook',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Use this step-by-step guide to deactivate, delete, or remove specific data from Facebook, Instagram, and/or WhatsApp.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://firebasestorage.googleapis.com/v0/b/travel-developer.appspot.com/o/defacebookme%2Fdefacebookme-twitter-header.png?alt=media&token=f7338250-d16b-48c8-bee9-a6bcc774c28f',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'DeFacebookMe',
      },

      // facebook card https://developers.facebook.com/tools/debug/
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://defacebookme.com',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'DeFacebookMe | Remove Your Data from Facebook',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://firebasestorage.googleapis.com/v0/b/travel-developer.appspot.com/o/defacebookme%2Fdefacebookme-twitter-header.png?alt=media&token=f7338250-d16b-48c8-bee9-a6bcc774c28f',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Use this step-by-step guide to deactivate, delete, or remove specific data from Facebook, Instagram, and/or WhatsApp.',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'DeFacebookMe',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'DeFacebookMe',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/lottie-web.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    jit: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    'vue-plausible',
    'vue-scrollto/nuxt',
  ],

  sitemap: {
    hostname: process.env.BASE_URL || 'https://defacebookme.com',
  },

  plausible: {
    domain: 'defacebookme.com',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
