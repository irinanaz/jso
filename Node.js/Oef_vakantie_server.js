var express = require('express');
var app = express();


/* bodyParser: 
  nodig om invoervelden van form die met method='post' verstuurd is te kunnen verwerken 
*/
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/Oef_vakantie.html', function(req, res) {
	res.sendFile(__dirname + "/" + "Oef_vakantie.html");
});

app.get('/process_get', function(req, res) {
	console.log("get");
    // Prepare output in JSON format
    var geslacht;
    var lid='';
	var response = {
		naam : req.query.naam,
        geslacht : req.query.geslacht,
        bestemming : req.query.bestemming,
        lid: req.query.lid
    };
    if(response.geslacht == "m") geslacht='mijnheer '; 
    else geslacht ='mevrouw ';
    if (response.lid == 'lid') { lid='Als lid geniet u uiteraard van onze uitzonderlijke voordelen.';}
    var responseText = 'Dag '+ geslacht + response.naam +'. Uw inschrijving voor een reis naar '+response.bestemming+' is geregistreerd. '+lid;
    console.log(responseText); // response : 
    var htmlBodyBegin="<!DOCTYPE html><html lang='nl'><head><title></title></head><body><h2>Registratie is gelukt</h2><p>";
    var htmlBodyEnd ="</p></body></html>";
    res.end(htmlBodyBegin + responseText + htmlBodyEnd);   // maak een string van en stuur las response naar client
});



app.listen(8083);