
function createRoute(app) {
	app.use('/user', require('./user'));
	app.use('/test', require('./test'));
}

module.exports = createRoute;
