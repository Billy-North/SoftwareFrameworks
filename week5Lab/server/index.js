const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
app.use(bodyParser.json())

var cors = require('cors') 
app.use(cors()); 



const auth = require('./routes/auth');


let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Server listening on: ${host} + port: ${port}`);
});

app.use('/api',auth)
