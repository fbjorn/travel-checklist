<template>
  <div class="t-checklist-generator">
    <div class="description">
      <AppTitle :size="2">New cheklist</AppTitle>
      <p>Please review what data you want to see in your checklist.</p>
      <p>
        By clicking on elements you can indicate whether you want to exclude
        them.
      </p>
    </div>
    <ListConstructor :init-categories="checkListData" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import { CheckListData } from "~/src/check-list-items"

@Component({
  head: {
    title: "New checklist",
  },
})
export default class NewPage extends Vue {
  get checkListData() {
    return CheckListData
  }
}
</script>

<style scoped lang="sass">
.description
  text-align: center
  margin-bottom: 1rem
</style>
