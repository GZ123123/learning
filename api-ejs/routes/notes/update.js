const { update } = require('../../queries/notes');

module.exports = (id, data) => {
	const _data = (({name, desciption, income, willspend, save}) => ({
		name, desciption, income , willspend, save
	}))(data)
	
	return update(id, _data);
}	
