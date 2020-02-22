const Sequelize = require('sequelize')

module.exports = (sequelize) => sequelize.define('category', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(30),
        allowNull: false
    }
}, {
    timestamps: false,
    underscored: true
});