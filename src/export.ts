import { TCategory } from "~/src/check-list-items"

export const exportToAppleNotes = (t: any, data: Array<TCategory>): string => {
  let res = ""
  for (const category of data) {
    const trName = t(`list.categories.${category.name}`)
    res += `*${trName}*\n`
    for (const item of category.items) {
      if (item.selected) {
        const trItem = t(`list.items.${item.id}`)
        res += `- ${trItem}`
      }
    }
  }
  return res
}
