<script setup lang="ts">
import type { AnyExtension, JSONContent } from '@tiptap/core'
import type { ICSSFilter, IWhiteList } from 'xss'
import { generateHTML } from '@tiptap/html'
import { computed, unref } from 'vue'
import { useTheme } from 'vuetify'
import Xss, { friendlyAttrValue, safeAttrValue } from 'xss'

import xssRules from '@/constants/xss-rules'
import { useContext, useMarkdownTheme } from '@/hooks'
import { isBoolean, isString } from '@/utils/utils'

interface Props {
  value?: string | JSONContent
  dark?: boolean
  dense?: boolean
  markdownTheme?: string | false
  xssOptions?: IWhiteList
  /**
   * Allowed iframe `src` values: a string matches as a URL prefix ending at a `/`, `?` or `#` boundary
   * (so `https://youtube.com` does not admit `https://youtube.com.evil.com`), a RegExp is tested against the src.
   * Iframes whose src does not match are rendered without src. Not set means no restriction.
   *
   * Rules are matched against the src that will be loaded, i.e. after YouTube/Vimeo links are converted
   * to their embed form: whitelist `https://www.youtube.com/embed/` and `https://player.vimeo.com/video/`,
   * not `https://youtu.be/` or `https://vimeo.com/`.
   */
  iframeSrcWhitelist?: Array<string | RegExp>
  extensions?: AnyExtension[]
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  dark: undefined,
  dense: false,
  markdownTheme: undefined,
  xssOptions: () => xssRules,
  iframeSrcWhitelist: undefined,
  extensions: () => []
})

const { state } = useContext()
const theme = useTheme()
const { markdownThemeStyle } = useMarkdownTheme(computed(() => props.markdownTheme))

const ext = computed<AnyExtension[]>(() => [...state.extensions, ...props.extensions])

const isDark = computed<boolean>(() => {
  if (isBoolean(props.dark)) return props.dark
  if (isBoolean(theme.current.value.dark)) return theme.current.value.dark
  return false
})

const viewerClass = computed(() => ({
  __dark: unref(isDark),
  dense: props.dense,
  view: true,
  ...unref(markdownThemeStyle)
}))

const htmlValue = computed<string>(() => {
  if (isString(props.value)) return props.value
  return generateHTML(props.value, unref(ext))
})

function toEmbedUrl(src: string): string {
  return src
    .replace('https://youtu.be/', 'https://www.youtube.com/watch?v=')
    .replace('watch?v=', 'embed/')
    .replace('https://vimeo.com/', 'https://player.vimeo.com/video/')
}

// normalize scheme/host case and default ports, so `https://YouTube.com:443/x` matches `https://youtube.com`
function normalizeUrl(url: string): string {
  try {
    return new URL(url).href
  } catch {
    return url
  }
}

function matchesPrefix(src: string, prefix: string): boolean {
  if (!src.startsWith(prefix)) return false
  // the prefix must end on a URL boundary, otherwise `https://a.com` would admit `https://a.com.evil.com`
  return /[/?#]$/.test(prefix) || src.length === prefix.length || '/?#'.includes(src[prefix.length])
}

const iframeSrcMatchers = computed<Array<(src: string) => boolean> | undefined>(() =>
  props.iframeSrcWhitelist?.map(rule => {
    if (isString(rule)) {
      const prefix = normalizeUrl(rule)
      return (src: string) => matchesPrefix(normalizeUrl(src), prefix)
    }
    // drop stateful flags so `test` gives the same result for every iframe
    const re = new RegExp(rule.source, rule.flags.replace(/[gy]/g, ''))
    return (src: string) => re.test(src)
  })
)

function isAllowedIframeSrc(src: string): boolean {
  const matchers = unref(iframeSrcMatchers)
  if (!matchers) return true

  return matchers.some(match => match(src))
}

const cleanValue = computed(() => {
  const whiteList = props.xssOptions

  return Xss(unref(htmlValue), {
    whiteList,
    css: false,
    onTagAttr(tag, name, attrValue, isWhiteAttr) {
      if (tag !== 'iframe' || name !== 'src' || !isWhiteAttr) return

      // cssFilter is only used for `style`, so it is not needed for `src`
      const src = safeAttrValue(tag, name, toEmbedUrl(attrValue), undefined as unknown as ICSSFilter)
      return src && isAllowedIframeSrc(friendlyAttrValue(src)) ? `src="${src}"` : ''
    }
  })
})
</script>

<template>
  <div class="vuetify-pro-tiptap-editor__content" :class="viewerClass" :style="{ width: '100%' }">
    <slot name="before"></slot>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="content" v-html="cleanValue"></div>

    <slot name="after"></slot>
  </div>
</template>
