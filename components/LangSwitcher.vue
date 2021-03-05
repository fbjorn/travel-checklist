<template>
  <div class="lang-switcher">
    <div class="lang-flag">
      <nuxt-link :to="switchLocalePath('ru')">🇷🇺</nuxt-link>
    </div>
    <div class="lang-flag">
      <nuxt-link :to="switchLocalePath('en')">🇺🇸</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class LangSwitcher extends Vue {}
</script>

<style lang="sass" scoped>
@import "assets/styles/globals"

.lang-switcher
  +flex-row

.lang-flag
  padding: 0 5px
  cursor: pointer
  font-size: 1.5rem
  border-radius: $radius-large

  &:hover
    background-color: darken($color-navbar, 5%)
</style>
