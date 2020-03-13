const router = require('express').Router({ mergeParams: true })
const { QueryTypes } = require('sequelize')
const sequelize = require('../database/dbConnection')
const Models = require('../models/models')

const { UserFavouriteRecipe, Recipe } = Models

router.get('/favourite/', (req, res) => {
    UserFavouriteRecipe.findAll({
        where: {
            userId: req.params.id
        },
        include: [Recipe]
    }).then(result => res.send(result))
})

router.get('/available/', (req, res) => {
    if (validateUserId(req, res)) {
        getAvailableRecipes(req.params.id)
            .then(result => res.send(result))
    }
})

router.post('/favourite/', (req, res) => {
    const recipeId = req.query.recipeId

    if (recipeId == undefined) {
        res.status(400).send('Required parameter: recipeId missing')
    } else {
        UserFavouriteRecipe.create({
            recipeId: recipeId,
            userId: req.params.id
        })
            .then(result => res.send(result))
            .catch(error => res.send({ error: error }))
    }
})

router.delete('/favourite/', (req, res) => {
    const recipeId = req.query.recipeId

    if (recipeId == undefined) {
        res.status(400).send('Required parameter: recipeId missing')
    } else {
        UserFavouriteRecipe.destroy({
            where: {
                recipeId: recipeId,
                userId: req.params.id
            }
        })
            .then(result => res.sendStatus(204))
            .catch(error => res.send({ error: error }))
    }
})

// Helper function that executes raw SQL query to get recipes currently available to make by the user
const getAvailableRecipes = (user_id) =>
    sequelize.query(
        "SELECT * FROM recipes r " +
        "WHERE( " +
        "SELECT COUNT(*) FROM recipes " +
        "JOIN ingredients " +
        "ON recipes.id = ingredients.recipe_id " +
        "LEFT JOIN user_products " +
        "ON ingredients.product_id = user_products.product_id " +
        "WHERE (user_products.id IS NULL OR user_products.quantity < ingredients.quantity) " +
        "AND user_products.user_id = " + user_id + " " +
        "AND recipes.id = r.id " +
        ") = 0 ",
        {
            type: QueryTypes.SELECT,
            model: Recipe,
            mapToModel: true
        })

const validateUserId = (req, res) => {
    if (isNaN(req.params.id)) {
        res.status(400).send({ message: 'Invalid user ID' })
        return false
    }

    return true
}

module.exports = router