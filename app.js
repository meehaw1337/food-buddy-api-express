const express = require('express')
const bodyParser = require('body-parser');
const UsersRouter = require('./routes/users')

/* Create app instance */
const app = express()
const PORT = 3000
app.use(bodyParser.json())

app.use('/user', UsersRouter)

app.listen(PORT, () => {
    console.log('App listening on port ' + PORT + ', press CTRL+C to terminate')
})

