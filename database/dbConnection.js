const Sequelize = require('sequelize')
const dotenv = require('dotenv').config();

/* Establish database connection */
let sequelize = new Sequelize(process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
})

/* Create database tables if they don't exist */
sequelize.sync()

console.log(new Date().toLocaleString() + ' Database connection established')

module.exports = sequelize