import React, {Component} from 'react';

class AddMovie extends Component {
	render() {
		return (
			<form onSubmit={(e) => this.props.handleAddMovieOnSubmit(e)}>
				<input type="text" id="addMovie" placeholder="Add Movie Title" 
					onChange={(e) => this.props.handleAddMovieOnChange(e)}
				/>
				<button type="submit">Add</button>

			</form>
		)
	} // render
};
export default AddMovie;