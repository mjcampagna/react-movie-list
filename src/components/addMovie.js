import React, {Component} from 'react';

class AddMovie extends Component {
	render() {
		return (
			<form onSubmit={(e) => this.props.handleAddSubmit(e)}>
				<input type="text" id="addMovie" value={this.props.movieToAdd} 
					onChange={(e) => this.props.handleAddChange(e)} 
				/>
				<label htmlFor="addMovie">Add Movie</label>
				<button type="submit">Add</button>
			</form>
		)
	} // render
};
export default AddMovie;