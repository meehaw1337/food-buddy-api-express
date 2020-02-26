const router = require('express').Router()
const Models = require('../models/models')

const { UserProduct, Product, Category } = Models

router.get('/:id/products', (req, res) => {
    console.log(new Date().toLocaleString() + '  Request received: GET at user/' + req.params.id + '/products')

    UserProduct.findAll({
        where: {
            user_id: req.params.id
        }, include: {
            model: Product,
            include: [Category]
        }
    }).then(products => res.send(products))
        .catch(error => res.status(400).send(error))
})

router.put('/:id/products/:user_product_id', (req, res) => {
    console.log(new Date().toLocaleString() + '  Request received: GET at user/' + req.params.id + '/products/' + req.params.user_product_id)

    let updatedQuantity = req.query.updatedQuantity

    /* TODO: make sure that this user_product_id belongs to the user */

    if (updatedQuantity === undefined) {
        res.status(400).send('Missing required parameter: updatedQuantity')
    } else {
        if (updatedQuantity > 0) {
            UserProduct.update({ quantity: updatedQuantity }, {
                where: {
                    id: req.params.user_product_id
                }
            }).then(() => res.status(200).send())
        } else {
            UserProduct.destroy({
                where: {
                    id: req.params.user_product_id
                }
            }).then(() => res.status(200).send())
                .catch(error => res.status(400).send(error))
        }
    }
})

module.exports = router;