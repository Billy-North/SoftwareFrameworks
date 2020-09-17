const express = require('express')
const router = express.Router()


class Product {
    constructor(Name, Description, Price, units) {
        this.Name = Name;
        this.Description = Description;
        this.Price = Price;
        this.units = units;
    }
}

module.exports = add = (db, ObjectID) => {
    const productsCollection = db.collection('Products');

    router.post('/product', async (req, res) => {
        if (!req.body) { return res.sendStatus(400) }
        const name = req.body.name
        const description = req.body.description
        const price = req.body.price
        const units = req.body.units
        const productExists = await productsCollection.findOne({ Name: name });
        if (productExists) { return res.send({ productExists: true }) }
        const product = new Product(name, description, Number(price), Number(units))
        productsCollection.insertOne(product, (err) => {
            if (err) { return res.status(500) }
            return res.status(200).json({ status: "ok" })
        });




        // productsCollection.insertOne(product, (err) => {
        //     if (err) { return res.status(500) }
        //     return res.status(200).json({ status: "ok" })
        // });
    })

    return router
}