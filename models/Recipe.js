const Sequelize = require('sequelize')
const sequelize = require('../database/dbConnection')

module.exports = sequelize.define('recipe', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(1000),
        allowNull: false
    },
    calories: {
        type: Sequelize.INTEGER
    },
    imageUrl: {
        type: Sequelize.STRING(100)
    }
}, {
    timestamps: false,
    underscored: true
});
