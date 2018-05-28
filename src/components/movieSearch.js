import React, {Component} from 'react';

class MovieSearch extends Component {
  render() {
    return (
      <form onSubmit={(e) => this.props.handleSearchSubmit(e)}>
        <input type="text" id="searchMovieList" value={this.props.search} 
          onChange={(e) => this.props.handleSearchOnChange(e)} 
        /><label htmlFor="searchMovieList">Filter Movies</label>
      </form>
    )
  } // render
};
export default MovieSearch;