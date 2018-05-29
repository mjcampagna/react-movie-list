import React, {Component} from 'react';

class MovieAdd extends Component {
  render() {
    return (
      <form id="movieAdd" onSubmit={(e) => this.props.handleAddMovieOnSubmit(e)}>
        <input type="text" id="addMovie" placeholder="Add Movie Title" 
          onChange={(e) => this.props.handleAddMovieOnChange(e)} 
          required 
        />
        <button type="submit">Add</button>

      </form>
    )
  } // render
};
export default MovieAdd;