const { connect } = require("../config/connect");

const success = (data) => ({
	success: true,
	data: data,
	message: "SUCCESS",
});

const error = (message) => ({
	success: false,
	data: null,
	message: message,
});

const _walk = async (db, data, func, next) => {
	return await func(db, data)
		.then((_data) =>
			next[0] ? _walk(db, _data, next[0], next.slice(1)) : _data
		)
		.catch((err) => error(err));
};

const doSQLQuery = async (...cb) => {
	const _db = connect();
	const _data = await _walk(_db, null, cb[0], cb.splice(1));
	_db.close();
	if (!_data.message) return success(_data);
	return _data;
};

module.exports = function connection(db_type = "sql") {
	switch (db_type) {
		case "sql":
			return doSQLQuery;
	}
};
