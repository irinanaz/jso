var express = require('express');
var app = express();
var path = require("path");
var url = require("url");

var names = [
    "Anna", "Brittany", "Cinderella", "Diana", "Eva", "Fiona", "Gunda", "Hege", "Inga", "Johanna", "Kitty", "Linda", "Nina",
    "Ophelia", "Petunia", "Amanda", "Raquel", "Cindy", "Doris", "Eve", "Evita", "Sunniva", "Tove", "Unni", "Violet", "Liza",
    "Elizabeth", "Ellen", "Wenche", "Vicky"];

function findHints(q) {  // zoek naar welke een 'q' heeft
    var hint = "";
    if (q.length > 0) {
        for (var i = 0; i < names.length; i++) {
            if (names[i].toUpperCase().startsWith(q.toUpperCase())) {
                if (hint == "") {
                    hint = names[i];
                }
                else {
                    hint += " , " + names[i];  
                }
            }
        }
    }
    if (hint == ""){
        return "No suggestion found.";
    }
    else{
        return hint;
    }
}
// aanvragen van alle andere domains een request toe te laten: 
// enable cross domain calls (CORS = cross origin resource sharing)
app.all('/*', function (req, res, next) {  // all voor alle http methodes
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); // deze stuk moet altijd boven staan als de eerste!
 // ! array - [] - voor alle mogelijke padden:
app.get(['/*.htm*', '/*.css', '/scripts/*.js'], function (req, res) {
    res.sendFile(path.join(__dirname + url.parse(req.url).pathname));
});

app.get('/getHint.js', function (req, res) {
    console.log('request received');
    console.log("Looking for names starting with %s", req.query.q);
    res.end(findHints(req.query.q));
});

var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});

// samen met showHints.html