import React, { useState, useEffect } from 'react';
import Movie from './Movie';

const Movies = ({movies, totalResults, totalPages, onKeyUp, page}) => {
	const [inputValue, setInputValue] = useState('');
  const handleKeyupEvent = (e) => {
    const page = e.target.value;
    if (e.key.toLowerCase() === "enter" && Number(page) <= totalPages && page.length > 0) {
      onKeyUp(page);
    }
  }
  const handleChangeEvent = (e) => {
    setInputValue(e.target.value);
  }
  // useEffect(() => {
  //   setInputValue(page);
  // });
  return (
    <section className="movies">
      <h3>Total results: {totalResults} ~ page <input type="number" min="1" max={totalPages} step="1" onKeyUp={(e) => handleKeyupEvent(e) } /> of {totalPages}</h3>
      <ul className="container">
        {movies.map(movie => (<Movie key={movie.imdbID} movie={movie} />))}
      </ul>
    </section>
  );
}

export default Movies;