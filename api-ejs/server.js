const express = require('express');
const session = require('express-session');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080;

if(process.env.NODE_ENV !== 'test') {
	app.use(morgan('combined'));
}

require('./config')(app);
require('./routes/index.js')(app);

app.listen(PORT);

module.exports = app;

