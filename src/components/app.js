import React, {Component} from 'react';
import 'normalize.css';
import "./app.css";

import MovieList from './movieList.js';

class App extends Component {
	constructor(props) {
    super(props);

		this.state = {
      movies: props.movies || [],
      movieToAdd: '',
      search: ''
		};
	} // constructor

  filterMovieList(search) {
		let filteredMovieList = this.state.movies;
		filteredMovieList = filteredMovieList.filter( movie => {
      return movie.title.toLowerCase().includes( search.toLowerCase() );
    });
    this.setState({
      moviesDisplayed: filteredMovieList
    });	
  }

	handleAddChange(event) {
		event.preventDefault();
		this.setState({ movieToAdd: event.target.value });
	}

	handleAddSubmit(event) {
		event.preventDefault();
    let movies = this.state.movies;
    movies.push({ 
      title: this.state.movieToAdd, 
      watched: false 
    });
    this.setState({ 
      movies: movies,
      movieToAdd: ''
     });
  }
  
  handleWatchedChange(event, index) {
    let movies = this.state.movies;
    movies[index].watched = !movies[index].watched;
    this.setState({ movies: movies });
  }

  handleSearchChange(event) {
		event.preventDefault();
    let search = event.target.value;
		this.setState({
      search: search
    });
    this.filterMovieList(search);
	}

  handleSearchSubmit(event) {
		event.preventDefault();
		this.setState({
      search: '',
      moviesDisplayed: this.state.movies 
    });	
	}

	handleSearchRadios(event) {
    let search = this.state.search;
    this.setState({
      filter: event.target.value
    });
    this.filterMovieList(search);
	}

  componentWillMount() {
    this.setState({
      moviesDisplayed: this.state.movies
    })
  }

  render() {
    return (
      <MovieList 
        search={this.state.search} 
        movies={this.state.moviesDisplayed} 
        movieToAdd={this.state.movieToAdd} 
        handleAddChange={this.handleAddChange.bind(this)} 
        handleAddSubmit={this.handleAddSubmit.bind(this)} 
        handleWatchedChange={this.handleWatchedChange.bind(this)}
        handleSearchChange={this.handleSearchChange.bind(this)} 
        handleSearchSubmit={this.handleSearchSubmit.bind(this)} 
        handleSearchRadios={this.handleSearchRadios.bind(this)}
      />
    );
  } // render

};

export default App;