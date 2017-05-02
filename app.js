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

var artistId = 'id';

// Passing a callback
spotifyApi.getArtistAlbums(artistId, {limit: 10, offset: 20})
  .then(function(data) {
    console.log('Album information', data.body);
  }, function(err) {
    console.error(err);
  });
  
  app.get('/', function (req, res, next) {
search(req.query.q, function (err, getArtistAlbums) {
if (err) return next(err);
res.render(title = 'id');
	});
});


app.listen(3000);