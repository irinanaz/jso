'use strict';
var toetsenbord = require('readline-sync');
var at="";
var email = toetsenbord.question('Geef jouw email in: ');
at =  email.indexOf("@");
while(at < 0) {
    
    email = toetsenbord.question('Geef jouw email in: ');
    at =  email.indexOf("@");
}
