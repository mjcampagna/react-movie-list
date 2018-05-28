import React, {Component} from 'react';

import MovieAdd from './movieAdd.js';
import MovieSearch from './movieSearch.js';
import MovieListLi from './movieListLi.js';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  } // constructor

  render() {
    return (
      <div>

        <MovieAdd 
          newMovieTitle={this.props.newMovieTitle} 
          handleAddMovieOnChange={this.props.handleAddMovieOnChange} 
          handleAddMovieOnSubmit={this.props.handleAddMovieOnSubmit} 
        />

        <MovieSearch 
          search={this.props.search} 
          watchedFilter={this.props.watchedFilter} 
          handleSearchOnChange={this.props.handleSearchOnChange} 
          handleSearchOnSubmit={this.props.handleSearchOnSubmit} 
          handleWatchedFilterOnClick={this.props.handleWatchedFilterOnClick} 
        /> 

        <ul id="movieList">{
          this.props.movies.map( movie =>
            <MovieListLi key={movie.title} movie={movie}  
              handleWatchedButtonOnClick={this.props.handleWatchedButtonOnClick} 
            />
          )
        }</ul>

      </div>
    )
  } // render
};
export default MovieList;