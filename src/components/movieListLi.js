import React, {Component} from 'react';

class MovieListLi extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};

	}// constructor

	render() {
		return (
			<li>{this.props.movie.title}</li>
		)
	}// render

};

export default MovieListLi;