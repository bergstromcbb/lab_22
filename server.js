var express = require('express');
var app = express();

var objects = [	"Merry Christmas", 
				"Baby, it's cold outside", 
				"It's the most wonderful time of the year",
				"Silent Night",
				"All I want for Christmas is you",
				"Meet me under the Mistletoe",
				"All is calm, All is bright.",
				"It's the season to sparkle",
				"Make it a December to rememeber"];

var images = [
			"images/BALLS_SCANDINAVIAN CHRISTMAS-01.png", 
			"images/BALLS_SCANDINAVIAN CHRISTMAS-02.png", 
			"images/BALLS_SCANDINAVIAN CHRISTMAS-03.png",
			"images/BALLS_SCANDINAVIAN CHRISTMAS-04.png",
			"images/BALLS_SCANDINAVIAN CHRISTMAS-05.png",
			"images/BALLS_SCANDINAVIAN CHRISTMAS-06.png",
			"images/BALLS_SCANDINAVIAN CHRISTMAS-07.png",				
			"images/BALLS_SCANDINAVIAN CHRISTMAS-08.png",							 
			"images/BALLS_SCANDINAVIAN CHRISTMAS-09.png",
			"images/BALLS_SCANDINAVIAN CHRISTMAS-12.png", 
			"images/BALLS_SCANDINAVIAN CHRISTMAS-10.png", 
			"images/BALLS_SCANDINAVIAN CHRISTMAS-11.png"]

app.use(express.static(__dirname + '/public'))

randomShit = function() {
    return objects[Math.floor(Math.random() * objects.length)];
}

randomPic = function() {
    return images[Math.floor(Math.random() * images.length)];
}

app.get('/api/randompic', function (req, res) {
  res.send(randomPic());
});

app.get('/api/randomshit', function (req, res) {
  res.send(randomShit());
});

app.get('/api/objects', function (req, res) {
  res.send(objects);
});

var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});

