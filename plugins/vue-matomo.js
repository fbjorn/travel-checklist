import Vue from "vue"
import VueMatomo from "vue-matomo"

export default ({ app }) => {
  // don't send anything while development
  const isDev = process.env.NODE_ENV !== "production"

  Vue.use(VueMatomo, {
    host: "https://matomo.fbjorn.cc",
    siteId: 1,
    router: app.router,
    disableCookies: true,
    requireConsent: isDev,
  })
}
