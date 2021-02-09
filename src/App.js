import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Movies from './components/Movies';

const apikey = process.env.REACT_APP_OMDB_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

function App() {

	const [movies, setMovies] = useState({});
	const [searchInput, setSearchInput] = useState('');
	const [page, setPageNum] = useState(0);

  const moviesAPI = (s, p = 1) => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/?s=${s}&apikey=${apikey}&page=${p}`)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }

  const getNewMovie = useCallback((s) => {
    moviesAPI(s).then(result => {
      if (result) {
        setMovies(result);
        setSearchInput(s);
      }
    });
  }, [setMovies]);

  const paginateMovie = useCallback((s, p) => {
    moviesAPI(s, p).then(result => {
      if (result) {
        setMovies(result);
        setSearchInput(s);
        setPageNum(p);
      }
    });
  }, [setMovies, setPageNum]);

  useEffect(() => {
    getNewMovie('batman');
  }, [getNewMovie]);
  
  return (
    <main>
      <header>
        <Header text="Movie Viewer 🎥" />
        <Movies 
          movies={movies}
          onKeyUp={paginateMovie}
          onClick={getNewMovie}
          searchInput={searchInput}
          page={page}
        />
      </header>
      {movies.Search && movies.Search.length > 0 ?
        (<MovieList movies={movies.Search} />) : ("No movies to show")}
    </main>
  );
}

export default App;