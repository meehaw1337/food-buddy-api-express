import { Pool } from 'pg';
import express from 'express';

const db = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'foodbuddy_db',
    user: 'postgres',
    password: 'Lubieplacki1337'
})

const app = express()
const PORT = 3000;

// TODO use sequelize for db models

app.get('/hello', (req, res) => {
    db.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error
        } else {
            res.send(results.rows)
        }
    })
})

app.listen(PORT, () => {
    console.log('App listening on port ' + PORT + ', press CTRL+C to terminate')
})

