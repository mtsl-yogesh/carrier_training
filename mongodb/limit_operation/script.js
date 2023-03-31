var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("carrier_training");
    dbo.collection("customers").find().limit(5).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});