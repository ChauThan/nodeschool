var size = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient;

var match = {
    $match: {
        size: size
    }
};

var group = {
    $group: {
        _id: 'avg',
        agv: {
            $avg: "$price"
        }
    }
};


mongo.connect(url, function(err, db) {
    if (err) throw err;

    var collection = db.collection('prices');
    collection.aggregate([match, group])
        .toArray(function(err, results){
            if (err) throw err;
            
            if(!results.length){
                throw new Error('No results found')
            }
            
            console.log(Number(results[0].agv).toFixed(2));
            
            db.close();
        });
});