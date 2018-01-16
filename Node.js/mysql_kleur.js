/*
 * vooraf:  npm install mysql 
 */
var toetsenbord = require('readline-sync');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'deschop',
  port     : 3306  // poort moet overeen komen met port in workbench in DB - hier aanpassen 
});               // delfin -> management -> server status -> poort 

connection.connect();

var kleur = toetsenbord.question("Wat is jouw kleur: ");
connection.query('select * from planten where kleur=\''+kleur+'\';', function(err, rows, fields) { // comando als string
  if (!err){            // function met 3 param(opbject met fout, array met rows, array met kolommen in row)
    var result = JSON.stringify(rows);
    console.log(result);
  }
  else{
    console.log('Error while performing query.');
    console.log(err.message);
	} connection.end();
});

//connection.end(); // belangrijk te sluiten - aantal gebruikers beperkt voor DB
//  --> slechte plaats  voor een asynchrone query : DB sluit vroeger dan antwoordt.
// --> naar lijn 26 