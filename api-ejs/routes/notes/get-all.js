const connection = require('../../config/connect');

module.exports = (queries = []) => {
	const _data = connection(
		(data, db) => new Promise((res, rej) => {
			db.all("SELECT * FROM notes", (err, rows) => res(rows))
		})
	);

	return _data;
}
