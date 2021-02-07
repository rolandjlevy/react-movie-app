import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Movies from './components/Movies';

const apikey = process.env.REACT_APP_OMDB_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

function App() {

	const [movies, setMovies] = useState([]);
	const [totalResults, setTotalResults] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [searchInput, setSearchInput] = useState('');
	const [page, setPageNum] = useState(1);
	const [defaultPage, setDefaultPageNum] = useState(1);

  const moviesAPI = (s, page) => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/?s=${s}&apikey=${apikey}&page=${page}`)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }

  // const test = (s, page) => {
  //   console.log({s, page})
  // }

  const getMovies = useCallback((s, page = 1) => {
    moviesAPI(s, page).then(result => {
      if (result) {
        setMovies(result.Search);
        setTotalResults(result.totalResults);
        setTotalPages(Math.ceil(result.totalResults / 10));
        setSearchInput(s);
        setPageNum(page);
        setDefaultPageNum(1);
      }
    });
  }, []);

  useEffect(() => {
    getMovies('batman', 1);
  }, [getMovies]);
  
  return (
    <div>
      <Header text="Movie Viewer 🎞️" />
      {movies.length > 0 ?
      (<Movies 
        movies={movies} 
        totalResults={totalResults} 
        totalPages={totalPages}
        onKeyUp={getMovies}
        onClick={getMovies}
        searchInput={searchInput}
        page={page}
        defaultPage={defaultPage}
      />) : ("No movies to show")}
    </div>
  );
}

export default App;
