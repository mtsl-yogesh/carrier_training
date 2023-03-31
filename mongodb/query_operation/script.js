const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const dbo = db.db("carrier_training");
  const query = { address: "Park Lane 38" };
  dbo.collection("customers").find(query).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});