## On Cloud9
To set up, run the following bellow:
```
    sudo mkdir -p /var/run/couchdb
    sudo chown couchdb:couchdb /var/run/couchdb 
```

To run CouchDB:
```
    sudo su couchdb -c /usr/bin/couchdb
```

To check if the database is running:
```
    curl http://127.0.0.1:5984
```
