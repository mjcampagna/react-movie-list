import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';

var movies = [
  {title: 'Mean Girls', watched: false},
  {title: 'Hackers', watched: false},
  {title: 'The Grey', watched: true},
  {title: 'Sunshine', watched: true},
  {title: 'Ex Machina', watched: true},
];

ReactDOM.render(<App movies={movies} />, document.getElementById('app'));
// ReactDOM.render(<App />, document.getElementById('app'));
