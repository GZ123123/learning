const { validationResult } = require('express-validator');

const catchMiddleware = (req, res, next) => {
	const result = validationResult(req);
	if(result.isEmpty()) next();
	res.status(400).format({
		json: () => res.json({
			success: false,
			message: result.errors
		})
	})
}

const createValidationMiddleware = (...middlewares) => [
	...middlewares,
	catchMiddleware
]

module.exports = createValidationMiddleware ;
