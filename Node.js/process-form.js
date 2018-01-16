var express = require('express');
var app = express();

/* bodyParser: 
  nodig om invoervelden van form die met method='post' verstuurd is te kunnen verwerken 
*/
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/index.html', function(req, res) {
	res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function(req, res) {
	console.log("get");
	// Prepare output in JSON format
	var response = {
		first_name : req.query.first_name,
		last_name : req.query.last_name
	};
	console.log(response); // response : 
	res.end(JSON.stringify(response));   // maak een string van en stuur las response naar client
});

app.post('/process_post', function(req, res) {
	console.log("post");
	// Prepare output in JSON format
	var response = {
		// bij POST wordten de waarden/strings van de formvelden 
		// niet automatisch naar in Query-string te staan
		// lijn 7 tem 10 om via POST req.body te gebruiken
		first_name : req.body.first_name,  
		last_name : req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(8083, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port);
});