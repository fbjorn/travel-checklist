<template>
  <h1 v-if="size === 1" class="app-title title is-1" :class="{ subtitle }">
    <slot></slot>
  </h1>
  <h2 v-else-if="size === 2" class="app-title title is-2" :class="{ subtitle }">
    <slot></slot>
  </h2>
  <h3 v-else-if="size === 3" class="app-title title is-3" :class="{ subtitle }">
    <slot></slot>
  </h3>
  <h4 v-else-if="size === 4" class="app-title title is-4" :class="{ subtitle }">
    <slot></slot>
  </h4>
  <h5 v-else-if="size === 5" class="app-title title is-5" :class="{ subtitle }">
    <slot></slot>
  </h5>
  <h6 v-else-if="size === 6" class="app-title title is-6" :class="{ subtitle }">
    <slot></slot>
  </h6>
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component
export default class AppHeader extends Vue {
  @Prop({ default: 1, type: Number })
  size!: number

  @Prop({ default: false, type: Boolean })
  subtitle!: boolean
}
</script>
