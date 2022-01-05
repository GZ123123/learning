const { delete: remove } = require('../../queries/notes');

module.exports = (id) => {
	return remove(id);
}
