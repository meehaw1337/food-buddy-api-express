const router = require('express').Router({ mergeParams: true })
const userProductsRouter = require('./userProducts')
const userRecipesRouter = require('./userRecipes')
const Models = require('../models/models')

router.use('/:id/products', userProductsRouter)
router.use('/:id/recipes', userRecipesRouter)

module.exports = router