<template>
  <button class="button" @click="click">
    <span v-if="icon" class="icon">
      <img :src="icon" alt="button" />
    </span>
    <span>{{ name }}</span>
  </button>
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Emit, Prop } from "vue-property-decorator"

@Component
export default class AppButton extends Vue {
  @Prop({ type: String })
  icon!: string

  @Prop({ type: String, required: true })
  name!: string

  @Emit("click")
  click() {}
}
</script>

<style lang="sass" scoped>
@import "assets/styles/globals"
</style>
