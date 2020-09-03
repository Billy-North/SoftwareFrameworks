const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const io = require('socket.io')(http);
const sockets = require('./socket.js')
const server = require('./listen.js')

const PORT = 3000; 

app.use(cors()); 

sockets.connect(io,PORT)

server.listen(http,PORT)
