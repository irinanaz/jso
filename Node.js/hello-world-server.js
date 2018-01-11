var http = require('http');
http.createServer(function handler(req, res) {  // eigen namen : req en res
	console.log('request received');
	
	// Send the HTTP header 
	// HTTP Status: 200 : OK
    res.writeHead(200, {'Content-Type': 'text/plain'});  // whriteHead - aanvullende info bij request
    
    // Send the response body
    res.end('Hello World\n');  // end - is een antwoord zelf
}).listen(1337, '127.0.0.1');  // event-listener op request (poort, ip-adres)
console.log('Server running at http://127.0.0.1:1337/'); // asynchronisch verder
