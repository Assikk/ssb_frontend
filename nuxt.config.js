export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ССБ',
    htmlAttrs: {
      lang: 'tj'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    link: [{
      href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap",
      rel: "stylesheet"
    }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    'plugins/vueSlickCarousel.js',
    'plugins/vee-validate.js',
    'plugins/vuelidate.js',
    { src: '~/plugins/intersection-observer.js', mode: 'client' },
    {src: '~/plugins/convertedSearch.js'},
    ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [{
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru.js'
      },
      {
        code: 'en',
        iso: 'en-EN',
        file: 'en.js'
      },
      {
        code: 'tj',
        iso: 'tj-TJ',
        file: 'tj.js'
      }
    ],
    langDir: 'lang/',
    defaultLocale: 'tj',
    localeDetection: false,
    vueI18n: {
      fallbackLocale: 'tj',
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308

    //! TODO SSB python server IP
    // ? Replace - with . when using this IP
    // baseURL: 'https://172-28-1-21:8000/api/',
    //! TODO Test server
    // baseURL: 'https://ssb.artesia.tj/api/',
    baseURL: 'https://webapi.ssb.tj/api/',
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate']
  },
}
