const express = require('express')
const router = express.Router()
const path = require('path')

/*
    Regex works in express!
      ^ -> only at the start
      $ -> only at the end
      User could look for index or also index.html
*/

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = router