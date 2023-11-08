const { ProgressBar } = require('../lib')

const bar = new ProgressBar()

const iv = setInterval(function () {
  bar.tick()

  if (bar.completed) {
    clearInterval(iv)
  }
}, 100)
