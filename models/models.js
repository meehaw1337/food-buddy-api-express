const ProductModel = require('./Product')
const CategoryModel = require('./Category')
const UserModel = require('./User')
const UserProductModel = require('./UserProduct')
const IngredientModel = require('./Ingredient')
const RecipeModel = require('./Recipe')

module.exports = (sequelize) => {
    const Category = CategoryModel(sequelize)
    const Product = ProductModel(sequelize)
    const User = UserModel(sequelize)
    const UserProduct = UserProductModel(sequelize)
    const Ingredient = IngredientModel(sequelize)
    const Recipe = RecipeModel(sequelize)

    /* Create associations between models */
    Product.belongsTo(Category)
    Category.hasMany(Product)

    User.hasMany(UserProduct)
    UserProduct.belongsTo(User)
    UserProduct.belongsTo(Product)

    Recipe.hasMany(Ingredient)
    Ingredient.belongsTo(Recipe)
    Ingredient.belongsTo(Product)


    return { Product, Category, User, UserProduct, Ingredient, Recipe }
}