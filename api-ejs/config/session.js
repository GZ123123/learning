const session = require('express-session');

const _default = {
	resave: false,
	saveUninitialized: false,
	secret: 'secret',
	cookie: { secure: true }
}

module.exports = (app) => {
	app.use(session(_default))
}
