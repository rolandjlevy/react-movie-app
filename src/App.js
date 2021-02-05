import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Movies from './components/Movies';

const apikey = process.env.REACT_APP_OMDB_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

function App() {
	const [movies, setMovies] = useState([]);
	const [totalResults, setTotalResults] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [page, setPageNum] = useState(1);
  const moviesAPI = (searchInput, page) => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/?s=${searchInput}&apikey=${apikey}&page=${page}`)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }
  const getMovies = (page) => {
    moviesAPI('batman', page).then(result => {
      if (result) {
        setPageNum(page);
        setMovies(result.Search);
        setTotalPages(Math.ceil(result.totalResults / 10));
        setTotalResults(result.totalResults);
      }
    })
  }
  useEffect(() => {
    getMovies(1);
  }, []);
  return (
    <div>
      <Header text="Movie Viewer" />
      {movies.length > 0 ?
      (<Movies 
        movies={movies} 
        totalResults={totalResults} 
        totalPages={totalPages}
        onKeyUp={getMovies}
        page={page}
      />) : ("No movies to show")}
    </div>
  );
}

export default App;
