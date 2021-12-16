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
body('name').isLength({min : 4 }).withMessage('Enter a valid name please'),
body('password').isLength({ min : 8 }).withMessage('Enter a valid password please'),
body('email').isEmail().withMessage('Enter a valid email please'),
body('city').optional().isIn(["Paris", "Tokyo","Los Angeles"]).withMessage("Please choose Paris, Tokyo or Los Angeles"),
body().custom(value => {
    const allowedKeys = ["slug","name", "city", "email", "password"]
    
    // On recupere les clés du body dans un tableau de strings
    const bodyKeys = Object.keys(value)

    // Je cherche une clé dans mon body qui n'est pas dans le tableau allowedKeys
    const invalidKey = bodyKeys.find(key => !allowedKeys.includes(key))

    if (invalidKey) {
      return false
    } else {
      return true
    }
  }).withMessage("Invalid key"),
(req,res) => {

    const { errors } = validationResult(req)

    if (errors.length > 0) {
        res.status(400).send({ errors })
      } else {
        const newuser = {
            ...req.body
        }
        users = [...users, newuser]
        res.status(200).send("Added successfull").send(users)
        }
    })

module.exports = app;   