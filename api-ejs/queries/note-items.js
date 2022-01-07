const { uid } = require('uid');
const fs = require('fs');

const connection = require('../config/connect');
const { saver } = require('../utils/uploader');

const getById = (id) => {
	let _query = `SELECT * FROM note_items WHERE id = ?`;
	let _query_images = `SELECT * FROM note_images WHERE item_id = ? ORDER BY created_at DESC`;

	return connection(
		(data, db) => new Promise((res, rej) => {
			db.get(_query, [id], (err, row) => row ? res(row): rej(null))
		}),
		(data, db) => new Promise((res, rej) => {
			db.all(_query_images, [id], (err, rows) => 
				res({ ...data, images: rows }) 
			)
		})
	)
}
const create = (_data, files) => {
	let _query =
		`INSERT INTO
			note_items(id, note_id, money, is_spend, description)
			VALUES(?, ?, ?, ?, ?)`;

	let _query_images = `INSERT INTO note_images(id, item_id, dir) VALUES`;
	
	return connection(
		(data, db) => new Promise((res, rej) => 
			db.run(
				_query,
				[
					_data.id,
					_data.note_id,
					_data.money,
					_data.is_spend,
					_data.description
				],
				(err) => {
					console.log(err);
					err ? rej(null) : res(_data);
				}
			)
		),
		(data, db) => new Promise(async (res, rej) => {
			if(!files.length) res(data); 
			let _files = await Promise.all(files.map(async (f) => {
				const dir = await saver(f);
				return `('${uid(36)}', '${data.id}', '${dir}')`;
			}))
			if(_files.length) {
				_query_images += _files.join(", ");
				db.run(_query_images, (err) => {
					if(err) rej({ error: true, message: "Upload Image", data });
				})
			}

			return res(data);
		})
	)
}

const update = (id, _data, files, removed) => {
	let _query = `SELECT id FROM note_items WHERE id = ?`;
	let _query_update = `UPDATE note_items SET `;
	let _query_remove_image = `DELETE FROM note_images WHERE id IN `;
	let _query_images = `INSERT INTO note_images(id, item_id, dir) VALUES`;
	
	return connection(
		(data, db) => new Promise((res, rej) => 
			db.get(_query, [id], (err, row) => {
				row ? res(row): rej(null);
			}) 
		),
		(data, db) => new Promise((res, rej) => {
			// update 
			let _update = [];
			if(_data.money && _data.money !== data.money)
				_update.push(`money = ${_data.money}`);
			if(_data.is_spend && _data.is_spend !== data.is_spend)
				_update.push(`is_spend = ${_data.is_spend}`);
			if(_data.description && _data.description !== data.description)
				_update.push(`description = '${_data.description}'`);

			if(!_update.length) return rej(false);

			_query_update += _update.join(", ");
			_query_update += ` WHERE id = ?`;

			db.run(_query_update, [id], 
				(err, row) => err ? rej(false): res(data)
			)
		}),
		(data, db) => new Promise(async (res, rej) => {
			// update image 
			let _files = await Promise.all(files.map(async (f) => {
				const dir = await saver(f);
				return `('${uid(36)}', '${data.id}', '${dir}')`;
			}))
			if(_files.length) {
				_query_images += _files.join(", ");
				console.log("Query Images", _query_images);
				db.run(_query_images, (err) => {
					if(err) rej({ error: true, message: "Upload Image", data });
				})
			}
			return res(data);
		}),
		(data, db) => new Promise((res, rej) => {
			// remove images
			if(!removed.length) return res(data);
			db.run(`${_query_image}(${removed.join(", ")})`, 
				(err) => err ? res(data): res(data) 
			)
		})
	)
}

const _delete = (id) => {
	let _query_image = `SELECT dir FROM note_images WHERE item_id = ?`;
	let _query = `DELETE FROM note_items WHERE id = ?`;

	return connection(
		(data, db) => new Promise((res, rej) => 
			db.all(_query_image, [id], (err, rows) => {
				rows.forEach(row => fs.unlink(row.dir, () => {}));
				res(null);
			})
		),
		(data, db) => new Promise((res, rej) => 
			db.run(_query, [id], (err) => {
				err ? rej(false) : res(true)
			})
		)
	)
}
	
module.exports = {
	getById,
	create,
	update,
	delete: _delete
}
