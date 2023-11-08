/**
 * An example to show how node-progress handles user-specified widths
 * which exceed the number of columns in the terminal
 */

const { ProgressBar } = require('../lib')

// simulated download, passing the chunk lengths to tick()

const bar = new ProgressBar({
  schema: ' downloading [:bar] :percent :etas',
  completed: '=',
  blank: ' ',
  width: 1024 /* something longer than the terminal width */,
  total: 100,
})

function next() {
  bar.tick(1)

  if (!bar.completed) {
    setTimeout(next, 10)
  }
}

next()
