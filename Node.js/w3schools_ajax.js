var http = require('http'),
    fs = require('fs'),
    url = require('url');

http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;
    if (path == "/w3schools_ajax.html") {
        fs.readFile('./w3schools_ajax.html', function (err, file) {
            if (err) {
                // write an error response or nothing here  
                return;
            }
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(file, "utf-8");
        });
    } else {
        console.log("request received");
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("Hello!");
        console.log("string sent");
    }
}).listen(1337, '192.168.23.104');
console.log('Server running at http://192.168.23.104:1337/');