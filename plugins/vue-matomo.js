import Vue from "vue"
import VueMatomo from "vue-matomo"
import settings from "~/src/settings"

export default ({ app }) => {
  // don't send anything while development
  const isDev = process.env.NODE_ENV !== "production"

  Vue.use(VueMatomo, {
    host: `https://${settings.matomo.DOMAIN}`,
    siteId: settings.matomo.WEBSITE_ID,
    router: app.router,
    disableCookies: true,
    requireConsent: isDev,
  })
}
