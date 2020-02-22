const Sequelize = require('sequelize')

module.exports = (sequelize) => sequelize.define('ingredient', {
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
