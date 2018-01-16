/*
 * vooraf:  npm install mysql 
 */
var kleur="rood' OR '1'='1";

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'deschop',
  port     : 3307
});

connection.connect();

connection.query("SELECT * from planten WHERE kleur='"+kleur+"'", function(err, rows, fields) {
  if (!err){
    var result = JSON.stringify(rows);
    console.log(result);
  }
  else{
    console.log('Error while performing query.');
  }
  connection.end();
});
