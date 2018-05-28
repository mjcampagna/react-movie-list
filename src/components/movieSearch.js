import React, {Component} from 'react';

class MovieSearch extends Component {
  render() {
    return (
      <div>

        <button type="button" value="all" onClick={(e) => this.props.handleWatchedFilterOnClick(e)}>All</button>
				<button type="button" value="watched" onClick={(e) => this.props.handleWatchedFilterOnClick(e)}>Watched</button>
				<button type="button" value="unwatched" onClick={(e) => this.props.handleWatchedFilterOnClick(e)}>Unwatched</button>

        <form onSubmit={(e) => this.props.handleSearchOnSubmit(e)}>
          <input type="text" id="searchMovieList" placeholder="Filter Movies by Title" 
            value={this.props.search} 
            onChange={(e) => this.props.handleSearchOnChange(e)}
          />
        </form>
      </div>
    )

    // return (
    //   <form onSubmit={(e) => this.props.handleSearchSubmit(e)}>
    //     <input type="text" id="searchMovieList" value={this.props.search} 
    //       onChange={(e) => this.props.handleSearchOnChange(e)} 
    //     /><label htmlFor="searchMovieList">Filter Movies</label>
    //   </form>
    // )
  } // render
};
export default MovieSearch;