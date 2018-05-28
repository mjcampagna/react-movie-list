import React, {Component} from 'react';
import 'normalize.css';
import "./app.css";

import MovieList from './movieList.js';

class App extends Component {
	constructor(props) {
    super(props);

		this.state = {
      movies: props.movies || [],
      search: '',
      watchedFilter: 'all',
      newMovieTitle: ''
		};
	} // constructor

  componentWillMount() {
    this.setState({
      moviesDisplayed: this.state.movies
    })
  }

  componentDidMount() {
    this.searchMovieList('');
  }

  searchMovieList(search) {
    let movieList = this.state.movies;
  	let searchedMovieList = movieList.filter( (movie, i) => {
      movie.index = i;
      return movie.title.toLowerCase().includes(search.toLowerCase()) && this.watchedFilter(movie);
    });
    this.setState((state, props) => {
      return { moviesDisplayed: searchedMovieList };
    });
  }

  handleSearchOnChange(event) {
    let search = event.target.value;
    this.setState({
      search: search
    }, () => {
      this.searchMovieList( this.state.search )
    });
  }

  handleSearchOnSubmit(event) {
    event.preventDefault();
    this.setState((state, props) => {
      return { search: '' };
    }, () => {
      this.searchMovieList( this.state.search )
    });
  }

  handleWatchedButtonOnClick(event, index) {
    let movies = this.state.movies;
    movies[index].watched = !movies[index].watched;
    this.setState((state, props) => {
      movies: movies
    }, () => {
      this.searchMovieList( this.state.search )
    });
  }

  watchedFilter(movie) {
    let watchedFilter = this.state.watchedFilter;
    if ( watchedFilter !== 'all' ) {
      return movie.watched === watchedFilter;
    }
    return true;
  }

  handleWatchedFilterOnClick(event) {
    let newFilter = event.target.value;
    if ( newFilter === 'watched' ) newFilter = true;
    if ( newFilter === 'unwatched' ) newFilter = false;
    this.setState( (state, props) => {
      return { watchedFilter: newFilter };
    }, () => {
      this.searchMovieList( this.state.search )
    });
  }

  handleAddMovieOnChange(event) {
    this.setState({
      newMovieTitle: event.target.value
    });
  }

  handleAddMovieOnSubmit(event) {
    event.preventDefault();
    let movies = this.state.movies;
    movies.push({
      title: this.state.newMovieTitle,
      watched: false
    });
    this.setState((state, props) => {
      return {
        movies: movies,
        search: '',
        newMovieTitle: ''
      }
    }, () => {
      this.searchMovieList('')
    });
  }

  render() {
    return (
      <MovieList 
        movies={this.state.moviesDisplayed} 
        search={this.state.search} 
        newMovieTitle={this.state.newMovieTitle} 
        handleSearchOnChange={this.handleSearchOnChange.bind(this)} 
        handleSearchOnSubmit={this.handleSearchOnSubmit.bind(this)} 
        handleWatchedButtonOnClick={this.handleWatchedButtonOnClick.bind(this)} 
        handleWatchedFilterOnClick={this.handleWatchedFilterOnClick.bind(this)} 
        handleAddMovieOnChange={this.handleAddMovieOnChange.bind(this)} 
        handleAddMovieOnSubmit={this.handleAddMovieOnSubmit.bind(this)} 
      />
    );
  } // render

};

export default App;