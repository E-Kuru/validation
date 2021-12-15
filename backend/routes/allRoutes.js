const express = require("express")
const app = express()
const users = require('../users.json')

// *********** Routes Get ***********

app.get('/', (req,res) => {
    res.send(users)
})

app.get('/:slug', (req,res) => {
    res.send(users)
})

// *********** Routes Post ***********

app.post('/', (req,res) => {

})
// *********** Routes Get ***********

module.exports = app;   