const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const createRoutes = require('./routes/index.js');
const corsConfig  = require('./config/cors');


const app = express();
const PORT = process.env.PORT || 8080;

if(process.env.NODE_ENV !== 'test') {
	app.use(morgan('combined'));
}

app.use(cors(corsConfig));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true  }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'  }));

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(session({
	resave: false,
  saveUninitialized : false,
	secret: 'secret'
}));

app.use(function(req, res, next){
  var err = req.session.error;
  var msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = '';
  if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
  if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
  next();
});


createRoutes(app)

app.listen(PORT);

module.exports = app;

