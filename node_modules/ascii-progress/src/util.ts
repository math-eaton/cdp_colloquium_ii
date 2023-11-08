import { Cursor } from 'ansi.js'
import { placeholder } from './constants'
import { RGB } from './types'

export function toFixed(value: number, precision: number) {
  const power = 10 ** precision
  return (Math.round(value * power) / power).toFixed(precision)
}

export function formatTime(ms: number) {
  return Number.isNaN(ms) || !Number.isFinite(ms)
    ? '0.0'
    : toFixed(ms / 1000, 1)
}

function lcFirst(str: string) {
  return str.charAt(0).toLowerCase() + str.substring(1)
}

export function ucFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.substring(1)
}

export function repeatChar(char: string, count: number) {
  return new Array(count + 1).join(char)
}

export function parseMethod(cursor: Cursor, str: string) {
  const input = str.substring(1)
  return (
    parseColor(cursor, input) ||
    parseFont(cursor, input) ||
    parseGradient(input)
  )
}

export type BgMethod = { isBg: boolean; method: string; suffix: string }
export type FontMethod = { isFont: boolean; method: string; suffix: string }
export type GradientMethod = { method: 'gradient'; color1: RGB; color2: RGB }

function parseColor(cursor: Cursor, str: string): BgMethod | undefined {
  const match =
    str.match(/^(bgR|r)ed/) ||
    str.match(/^(bgB|b)lue/) ||
    str.match(/^(bgC|c)yan/) ||
    str.match(/^(bgG|g)rey/) ||
    str.match(/^(bgW|w)hite/) ||
    str.match(/^(bgB|b)lack/) ||
    str.match(/^(bgG|g)reen/) ||
    str.match(/^(bgY|y)ellow/) ||
    str.match(/^(bgM|m)agenta/) ||
    str.match(/^(bgB|b)right(Black|Red|Green|Yellow|Blue|Magenta|Cyan|White)/)

  if (match) {
    let method = match[0]
    const suffix = str.substring(method.length)
    const isBg = method.startsWith('bg')

    if (isBg) {
      method = lcFirst(method.substring(2))
    }

    if (typeof cursor[method as keyof Cursor] === 'function') {
      return {
        isBg,
        method,
        suffix,
      }
    }
  }
}

function parseFont(cursor: Cursor, str: string): FontMethod | undefined {
  const match = str.match(/^bold|italic|underline|inverse/)
  if (match) {
    const method = match[0]
    const suffix = str.substring(method.length)
    if (typeof cursor[method as keyof Cursor] === 'function') {
      return {
        isFont: true,
        method,
        suffix,
      }
    }
  }
}

export function parseGradient(str: string): GradientMethod | undefined {
  const match = str.match(/^\((.+),(.+)\)/)
  if (match) {
    const m1 = match[1].trim()
    const m2 = match[2].trim()

    const color1 = m1.startsWith('#') ? hex2rgb(m1) : name2rgb(m1)
    const color2 = m2.startsWith('#') ? hex2rgb(m2) : name2rgb(m2)

    if (color1 && color2) {
      return {
        method: 'gradient',
        color1,
        color2,
      }
    }
  }
}

export function interpolate(color1: RGB, color2: RGB, percent: number) {
  return {
    r: atPercent(color1.r, color2.r, percent),
    g: atPercent(color1.g, color2.g, percent),
    b: atPercent(color1.b, color2.b, percent),
  }
}

function atPercent(a: number, b: number, percent: number) {
  return a + Math.round((b - a) * percent)
}

function hex2rgb(color: string): RGB {
  const c = color.substring(1)
  const r = c.substring(0, 2)
  const g = c.substring(2, 4)
  const b = c.substring(4, 6)

  return {
    r: parseInt(r, 16),
    g: parseInt(g, 16),
    b: parseInt(b, 16),
  }
}

function name2rgb(name: string) {
  const hex = {
    red: '#ff0000',
    blue: '#0000ff',
    cyan: '#00ffff',
    grey: '#808080',
    white: '#ffffff',
    black: '#000000',
    green: '#008000',
    yellow: '#ffff00',
    magenta: '#ff00ff',
  }[name]

  return hex ? hex2rgb(hex) : null
}

export function bleach(output: string) {
  return (
    output
      .replace(/\.(bgR|r)ed/g, '')
      .replace(/\.(bgB|b)lue/g, '')
      .replace(/\.(bgC|c)yan/g, '')
      .replace(/\.(bgG|g)rey/g, '')
      .replace(/\.(bgW|w)hite/g, '')
      .replace(/\.(bgB|b)lack/g, '')
      .replace(/\.(bgG|g)reen/g, '')
      .replace(/\.(bgY|y)ellow/g, '')
      .replace(/\.(bgM|m)agenta/g, '')
      // bright
      .replace(
        /\.(bgB|b)right(Black|Red|Green|Yellow|Blue|Magenta|Cyan|White)/g,
        '',
      )
      // font style
      .replace(/\.bold|italic|underline|inverse/g, '')
      // gradient
      .replace(/\.gradient\((.+),(.+)\)/g, '')
  )
}

export function combine(
  output: string,
  filled: string,
  blank: string,
  bare: boolean,
) {
  let bar = filled + blank
  if (!bare) {
    bar = bar || placeholder
    // eslint-disable-next-line no-param-reassign
    blank = blank || placeholder
    // eslint-disable-next-line no-param-reassign
    filled = filled || placeholder
  }

  return output
    .replace(/:filled/g, filled)
    .replace(/:blank/g, blank)
    .replace(/:bar/g, bar)
}

export function bareLength(output: string) {
  const str = output
    .replace(/:filled/g, '')
    .replace(/:blank/g, '')
    .replace(/:bar/g, '')

  return str.length
}
