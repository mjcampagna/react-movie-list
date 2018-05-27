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

  render() {
    return (
      <MovieList 
        movies={this.state.movies} 
        movieToAdd={this.state.movieToAdd} 
        handleAddChange={this.handleAddChange.bind(this)} 
        handleAddSubmit={this.handleAddSubmit.bind(this)}
      />
    );
  } // render

};

export default App;