<template>
  <div>
    <div>
      <app-input
        v-model="title"
        placeholder="Checklist name"
        class="title-input"
        :icon-left="['fas', 'pencil-alt']"
        :icon-right="[]"
      />
    </div>
    <div class="categories-row">
      <div v-for="c in categories" :key="c.name">
        <list-category
          :title="c.name"
          :items="c.items"
          @unselect-all="(name) => markItems(name, false)"
          @select-all="(name) => markItems(name, true)"
        />
      </div>
    </div>
    <div>
      <export-as :data="categories" :title="title" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import { TCategory } from "~/src/check-list-items"

@Component
export default class ListConstructor extends Vue {
  @Prop({ required: true, type: Array })
  initCategories!: Array<TCategory>

  title: string = this.$t("site.upcomingTrip").toString()
  categories!: Array<TCategory>

  data() {
    const patchedCategories = this.initCategories.map((c) => ({
      name: c.name,
      items: c.items.map((item) => ({ ...item, selected: true })),
    }))

    return {
      categories: patchedCategories,
    }
  }

  markItems(category: string, state: boolean) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].name === category) {
        for (let j = 0; j < this.categories[i].items.length; j++) {
          this.categories[i].items[j].selected = state
        }
        return
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "assets/styles/globals"
.categories-row
  width: 70%
  margin: 0 auto
  +flex-row
  flex-wrap: wrap

  +mobile
    width: auto

.title-input
  width: $category-width
  margin: 1rem auto
  ::v-deep .app-input
    text-align: center
</style>
