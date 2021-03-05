<template>
  <div class="t-list-category">
    <h1 @click="onHeaderClick">{{ $t(`list.categories.${title}`) }}</h1>
    <div class="t-list-category-items">
      <list-category-item
        v-for="item in items"
        :key="item.id"
        v-model="item.selected"
        :name="item.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Emit, Prop } from "vue-property-decorator"
import { TCheckListItem } from "~/src/check-list-items"

@Component
export default class ListCategory extends Vue {
  @Prop({ required: true, type: String })
  title!: string

  @Prop({ required: true, type: Array })
  items!: Array<TCheckListItem>

  get isAllUnselected() {
    return this.items.every((item) => !item.selected)
  }

  onHeaderClick() {
    if (this.isAllUnselected) {
      this.selectAll()
    } else {
      this.unselectAll()
    }
  }

  @Emit()
  unselectAll() {
    return this.title
  }

  @Emit()
  selectAll() {
    return this.title
  }
}
</script>

<style lang="sass" scoped>
@import "assets/styles/globals"

.t-list-category
  margin: 0.25rem
  cursor: pointer
  border-radius: 5px //$radius-small
  width: 20rem
  overflow: hidden
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02)

  h1
    padding: 5px
    text-align: center
    background-color: #333
    color: white
    &:hover
      font-weight: bolder

.t-list-category-items
  padding: 0.75rem
  line-height: 1.6rem
</style>
