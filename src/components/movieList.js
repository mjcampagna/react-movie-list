import React, {Component} from 'react';

class MovieList extends Component {
	constructor(props) {
		super(props);

		this.movies = props.movies;

		this.state = {

		};

	}// constructor

	render() {
		return (
			<div id="movieList">Movie List!</div>
		)
	}// render

};

export default MovieList;