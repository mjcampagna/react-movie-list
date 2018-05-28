import React, {Component} from 'react';

class MovieSearch extends Component {
  render() {
    return (
      <form onSubmit={(e) => this.props.handleSearchSubmit(e)}>

        {/* <input type="radio" id="allMovies" name="filterWatchedMovies" value="all" 
          checked={this.state.filter === 'all'} 
          onChange={(e) => this.updateFilter(e)}
        /><label htmlFor="allMovies">All</label>

        <input type="radio" id="watchedMovies" name="filterWatchedMovies" value="watched" 
          checked={this.state.filter === 'watched'} 
          onChange={(e) => this.updateFilter(e)}
        /><label htmlFor="watchedMovies">Watched</label>

        <input type="radio" id="unwatchedMovies" name="filterWatchedMovies" value="unwatched" 
          checked={this.state.filter === 'unwatched'} 
          onChange={(e) => this.updateFilter(e)}
        /><label htmlFor="unwatchedMovies">Unwatched</label> */}

        <input type="text" id="filterMovieList" value={this.props.search} 
          onChange={(e) => this.props.handleSearchChange(e)} 
        /><label htmlFor="filterMovieList">Filter Movies</label>

        {/* <button type="submit" id="filterMovieList_submit" onClick={(e) => this.props.onFilterSubmit(e)}>Filter</button> */}
      </form>
    )
  } // render
};
export default MovieSearch;