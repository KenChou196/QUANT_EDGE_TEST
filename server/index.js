console.log('server is running on port 8080');
var http = require('http');
var mysql = require('mysql');
var express = require('express');
var app = express();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "quant_edge"
  });
var data = [];
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database test quant_edge");
    con.query("SELECT * FROM data", function (err, result, fields) {
      if (err) throw err;
      data = result;
      console.log(data);
    });
});
app.get('/get-data', (req, res) => {
    res.send({ express: data });
}); 
app.listen(5000)