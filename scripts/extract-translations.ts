import { createTranslationStubs } from "~/src/check-list-items"

const fs = require("fs")

const LANGUAGES: Array<string> = ["en-US", "ru-RU"]
const stubs = createTranslationStubs()

const newContent: any = {
  list: {
    categories: {},
    items: {},
  },
}

LANGUAGES.forEach((lang) => {
  const tr = require(`../lang/${lang}.json`)
  const currentData = tr.list || {}

  stubs.categories.forEach((category) => {
    const currentCats = currentData.categories || {}
    newContent.list.categories[category] = currentCats[category] || ""
  })
  stubs.items.forEach((item) => {
    const currentItems = currentData.items || {}
    newContent.list.items[item] = currentItems[item] || ""
  })
  fs.writeFileSync(
    `${__dirname}/../lang/${lang}.json`,
    JSON.stringify(newContent),
  )
})
