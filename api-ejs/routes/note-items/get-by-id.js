const { getById } = require('../../queries/note-items');

module.exports = (id) => {
	return getById(id);
}
