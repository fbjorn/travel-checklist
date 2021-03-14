<template>
  <div>
    <app-title :size="2" class="has-text-centered">Privacy policy</app-title>
    <div class="box policy-box">
      <p class="block">
        I take your privacy very seriously. This application doesn't collect any
        data that you input during creation of your checklists. I use
        self-hosted analytics service called
        <a href="https://matomo.org" target="_blank">Matomo</a>, which is
        privacy-focused and
        <strong>doesn't collect any cookies or personal information</strong>.
      </p>
      <p class="block">
        I gather some analytics from this website, but only about page visits
        and popularity of different export methods. This helps me with the
        development of this service.
      </p>
    </div>
    <div class="box cookies policy-box">
      <app-title :size="4" class="has-text-centered">Cookies 🍪</app-title>
      <p class="block">
        Cookies are small text files that are placed on your computer by
        websites that you visit. They are widely used in order to make websites
        work, or work more efficiently, as well as to provide information to the
        owners of the site.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
  head: {
    title: "Privacy policy",
  },
})
export default class PrivacyPolicy extends Vue {}
</script>

<style lang="sass" scoped>
@import "assets/styles/globals"


.policy-box
  margin: 0 auto
  width: 100%
  +desktop
    width: 60%

.cookies
  margin-top: 1rem
</style>
