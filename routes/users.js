const router = require('express').Router()
const Models = require('../models/models')

const { UserProduct, Product, Category } = Models

/* Get products owned by the user */
router.get('/:id/products/', (req, res) => {
    console.log(new Date().toLocaleString() + '  Request received: GET at user/' + req.params.id + '/products')

    UserProduct.findAll({
        where: {
            user_id: req.params.id
        }, include: {
            model: Product,
            include: [Category]
        }
    }).then(products => {
        res.send(products)
    }).catch(error => {
        res.status(400).send(error)
    })
})

/* Insert a new user's product */
router.post('/:id/products/', (req, res) => {
    console.log(new Date().toLocaleString() + '  Request received: POST at user/' + req.params.id + '/products')
    console.log(req.body)

    /* TODO: use a unique constraint on product_id 
    in user_products table (if it's possible with sequelize) */
    UserProduct.findAll({
        where: {
            product_id: req.body.productId,
            user_id: req.body.userId
        }
    }).then(result => {
        if (result.length === 0) {
            UserProduct.create(req.body)
                .then(result => res.send(result))
                .catch(error => res.status(400).send({ error: error }))
        } else {
            res.status(400).send({ error: 'This user already owns this product' })
        }
    }).catch(() => res.status(400).send({ error: 'Body of the request is invalid' }))
})

/* Update user's product quantity */
router.put('/:id/products/:user_product_id', (req, res) => {
    console.log(new Date().toLocaleString() + '  Request received: PUT at user/' + req.params.id + '/products/' + req.params.user_product_id)

    let updatedQuantity = req.query.updatedQuantity

    if (updatedQuantity === undefined) {
        res.status(400).send('Missing required parameter: updatedQuantity')
    } else {
        if (updatedQuantity > 0) {
            UserProduct.update({ quantity: updatedQuantity }, {
                where: {
                    id: req.params.user_product_id,
                    user_id: req.params.id
                }
            }).then(result => handleInsertResult(result, res))
        } else {
            UserProduct.destroy({
                where: {
                    id: req.params.user_product_id,
                    user_id: req.params.id
                }
            }).then(result => handleInsertResult(result, res))
                .catch(error => res.status(400).send({ error: error }))
        }
    }
})

const handleInsertResult = (result, response) => {
    if (result == 0) {
        response.status(404).send()
    } else {
        response.status(200)
    }

    response.send()
}

module.exports = router