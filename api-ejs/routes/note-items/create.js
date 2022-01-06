const { uid } = require('uid');
const { create } = require('../../queries/note-items');

module.exports = (note_id, body, files) => {
	const _data = (({
		money, is_spend = true, description = ''
	}) => ({
		id: uid(36), note_id, money, is_spend, description
	}))(body);

	return create(_data, files);
}
