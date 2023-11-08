const { ProgressBar } = require('../lib')

const bar = new ProgressBar({
  schema:
    ' [:filled.gradient(red,magenta):blank] :current/:total :percent :elapseds :etas',
})

const iv = setInterval(() => {
  bar.tick()

  if (bar.completed) {
    clearInterval(iv)
  }
}, 100)
