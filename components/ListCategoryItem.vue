<template>
  <div class="t-list-category-item" @click="selected = !selected">
    <p :class="{ crossed: !selected }">{{ trName }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop, VModel } from "vue-property-decorator"

@Component
export default class ListCategoryItem extends Vue {
  @VModel({ type: Boolean })
  selected!: boolean

  @Prop({ required: true, type: String })
  name!: string

  get trName() {
    return this.$t(`list.items.${this.name}`)
  }
}
</script>

<style lang="sass" scoped>
@import "assets/styles/globals"

.t-list-category-item
  &:hover
    //color: darkgreen
    font-weight: bolder
  //+mobile
  //  background-color: #3b8070

.crossed
  color: $muted
  text-decoration: line-through
</style>
