var express = require('express')
	

var app = express();
app.set('view engine','jade');
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views'); // folders location
app.set('view options', { layout: false}); //config option send to templates

/* Routing */
app.get('/', function(req, res){
	res.render('index')
});

/*----------------------------------Spotify route-------------------*/
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi();

// Passing a callback
spotifyApi.searchArtists('music')
  .then(function(data) {
    console.log('Search artists by "Love"', data.body);
  }, function(err) {
    console.error(err);
  });
  
 /* 
  var WebSocket = require('ws').Server;
  var wss = new WebSocketServer({port:3000});
  
  wss.on('connection', function(ws){
	  ws.on('message', function(message){
		  wss.clients.forEach(function(client){
			  client.send(message);
			  
		  });
	  })
  });
  */

  
app.listen(3000);