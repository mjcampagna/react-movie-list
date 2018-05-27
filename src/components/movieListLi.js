import React, {Component} from 'react';

class MovieListLi extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	} // constructor

	render() {
		return (
			<li>
				{this.props.movie.title}

				{/* <input type="checkbox" checked={this.state.watched} 
					onChange={(e) => this.props.onWatchedChange(e)}
				/>
				<label></label> */}

			</li>
		)
	}// render

};

export default MovieListLi;