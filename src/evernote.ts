export const makeTodo = (item: string): string => {
  return `<div><en-todo checked="false"/>${item}</div>`
}

export const makeHeader = (text: string): string => {
  return `<br/><h2>${text}</h2>`
}

const today = (): string => {
  return new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
}
export const createEvernoteExportFile = (options: {
  title: string
  author: string
  application: string
  content: string
  tags?: Array<string>
}): string => {
  const { title, author, application, content, tags } = options
  const exportDate = today()

  let tagsElement = ""
  if (tags) {
    tagsElement = tags.map((t) => `<tag>${t}</tag>`).join("")
  }

  const xml = `
  <?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE en-export SYSTEM "http://xml.evernote.com/pub/evernote-export3.dtd">
  <en-export export-date="${exportDate}" application="${application}">
      <note>
          <title>${title}</title>
          <content>
              <![CDATA[<?xml version="1.0" encoding="UTF-8" standalone="no"?>
              <!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd">
              <en-note>
                  ${content}
              </en-note>
              ]]>
          </content>
          <created>${exportDate}</created>
          <updated>${exportDate}</updated>
          ${tagsElement}
          <note-attributes>
              <author>${author}</author>
          </note-attributes>
      </note>
  </en-export>`
  return xml.replace(/^ {2}/gm, "").replace(/^$\n/gm, "")
}
