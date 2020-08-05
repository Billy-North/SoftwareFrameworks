const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
app.use(bodyParser.json())

const login = require('./routes/login');

app.use(express.static(__dirname + '/www'));

app.use(logger)

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('My First Nodejs Server!');
    console.log(`Server listening on: ${host} + port: ${port}`);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/www/form.html")
})

app.get('/account', function (req, res) {
    res.sendFile(__dirname + "/www/account.html")
})


app.use('/user',login)



function logger(req, res, next) {
    console.log("Log" + req.query)
    next();
}