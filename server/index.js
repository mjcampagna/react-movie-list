const path = require('path');

const fetch = require('node-fetch');

const express = require('express');
const app = express();

const publicPath = path.resolve(__dirname, '../dist');
app.use(express.static(publicPath));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mariadb = require('mariadb');
const pool = mariadb.createPool({
	host: process.env.DB_HOST, 
	user: process.env.DB_USER, 
	password: process.env.DB_PASS, 
	database: process.env.DB_NAME
});

app.post('/movie', ( req, res) => {
	let query = req.body.title;
	fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_APIKEY}&query=${query}`, {
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

		const keys = Object.keys(movieInfo);
		const params = keys.map( key => '?');
		const values = Object.values(movieInfo);

		pool.getConnection()
    .then(conn => {

			conn.query(`INSERT INTO movies (${keys}) VALUE (${params})`, values, (err, res) => {
				if (err) throw err;
				console.log(res);
			})
			.then( err => {
				conn.end();
			})
			.catch(err => {
				// handle error
				conn.end();
			});
				
    }).catch(err => {
			console.log('Not connected ...')
    });

		res.json(data);
	})
	.catch( err => res.status(500).end() );
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
