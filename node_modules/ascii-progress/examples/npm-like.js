const { ProgressBar } = require('../lib')

const bar = new ProgressBar({
  schema: '╢:bar╟ :current/:total :percent :elapseds :etas',
  blank: '░',
  filled: '█',
})

const iv = setInterval(() => {
  bar.tick()

  if (bar.completed) {
    clearInterval(iv)
  }
}, 100)
