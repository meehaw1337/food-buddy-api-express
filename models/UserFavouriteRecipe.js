const Sequelize = require('sequelize')
const sequelize = require('../database/dbConnection')

module.exports = sequelize.define('user_favourite_recipes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: Sequelize.INTEGER,
        unique: 'user_favourite_recipes_unique_constraint'
    },
    recipeId: {
        type: Sequelize.INTEGER,
        unique: 'user_favourite_recipes_unique_constraint'
    }
}, {
    timestamps: false,
    underscored: true
});