
function createRoute(app) {
	app.use('/user', require('./user'))
}

module.exports = createRoute;
