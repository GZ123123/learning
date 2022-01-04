const connection = require('../config/connect');
const { remove_unicode } = require('../utils/funcs');

const getAll = (queries) => {
	let _query = `SELECT * FROM notes`;
	let _where = [];

	if(queries.from) _where.push(`created_at >= '${queries.from}'`);
	if(queries.to) _where.psuh(`created_at <= '${queries.to}'`);
	if(queries.name) _where.push(`name_slug like '%${remove_unicode(queries.name)}%'`);

	if(!!_where.length) _query += ` WHERE ${_where.join(' and ')} `;
	_query += ` order by created_at `;

	return connection(
		(data, db) => new Promise((res, rej) =>
			db.all(_query, (err, rows) => res(rows)))
	)
}

const getById = (id) => {
	let _query = `SELECT * FROM notes where id = ?`;
	let _query_items = `SELECT * FROM note_items where note_id = ?`;

	return connection (
		(data, db) => new Promise((res, rej) =>  
			db.get(_query, [id], (err, row) =>
        row ? res(row) : res(null)      
			)
		),    
		(data, db) => new Promise((res, rej) => 
			db.all(_query_items, [id], (err, rows) => 
				row ? res({...data, items: rows}) : res({...data, items: []})
			)	
		)
	)
}

const create = (_data) => {
	let _query = `INSERT INTO notes(id, name, name_slug, description, income, willspend, save) ` +
		`VALUES(?, ?, ?, ?, ?, ?, ?)`;
	return connection (
		(data, db) => new Promise((res, rej) => 
			db.run(_query, [
				_data.id,
				_data.name,
				remove_unicode(_data.name),
				_data.desciption,
				_data.income,
				_data.willspend,
				_data.save
			], (err) => {
				console.log(err);
				err ? res(null): res(_data);
			})			
		)
	)
}

const update = (id, _data) => {

	return connection(
		(data, db) => new Promise((res, rej) => {
			db.get(`SELECT * FROM notes where id = ?`, [id], (err, row) => {
				err ? res(null) : res(row)
			})
		}),
		(data, db) => new Promise((res, rej) => {
			console.log("------>", data, _data);
			if(!data) return res(null);
			let _query =  `UPDATE notes SET `;
			let _update = [];

			if(_data.name && _data.name !== data.name) {
				_update.push(`name = '${_data.name}'`);
				_update.push(`name_slug = '${remove_unicode(_data.name)}'`);
			}
			if(_data.desciption && _data.description !== data.desciption)
				_update.push(`desciption = '${_data.desciption}'`);
			if(_data.income && _data.income !== data.income)
				_update.push(`income = ${_data,income}`);
			if(_data.willspend && _data.willspend !== data.willspend)
				_update.push(`willspend = ${_data.willspend}`);
			if(_data.save && _data.save !== data.save)
				_update.push(`save = ${_data.save}`);
			
			if(!_update.length) res(null);
			
			_query += _update.join(", ");

		  _query += `Where id = ?`;

			db.run(_query, [id],(err, row) => {
				err ? res(err) : res(id)
			})
		})
	)
}

const _delete = (id) => {
	let _query = `DELETE FROM notes WHERE id = ?`;
	return connection (
		(data, db) => new Promise((res, rej) => {
			db.run(_query, [id], (err, row) =>
				err ? res(false): res(true)
			)
		})
	)
}

module.exports = {
	getAll, 
	getById,
	create,
	update,
	delete: _delete
}
