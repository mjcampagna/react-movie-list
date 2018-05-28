import React, {Component} from 'react';

import AddMovie from './addMovie.js';
import MovieSearch from './movieSearch.js';
import MovieListLi from './movieListLi.js';

class MovieList extends Component {
	render() {
		return (
			<div>

				<AddMovie 
					movieToAdd={this.props.movieToAdd} 
					handleAddChange={this.props.handleAddChange} 
					handleAddSubmit={this.props.handleAddSubmit}
				/>

				<MovieSearch search={this.props.search} 
					handleSearchChange={this.props.handleSearchChange} 
					handleSearchSubmit={this.props.handleSearchSubmit} 
					handleSearchRadios={this.props.handleSearchRadios}
				/>

				<ul id="movieList">
					{this.props.movies.map( (movie, i) =>
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