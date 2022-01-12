const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080;

if(process.env.NODE_ENV !== 'test') {
	app.use(morgan('combined'));
}

require('./config')(app);
require('./middleware')(app);
require('./routes')(app);

app.listen(PORT);

module.exports = app;

