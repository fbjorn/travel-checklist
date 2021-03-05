<template>
  <div class="main">
    <AppNavbar />
    <div class="main-content">
      <Nuxt></Nuxt>
    </div>
    <AppFooter />
  </div>
</template>

<style lang="sass">
@import "assets/styles/globals"
@import "~bulma"

.main
  +flex-column
  min-height: 100vh

  .main-content
    +flex-column
    flex: 1
    padding: 0.5rem
</style>

<script>
export default {
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      titleTemplate: `%s | ${this.$t("seo.titleTemplate")}`,
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("seo.description"),
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: this.$t("seo.title"),
        },
        {
          hid: "og:url",
          name: "og:url",
          content: `https://${this.$t("seo.domain")}`,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("seo.title"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("seo.description"),
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "/images/social-media-logo.png",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:domain",
          name: "twitter:domain",
          content: this.$t("seo.domain"),
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: `https://${this.$t("seo.domain")}`,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t("seo.title"),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("seo.description"),
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "/images/social-media-logo.png",
        },
        ...i18nHead.meta,
      ],
      link: [...i18nHead.link],
    }
  },
}
</script>
