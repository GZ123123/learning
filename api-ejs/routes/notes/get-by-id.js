const connection = require('../../config/connect');

module.exports = (id) => {
	const data = connection(
		(data, db) => new Promise((res, rej) => {	
			db.get("SELECT * FROM notes where id = ?", [id], (err, row) => {
				if(row) res(row);
				res(null);
			})
		})
	)
	return data;
} 
