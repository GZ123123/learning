const cors = require('cors');

const _default = {
	origin: "*",
	optionsSuccessStatus: 200
}
	
module.exports = (app) => {
	app.use(cors(_default));
} 
