/*
 * vooraf:  npm install mysql 
 */

/* INSERT */

function insertRecord(row, callback) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'deschop',
		port: 3306
	});

	connection.connect();  // ipv ? komt object na de comma, nl. row.
	// 'UPDATE leveranciers SET adres = ?, woonplaats = ? WHERE lev_code = ?'
	connection.query('INSERT INTO leveranciers SET ?', row, function (err, result) {
		if (err) {
			callback(err, result);

		} else {
			callback(null, result);
		}connection.end();
	});
	
}
// een rij toe voegen: params moeten overeen komen met kolomnamen in DB:
var row = { lev_code: '997', lev_naam: 'GROTE SMURF 2', adres: 'Paddenstoel 1', woonplaats: 'Smurfendorp', korting: 0 };
insertRecord(row, function (err, result) {  // eigen functie - zie boven. met callback fie als parameter.
	if (err) {
		console.log('Error while performing query.');
		console.log(err);
	}
	else {
		console.log("%d rows affected", result.affectedRows);
		if (result.affectedRows == 1) {
		}
	}
});   
