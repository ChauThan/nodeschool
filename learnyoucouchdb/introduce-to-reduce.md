## Solution ##
1. Create a view which will just output all the things in that data. After that, apply a reduce step which counts all the elements. The document will be designed:
```
{
    "_id": "_design/languages",
    "views": {
        "languages": {
            "map": "function(doc){emit(null, doc)}",
            "reduce": "function(keys, values, rereduce){return sum(values)}"
        }
    }
}
```
2. insert new view to couchdb. Note that I made a json file for this document. So I use --data-binary to easy upload it.
```
    curl -X PUT http://127.0.0.1:5984/programming-languages-learn-couchdb/_design/languages --data-binary @introduce-to-reduce.json
```