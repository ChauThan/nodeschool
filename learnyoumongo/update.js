var databaseName = process.argv[2];
var url = 'mongodb://localhost:27017/' + databaseName;
var mongo = require('mongodb').MongoClient;

var conditionData = {
    username: 'tinatime'
};

var updatedData = {
    age: 40
};

mongo.connect(url, function(err, db) {
    if (err) throw err;

    users = db.collection('users');
    users.update(conditionData, {
        $set: updatedData
    }, function(err, data) {
        if (err) throw err;

        db.close();
    });
});