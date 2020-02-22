const Sequelize = require('sequelize')

module.exports = (sequelize) => sequelize.define('recipe', {
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
    }
}, {
    timestamps: false,
    underscored: true
});
