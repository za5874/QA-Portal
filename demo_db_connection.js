var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "qaportal"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 
    con.query("SELECT * FROM users;", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
