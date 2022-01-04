const { dalete as remove } = require('../../queries/notes');

module.exports = (id) => {
	return remove(id);
}
