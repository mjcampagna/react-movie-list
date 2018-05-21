import React, {Component} from 'react';
import 'normalize.css';
import "./app.css";

import MovieList from './movieList.js';

class App extends Component {
	constructor(props) {
		super(props);

    this.movies = props.movies;

		this.state = {

		};

	}// constructor

  render() {
    return (
      <MovieList movies={this.movies} />
    );
  }//render

};

export default App;