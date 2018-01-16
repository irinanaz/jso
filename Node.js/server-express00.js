'use strict';

var express = require('express');  // express module
var server = express();  // server

// voor een bepaalde file request methode defineren:
// methode get: request -methode : GET
// path :  /hello.html
server.get('/hello.html', function (request, response){ //path waar client gesurfd heeft, url
    response.sendFile(__dirname+"/hello.html");  
    // path van de file die moet gestuurd zijn. 
    // file moet gelijk of onder de serverfile staan. 
    // dus geen path naar boven om juiste file te halen en sturen.
});

// request methode = GET
// path: eindigt op.html
server.get('/*.html', function(request, response){
    console.log("request met methode get for html page received");
    response.send("request voor get html pagina wordt verwerkt");
});


// request methode = GET
// path: is eender wat, maar eindigd niet op .html
// deze moet na de methode voor .html staan
server.get('/*', function(request, response){
    console.log("request met methode get for NOT html page received");
    response.send("request voor get NIET-html pagina wordt verwerkt");
});


// methode POST 
// path : is eender wat:
server.post('/*', function(request, response){
    console.log("request met methode POST  received");
    response.send("request voor POST wordt verwerkt");
})


// voor alle soorten requestsmethods
// !  De volgorde van alle serversmethodes is wel belangrijk:
// de meest spesifieke boven en algemenre onder.
// deze all is altijd de laatste:
// (path : ender wat (elke path - path- is de eerste parameter))
server.all('/*', function(request, response){
    console.log('request recieved');
    response.send("Hello server express");
}) ;

// server.all moet ook staan om alle mogelijke requests te verwerken.


// Server moet nu beginnen luisteren naar requests:
server.listen(8083);  
// als we geen ip adress geven dan wordt het standaart als http://127.0.0.1 genomen.


