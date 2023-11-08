import ansi, { Cursor } from 'ansi.js'
import getCurosrPos from 'get-cursor-position'
import { placeholder, stream } from './constants'
import { beginUpdate, endUpdate, instances } from './global'
import { CursorPosition } from './types'
import * as util from './util'

export interface Options {
  total?: number
  current?: number
  width?: string | number
  fixedWidth?: boolean
  tough?: boolean
  clean?: boolean
  schema?: string
  filled?: string
  blank?: string
  callback?: (progressBar: ProgressBar) => void
}

export class ProgressBar {
  public readonly cursor: Cursor
  public readonly total: number
  public readonly width: number
  public readonly fixedWidth: boolean
  public readonly clean: boolean
  public readonly blankChar: string
  public readonly fillChar: string
  public readonly tough: boolean
  public readonly callback: (progressBar: ProgressBar) => void

  raw: string
  output: string
  schema: string
  current: number
  completed: boolean

  rows: number
  savedPos: CursorPosition
  originPos: CursorPosition
  rendered: boolean
  archived: boolean

  private start: number

  constructor(options: Options = {}) {
    this.cursor = ansi(stream)
    this.total = options.total || 100
    this.current = options.current || 0

    const width = options.width || 60

    if (typeof width === 'string') {
      if (width.endsWith('%')) {
        this.width = Math.round(parseFloat(width) / 100)
      } else {
        this.width = parseFloat(width)
      }
    } else {
      this.width = width
    }

    this.fixedWidth = options.fixedWidth === true
    this.tough = options.tough === true
    this.clean = options.clean === true
    this.blankChar = options.blank || '—'
    this.fillChar = options.filled || '▇'

    if (options.callback) {
      this.callback = options.callback
    }

    this.setSchema(options.schema)
    this.snoop()

    instances.push(this)
  }

  setSchema(schema?: string, refresh?: boolean) {
    this.schema = schema || ' [:bar] :current/:total :percent :elapseds :etas'
    if (refresh) {
      this.compile(refresh)
    }
  }

  tick(): this
  tick(delta: number): this
  tick(tokens: Record<string, any>): this
  tick(delta: number, tokens?: Record<string, any>): this
  tick(
    delta?: number | Record<string, any>,
    tokens?: Record<string, any>,
  ): this {
    if (typeof delta === 'object') {
      // eslint-disable-next-line no-param-reassign
      tokens = delta
      // eslint-disable-next-line no-param-reassign
      delta = 1
    } else if (typeof delta === 'undefined') {
      // eslint-disable-next-line no-param-reassign
      delta = 1
    } else {
      // eslint-disable-next-line no-param-reassign
      delta = parseFloat(delta as any)
      if (Number.isNaN(delta) || !Number.isFinite(delta)) {
        // eslint-disable-next-line no-param-reassign
        delta = 1
      }
    }

    if (this.completed && delta >= 0) {
      return this
    }

    if (!this.start) {
      this.start = +new Date()
    }

    this.current += delta
    this.compile(tokens)
    this.snoop()
    return this
  }

  update(ratio: number, tokens?: object): this {
    const completed = Math.floor(ratio * this.total)
    const delta = completed - this.current
    return this.tick(delta, tokens)
  }

  clear(): this {
    if (this.output) {
      this.cursor.moveTo(this.originPos.row, this.originPos.col)
      for (let i = 0; i < this.rows; i++) {
        this.cursor.eraseLine().moveDown()
      }
      this.cursor.moveTo(this.originPos.row, this.originPos.col)
    }
    return this
  }

  protected compile(tokens?: boolean | Record<string, any>) {
    let ratio = this.current / this.total

    ratio = Math.min(Math.max(ratio, 0), 1)

    const schema = this.schema
    const percent = ratio * 100
    const elapsed = +new Date() - this.start

    const eta =
      this.current <= 0
        ? '-'
        : util.formatTime(
            percent === 100 ? 0 : (elapsed * this.total) / this.current,
          )

    let output = schema
      .replace(/:total/g, `${this.total}`)
      .replace(/:current/g, `${this.current}`)
      .replace(/:elapsed/g, util.formatTime(elapsed))
      .replace(/:eta/g, eta)
      .replace(/:percent/g, `${util.toFixed(percent, 0)}%`)

    if (tokens && typeof tokens === 'object') {
      Object.keys(tokens).forEach((key) => {
        output = output.replace(
          new RegExp(`:${key}`, 'g'),
          `${tokens[key]}` || placeholder,
        )
      })
    }

    let raw = util.bleach(output)
    const cols = process.stdout.columns
    let width = this.width
    width = width < 1 ? cols * width : width
    if (!this.fixedWidth) {
      width = Math.min(width, Math.max(0, cols - util.bareLength(raw)))
    }

    const length = Math.round(width * ratio)
    const filled = util.repeatChar(this.fillChar, length)
    const blank = util.repeatChar(this.blankChar, width - length)

    raw = util.combine(raw, filled, blank, true)
    output = util.combine(output, filled, blank, false)

    // without color and font styles
    this.raw = raw
    // row count of the progress bar
    this.rows = raw.split('\n').length

    this.render(output)
  }

