import React from 'react';
import Movie from './Movie';

const Movies = ({movies}) => {
  return (
    <div>
      <ul className="container">
        {movies.map(movie => (<Movie key={movie.imdbID} movie={movie} />))}
      </ul>
    </div>
  );
}

export default Movies;