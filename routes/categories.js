const router = require('express').Router()
const Models = require('../models/models')

const { Category } = Models

router.get('/', (req, res) => {
    Category.findAll().then(result => {
        res.send(result)
    }).catch(err => {
        res.send({ error: err })
    })
})

module.exports = router