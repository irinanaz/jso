var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function handler(req, res) {  // eigen namen : req en res -->request en response
    
    
    var pathname = url.parse(req.url).pathname;
    if (pathname =='/Oef_Stap2.html') {
        console.log("Request for " + pathname + " received.");
        // res.writeHead(200, {'Content-Type': 'text/plain'});
        // res.end('Hello World 2\n'); 
        fs.readFile(pathname.substr(1), function (err, data) {
            if (err) {
               console.log(err);
               res.writeHead(404, {'Content-Type': 'text/plain'});
            }else{
               res.writeHead(200, {'Content-Type': 'text/html'}); 
               res.write(data.toString()); 
                    
            }
            res.end();
         });

    } else {
        console.log('request received');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n'); 
    }
}).listen(1337, '192.168.23.155');

console.log('Server running at http://192.168.23.155:1337/'); // asynchronisch verder


// lijn30:   .listen(1337, '127.0.0.1');
// moeten we server bepalen :
// om eigen server te zoeken moeten we comandprompt gebruiken:
// open cmp --> ipconfig 
// IPv4 Adress : 192.168.23.155




