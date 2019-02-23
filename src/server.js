const express = require('express')

class App {
  constructor () {
    this.express = express()
    this.idDev = process.env.NODE_ENV !== 'production'
  }

  middlewares () {}

  routes () {}

  views () {}
}

module.exports = new App().express
