const Product = require('./Product')
const Category = require('./Category')
const User = require('./User')
const UserProduct = require('./UserProduct')
const Ingredient = require('./Ingredient')
const Recipe = require('./Recipe')

/* Create associations between models */
Product.belongsTo(Category)
Category.hasMany(Product)

User.hasMany(UserProduct)
UserProduct.belongsTo(User)
UserProduct.belongsTo(Product)

Recipe.hasMany(Ingredient)
Ingredient.belongsTo(Recipe)
Ingredient.belongsTo(Product)


module.exports = { Product, Category, User, UserProduct, Ingredient, Recipe }