import React from 'react';
import '../App.css';
import MovieList from './Movies';
import MovieList2 from './Movies2';
import MovieList2aula from './Movies2aula';

function MinhaApp() {
  return (
    <div className="App">
        <header className="App-header">
                <h1>Hello World</h1>
        </header>
      <MovieList/>
      <MovieList2/>
      <MovieList2aula/>
    </div>
  );
}

export default MinhaApp;
