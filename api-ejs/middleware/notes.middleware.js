const { check } = require('express-validator');
const validator = require('./');

const createNotes = validator(
	check('name', 'Name is required').notEmpty(),
	check('income', 'Income is required').notEmpty()
);

console.log(createNotes);

module.exports = {
	createNotes	
};
