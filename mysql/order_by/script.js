var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "carrier_training"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
    if (err) throw err;
    console.log(result);
    //Output -> [ { name: 'Company Inc', address: 'Highway 37' } ]
  });
});