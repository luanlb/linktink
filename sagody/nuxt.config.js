require('dotenv').config();
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

export default {
  mode: 'universal',
  env: {
    FEATURED_PRODUCT: process.env.FEATURED_PRODUCT,
  },
  generate: {
    concurrency: 20,
    subFolders: false,
  },
  head: {
    title: 'vuefront',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'VueFront' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.ico',
      },
    ],
    script: [],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vue-backtotop', ssr: false },
    { src: '~/plugins/vue-toastification', ssr: false },
    { src: '~/plugins/vueperslides', ssr: false },
    // { src: '~/plugins/firebase' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'vuefront-nuxt',
    'cookie-universal-nuxt',
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],
  /*
  /*
  ** Global CSS
  */
  css: [
    './assets/scss/styles/animate.min.css',
    './assets/scss/styles/fontawesome.min.css',
    './assets/scss/styles/style.scss',
    './assets/scss/styles/admin.scss',
    './assets/scss/styles/responsive.scss',
  ],
  /*
   ** Globally configure <nuxt-link> default active class.
   */
  router: {
    linkActiveClass: 'active',
  },
  build: {
    babel: {
      plugins: ['lodash'],
    },
    transpile: [/vuefront/],
    extractCSS: true,
    plugins: [
      new LodashModuleReplacementPlugin({
        shorthands: true,
      }),
    ],
  },
};