  protected render(output: string) {
    if (this.output === output) {
      return
    }

    const current = getCurosrPos.sync()
    if (!current) {
      return
    }

    beginUpdate()

    this.savedPos = current
    if (!this.originPos) {
      this.originPos = current
    }

    if (this.originPos.row === stream.rows) {
      this.cursor.write(util.repeatChar('\n', this.rows))
      instances.forEach((instance) => {
        if (instance.originPos) {
          instance.originPos.row -= this.rows
        }
      })
    }

    this.clear()
    this.colorize(output)

    // move the cursor to the current position.
    if (this.rendered) {
      this.cursor.moveTo(current.row, current.col)
    }

    this.output = output
    this.rendered = true

    endUpdate()
  }

  colorize(output: string) {
    const cursor = this.cursor
    const parts = output.split(/(\.[A-Za-z]+)/g)

    let charsLeft = process.stdout.columns - 1
    let content = ''
    let matches: (util.GradientMethod | util.BgMethod | util.FontMethod)[] = []

    cursor.moveTo(this.originPos.row, this.originPos.col)

    const write = () => {
      let hasFg = false
      let hasBg = false
      let gradient: util.GradientMethod | undefined

      matches.forEach((match) => {
        if (match.method === 'gradient') {
          gradient = match as util.GradientMethod
          return
        }

        const host: any = (match as util.BgMethod).isBg
          ? cursor.background
          : (match as util.FontMethod).isFont
          ? cursor.font
          : cursor.foreground

        if ((match as util.BgMethod).isBg) {
          hasBg = true
        } else {
          hasFg = true
        }

        host[match.method]()
      })

      content = content.replace(new RegExp(placeholder, 'g'), '')

      if (content) {
        if (gradient) {
          const color1 = gradient.color1
          const color2 = gradient.color2

          for (let i = 0, l = content.length; i < l; i++) {
            const color =
              i === 0
                ? color1
                : i === l - 1
                ? color2
                : util.interpolate(color1, color2, (i + 1) / l)

            cursor.foreground.rgb(color.r, color.g, color.b)
            writeChars(content[i])
            cursor.foreground.reset()
          }
        } else {
          writeChars(content)
        }
      }

      // reset font style
      matches.forEach((match) => {
        if ((match as util.FontMethod).isFont) {
          const method = `reset${util.ucFirst(match.method)}`
          const font = cursor.font as any
          font[method]()
        }
      })

      if (hasFg) {
        // reset foreground
        cursor.foreground.reset()
      }

      if (hasBg) {
        // reset background
        cursor.background.reset()
      }

      matches = []
      content = ''
    }

    const writeChars = (chars: string) => {
      if (!charsLeft) {
        return
      }

      cursor.write(chars.slice(0, charsLeft))
      charsLeft = Math.max(0, charsLeft - chars.length)
    }

    for (let i = 0, l = parts.length; i < l; i++) {
      const part = parts[i]
      let match:
        | util.GradientMethod
        | util.BgMethod
        | util.FontMethod
        | undefined

      if (!part) {
        continue
      }

      if (part.startsWith('.')) {
        if (part === '.gradient') {
          if (parts[i + 1]) {
            match = util.parseGradient(parts[i + 1])
            parts[i + 1] = parts[i + 1].replace(/^\((.+),(.+)\)/, '')
          }
        } else {
          match = util.parseMethod(cursor, part)
        }
      }

      if (match) {
        const suffix = (match as util.BgMethod).suffix
        if (suffix) {
          if (i < l - 1) {
            parts[i + 1] += suffix
          } else {
            // the last one
            writeChars(suffix)
          }
        }

        matches.push(match)
      } else {
        if (matches.length) {
          write()
        }

        content += part
      }
    }

    write()

    cursor.write('\n')
  }

  protected snoop() {
    this.completed = this.current >= this.total
    if (this.completed) {
      this.terminate()
    }
    return this.completed
  }

  protected terminate() {
    if (this.clean && this.rendered) {
      this.clear()
    }

    if (this.callback) {
      this.callback(this)
    }

    if (this.savedPos) {
      this.cursor.moveTo(this.savedPos.row, this.savedPos.col)
    }
  }
}
