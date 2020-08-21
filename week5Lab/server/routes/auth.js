const express = require('express')
const router = express.Router()


class User {
    constructor(username, birthdate, age, email, password, valid) {
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }
}

let users = [
    new User('user1', '2020-12-1', 21, 'user1@mail.com', 'password1', true),
    new User('user2', '2020-12-2', 22, 'user2@mail.com', 'password2', true),
    new User('user3', '2020-12-3', 23, 'user3@mail.com', 'password3', true)
]



router.post('/auth', function (req, res) {
    if (!req.body) {
        return res.sendStatus(400)
    }

    const validateUser = checkUser(req.body.username, req.body.password)
    if (validateUser !== false) {
        const user = users[validateUser]
        res.send({username: user.username, birthdate: user.birthdate,age: user.age,email: user.email})
    } else {
        res.send(false)
    }
})


function checkUser(username, password) {
    for (let index = 0; index < users.length; index++) {
        if (users[index].username === username && users[index].password === password) {
            return index
        }
    }
    return false
}

module.exports = router;
