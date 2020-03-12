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
sequelize.sync({
    force: true
}).then(() =>
    sequelize.query(
        "INSERT INTO categories (name) VALUES ('Meat');" +
        "INSERT INTO categories (name) VALUES ('Vegetables');" +
        "INSERT INTO categories (name) VALUES ('Drinks');" +
        "INSERT INTO categories (name) VALUES ('Sauces');" +
        "INSERT INTO categories (name) VALUES ('Fruits');" +
        "INSERT INTO products (name, category_id, image_url) VALUES ('Chicken wing', 1, 'https://i.imgur.com/9cTMAHX.png');" +
        "INSERT INTO products (name, category_id, image_url) VALUES ('Tomato', 2, 'https://i.imgur.com/w3VZTvD.png');" +
        "INSERT INTO products (name, category_id, image_url) VALUES ('Coca Cola', 3, 'https://i.imgur.com/J5EkU4l.png');" +
        "INSERT INTO products (name, category_id, image_url) VALUES ('Ketchup', 4, 'https://i.imgur.com/xg2ekYS.png');" +
        "INSERT INTO products (name, category_id, image_url) VALUES ('Banana', 5, 'https://i.imgur.com/T5QALgs.png');" +
        "INSERT INTO users (firstname, lastname, email, password) VALUES ('test', 'test', 'test', 'test');" +
        "INSERT INTO user_products (quantity, unit, user_id, product_id) VALUES (3, 'piece', 1, 1);" +
        "INSERT INTO user_products (quantity, unit, user_id, product_id) VALUES (1, 'piece', 1, 2);" +
        "INSERT INTO user_products (quantity, unit, user_id, product_id) VALUES (2, 'bottle', 1, 3);" +
        "INSERT INTO user_products (quantity, unit, user_id, product_id) VALUES (100, 'ml', 1, 4);" +
        "INSERT INTO recipes (name, description, calories, image_url) VALUES ('Spaghetti Bolognese', 'Pasta with minced meat and tomato sauce. Delicious, yet simple to make.', 500, 'https://i.imgur.com/o4v10Mm.jpg');" +
        "INSERT INTO recipes (name, description, calories, image_url) VALUES ('Caesar salad', 'Salad with lettuce, chicken, crispy bread and delicious sauce.', 400, 'https://i.imgur.com/eHKCWRn.jpg');"

    )
)

console.log(new Date().toLocaleString() + ' Database connection established')

module.exports = sequelize