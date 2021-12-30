const cors = require('cors');

const _default = {
	origin: (origin, db) => { 
		cb('*');
	}
}
	
module.exports = (app) => {
	app.use(cors(_default));
} 
