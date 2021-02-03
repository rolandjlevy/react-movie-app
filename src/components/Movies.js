import React from 'react';

const Movies = ({movies}) => {
  return (
    <div>
      <ul>
        {movies.map(movie => (<li key={movie.imdbID}>{movie.Title}</li>))}
      </ul>
    </div>
  );
}

export default Movies;