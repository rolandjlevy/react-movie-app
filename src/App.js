import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Movies from './components/Movies';

const apikey = process.env.REACT_APP_OMDB_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

function App() {
	const [movies, setMovies] = useState([]);
  const moviesAPI = (searchInput) => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/?s=${searchInput}&apikey=${apikey}`)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  }
  useEffect(() => {
		moviesAPI('batman').then(result => {
      if (result.Search) {
        console.log(result.Search[0])
        setMovies(result.Search);
      }
    })
	}, []);
  return (
    <div>
      <Header text="React Movie App" />
      <Movies movies={movies} />
    </div>
  );
}

export default App;
