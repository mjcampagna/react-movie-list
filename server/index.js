const path = require('path');

const config = require('../config/config.js');
const fetch = require('node-fetch');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const publicPath = path.resolve(__dirname, '../dist');
app.use(express.static(publicPath));

app.post('/movie', ( req, res) => {
	let query = req.body.title;

	fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_APIKEY}&query=${query}`, {
		headers: {
			'content-type': 'application/json'
		},
		method: 'GET',
		mode: 'cors'
	})
	.then( response => response.text() )
	.then( data => {
		res.json(data);
	})
	.catch( err => res.statusCode(500).end() );

});

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));