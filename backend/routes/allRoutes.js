const express = require("express")
const app = express()
const { body, validationResult } = require('express-validator')

let users = require('../users.json')

// *********** Routes Get ***********

app.get('/', (req,res) => {
    res.send(users)
})

app.get('/:slug', (req,res) => {

    const {slug} = req.params

    const getUsers = (users.find(e => e.slug === slug))

    if(getUsers){
        res.send(getUsers)
    }
    else{
        res.status(404).send('Not Found')
    }
})

// *********** Routes Post ***********

app.post('/',
body('name').isLength({min : 4 }),
body('password').isLength({ min : 8 }),
body('city').optional().isIn(["Paris", "Tokyo","Los Angeles"]).withMessage("Please choose Paris, Tokyo or Los Angeles"),
(req,res) => {

    const newuser = {
        ...req.body
    }
    users = [...users, newuser]
    res.status(200).send("Added successfull").send(users)
})

module.exports = app;   