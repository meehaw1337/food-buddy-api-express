const Sequelize = require('sequelize')
const sequelize = require('../database/dbConnection')

module.exports = sequelize.define('user_product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    unit: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        unique: 'user_products_unique_constraint'
    },
    productId: {
        type: Sequelize.INTEGER,
        unique: 'user_products_unique_constraint'
    }
}, {
    timestamps: false,
    underscored: true
});