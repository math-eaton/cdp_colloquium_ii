const { ProgressBar } = require('../lib')

const bar = new ProgressBar({
  schema: ' Progress [:bar] :percent :etas',
})

let i = 0
const steps = [0.1, 0.25, 0.6, 0.8, 0.4, 0.5, 0.6, 0.2, 0.8, 1.0]

function next() {
  if (i < steps.length) {
    bar.update(steps[i])
    i += 1
    setTimeout(next, 500)
  }
}

next()
