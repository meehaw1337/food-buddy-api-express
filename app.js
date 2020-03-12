const express = require('express')
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users')
const productsRouter = require('./routes/products')
const categoriesRouter = require('./routes/categories')
const recipesRouter = require('./routes/recipes')

/* Create app instance */
const app = express()
const PORT = 3000
app.use(bodyParser.json())

/* Apply a router for each route */
app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/categories', categoriesRouter)
app.use('/recipes', recipesRouter)

app.listen(PORT, () => {
    console.log(new Date().toLocaleString() + ' App listening on port ' + PORT + ', press CTRL+C to terminate')
})

