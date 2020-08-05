const express = require('express')
const router = express.Router()



router.post('/api/login', function (req, res) {
    if (!req.body) {
        return res.sendStatus(400)
    }
    let user = {};
    user.username = req.body.username;
    user.pw = req.body.pw;

    if (checkUser(req.body.username, req.body.pw)) {
        user.ok = true
    } else {
        user.ok = false
    }
    res.send(user)
})

var users = [
    { username: 'user1', pw: '123' },
    { username: 'user2', pw: '456' },
    { username: 'user3', pw: '789' }
]

function checkUser(username, pw) {
    for (let index = 0; index < users.length; index++) {
        if(users[index].username === username && users[index].pw === pw) {
            return true
        }
    }
    return false
}

// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page')
})

// define the about route
router.get('/about', function (req, res) {
    res.send('About birds')
})

module.exports = router;