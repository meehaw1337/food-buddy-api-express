const router = require('express').Router()
const Models = require('../models/models')

const { Recipe, Ingredient, Product, Category } = Models

router.get('/', (req, res) => {
    Recipe.findAll().then(result => res.send(result))
})

router.get('/:recipe_id/ingredients/', (req, res) => {
    Ingredient.findAll({
        where: {
            recipeId: req.params.recipe_id
        },
        include: {
            model: Product,
            include: [Category]
        }
    }).then(result => res.send(result))
})

module.exports = router