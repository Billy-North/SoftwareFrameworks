const express = require('express')
const router = express.Router()


module.exports = add = (db, ObjectID) => {
    const productsCollection = db.collection('Products');

    router.delete('/product/:id', (req, res) => {
        if (!req.params.id) { return res.sendStatus(400) }
        productsCollection.deleteOne({ "_id": ObjectID(req.params.id) }, (err) => {
            if (err) { return res.status(500) }
            return res.status(200).json({ status: "ok" })
        })
    })

    return router
}