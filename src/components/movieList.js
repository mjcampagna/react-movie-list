import React, {Component} from 'react';

import MovieListLi from './movieListLi.js';

class MovieList extends Component {
	constructor(props) {
		super(props);

		this.movies = props.movies;
		this.movieListItems = this.movies.map( (movie) =>
			<MovieListLi movie={movie} key={movie.title} />
		);

		this.state = {

		};

	}// constructor

	render() {
		return (
			<ul id="movieList">
				{this.movieListItems}
			</ul>
		)
	}// render

};

export default MovieList;