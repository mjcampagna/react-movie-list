import React, {Component} from 'react';

import AddMovie from './addMovie.js';
import MovieSearch from './movieSearch.js';
import MovieListLi from './movieListLi.js';

class MovieList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			watched: 'all'
		};
	} // constructor

	handleButtons(event) {
		event.preventDefault();
		this.setState({
			watched: event.target.value
		});
		this.props.handleFilterChange(event);
	}

	render() {
		return (
			<div>

				<AddMovie 
					movieToAdd={this.props.movieToAdd} 
					handleAddChange={this.props.handleAddChange} 
					handleAddSubmit={this.props.handleAddSubmit}
				/>

				<button type="button" value="all" onClick={(e) => this.handleButtons(e)}>All</button>
				<button type="button" value="watched" onClick={(e) => this.handleButtons(e)}>Watched</button>
				<button type="button" value="unwatched" onClick={(e) => this.handleButtons(e)}>Unwatched</button>

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