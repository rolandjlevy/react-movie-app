import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Form from './components/Form';

const apikey = process.env.REACT_APP_OMDB_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

function App() {

	const [movies, setMovies] = useState({});

  const moviesAPI = (s, p) => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/?s=${s}&apikey=${apikey}&page=${p}`)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }

  const getNewMovie = useCallback((s, p) => {
    moviesAPI(s, p).then(result => {
      if (result) {
        setMovies(result);
      }
    });
  }, [setMovies]);

  return (
    <main>
      <header>
        <Header text="Movie Viewer 🎥" />
        <Form 
          movies={movies}
          onKeyUp={getNewMovie}
          onClick={getNewMovie}
        />
      </header>
      {movies.Search && movies.Search.length > 0 ?
        (<MovieList movies={movies.Search} />) : ("No movies to show")}
    </main>
  );
}

export default App;