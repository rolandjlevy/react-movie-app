import React from 'react';

const Movie = ({movie}) => {
  const { imdbID, Year, Poster, Title} = movie;
  const url = `https://www.imdb.com/title/${imdbID}`;
  const year = Year ? ` (${Year})` : '';
  return (
    <li>
      <h3>{Title}{year}</h3>
      <img src={Poster} alt={Title} />
      <a href={url} target="_blank" rel="noopener noreferrer">Find out more</a>
    </li>
  );
}

export default Movie;