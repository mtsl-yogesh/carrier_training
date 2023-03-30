var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "carrier_training"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected !!!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Valley 345')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted !!!");
  });
});