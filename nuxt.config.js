export default {
  server: {
    port: "4000",
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: "%s | Travel Checklist Generator",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/images/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ["bulma"],
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "nuxt-i18n",
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"],
          },
          // {
          //   set: "@fortawesome/free-brands-svg-icons",
          //   icons: ["fab"],
          // },
        ],
      },
    ],

    [
      "nuxt-matomo",
      {
        matomoUrl: "//matomo.fbjorn.cc/",
        siteId: 1,
        cookies: false,
      },
    ],
  ],

  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en-US.json" },
      { code: "ru", iso: "ru-RU", file: "ru-RU.json" },
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "lang/",
    baseUrl: "https://travel.fbjorn.cc",
    seo: false, // set by #nuxtI18nHead
    vueI18n: {
      fallbackLocale: "en",
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: "static/images/logo.png",
    },
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    devMiddleware: {
      headers: {
        "Cache-Control": "no-store",
        Vary: "*",
      },
    },
  },
}
