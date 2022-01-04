
module.exports = {
	getAll: "SELECT * FROM note-items",
	getByNote: "SELECT * FROM note-items where note_id = ? order by created_at",
	getById: "SELECT * FROM note-items where id = ?",
}
