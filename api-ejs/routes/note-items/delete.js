const { delete: remove } = require('../../queries/note-items');

module.exports = (id) => {
	return remove(id);
} 
