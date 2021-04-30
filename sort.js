var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //sort by name ascending
  var mysort = { name: 1 };
  dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
	
	console.log('sort by name asc');
    console.log(result);
    db.close();
  });
  //sort by name desc
  var mysort = { name: -1 };
  dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
	
	console.log('sort by name desc');
    console.log(result);
    db.close();
  });
});