const Sequelize = require('sequelize')
const sequelize = require('../database/dbConnection')

module.exports = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING(100)
    }
}, {
    timestamps: false,
    underscored: true
});

