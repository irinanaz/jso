var http = require('http');

// Options to be used by request moeten in object gezet worden:
var options = {
   host: 'localhost',
   port: '8081',
   path: '/hello.html'  
};

// Callback function is used to deal with response:
var callback = function(response){
   // Continuously update stream with data
   var body = '';
   response.on('data', function(data) {
      body += data;  // data is eigelijk totaal antwoord we vormen dat hier.
   });
   
   response.on('end', function() {
      // Data received completely.
      console.log(body); // als de response compleet is wordt antwoord getoond.
   });
};
// Make a request to the server
var req = http.request(options, callback);
req.end();

// terminal:
// c:\Users\User112.PC112.000\Documents\IrinaNazJSO2\Node.js>node client.js
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="ISO-8859-1">
// <title>Hello</title>
// </head>
// <body>
// <h1>Hello world!</h1>
// <h2>Node.js is fantastic!</h2>
// </body>
// </html>