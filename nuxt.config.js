const pkg = require('./package')


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/Loading.vue' ,
  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/style-resources'],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  server: {
    port: 8000, // デフォルト: 3000
    host: '0.0.0.0', // デフォルト: localhost,
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  styleResources: {
    scss: [
      '~/assets/sass/reset.scss',
      '~/assets/sass/variable.scss',
      '~/assets/sass/mixin.scss'
      ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
