<template>
  <div class="export-as">
    <app-title :size="5">Export this checklist to:</app-title>
    <app-button
      name="Apple notes"
      icon="/images/apple-notes-logo.png"
      @click="exportAsEnex"
    />
    <app-button
      name="Evernote"
      icon="/images/evernote-logo.png"
      @click="exportAsEnex"
    />
    <div class="description">
      <p>By clicking on either option, you'll be prompted to save a file.</p>
      <p>
        From laptop, just open it after downloading. On iPhone, click
        <i>"More" -> "Notes"</i>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import { TCategory } from "~/src/check-list-items"
import { createEvernoteExportFile, makeHeader, makeTodo } from "~/src/evernote"

@Component
export default class ExportAs extends Vue {
  // TODO: Find a way to not pass this huge data twice as properties
  //  currently there's a problem with accessing $t from i18n module
  //  if import function from external file
  @Prop({ required: true, type: Array })
  data!: Array<TCategory>

  @Prop({ required: true, type: String })
  title!: string

  exportAsEnex() {
    let content = ""
    for (const category of this.data) {
      const trName = this.$t(`list.categories.${category.name}`).toString()
      content += makeHeader(trName)
      for (const item of category.items) {
        if (item.selected) {
          const trItem = this.$t(`list.items.${item.id}`).toString()
          content += makeTodo(trItem)
        }
      }
    }

    const enex = createEvernoteExportFile({
      application: "Travel checklist generator",
      author: "Travel checklist generator",
      tags: ["Travel"],
      content,
      title: this.title,
    })
    this.download("CheckList.enex", enex)
  }

  download(filename: string, text: string) {
    const pom = document.createElement("a")
    pom.setAttribute(
      "href",
      "data:application/octet-stream;charset=utf-8," + encodeURIComponent(text),
    )
    pom.setAttribute("download", filename)
    pom.setAttribute("visible", "none")
    if (document.createEvent) {
      const event = document.createEvent("MouseEvents")
      event.initEvent("click", true, true)
      pom.dispatchEvent(event)
    } else {
      pom.click()
    }
  }
}
</script>

<style lang="sass" scoped>
.export-as
  text-align: center
  margin: 1rem 0 1rem

.app-title
  margin-bottom: 0.5rem

.description
  margin-top: 0.5rem
</style>
