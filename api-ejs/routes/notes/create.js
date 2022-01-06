const { uid } = require("uid");

const { create } = require('../../queries/notes');

module.exports = (data) => {
	const _data = (({
		name, desciption = '', income = 0, willspend = 0, save = 0
	}) => ({
		id: uid(36), name, desciption, income , willspend, save
	}))(data)
	
	return create(_data);
}
