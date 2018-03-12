var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://gitrubyuser:MongoTFG94@ds145438.mlab.com:45438/prueba";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});