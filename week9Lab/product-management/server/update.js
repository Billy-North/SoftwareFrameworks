const express = require('express')
const router = express.Router()


module.exports = update = (db, ObjectID) => {
    const productsCollection = db.collection('Products');

    router.patch('/product', (req, res) => {
        if (!req.body) { return res.sendStatus(400) }
        const name = req.body.name
        const description = req.body.description
        const price = req.body.price
        const units = req.body.units
        productsCollection.updateOne({ _id: ObjectID(req.body.id) },
            { $set: { Name: name, Description: description, Price: price, units: units } }, (err) => {
                if (err) { return res.status(500) }
                return res.status(200).json({ status: "ok" })
            })
    })

    return router
}