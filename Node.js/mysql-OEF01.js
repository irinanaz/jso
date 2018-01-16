/*
 * vooraf:  npm install mysql 
 */

/* UPDATE */
var toetsenbord = require('readline-sync');

function updateRecord(row, callback) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'deschop',
		port: 3306
	});

	connection.connect();
	// select * from leveranciers where lev_code ='007';
	connection.query('delete from ?? WHERE ?? = ?',
		row, function (err, result) {
			if (err) {
				callback(err, result);

			} else {
				callback(null, result);
			} connection.end();  // op het zelfde nieveau met if
		});
	
}
var levcodeToDELETE = toetsenbord.question("Geef een code van de leverancier te verwijderen in: ");
var row = ['leveranciers', 'lev_code', levcodeToDELETE];  // invoer:  997
updateRecord(row, function (err, result) {
	if (err) {
		console.log('Error while performing query.');
		console.log(err);
	}
	else {
		console.log("%d rows affected", result.affectedRows);
	}
});   
