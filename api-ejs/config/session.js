const session = require('express-session');

const _default = {
	resave: false,
	saveUninitialized: false,
	secret: 'secret'
}

module.exports = (app) => {
	app.use(session(_default))

	app.use((res, req, next) => {
		const { error: err, success: msg } = req.session;
		delete req.session.error;
		delete req.session.success;
		if (err) res.locals.message = `<p class="msg error">${err}</p>`;
		if (msg) res.locals.message = `<p class="msg success">${msg}</p>`;
		next();
	})
}
