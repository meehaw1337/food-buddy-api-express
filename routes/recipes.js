const router = require('express').Router()
const Models = require('../models/models')

const { Recipe, Ingredient } = Models

router.get('/', (req, res) => {
    Recipe.findAll()
        .then(result =>
            res.send(result))
})

router.get('/favourite/:id', (req, res) => {
    // TODO implement
    res.send('favourite recipes of user: ' + req.params.id)
})

router.get('/available/:id', (req, res) => {
    res.send('available recipes of user: ' + req.params.id)
})

module.exports = router