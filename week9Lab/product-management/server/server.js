const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const server = require('./listen.js');
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
    server.listen(http, PORT);
    const colName = 'Products';

    app.use('/api', read(db,ObjectID));


    db.createCollection(colName, {
        validator: {
            $jsonSchema: {
                properties: {
                    Name: {
                        bsonType: "string",
                        maxLength: 20
                    },
                    Description: {
                        bsonType: "string",
                        maxLength: 255
                    },
                    Price: {
                        bsonType: "decimal"
                    },
                    units: {
                        bsonType: "int"
                    }
                }
            }
        }

    }, (err) => { if (err) { console.log(err) } })

   // app.use('/api', add(db,ObjectID));
    // app.use('/api', remove(db,ObjectID));
    // app.use('/api', update(db,ObjectID));

})
