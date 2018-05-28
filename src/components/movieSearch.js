import React, {Component} from 'react';

class MovieSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'all'
    }
  } // constructor

  setActiveButton(event) {
    this.props.handleWatchedFilterOnClick(event);
  }

  render() {
    return (
      <div id="movieSearch">

        <button type="button" value="all" className={this.props.watchedFilter === 'all' ? 'active' : ''} onClick={(e) => this.props.handleWatchedFilterOnClick(e)}>All</button>
        <button type="button" value="watched" className={this.props.watchedFilter === true ? 'active' : ''} onClick={(e) => this.props.handleWatchedFilterOnClick(e)}>Watched</button>
        <button type="button" value="unwatched" className={this.props.watchedFilter === false ? 'active' : ''} onClick={(e) => this.props.handleWatchedFilterOnClick(e)}>Unwatched</button>

        <form onSubmit={(e) => this.props.handleSearchOnSubmit(e)}>
          <input type="text" id="searchMovieList" placeholder="Filter Movies by Title" 
            value={this.props.search} 
            onChange={(e) => this.props.handleSearchOnChange(e)}
          />
          <button type="submit">X</button>
        </form>
      </div>
    )

  } // render
};
export default MovieSearch;