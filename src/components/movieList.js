import React, {Component} from 'react';

import AddMovie from './addMovie.js';
import MovieSearch from './movieSearch.js';
import MovieListLi from './movieListLi.js';

class MovieList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movieToAdd: '',
			movies: this.props.movies
		};

	}// constructor

	addMovieChange(event) {
		this.setState({ movieToAdd: event.target.value });
	} 

	addMovieSubmit(event) {
		event.preventDefault();
		let movies = this.state.movies;
		movies.push({ title: this.state.movieToAdd });
		this.setState({
			movieToAdd: '',
			movies: movies
		});
	}

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

				<AddMovie movieToAdd={this.state.movieToAdd} addMovieChange={this.addMovieChange.bind(this)} addMovieSubmit={this.addMovieSubmit.bind(this)} />

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