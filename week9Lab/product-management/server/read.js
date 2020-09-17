const express = require('express')
const router = express.Router()

module.exports = read = (db) => {
    const productsCollection = db.collection('Products');

    router.get('/products', async (req, res) => {
        productsCollection.find({}).toArray((err, data) => {
            if (err) { return res.sendStatus(500) }
            return res.send(data)
        })
    });

    return router
}