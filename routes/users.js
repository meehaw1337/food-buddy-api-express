const router = require('express').Router()
const Models = require('../models/models')

module.exports = function(sequelize) {
    const { UserProduct, Product } = Models(sequelize)

    router.get('/:id/products', (req, res) => {
        console.log(new Date().toLocaleString() + '  Request received: GET at user/' + req.params.id + '/products')

        UserProduct.findAll({
            where: {
                user_id: req.params.id
            }, include: [Product]
        }).then(products => res.send(products))
        .catch(error => res.status(400).send(error))
    })

    return router;
}