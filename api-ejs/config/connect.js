const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const _connection_string_ = path.join(process.cwd(), "test.db");

const connect = () =>
	new sqlite3.Database(_connection_string_, (err) => {
		if (err) console.error(err.message);
	});

module.exports = {
	connect,
};
