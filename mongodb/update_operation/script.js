const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("carrier_training");
    const myQuery = { address: "Valley 345" };
    const newValues = { $set: { name: "Mickey", address: "Canyon 123" } };
    dbo.collection("customers").updateOne(myQuery, newValues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});