const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var cors = require('cors')
app.use(bodyParser.json());
app.use(cors());
const PORT = 3000;
const url = 'mongodb://localhost:27017';

const add = require('./add');
const read = require('./read');
const remove = require('./remove');
const update = require('./update');

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, client) => {
    if (err) { console.error(err) }
    console.log('Connected to MongoDB Database')
    const dbName = 'mydb';
    const db = client.db(dbName);

    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`)
    });

    app.use('/api', read(db));
    app.use('/api', add(db, ObjectID));
    app.use('/api', remove(db, ObjectID));
    app.use('/api', update(db, ObjectID));

})
