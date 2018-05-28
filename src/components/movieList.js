import React, {Component} from 'react';

import AddMovie from './addMovie.js';
import MovieSearch from './movieSearch.js';
import MovieListLi from './movieListLi.js';

class MovieList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movieList: this.props.movies,
			search: ''
		};
	} // constructor

	handleSearchChange(event) {
		event.preventDefault();
		let search = event.target.value;
		this.setState({ search: search });

		let filteredMovieList = this.props.movies;
		filteredMovieList = filteredMovieList.filter( movie => {
			return movie.title.toLowerCase().includes( search.toLowerCase() );
		});
		this.setState({ movieList: filteredMovieList });	
	}

	handleSearchSubmit(event) {
		event.preventDefault();
		this.setState({ search: '' });
		this.setState({ movieList: this.props.movies });	
	}

	render() {
		return (
			<div>

				<AddMovie 
					movieToAdd={this.props.movieToAdd} 
					handleAddChange={this.props.handleAddChange} 
					handleAddSubmit={this.props.handleAddSubmit}
				/>

				<MovieSearch search={this.state.search} 
					handleSearchChange={this.handleSearchChange.bind(this)} 
					handleSearchSubmit={this.handleSearchSubmit.bind(this)} 
				/>

				<ul id="movieList">
					{this.state.movieList.map( (movie, i) =>
						<MovieListLi key={movie.title} movie={movie} index={i} 
							handleWatchedChange={this.props.handleWatchedChange}
						/>
					)}
				</ul>

			</div>
		)
	} // render

};

export default MovieList;