import React, {Component} from 'react';

class MovieListLi extends Component {
	constructor(props) {
		super(props);

		this.state = {
			watched: this.props.movie.watched
		};
	} // constructor

	handleCheckboxToggle(event) {
		let watched = this.state.watched;
		this.setState({ watched: !watched });
		this.props.handleWatchedChange(event, this.props.index);
	}

	render() {
		return (
			<li>
				<span className="movie-title">{this.props.movie.title}</span>
				<input type="checkbox" id={'movie-' + this.props.index} checked={this.state.watched} 
					onChange={(e) => this.handleCheckboxToggle(e)}
				/>
				<label htmlFor={'movie-' + this.props.index}>{this.state.watched ? 'Watched' : 'Unwatched'}</label>
			</li>
		)
	} // render

};

export default MovieListLi;