import React from 'react';
import Fetch from 'node-fetch';
import Header from './components/Header';
import Movies from './components/Movies';

const moviesAPI = () => {
  return new Promise((resolve, reject) => {
    Fetch('https://www.omdbapi.com/?s=batman&apikey=2454706d')
    .then(res => res.json())
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    })
  })
}

const movies = {
    "Search": [
    {
      "Title":"The Lego Batman Movie",
      "Year":"2017",
      "imdbID":"tt4116284",
      "Type":"movie",
      "Poster":"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
    },
    {
      "Title":"Batman: The Animated Series",
      "Year":"1992–1995",
      "imdbID":"tt0103359",
      "Type":"series",
      "Poster":"https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
    },
    {
      "Title":"Batman: Under the Red Hood",
      "Year":"2010",
      "imdbID":"tt1569923",
      "Type":"movie",
      "Poster":"https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title":"Batman: The Dark Knight Returns, Part 1",
      "Year":"2012",
      "imdbID":"tt2313197",
      "Type":"movie",
      "Poster":"https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
    }
  ],
  "totalResults":"405",
  "Response":"True"
}

function App() {
  return (
    <div>
      <Header text="React Movie App" />
      <Movies 
        movies={movies}
      />
    </div>
  );
}

export default App;
