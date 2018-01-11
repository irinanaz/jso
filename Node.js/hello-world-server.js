var http = require('http');
http.createServer(function handler(req, res) {  // eigen namen : req en res -->request en response
	console.log('request received');
	
	// Send the HTTP header 
	// HTTP Status: 200 : OK
    res.writeHead(200, {'Content-Type': 'text/plain'});  // whriteHead - aanvullende info bij request
    
    // Send the response body
    res.end('Hello World\n');  // end - dat is een antwoord zelf
}).listen(1337, '127.0.0.1');  // event-listner op request.
// Listenmethode(poort, ip-adres)
// asynchrone methode ="oneindige lus"
console.log('Server running at http://127.0.0.1:1337/'); // asynchronisch verder

//terminal :
// c:\Users\User112.PC112.000\Documents\IrinaNazJSO2\Node.js>node hello-world-server.js
// Server running at http://127.0.0.1:1337/
// request received
// request received
// ^C

// in browser: http://127.0.0.1:1337/
// Hello world