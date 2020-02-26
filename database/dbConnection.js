const Sequelize = require('sequelize')

/* Establish database connection */
let sequelize = new Sequelize('foodbuddy_db', 'postgres', 'Lubieplacki1337', {
    host: 'localhost',
    dialect: 'postgres'
})

/* Create database tables if they don't exist */
sequelize.sync()

module.exports = sequelize