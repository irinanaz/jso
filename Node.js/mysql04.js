/*
 * vooraf:  npm install mysql 
 */

/* UPDATE */

function updateRecord(row, callback) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'deschop',
		port: 3307
	});

	connection.connect();
	connection.query('UPDATE leveranciers SET adres = ?, woonplaats = ? WHERE lev_code = ?',
		row, function (err, result) {
			if (err) {
				callback(err, result);

			} else {
				callback(null, result);
<<<<<<< HEAD
			}connection.end();
		});
	
=======
			}
			connection.end();
		});
>>>>>>> 39ad9fe5611d228b6cae9aba17a47aa6e33980f5
}

var row = ['Grote Vliegenzwam', 'Smurfenstad', '997']; 
updateRecord(row, function (err, result) {
	if (err) {
		console.log('Error while performing query.');
		console.log(err);
	}
	else {
		console.log("%d rows affected", result.affectedRows);
	}
});   
