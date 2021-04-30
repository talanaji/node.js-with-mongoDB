var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //Find documents with the address "Park Lane 38":
  var query = { address: "Park Lane 38" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  //Find documents where the address starts with the letter "S":
  var query2 = { address: /^S/ };
  dbo.collection("customers").find(query2).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});