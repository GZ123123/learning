const { getById } = require('../../queries/notes');

module.exports = (id) => {
	return getById(id);
} 
