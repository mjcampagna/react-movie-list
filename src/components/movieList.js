import React, {Component} from 'react';

import MovieSearch from './movieSearch.js';
import MovieListLi from './movieListLi.js';

class MovieList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: this.props.movies
		};

	}// constructor

	onFilterChange(event) {
		let filteredList = this.props.movies;
		filteredList = filteredList.filter((movie) => {
			return movie.title.toLowerCase().includes( event.target.value.toLowerCase() );
		});
		this.setState({
			movies: filteredList
		});
	}

	onFilterSubmit(event) {
		event.preventDefault();
		console.log('Filter is clicked!');
	}

	render() {
		return (
			<div>
				<MovieSearch onFilterChange={this.onFilterChange.bind(this)} onFilterSubmit={this.onFilterSubmit} />
				<ul id="movieList">
					{this.state.movies.map( (movie) =>
						<MovieListLi movie={movie} key={movie.title} />
					)}
				</ul>
			</div>
		)
	}// render

};

export default MovieList;