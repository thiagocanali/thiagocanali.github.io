import { watchEffect } from 'vue'

interface SeoOptions {
  title: string
  description?: string
}

export function useSeo({ title, description }: SeoOptions) {
  watchEffect(() => {
    document.title = title

    if (description) {
      let meta = document.querySelector(
        'meta[name="description"]'
      ) as HTMLMetaElement | null

      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }

      meta.content = description
    }
  })
}
