
const cors = {
	default: {
		origin: (origin, cb) => {
			cb('*')
		}		
	}
}

module.exports = cors;
