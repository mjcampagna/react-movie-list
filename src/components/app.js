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
      search: '',
      filterWatched: 'all'
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


  filterMovie(movie) {
    let filter = this.state.filterWatched;
    if ( filter !== 'all' ) {
      return movie.watched === filter;
    }
    return true;
  }

  searchMovieList(search) {
		let searchedMovieList = this.state.movies;
		searchedMovieList = searchedMovieList.filter( movie => {
      return movie.title.toLowerCase().includes( search.toLowerCase() ) && this.filterMovie(movie);
    });
    this.setState({
      moviesDisplayed: searchedMovieList
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
    this.searchMovieList(search);
	}

  handleSearchSubmit(event) {
		event.preventDefault();
		this.setState({
      search: '',
      moviesDisplayed: this.state.movies 
    });	
	}

  handleFilterChange(event) {
    let filter = event.target.value;
    if ( filter === 'watched' ) filter = true;
    if ( filter === 'unwatched' ) filter = false;
    this.setState( (prevState) => {
      return { filterWatched: filter };
    },
    this.searchMovieList( this.state.search ));

  }

  render() {
    return (
      <MovieList 
        movies={this.state.moviesDisplayed} 
        movieToAdd={this.state.movieToAdd} 
        search={this.state.search} 

        handleAddChange={this.handleAddChange.bind(this)} 
        handleAddSubmit={this.handleAddSubmit.bind(this)} 
        handleWatchedChange={this.handleWatchedChange.bind(this)}
        handleSearchChange={this.handleSearchChange.bind(this)} 
        handleSearchSubmit={this.handleSearchSubmit.bind(this)} 
        handleFilterChange={this.handleFilterChange.bind(this)} 
      />
    );
  } // render

};

export default App;