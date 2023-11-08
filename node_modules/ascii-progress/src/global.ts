import newlineEvent from 'on-new-line'
import getCurosrPos from 'get-cursor-position'
import * as util from './util'
import { stream } from './constants'
import { ProgressBar } from './progress-bar'

let rendering = false

export const instances: ProgressBar[] = []

export function beginUpdate() {
  rendering = true
}

export function endUpdate() {
  rendering = false
}

export function isUpdating() {
  return rendering === true
}

newlineEvent(stream)

stream.on('before:newlines', (count: number) => {
  if (isUpdating() || instances.length === 0) {
    return
  }

  const current = getCurosrPos.sync()
  if (!current) {
    return
  }

  // did not reach the end, the screen need not scroll up
  if (current.row < stream.rows) {
    return
  }

  let minRow = 1
  const cursor = instances[0].cursor

  beginUpdate()

  instances.forEach(function (instance) {
    if (instance.rendered && (!instance.completed || instance.tough)) {
      // clear the rendered bar
      instance.clear()
      instance.originPos.row = Math.max(minRow, instance.originPos.row - count)
      minRow += instance.rows
    } else if (
      instance.rendered &&
      instance.completed &&
      !instance.tough &&
      !instance.archived &&
      !instance.clean
    ) {
      instance.clear()
      instance.originPos.row = -instance.rows
      instance.colorize(instance.output)
      instance.archived = true
    }
  })

  // append empty row for the new lines, the screen will scroll up,
  // then we can move the bars to their's new position.
  cursor.moveTo(current.row, current.col).write(util.repeatChar('\n', count))

  instances.forEach((instance) => {
    if (instance.rendered && (!instance.completed || instance.tough)) {
      instance.colorize(instance.output)
    }
  })

  cursor.moveTo(current.row - count, current.col)

  endUpdate()
})
