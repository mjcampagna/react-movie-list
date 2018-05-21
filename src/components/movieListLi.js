import React, {Component} from 'react';

class MovieListLi extends Component {
	constructor(props) {
		super(props);

		this.movie = props.movie;

		this.state = {

		};

	}// constructor

	render() {
		return (
			<li>{this.movie.title}</li>
		)
	}// render

};

export default MovieListLi;