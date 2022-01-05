const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const _connection_string_ = path.join(process.cwd(), "test.db");

const _connect = () =>
	new sqlite3.Database(_connection_string_, (err) => {
		if (err) console.error(err.message);
	});

const _walk = async (data, db, func, next) => {
	return await func(data, db)
		.then((d) => (next[0] ? _walk(d, db, next[0], next.slice(1)) : d))
		.catch((d) => d);
};

const connection = async (...cbs) => {
	const _db = _connect();
	const data = await _walk(null, _db, cbs[0], cbs.slice(1));
	_db.close();
	return data;
};

module.exports = connection;
