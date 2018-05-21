import React, {Component} from 'react';

class AddMovie extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};

	}// constructor

	render() {
		return (
			<form>
				<input type="text" id="addMovie" value={this.props.movieToAdd} onChange={(e) => this.props.addMovieChange(e)} />
				<label htmlFor="addMovie">Add Movie</label>
				<button type="submit" id="addMovie_submit" onClick={(e) => this.props.addMovieSubmit(e)}>Add</button>
			</form>
		)
	}// render

};

export default AddMovie;