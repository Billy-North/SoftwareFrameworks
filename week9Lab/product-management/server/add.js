const express = require('express')
const router = express.Router()

module.exports = add = (db, ObjectID) => {
    const productsCollection = db.collection('Products');

    router.post('/adduser', async (req, res) => {
        if (!req.body) { return res.sendStatus(400) }
        const username = req.body.username
        const password = req.body.password
        const email = req.body.email
        const role = req.body.role
        const userExists = await userCollection.findOne({ username: username });
        if (userExists) { return res.send({ userExists: true }) }
        const user = new User(username, password, email, Number(role))
        userCollection.insertOne(user, (err, records) => {
            if (err) { return res.status(500) }
            return res.status(200).json({ status: "ok" })
        });
    })

    return router
}