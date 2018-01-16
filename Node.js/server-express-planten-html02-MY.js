var express = require('express');
var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));


var path = require ("path");
var url = require ("url");


app.get('/*.html', function(req, res) {
	res.sendFile( path.join(__dirname + url.parse(req.url).pathname));
});

var server = app.listen(1338, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port);
});