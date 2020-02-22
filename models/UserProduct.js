const Sequelize = require('sequelize')

module.exports = (sequelize) => sequelize.define('user_product', {
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