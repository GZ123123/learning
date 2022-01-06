const { uid } = require('uid');

const connection = require('../config/connect');
const { saver } = require('../utils/uploader');

const getById = (id) => {
	let _query = `SELECT * FROM note_items WHERE id = ?`;
	let _query_images = `SELECT * FROM note_images WHERE id = ? ORDER`;

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

const update = (id, _data, files) => {
	let _query = `SELECT id FROM note_items WHERE id = ?`;
	
}

module.exports = {
	getById,
	create,
	update,

}
