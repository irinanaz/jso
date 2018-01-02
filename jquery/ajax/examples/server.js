var http = require('http');
var url = require('url');
var querystring = require('querystring');
var namen =[
    new Persoon(1, 'Karen', "Damen"),
    new Persoon(2, 'Kristel', 'Verbeke'),
    new Persoon(3, 'Kathleen', 'Aerts')
];
http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log('url: ' + req.url);
    
    var path = url.parse(req.url).pathname;
    console.log(req.method + ' aanvraag voor Path: '+path);
    if (!path.startsWith('/namen')){
        res.writeHead(404, 'Niet gevonden');
        res.end();
        return;
    }
    if (req.method === 'GET'){
        processGet(req, res);
    }else if (req.method === 'POST'){
        processPost(req, res);
    }  else if (req.method === 'DELETE'){
        processDelete(req, res);
    } else if (req.method === 'OPTIONS'){
        res.writeHead(200,'OK',{'Access-Control-Allow-Methods':'GET, POST, OPTIONS, DELETE'});
        res.end();
    }
}).listen(8080);
console.log('Ik luister');
function processGet(req, res){
    console.log('GET request');
    res.setHeader('Content-Type','application/json' );
    var query = querystring.parse(url.parse(req.url).query);
    if (query.id == null){
        console.log('Geen id gegeven => volledige lijst');
        res.writeHead('200');
        res.end(JSON.stringify(namen));
    }else{
        console.log('Id is ' + query.id);
        var id = parseInt(query.id);
        var zangeres = namen.find(el => el.id == id);
        console.log('zangeres: ' + zangeres);
        if (zangeres !== undefined){
            res.writeHead(200);
            res.write(JSON.stringify({status: 'element verwijderd'}));
            res.end(JSON.stringify(zangeres));
        }else{
            res.writeHead(404, 'Niet gevonden');
            res.end();
        }
    }
}

function processPost(req, res){
    console.log('POST request');
    var body = '';
    req.on('data', function (data) {
       body += data;
       console.log("Partial body: " + body);
    });
    req.on('end', function () {
       var persoon =  JSON.parse(body);
       namen.push(persoon);
       res.writeHead(200, 'OK');
       res.end();
    });
}
function processPut(req, res){
    res.write('Dit is een put');
}
function processDelete(req, res){
    console.log('DELETE request');
    var query = querystring.parse(url.parse(req.url).query);
    if (query.id === null){
        res.writeHead(400, 'Geen id gegeven')
        res.end();
        return;
    }
    var id = parseInt(query.id);
    console.log('Id is ' + id);
    var idIndex = namen.findIndex(el => el.id == id);
    if (idIndex != -1){
        namen.splice(idIndex, 1);
        
        res.writeHead(200);
        res.end();
    }else{
        res.writeHead(403, 'niet gevonden');
        res.end();
        return;
    }
}
function Persoon(id, voornaam, achternaam){
    this.id = id;
    this.voornaam = voornaam;
    this.achternaam = achternaam;
}