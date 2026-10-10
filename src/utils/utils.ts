import type { Editor } from '@tiptap/core'

export function clamp(val: number, min: number, max: number) {
  if (val < min) return min
  if (val > max) return max
  return val
}

export const isNumber = (value: unknown): value is number => typeof value === 'number'

export const isString = (value: unknown): value is string => typeof value === 'string'

export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'

export const isFunction = (value: unknown): value is Function => typeof value === 'function'

export const getCssUnitWithDefault = (value?: string | number, defaultUnit: string = 'px') => {
  if (!value) return value

  const stringValue = isNumber(value) ? String(value) : value

  const num = Number.parseFloat(stringValue)
  const unitMatch = stringValue.match(/[a-zA-Z%]+$/)
  const unit = unitMatch ? unitMatch[0] : defaultUnit

  return Number.isNaN(num) ? value : num + unit
}

/**
 * Checks if the editor has a specific extension method with the given name.
 *
 * @param {Editor} editor - An instance of the editor.
 * @param {string} name - The name of the extension method.
 * @returns {boolean} - Returns true if the specified extension method is present, otherwise returns false.
 */
export function hasExtension(editor: Editor, name: string): boolean {
  // Retrieve the extension manager of the editor, defaulting to an empty array if it doesn't exist
  const { extensions = [] } = editor.extensionManager ?? {}

  // Check if the extension method with the specified name is present in the extension manager
  const find = extensions.find(i => i.name === name)

  // Return false if the extension method with the specified name is not found, otherwise return true
  if (!find) return false
  return true
}

/** Schemes a link in the document may be opened with. */
const SAFE_LINK_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:'])

/**
 * Resolves an href taken from the document into one that is safe to open, or
 * null if it is not.
 *
 * A link mark's href is document content, so whoever authored the document
 * chose it -- not necessarily the person who clicks it. window.open on a
 * javascript: href runs that script, so the scheme has to be checked before
 * navigating.
 *
 * The check parses rather than pattern-matches, because the URL parser strips
 * tab, LF and CR before reading the scheme: "java\tscript:alert(1)" is a
 * javascript: URL to the browser while a prefix test on the raw string sees
 * something else entirely. For the same reason this returns the parsed href,
 * so callers navigate to exactly what was validated.
 */
export function safeLinkHref(href: string): string | null {
  let url: URL
  try {
    url = new URL(href, window.location.href)
  } catch {
    return null
  }

  return SAFE_LINK_PROTOCOLS.has(url.protocol) ? url.href : null
}

export { differenceBy, isEqual, throttle } from 'lodash-unified'
