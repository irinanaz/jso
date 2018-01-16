/*
 * vooraf:  npm install mysql 
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'deschop',
  port     : 3306  // poort moet overeen komen met port in workbench in DB - hier aanpassen 
});               // delfin -> management -> server status -> poort 

connection.connect();

connection.query('SELECT * from planten', function(err, rows, fields) { // comando als string in''
  if (!err){            // function met 3 param(opbject met fout, array met rows, array met kolommen in row)
    var result = JSON.stringify(rows);
    console.log(result);
  }
  else{
    console.log('Error while performing query.');
  }
  connection.end();
});
