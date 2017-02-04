'use strict'
const pug = require('pug')

module.exports = ()=> ({
  source: ['.pug', '.jade'],
  target: ['.html'],
  via: [
    (input)=> pug.render(input),
    function(result) {
      this.output.mimeType = 'text/html'
      return result
    }
  ]
})
