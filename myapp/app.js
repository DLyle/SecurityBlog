
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');

var mongoUri = 'mongodb://localhost/test';
var mongo = require('mongodb');

var db = mongo.Db.connect(mongoUri,function(error,databaseConnection){
  db = databaseConnection;
});

var app = express();

// all environments
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
//app.get('/users', user.list);

app.get('/posts', function(request, response) {
   db.collection("posts",function(er,collection){
     var cursor = collection.find();
     cursor.toArray(function(er,array){
       console.log(JSON.stringify(array));
       response.send(JSON.stringify(array));
     });
   });
 });

app.post('/posts', function(request,response){
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers","X-Requested-With");
  var content = request.param('content');
  db.collection("posts",function(er,collection){
    var data = {"content":content};
    var time = new Date();
    collection.insert(data,function(err,result){});
    response.send();
  });
});



http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
    });
