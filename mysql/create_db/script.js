const mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected !!!");
  con.query("CREATE DATABASE carrier_training", function (err, result) {
    if (err) throw err;
    console.log("Database created !!!");
  });
});