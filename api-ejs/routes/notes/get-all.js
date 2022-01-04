const { getAll } = require('../../queries/notes');

module.exports = (queries = {}) => {
	return getAll(queries);
}
