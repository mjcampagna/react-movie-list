import React, {Component} from 'react';
import 'normalize.css';
import "./app.css";

import MovieList from './movieList.js';

class App extends Component {
	constructor(props) {
    super(props);

		this.state = {
      movies: props.movies || [],
			movieToAdd: ''
		};
	} // constructor

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

  render() {
    return (
      <MovieList 
        movies={this.state.movies} 
        movieToAdd={this.state.movieToAdd} 
        handleAddChange={this.handleAddChange.bind(this)} 
        handleAddSubmit={this.handleAddSubmit.bind(this)} 
        handleWatchedChange={this.handleWatchedChange.bind(this)}
      />
    );
  } // render

};

export default App;