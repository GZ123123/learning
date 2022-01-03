const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const _connection_string_ = path.join(process.cwd(), 'test.db');

const _connect = () => 
  new sqlite3.Database(_connection_string_, (err) => {
    if (err) console.error(err.message);
  });

const _walk = async (data, db, func, next) => {
  const _res = await func(data, db);
  return next[0] ? _walk(_res, db, next[0], next.slice(1)) : _res;
}

const connection = async (...cbs) => {
  const _db = connect();
  const data = await _walk(null, _db, cbs[0], cbs.slice(1))
  _db.close();
  return data
}

module.exports = connection;
