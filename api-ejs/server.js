import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 8080;

if(process.env.NODE_ENV !== 'test') {
	app.use(morgan('combined'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true  }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'  }));

app.get("/", (req, res) => res.json({message: "Welcome to our Petstore!"}));

app.listen(PORT);

export default app;

