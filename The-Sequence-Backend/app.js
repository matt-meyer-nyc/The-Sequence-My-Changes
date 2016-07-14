var express = require('express');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var MongoClient = mongodb.MongoClient;
var mongoUrl = 'mongodb://movies:movie@ds011218.mlab.com:11218/thesequence';

/*welcome page*/
app.get('/', function(request,response) {
  response.json({'description':'sequence API'});
});

/* list all movies*/
app.get('/movies', function(request,response) {
  MongoClient.connect(mongoUrl, function (err,db){
    var moviesCollection = db.collection('movies');
    if (err) {
      console.log('Unable to connect to mongodb', err);
    } else {
      moviesCollection.find().toArray(function(err,result) {
        if (err) {
          console.log('Error', err);
          response.json('error');
          response.json('error');
        } else if (result.length) {
          console.log('no docs found with "find/get" ');
          response.json(result)
        } db.close(function() {

        });
      });
    }
  });
});

/*add user(movie)*/
app.post('/movies/add', function (request, response){
  console.log('request.body', request.body);

  MongoClient.connect(mongoUrl, function(err,db) {
    var moviesCollection = db.collection('movies');
    if (err) {
      console.log('Unable to connect to mongodb', err);
    } else {
      console.log('Connection', mongoUrl);
      console.log('Adding new user...');

      moviesCollection.insert(request.body, function(err,result) {
        if (err) {
          console.log(err);
          response.json('error');
        } else {
          console.log('Inserted ');
          console.log('Result', result);
          console.log('final result');
        }
        db.close(function(){
          console.log('database Closed');
        });
      });
    }
  });
});


app.get('/movies/:name', function(request,response) {
  console.log('request.params', request.params);
  MongoClient.connect(mongoUrl, function (err,db){
    var moviesCollection = db.collection('movies');
    if (err) {
      console.log('Unable to connect to mongodb via "find in playlist" ', err);
    } else {
      console.log("finding by name");
      var moviesCollection = db.collection('movies');
      moviesCollection.find(request.params).toArray(function(err,result) {
        if (err) {
          console.log('Error', err);
          response.json('error');
        } else if (result.length) {
          console.log("Found",result);
          response.json(result)
        } else {
          console.log("no doc(s) found with 'find/getspecific' ");
          response.json('no playlists found')
        }
        db.close(function() {
           console.log("db closed");
        });
      });
    }
  });
});

app.put('/movies/:name', function (request,response) {
  // response.json('update this name', request.params);
  // console.log('request', request.body);

  var original = {name: request.body.name};
  var changeTo = {name: request.body.newName, playlist: request.body.newPlaylist}

  MongoClient.connect(mongoUrl, function (err,db) {
    var moviesCollection = db.collection('movies');
    if (err) {
      console.log('Unable to connect to mongodb via "update" ', err);
    } else {
      console.log('updating info');
      moviesCollection.update(original,changeTo);

    setTimeout(function() {
      moviesCollection.find(changeTo).toArray(function(err, result) {
        console.log(changeTo);
        if (err) {
          console.log('Error',err);
          response.json('error')
        } else if (result.length) {
          console.log('Got it', result);
          response.json(result);
        } else {
          console.log('no doc(s) found with "update/find" ');
          response.json('nothing found')
        }
        db.close(function () {
          console.log('db closed');
        });
      });
    }, 1000);
    }
  })
});

app.delete('/movies/:name', function (request,response) {
 console.log("Deleting -");
 console.log("request.body",request.body);
 console.log("request.params",request.params);

MongoClient.connect(mongoUrl, function (err,db) {
 var moviesCollection = db.collection('movies');
 if (err) {
   console.log('unnable to connect to mongo via delete', err);
 } else {
   console.log('Deleting name -');
   moviesCollection.remove(request.params, function(err, numRemovedDocs) {
     console.log('numRemovedDocs', numRemovedDocs);
     if (err) {
       console.log('ERROR', err);
     } else {
       moviesCollection.find().toArray(function(err,result){
         if (err) {
           console.log("error", err);
           response.json('error')
         } else if (result.length) {
           console.log('Found', result);
           response.json(result);
         } else {
           console.log("no doc(s) found with 'delete/find' ");
           response.json('no contacts found')
         }
         db.close(function() {
           console.log("db closed");
         });
       });
      }
    });
  }
 });
});




app.listen(process.env.PORT || 3000, function () {
  console.log('listening for heroku port or port 3000');
});
