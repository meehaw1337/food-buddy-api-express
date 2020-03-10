const router = require('express').Router()
const Models = require('../models/models')

const { Category, Product } = Models

router.get('/:category/', (req, res) => {
    Product.findAll({
        include: [{
            model: Category,
            where: {
                // TODO make this query case insensitive
                name: req.params.category
            }
        }]
    }).then(result => {
        res.send(result)
    }).catch(err => {
        res.send({ error: err })
    })
})

router.get('/', (req, res) => {
    Product.findAll().then(result => {
        res.send(result)
    }).catch(err => {
        res.send({ error: err })
    })
})

module.exports = router