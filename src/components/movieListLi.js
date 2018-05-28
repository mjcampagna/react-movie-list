import React, {Component} from 'react';

class MovieListLi extends Component {
	constructor(props) {
		super(props);

		this.state = {
			watched: this.props.movie.watched
		};
	} // constructor

	handleCheckboxToggle(event) {
		event.preventDefault();
		let watched = this.state.watched;
		this.setState({ watched: !watched });
		this.props.handleWatchedChange(event, this.props.index);
	}

	render() {

		const movieId = this.props.movie.title.split(' ').join('').toLowerCase();

		return (
			<li>
				<span className="movie-title">{this.props.movie.title}</span>
				<button type="button" onClick={(e) => this.handleCheckboxToggle(e)}>{this.state.watched ? 'Watched' : 'Unwatched'}</button>
			</li>
		)
	} // render

};

export default MovieListLi;