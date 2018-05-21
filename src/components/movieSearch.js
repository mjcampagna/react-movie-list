import React, {Component} from 'react';

class MovieSearch extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};

	}// constructor

	render() {
		return (
			<form>
				<input type="text" id="filterMovieList" onChange={(e) => this.props.onFilterChange(e)} />
				<label htmlFor="filterMovieList">Filter Movies</label>
				{/* <button type="submit" id="filterMovieList_submit" onClick={(e) => this.props.onFilterSubmit(e)}>Filter</button> */}
			</form>
		)
	}// render

};

export default MovieSearch;