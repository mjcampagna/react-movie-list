const path = require('path');

const config = require('../config/config.js');
const fetch = require('node-fetch');

const express = require('express');
const app = express();

const publicPath = path.resolve(__dirname, '../dist');
app.use(express.static(publicPath));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mysql = require('mysql');
let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'movie_list'
});

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

		let movies = JSON.parse(data);
		let movie = movies.results[0];

		let movieInfo = {
			id: movie.id,
			title: movie.title
		};

		connection.connect();
		connection.query('INSERT INTO movies SET ?', movieInfo, (err, result) => {
			if (err) throw err;
		});
		connection.end();

		res.json(data);
	})
	.catch( err => res.status(500).end() );

});

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));