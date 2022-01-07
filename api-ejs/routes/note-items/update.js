const { update } = require('../../queries/note-items');

module.exports = (id, body, files) => {
	const _data = (({
		money, is_spend, description
	}) => ({
		money, is_spend, description
	}))(body);

	const removed = body.removed?.split(',');

	return update(id, _data, files, removed);
}
