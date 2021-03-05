<template>
  <label class="control app-input-label" :class="divClass">
    <input
      v-model="text"
      class="app-input input"
      type="text"
      :placeholder="placeholder"
    />
    <span v-if="iconLeft && iconLeft.length" class="icon is-small is-left">
      <font-awesome-icon :icon="iconLeft" />
    </span>
    <span v-if="iconRight && iconRight.length" class="icon is-small is-right">
      <font-awesome-icon :icon="iconRight" />
    </span>
  </label>
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop, VModel } from "vue-property-decorator"

@Component
export default class AppInput extends Vue {
  @Prop({ type: String, default: "" })
  placeholder!: string

  @Prop({ type: Array })
  iconLeft?: Array<string>

  @Prop({ type: Array })
  iconRight?: Array<string>

  @VModel({ type: String })
  text!: string

  get divClass() {
    return {
      "has-icons-left": this.iconLeft !== undefined,
      "has-icons-right": this.iconRight !== undefined,
    }
  }
}
</script>

<style lang="sass">
@import "assets/styles/globals"

.app-input-label
  display: block
</style>
