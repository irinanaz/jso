var express = require('express');
var app = express();

// !!! volgorde van methodes is belangrijk: 
// meest specifieke combinatie van http-method en path eerst

// request method=GET
// path: /hello.html
app.get("/hello.html", function(request, response){
    response.sendFile(__dirname+"/hello.html");
});

// request method=GET
// path: eindigt op .html  (maar is niet /hello.html)
app.get('/*.html', function(request, response){
    console.log("request met method get for html page received");
    response.send("request met get voor html pagina wordt verwerkt");
});

// request method=GET
// path: eender wat, maar eindigt niet op .html
app.get('/*', function(request, response){
    // request.query : querystring
    var voornaam = request.query.voornaam;
    var naam = request.query.naam;
    console.log("naam en voornaam uit de querystring: %s %s", naam, voornaam);
    console.log("request met method get received");
    response.send("request met get wordt verwerkt");
});

// request method=POST
// path: eender wat
app.post('/*', function(request, response){
    console.log("request met method post received");
    response.send("request met post wordt verwerkt");
});

// request method verschillend van POST en verschillend van GET
// path: eindigt op .html
app.all('/*.html', function(request, response){
    console.log("request for html-page received");
    response.send("de html pagina word opgevraagd");
});

// request method verschillend van POST en verschillend van GET
// path: eender wat, maar eindigt niet op .html
app.all('/*', function( request, response ){
    console.log("request received");
    response.send("Hello server express");
});

app.listen(8083);