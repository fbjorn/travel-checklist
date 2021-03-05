<template>
  <div class="index">
    <div class="container">
      <div><Logo /></div>
      <p>Currently this site is under development 🏗</p>
      <p>
        However you can still <nuxt-link to="/new">try out</nuxt-link> checklist
        constructor
      </p>
      <p>
        Just letting you know this may not work properly or can look ugly cause
        it's a temporary version
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
  head: {
    title: "Travel Checklist Generator",
    titleTemplate: "",
  },
})
export default class IndexPage extends Vue {}
</script>

<style lang="sass" scoped>
// todo: import it automatically
@import "assets/styles/globals"

$logo-size: 256px

.index
  +flex-column-center
  flex: 1
  text-align: center

.container
  +flex-column-center

img
  width: $logo-size
  height: $logo-size
</style>
