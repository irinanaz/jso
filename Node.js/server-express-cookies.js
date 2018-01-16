/* vooraf:  
npm install express
npm install cookie-parser
*/

var express = require('express');
var app = express();
var path = require("path");
var url = require("url");
var cookieParser = require('cookie-parser');// definitie - om met cookies te knn werken.
// in terminal :  >npm install cookie-parser
app.use(cookieParser()); // oproep - van de cookieParser

app.get('/setCookie', function (req, res){  
    res.cookie('policyOK', 'true');  // parmaters: NaamVan Cookie, waarde van parameter -moet een string zijn
    res.end("cookie set"); // .end moet na .cookie staan ( volgorde)
});

app.get('/*', function(req, res){
    console.log(req.cookies);  // bij maken (res) - cookie, bij request (req) - cookieS (meervoud)
    if (req.cookies.policyOK != 'true'){  // hier zitten enkel cookies die niet vervalen zijn
        res.sendFile(path.join(__dirname +'/cookies.html'));
    }
    else{
        res.sendFile( path.join(__dirname + url.parse(req.url).pathname));
    }
});

var server = app.listen(1338, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port)
});