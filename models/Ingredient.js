const Sequelize = require('sequelize')
const sequelize = require('../database/dbConnection')

module.exports = sequelize.define('ingredient', {
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
    }
}, {
    timestamps: false,
    underscored: true
});
