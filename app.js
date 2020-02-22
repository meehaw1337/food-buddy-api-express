const express = require('express')
const Sequelize = require('sequelize')
const Models = require('./models/models')
const UsersRouter = require('./routes/users')

/* Establish database connection */
/* TODO: Export sequelize object to a separate file, then other files will be able to import it */
const sequelize = new Sequelize('foodbuddy_db', 'postgres', 'Lubieplacki1337', {
    host: 'localhost',
    dialect: 'postgres'
})

/* Acquire data models */
const { Category, Product, User, UserProduct, Ingredient, Recipe } = Models(sequelize)

/* Create database tables if they don't exist */
sequelize.sync()

/* Create app instance */
const app = express()
const PORT = 3000

app.use('/user', UsersRouter(sequelize))


app.listen(PORT, () => {
    console.log('App listening on port ' + PORT + ', press CTRL+C to terminate')
})

