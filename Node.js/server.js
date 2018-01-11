var http = require('http');
var fs = require('fs');  // file te lezen op eigen server
var url = require('url'); // url te kunnen lezen 


// Create a server
http.createServer( function (request, response) {  
   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;
   // of line 3 en 9 in een:
   //    var url = require('url').parse(request.url).pathname;
   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
   
   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/plain'});
      }else{	
         // Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'}); 
         
         // Write the content of the file to response body
         response.write(data.toString()); 
         // write- zet stukken klaar om naar kleint te sturen
      }
      // Send the response body 
      response.end();  // verstuurd een respons effectief en eindigd de response
   });   
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

// browser FF -lege pagina bij surfen naar deze server
// browser chrome - err 404

// in beide bij surfen naar html op deze  server krijgt je html te zien.

// of via postman programma: GET http://127.0.0.1:8081/hello.html

// browsers , postman zijn clients.