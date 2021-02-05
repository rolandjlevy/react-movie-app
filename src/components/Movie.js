import React from 'react';

const Movie = ({movie}) => {
  const url = `https://www.imdb.com/title/${movie.imdbID}`;
  const year = movie.Year ? ` (${movie.Year})` : '';
  return (
    <li>
      <h3>{movie.Title}{year}</h3>
      <img src={movie.Poster} alt={movie.Title} />
      <a href={url}>Find out more</a>
    </li>
  );
}

export default Movie;

// Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// Title: "Batman Begins"
// Type: "movie"
// Year: "2005"
// imdbID: "tt0372784"