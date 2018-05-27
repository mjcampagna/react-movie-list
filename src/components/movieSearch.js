import React, {Component} from 'react';

class MovieSearch extends Component {
	render() {
		return (
			<form onSubmit={(e) => this.props.handleSearchSubmit(e)}>
				<input type="text" id="filterMovieList" value={this.props.search} 
					onChange={(e) => this.props.handleSearchChange(e)} 
				/>
				<label htmlFor="filterMovieList">Filter Movies</label>
				{/* <button type="submit" id="filterMovieList_submit" onClick={(e) => this.props.onFilterSubmit(e)}>Filter</button> */}
			</form>
		)
	} // render
};
export default MovieSearch;