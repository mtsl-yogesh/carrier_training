const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("carrier_training");
    const myQuery = { address: 'Mountain 21' };
    dbo.collection("customers").deleteOne(myQuery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });
});