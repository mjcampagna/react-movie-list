import React, {Component} from 'react';

class MovieListLi extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	} // constructor

	render() {
		const movieId = this.props.movie.title.split(' ').join('').toLowerCase();
		return (
			<li>
				<span className="movie-title">{this.props.movie.title}</span>
				<button type="button" className={this.props.movie.watched ? 'watched' : 'unwatched'} onClick={(e) => this.props.handleWatchedButtonOnClick(e, this.props.movie.index)}>{this.props.movie.watched ? 'Watched' : 'Unwatched'}</button>
			</li>
		)
	} // render
};

export default MovieListLi;