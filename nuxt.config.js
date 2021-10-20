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
      //   // twitter-card: https://cards-dev.twitter.com/validator
      //   { name: 'twitter:card', content: 'summary_large_image' },
      //   { name: 'twitter:site', content: '@GlassyHQ' },
      //   { name: 'twitter:creator', content: '@pj_manning' },
      //   {
      //     hid: 'twitter:title',
      //     name: 'twitter:title',
      //     content: 'Glassy | Make Your Company More Transparent',
      //   },
      //   {
      //     hid: 'twitter:description',
      //     name: 'twitter:description',
      //     content:
      //       '🔎  Create an open company culture by being transparent with your investors, employees, customers, and other stakeholders.',
      //   },
      //   {
      //     hid: 'twitter:image',
      //     name: 'twitter:image',
      //     content:
      //       'https://firebasestorage.googleapis.com/v0/b/glassy-so.appspot.com/o/glassy-ogimage.png?alt=media&token=359850a5-cb80-4b02-8777-c611d53a2769',
      //   },
      //   {
      //     hid: 'twitter:image:alt',
      //     name: 'twitter:image:alt',
      //     content: 'Glassy',
      //   },

      //   // facebook card https://developers.facebook.com/tools/debug/
      //   {
      //     hid: 'fb:app_id',
      //     property: 'fb:app_id',
      //     content: '1013298389488671',
      //   },
      //   {
      //     hid: 'og:url',
      //     property: 'og:url',
      //     content: 'https://glassy.so',
      //   },
      //   { hid: 'og:type', property: 'og:type', content: 'website' },
      //   {
      //     hid: 'og:title',
      //     property: 'og:title',
      //     content: 'Glassy | Make Your Company More Transparent',
      //   },
      //   {
      //     hid: 'og:image',
      //     property: 'og:image',
      //     content:
      //       'https://firebasestorage.googleapis.com/v0/b/glassy-so.appspot.com/o/glassy-ogimage.png?alt=media&token=359850a5-cb80-4b02-8777-c611d53a2769',
      //   },
      //   {
      //     hid: 'og:description',
      //     property: 'og:description',
      //     content:
      //       '🔎  Create an open company culture by being transparent with your investors, employees, customers, and other stakeholders.',
      //   },
      //   {
      //     hid: 'og:site_name',
      //     property: 'og:site_name',
      //     content: 'Glassy',
      //   },
      //   {
      //     hid: 'og:image:alt',
      //     property: 'og:image:alt',
      //     content: 'Glassy',
      //   },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

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
