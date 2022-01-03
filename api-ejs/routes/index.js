
function createRoute(app) {
	app.use('/user', require('./user'));

	app.use('/notes', require('./notes'));
	app.use('/note-items', require('./note-items'));
}

module.exports = createRoute;
