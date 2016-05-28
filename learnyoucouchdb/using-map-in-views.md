## Solution ##
1. Check whether database `things-learn-couchdb` exists or not:
```
    curl -X GET http://127.0.0.1:5984/_all_dbs
```

2. create view which out pull all the things which have the meterial ```metal```.
   2.1 Route of view is ```_design/thingsMadeOfMetal/_view/thingsMadeOfMetal```. We will design document like this:
   ```
   {
       "_id": "_design/thingsMadeOfMetal",
       "views": {
           "thingsMadeOfMetal": {
               "map": "function(doc){
                   if(doc.material == 'metal') emit(doc._id, doc);
               }"
           }
       }
   }
   ```
   *emit*: function emit is built-in function. It will receive 2 parameter: (key, value). key is used for sorting and filtering. value is used for containing data.
   
   2.2 Add new view to couchdb. Note that I made a json file for this document. So I use --data-binary to easy upload it.
   ```
   curl -X PUT http://127.0.0.1:5984/things-learn-couchdb/_design/thingsMadeOfMetal --data-binary @using-map-in-views.json
   ```
   
3. To verify new document. Use:
```
    curl -X GET http://127.0.0.1:5984/things-learn-couchdb/_design/thingsMadeOfMetal
```