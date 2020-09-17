const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';
const colName = 'Products'





MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, client) => {
    console.log("Connected to Mongo DB Database")
    const db = client.db(dbName);
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

    }, (err) => {
        if (err) { console.log(err) }
    })


});