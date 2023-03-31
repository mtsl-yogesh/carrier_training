const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const dbo = db.db("carrier_training");
  const myObj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myObj, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});