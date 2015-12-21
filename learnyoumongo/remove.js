var dbName = process.argv[2];
var collectionName = process.argv[3];
var id = process.argv[4];

var url = 'mongodb://localhost:27017/' + dbName;

var mongo = require('mongodb').MongoClient;
mongo.connect(url, function(err, db){
    if(err) throw err;
    collection = db.collection(collectionName);
    collection.remove({
        _id: id
    }, function(err, data){
        if(err) throw err;
        db.close();
    });
});