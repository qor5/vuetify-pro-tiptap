<script setup lang="ts">
import type { AnyExtension, JSONContent } from '@tiptap/core'
import type { IWhiteList } from 'xss'
import { generateHTML } from '@tiptap/html'
import { computed, unref } from 'vue'
import { useTheme } from 'vuetify'
import Xss, { friendlyAttrValue } from 'xss'

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

function matchesPrefix(src: string, prefix: string): boolean {
  if (!src.startsWith(prefix)) return false
  // the prefix must end on a URL boundary, otherwise `https://a.com` would admit `https://a.com.evil.com`
  return /[/?#]$/.test(prefix) || src.length === prefix.length || '/?#'.includes(src[prefix.length])
}

function isAllowedIframeSrc(src: string): boolean {
  const whitelist = props.iframeSrcWhitelist
  if (!whitelist) return true

  return whitelist.some(rule => {
    if (isString(rule)) return matchesPrefix(src, rule)
    // drop stateful flags so `test` gives the same result for every iframe
    return new RegExp(rule.source, rule.flags.replace(/[gy]/g, '')).test(src)
  })
}

const cleanValue = computed(() => {
  const value = unref(htmlValue)
    .replaceAll('https://youtu.be/', 'https://www.youtube.com/watch?v=')
    .replaceAll('watch?v=', 'embed/')
    .replaceAll('https://vimeo.com/', 'https://player.vimeo.com/video/')

  const whiteList = props.xssOptions

  return Xss(value, {
    whiteList,
    css: false,
    onTagAttr(tag, name, attrValue) {
      if (tag === 'iframe' && name === 'src' && !isAllowedIframeSrc(friendlyAttrValue(attrValue))) {
        return ''
      }
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
