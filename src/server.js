const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

class App {
  constructor () {
    this.express = express()
    this.idDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.routes()
    this.views()
  }

  middlewares () {
    this.express.use(express.urlencoded({ extended: false }))
  }

  routes () {
    this.express.use(require('./routes'))
  }

  views () {
    nunjucks.configure(
      path.resolve(__dirname, 'app', 'resources', 'views', {
        autoscape: true,
        express: this.express(),
        watch: this.isDev
      })
    )

    this.express.use(express.static(path.resolve(__dirname, 'public')))
    this.express.set('view engine', 'njk')
  }
}

module.exports = new App().express
