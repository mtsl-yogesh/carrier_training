const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const dbo = db.db("carrier_training");
  const mySort = { name: 1 };
  dbo.collection("customers").find().sort(mySort).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});