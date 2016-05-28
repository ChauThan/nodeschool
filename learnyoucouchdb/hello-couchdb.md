## solotion

1. Create a database named ```couchdbschool```
```
    curl -X PUT http://127.0.0.1:5984/couchdbschool
```
-X: specify HTTP custom request method to be used. In this case, we are using PUT method.

2.  Insert document:
```
    {
      "_id": "robert",
      "type": "human"
    }
```
Solution:
```
    curl -X PUT http://127.0.0.1:5984/couchdbschool/robert -d '{"type": "human" }'
```
-X: specify HTTP custom request method to be used. In this case, we are using PUT method.  
-d: option is userd to send the data/document through HTTP request.  
_id: to defind id we should put it in url. Eg:  http://127.0.0.1:5984/couchdbschool/_id  