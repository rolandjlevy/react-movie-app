import React from 'react';

const Moviee = ({movie}) => {
  const url = `https://www.imdb.com/title/${movie.imdbID}`;
  const year = movie.Year ? ` (${movie.Year})` : '';
  return (
    <li>
      <h3>{movie.Title}{year}</h3>
      <img src={movie.Poster} alt={movie.Title} />
      <a href={url} target="_blank" rel="noopener noreferrer">Find out more</a>
    </li>
  );
}

export default Moviee;